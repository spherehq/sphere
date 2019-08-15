import electron, { app, BrowserWindow, Menu } from 'electron'

import Store from 'electron-store'

// @TODO defaults aren't working here
const config = new Store({
  defaults: { preferences: { openAtLogin: true, syncAsDraft: true } },
})

config.onDidChange('preferences.openAtLogin', newValue => {
  app.setLoginItemSettings({
    // @ts-ignore
    openAtLogin: newValue,
  })
})

const path = require('path')
const pkg = require(`../../package.json`)

app.setName('Sphere')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let tray

if (process.platform === 'darwin') {
  // app.dock.hide()
}

// Chrome Command Line Switches
app.commandLine.appendSwitch('disable-renderer-backgrounding')

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 330,
    height: 380,
    title: 'Sphere',
    resizable: false,
    show: false,
    fullscreenable: false,
    maximizable: false,
    minimizable: false,
    transparent: false,
    frame: false,
    movable: false,
    webPreferences: {
      // @ts-ignore
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  // and load the index.html of the app.
  // @ts-ignore
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.setVisibleOnAllWorkspaces(true)
}

app.on('ready', createWindow)

app.on('ready', () => {
  try {
    tray = new electron.Tray(
      path.resolve(app.getAppPath(), `./src/main/static/iconTemplate.png`),
    )

    const preferences = config.get('preferences') as {
      openAtLogin: boolean
      syncAsDraft: boolean
    }

    app.setLoginItemSettings({
      openAtLogin: preferences.openAtLogin,
    })

    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Sign in / Create account',
        type: 'normal',
        click: () => {
          const isVisible = mainWindow.isVisible()
          const isWin = process.platform === 'win32'

          if (!isWin && isVisible && !mainWindow.isFocused()) {
            mainWindow.focus()
            return
          }

          if (isVisible) {
            mainWindow.hide()
          } else {
            mainWindow.webContents.send('window-opening')
            mainWindow.show()
          }
        },
      },
      // {
      //   label: 'Account',
      //   submenu: [
      //     { label: 'Spheres', type: 'normal', enabled: false },
      //     { label: 'jjaybrown', type: 'normal', enabled: true },
      //     { type: 'separator' },
      //     { label: 'Sign out', type: 'normal' },
      //   ],
      // },
      { type: 'separator' },
      {
        label: 'Preferences',
        submenu: [
          {
            label: 'Open at login',
            type: 'checkbox',
            checked: preferences.openAtLogin,
            click: () => {
              config.set('preferences.openAtLogin', !preferences.openAtLogin)
            },
          },
          {
            label: 'Always sync as draft',
            type: 'checkbox',
            checked: preferences.syncAsDraft,
            click: () => {
              config.set('preferences.syncAsDraft', !preferences.syncAsDraft)
            },
            enabled: false,
          },
          {
            label: 'Always sync new content',
            type: 'checkbox',
            checked: true,
            enabled: false,
          },
        ],
      },
      { type: 'separator' },
      { label: 'Last sync: never', type: 'normal', enabled: false },
      { label: 'Sync now', type: 'normal', enabled: false },
      { type: 'separator' },
      { label: `Sphere v${pkg.version}`, type: 'normal', enabled: false },
      { label: 'Check for updates...', type: 'normal' },
      { type: 'separator' },
      { label: 'Quit Sphere', type: 'normal', enabled: true, role: 'quit' },
    ])
    tray.setContextMenu(contextMenu)
  } catch (error) {
    return
  }
})

// Only allow one instance at the same time to run
const gotInstanceLock = app.requestSingleInstanceLock()

if (!gotInstanceLock) {
  app.exit()
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
