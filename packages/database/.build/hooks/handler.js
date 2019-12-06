'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
exports.__esModule = true
var node_fetch_1 = require('node-fetch')
var urlSlug = require('url-slug')
var https = require('https')
var prisma_client_1 = require('../generated/prisma-client')
exports.verifySphere = function(event) {
  return __awaiter(void 0, void 0, void 0, function() {
    var verificationRule,
      metascraper,
      data,
      status,
      res,
      html,
      metadata,
      account,
      parseDomain,
      _a,
      domain,
      tld,
      slug,
      post,
      sphereId,
      e_1
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          verificationRule = function() {
            var rules = {
              verification: [
                function(_a) {
                  var $ = _a.htmlDom
                  return $('meta[name="sphere-source-verification"]').attr(
                    'content',
                  )
                },
              ],
            }
            return rules
          }
          metascraper = require('metascraper')([
            require('metascraper-author')(),
            require('metascraper-date')(),
            require('metascraper-description')(),
            require('metascraper-image')(),
            require('metascraper-logo')(),
            require('metascraper-clearbit')(),
            require('metascraper-publisher')(),
            require('metascraper-title')(),
            require('metascraper-url')(),
            verificationRule(),
          ])
          data = JSON.parse(event.body || '').data
          return [
            4,
            prisma_client_1.prisma
              .sphereVerification({ id: data.sphereVerification.node.id })
              .status(),
          ]
        case 1:
          status = _b.sent()
          if (status !== 'AWAITING_VERIFICATION') {
            console.warn(
              'Sphere verification request with id ' +
                data.sphereVerification.node.id +
                ' and status ' +
                status +
                ' cannot be used for verification',
            )
            return [2, { statusCode: 400 }]
          }
          return [
            4,
            node_fetch_1['default'](data.sphereVerification.node.url, {
              agent: new https.Agent({ rejectUnauthorized: false }),
            }),
          ]
        case 2:
          res = _b.sent()
          return [4, res.text()]
        case 3:
          html = _b.sent()
          return [
            4,
            metascraper({
              html: html,
              url: data.sphereVerification.node.url,
            }),
          ]
        case 4:
          metadata = _b.sent()
          if (
            metadata.verification !== data.sphereVerification.node.code.value
          ) {
            console.warn(
              'Sphere verification code ' +
                data.sphereVerification.node.code.value +
                ' was not found for url: ' +
                data.sphereVerification.node.url,
            )
            return [2, { statusCode: 200 }]
          }
          return [
            4,
            prisma_client_1.prisma.account({
              id: data.sphereVerification.node.code.associatedWith.id,
            }),
          ]
        case 5:
          account = _b.sent()
          parseDomain = require('parse-domain')
          ;(_a = parseDomain(data.sphereVerification.node.url)),
            (domain = _a.domain),
            (tld = _a.tld)
          slug = urlSlug(domain + '.' + tld)
          _b.label = 6
        case 6:
          _b.trys.push([6, 11, , 12])
          post = function() {
            return {
              title: metadata.title,
              slug: slug + '/' + urlSlug(metadata.title),
              featuredImage: metadata.image,
              author: metadata.author,
              status: 'PUBLISHED',
              url: data.sphereVerification.node.url,
            }
          }
          if (!account) return [3, 9]
          return [
            4,
            prisma_client_1.prisma
              .upsertSphere({
                where: { alias: slug },
                create: {
                  alias: slug,
                  aliasSlug: slug,
                  associatedWith: { connect: { id: account.id } },
                  verifiedBy: {
                    connect: { id: data.sphereVerification.node.id },
                  },
                  posts: {
                    create: post(),
                  },
                },
                update: {},
              })
              .id(),
          ]
        case 7:
          sphereId = _b.sent()
          return [
            4,
            prisma_client_1.prisma.upsertPost({
              where: { url: data.sphereVerification.node.url },
              create: __assign(__assign({}, post()), {
                associatedWith: { connect: { id: sphereId } },
              }),
              update: __assign({}, post()),
            }),
          ]
        case 8:
          _b.sent()
          _b.label = 9
        case 9:
          return [
            4,
            prisma_client_1.prisma.updateSphereVerification({
              where: { id: data.sphereVerification.node.id },
              data: { status: 'VERIFIED' },
            }),
          ]
        case 10:
          _b.sent()
          return [3, 12]
        case 11:
          e_1 = _b.sent()
          console.error(e_1.message)
          return [2, { statusCode: 500, message: e_1.message }]
        case 12:
          return [2, { metadata: metadata, statusCode: 200 }]
      }
    })
  })
}
