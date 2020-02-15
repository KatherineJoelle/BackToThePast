// ECS
!(function(t, e) {
  for (var n in e) t[n] = e[n]
})(
  this,
  (function(t) {
    var e = {}
    function n(o) {
      if (e[o]) return e[o].exports
      var r = (e[o] = { i: o, l: !1, exports: {} })
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var o = Object.create(null)
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var r in t)
            n.d(
              o,
              r,
              function(e) {
                return t[e]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 30))
    )
  })([
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        r =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          },
        i =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        s =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a = n(1),
        p = n(8),
        u = n(16),
        l = '__name__symbol_',
        c = '__classId__symbol_',
        h = '__component__id_',
        f = (function() {
          function t(t, e, n) {
            ;(this.componentId = t), (this.componentName = e), (this.classId = n)
          }
          return (t = r([p.EventConstructor()], t))
        })()
      e.DisposableComponentCreated = f
      var d = (function() {
        function t(t) {
          this.componentId = t
        }
        return (t = r([p.EventConstructor()], t))
      })()
      e.DisposableComponentRemoved = d
      var y = (function() {
        function t(t, e) {
          ;(this.componentId = t), (this.component = e)
        }
        return (t = r([p.EventConstructor()], t))
      })()
      function v(t, e) {
        return function(n) {
          if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
          if ('number' != typeof e || isNaN(e)) throw new Error('classId: ' + e + ' is an invalid integer')
          var o = n,
            r = function() {
              if (!v.engine) throw new Error('You need to set a DisposableComponent.engine before creating disposable components')
              var n = Array.prototype.slice.call(arguments),
                r = new (o.bind.apply(o, s([void 0], n)))(),
                i = a.newId('C')
              return (
                Object.defineProperty(r, l, { enumerable: !1, writable: !1, configurable: !1, value: t }),
                Object.defineProperty(r, h, { enumerable: !1, writable: !1, configurable: !1, value: i }),
                void 0 !== e && Object.defineProperty(r, c, { enumerable: !1, writable: !1, configurable: !1, value: e }),
                v.engine && v.engine.registerComponent(r),
                r
              )
            }
          return (
            void 0 !== e && (r[c] = e),
            (r[l] = t),
            (r.isComponent = !0),
            (r.isDisposableComponent = !0),
            (r.originalClassName = t),
            ((r.prototype = n.prototype).constructor = n),
            r
          )
        }
      }
      function m(t) {
        if (!t) throw new TypeError(t + ' is not a component.')
        if (t[h]) return t[h]
        throw new TypeError(t + ' is not a registered disposable component.')
      }
      ;(e.DisposableComponentUpdated = y),
        (e.Component = function(t, e) {
          return function(n) {
            if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
            var o = n,
              r = function() {
                var n = Array.prototype.slice.call(arguments),
                  r = new (o.bind.apply(o, s([void 0], n)))()
                return (
                  Object.defineProperty(r, l, { enumerable: !1, writable: !1, configurable: !1, value: t }),
                  void 0 !== e && Object.defineProperty(r, c, { enumerable: !1, writable: !1, configurable: !1, value: e }),
                  r
                )
              }
            return (
              void 0 !== e && (r[c] = e),
              (r[l] = t),
              (r.isComponent = !0),
              (r.originalClassName = t),
              ((r.prototype = n.prototype).constructor = n),
              r
            )
          }
        }),
        (e.DisposableComponent = v),
        (function(t) {
          t.engine = null
        })((v = e.DisposableComponent || (e.DisposableComponent = {}))),
        (e.getComponentName = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t[l]) return t[l]
          throw new TypeError(t + ' is not a registered component.')
        }),
        (e.getComponentClassId = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t[c]) return t[c]
          if (!t[l]) throw new TypeError(t + ' is not a registered component.')
          return null
        }),
        (e.getComponentId = m)
      var b = (function() {
        function t() {
          ;(this.dirty = !1), (this.data = {}), (this.subscriptions = [])
        }
        return (
          (t.component = function(t, e) {
            if (delete t[e]) {
              var n = e + '_' + Math.random()
              ;(t[n] = void 0),
                Object.defineProperty(t, n, o(o({}, Object.getOwnPropertyDescriptor(t, n)), { enumerable: !1 })),
                Object.defineProperty(t, e.toString(), {
                  get: function() {
                    return this[n]
                  },
                  set: function(t) {
                    var o = this[n]
                    if (((this.data[e] = t ? m(t) : null), (this[n] = t), t !== o)) {
                      this.dirty = !0
                      for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, t, o)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (t.field = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e]
                },
                set: function(t) {
                  var n = this.data[e]
                  if (((this.data[e] = t), t !== n)) {
                    this.dirty = !0
                    for (var o = 0; o < this.subscriptions.length; o++) this.subscriptions[o](e, t, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.uiValue = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e].toString()
                },
                set: function(t) {
                  var n = this.data[e],
                    o = new u.UIValue(t)
                  if (((this.data[e] = o), o !== n)) {
                    this.dirty = !0
                    for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, o, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.readonly = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  if (e in this.data == !1) throw new Error('The field ' + e + ' is uninitialized')
                  return this.data[e]
                },
                set: function(t) {
                  if (e in this.data) throw new Error('The field ' + e + ' is readonly')
                  ;(this.data[e] = t), (this.dirty = !0)
                },
                enumerable: !0,
                configurable: !1
              })
          }),
          (t.prototype.onChange = function(t) {
            return this.subscriptions.push(t), this
          }),
          (t.prototype.toJSON = function() {
            return this.data
          }),
          t
        )
      })()
      ;(e.ObservableComponent = b),
        (e.isDisposableComponent = function(t) {
          return h in t
        })
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = 0
      ;(e.log = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        'undefined' != typeof dcl ? dcl.log.apply(dcl, r(t)) : console.log.apply(console, r(['DEBUG:'], t))
      }),
        (e.error = function(t, e) {
          'undefined' != typeof dcl ? dcl.error(t, e) : console.error('ERROR:', t, e)
        }),
        (e.newId = function(t) {
          if ((i++, 0 === t.length)) throw new Error('newId(type: string): type cannot be empty')
          return t + i.toString(36)
        }),
        (e.uuid = function() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
            var e = (16 * Math.random()) | 0
            return ('x' === t ? e : (3 & e) | 8).toString(16)
          })
        }),
        (e.buildArray = function(t, e) {
          for (var n = [], o = 0; o < t; ++o) n.push(e())
          return n
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function(t) {
          ;(t[(t.CW = 0)] = 'CW'), (t[(t.CCW = 1)] = 'CCW')
        })(e.Orientation || (e.Orientation = {})),
        (function(t) {
          ;(t[(t.LOCAL = 0)] = 'LOCAL'), (t[(t.WORLD = 1)] = 'WORLD'), (t[(t.BONE = 2)] = 'BONE')
        })(e.Space || (e.Space = {})),
        (e.ToGammaSpace = 1 / 2.2),
        (e.ToLinearSpace = 2.2),
        (e.Epsilon = 1e-6),
        (e.DEG2RAD = Math.PI / 180),
        (e.RAD2DEG = 360 / (2 * Math.PI))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(9),
        r = n(2),
        i = n(10),
        s = n(6),
        a = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.x = t), (this.y = e), (this.z = n)
          }
          return (
            Object.defineProperty(t.prototype, 'isNonUniform', {
              get: function() {
                var t = Math.abs(this.x),
                  e = Math.abs(this.y)
                if (t !== e) return !0
                var n = Math.abs(this.z)
                return t !== n || e !== n
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z).addInPlace(n)
            }),
            (t.GetClipFactor = function(e, n, o, r) {
              var i = t.Dot(e, o) - r
              return i / (i - (t.Dot(n, o) - r))
            }),
            (t.GetAngleBetweenVectors = function(e, n, r) {
              var i = e.normalizeToRef(o.MathTmp.Vector3[1]),
                s = n.normalizeToRef(o.MathTmp.Vector3[2]),
                a = t.Dot(i, s),
                p = o.MathTmp.Vector3[3]
              return t.CrossToRef(i, s, p), t.Dot(p, r) > 0 ? Math.acos(a) : -Math.acos(a)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromFloatArray = function(e, n) {
              return t.FromArray(e, n)
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              return t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o) {
              o.copyFromFloats(t, e, n)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1)
            }),
            (t.Up = function() {
              return new t(0, 1, 0)
            }),
            (t.Down = function() {
              return new t(0, -1, 0)
            }),
            (t.Forward = function() {
              return new t(0, 0, 1)
            }),
            (t.Backward = function() {
              return new t(0, 0, -1)
            }),
            (t.Right = function() {
              return new t(1, 0, 0)
            }),
            (t.Left = function() {
              return new t(-1, 0, 0)
            }),
            (t.TransformCoordinates = function(e, n) {
              var o = t.Zero()
              return t.TransformCoordinatesToRef(e, n, o), o
            }),
            (t.TransformCoordinatesToRef = function(e, n, o) {
              return t.TransformCoordinatesFromFloatsToRef(e.x, e.y, e.z, n, o)
            }),
            (t.TransformCoordinatesFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m,
                s = t * i[0] + e * i[4] + n * i[8] + i[12],
                a = t * i[1] + e * i[5] + n * i[9] + i[13],
                p = t * i[2] + e * i[6] + n * i[10] + i[14],
                u = 1 / (t * i[3] + e * i[7] + n * i[11] + i[15])
              ;(r.x = s * u), (r.y = a * u), (r.z = p * u)
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              this.TransformNormalFromFloatsToRef(t.x, t.y, t.z, e, n)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m
              ;(r.x = t * i[0] + e * i[4] + n * i[8]), (r.y = t * i[1] + e * i[5] + n * i[9]), (r.z = t * i[2] + e * i[6] + n * i[10])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a),
                0.5 * (2 * n.z + (-e.z + o.z) * i + (2 * e.z - 5 * n.z + 4 * o.z - r.z) * s + (-e.z + 3 * n.z - 3 * o.z + r.z) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = new t()
              return t.ClampToRef(e, n, o, r), r
            }),
            (t.ClampToRef = function(t, e, n, o) {
              var r = t.x
              r = (r = r > n.x ? n.x : r) < e.x ? e.x : r
              var i = t.y
              i = (i = i > n.y ? n.y : i) < e.y ? e.y : i
              var s = t.z
              ;(s = (s = s > n.z ? n.z : s) < e.z ? e.z : s), o.copyFromFloats(r, i, s)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c
              )
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.x = t.x + (e.x - t.x) * n), (o.y = t.y + (e.y - t.y) * n), (o.z = t.z + (e.z - t.z) * n)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z
            }),
            (t.Cross = function(e, n) {
              var o = t.Zero()
              return t.CrossToRef(e, n, o), o
            }),
            (t.CrossToRef = function(t, e, n) {
              var o = t.y * e.z - t.z * e.y,
                r = t.z * e.x - t.x * e.z,
                i = t.x * e.y - t.y * e.x
              n.copyFromFloats(o, r, i)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              t.normalizeToRef(e)
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z
              return n * n + o * o + r * r
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.RotationFromAxis = function(e, n, o) {
              var r = t.Zero()
              return t.RotationFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationFromAxisToRef = function(t, e, n, r) {
              var s = o.MathTmp.Quaternion[0]
              i.Quaternion.RotationQuaternionFromAxisToRef(t, e, n, s), r.copyFrom(s.eulerAngles)
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))
            }),
            (t.prototype.asArray = function() {
              var t = []
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), this
            }),
            (t.prototype.toQuaternion = function() {
              return i.Quaternion.Identity.setEuler(this.y, this.x, this.z)
            }),
            (t.prototype.addInPlace = function(t) {
              return this.addInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.addInPlaceFromFloats = function(t, e, n) {
              return (this.x += t), (this.y += e), (this.z += n), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z)
            }),
            (t.prototype.addToRef = function(t, e) {
              return e.copyFromFloats(this.x + t.x, this.y + t.y, this.z + t.z)
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return this.subtractFromFloatsToRef(t.x, t.y, t.z, e)
            }),
            (t.prototype.subtractFromFloats = function(e, n, o) {
              return new t(this.x - e, this.y - n, this.z - o)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o) {
              return o.copyFromFloats(this.x - t, this.y - e, this.z - n)
            }),
            (t.prototype.applyMatrix4 = function(t) {
              this.applyMatrix4ToRef(t, this)
            }),
            (t.prototype.applyMatrix4ToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.m,
                s = 1 / (i[3] * n + i[7] * o + i[11] * r + i[15])
              return (
                (e.x = (i[0] * n + i[4] * o + i[8] * r + i[12]) * s),
                (e.y = (i[1] * n + i[5] * o + i[9] * r + i[13]) * s),
                (e.z = (i[2] * n + i[6] * o + i[10] * r + i[14]) * s),
                e
              )
            }),
            (t.prototype.rotate = function(t) {
              return this.rotateToRef(t, this)
            }),
            (t.prototype.rotateToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.x,
                s = t.y,
                a = t.z,
                p = t.w,
                u = p * n + s * r - a * o,
                l = p * o + a * n - i * r,
                c = p * r + i * o - s * n,
                h = -i * n - s * o - a * r
              return (
                (e.x = u * p + h * -i + l * -a - c * -s),
                (e.y = l * p + h * -s + c * -i - u * -a),
                (e.z = c * p + h * -a + u * -s - l * -i),
                e
              )
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return e.copyFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return e.addInPlaceFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = r.Epsilon),
                t &&
                  s.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  s.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  s.Scalar.WithinEpsilon(this.z, t.z, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n) {
              return this.x === t && this.y === e && this.z === n
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this
            }),
            (t.prototype.multiply = function(t) {
              return this.multiplyByFloats(t.x, t.y, t.z)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return e.copyFromFloats(this.x * t.x, this.y * t.y, this.z * t.z)
            }),
            (t.prototype.multiplyByFloats = function(e, n, o) {
              return new t(this.x * e, this.y * n, this.z * o)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return e.copyFromFloats(this.x / t.x, this.y / t.y, this.z / t.z)
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return this.minimizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return this.maximizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.minimizeInPlaceFromFloats = function(t, e, n) {
              return t < this.x && (this.x = t), e < this.y && (this.y = e), n < this.z && (this.z = n), this
            }),
            (t.prototype.maximizeInPlaceFromFloats = function(t, e, n) {
              return t > this.x && (this.x = t), e > this.y && (this.y = e), n > this.z && (this.z = n), this
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z
            }),
            (t.prototype.normalize = function() {
              return this.normalizeFromLength(this.length())
            }),
            (t.prototype.normalizeFromLength = function(t) {
              return 0 === t || 1 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.normalizeToNew = function() {
              var e = new t(0, 0, 0)
              return this.normalizeToRef(e), e
            }),
            (t.prototype.normalizeToRef = function(t) {
              var e = this.length()
              return 0 === e || 1 === e ? t.copyFromFloats(this.x, this.y, this.z) : this.scaleToRef(1 / e, t)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z)
            }),
            (t.prototype.copyFrom = function(t) {
              return this.copyFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.x = t), (this.y = e), (this.z = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = t), this
            }),
            t
          )
        })()
      e.Vector3 = a
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a,
        p = n(0),
        u = n(5),
        l = n(25),
        c = n(1)
      !(function(t) {
        ;(t[(t.TRANSFORM = 1)] = 'TRANSFORM'),
          (t[(t.UUID_CALLBACK = 8)] = 'UUID_CALLBACK'),
          (t[(t.BOX_SHAPE = 16)] = 'BOX_SHAPE'),
          (t[(t.SPHERE_SHAPE = 17)] = 'SPHERE_SHAPE'),
          (t[(t.PLANE_SHAPE = 18)] = 'PLANE_SHAPE'),
          (t[(t.CONE_SHAPE = 19)] = 'CONE_SHAPE'),
          (t[(t.CYLINDER_SHAPE = 20)] = 'CYLINDER_SHAPE'),
          (t[(t.TEXT_SHAPE = 21)] = 'TEXT_SHAPE'),
          (t[(t.NFT_SHAPE = 22)] = 'NFT_SHAPE'),
          (t[(t.UI_WORLD_SPACE_SHAPE = 23)] = 'UI_WORLD_SPACE_SHAPE'),
          (t[(t.UI_SCREEN_SPACE_SHAPE = 24)] = 'UI_SCREEN_SPACE_SHAPE'),
          (t[(t.UI_CONTAINER_RECT = 25)] = 'UI_CONTAINER_RECT'),
          (t[(t.UI_CONTAINER_STACK = 26)] = 'UI_CONTAINER_STACK'),
          (t[(t.UI_TEXT_SHAPE = 27)] = 'UI_TEXT_SHAPE'),
          (t[(t.UI_INPUT_TEXT_SHAPE = 28)] = 'UI_INPUT_TEXT_SHAPE'),
          (t[(t.UI_IMAGE_SHAPE = 29)] = 'UI_IMAGE_SHAPE'),
          (t[(t.UI_SLIDER_SHAPE = 30)] = 'UI_SLIDER_SHAPE'),
          (t[(t.CIRCLE_SHAPE = 31)] = 'CIRCLE_SHAPE'),
          (t[(t.BILLBOARD = 32)] = 'BILLBOARD'),
          (t[(t.ANIMATION = 33)] = 'ANIMATION'),
          (t[(t.UI_FULLSCREEN_SHAPE = 40)] = 'UI_FULLSCREEN_SHAPE'),
          (t[(t.UI_BUTTON_SHAPE = 41)] = 'UI_BUTTON_SHAPE'),
          (t[(t.GLTF_SHAPE = 54)] = 'GLTF_SHAPE'),
          (t[(t.OBJ_SHAPE = 55)] = 'OBJ_SHAPE'),
          (t[(t.AVATAR_SHAPE = 56)] = 'AVATAR_SHAPE'),
          (t[(t.BASIC_MATERIAL = 64)] = 'BASIC_MATERIAL'),
          (t[(t.PBR_MATERIAL = 65)] = 'PBR_MATERIAL'),
          (t[(t.HIGHLIGHT_ENTITY = 66)] = 'HIGHLIGHT_ENTITY'),
          (t[(t.SOUND = 67)] = 'SOUND'),
          (t[(t.TEXTURE = 68)] = 'TEXTURE'),
          (t[(t.AUDIO_CLIP = 200)] = 'AUDIO_CLIP'),
          (t[(t.AUDIO_SOURCE = 201)] = 'AUDIO_SOURCE'),
          (t[(t.GIZMOS = 203)] = 'GIZMOS'),
          (t[(t.SMART_ITEM = 204)] = 'SMART_ITEM')
      })((a = e.CLASS_ID || (e.CLASS_ID = {})))
      var h = (function(t) {
        function e(e) {
          void 0 === e && (e = {})
          var n = t.call(this) || this
          return (
            (n.position = e.position || u.Vector3.Zero()),
            (n.rotation = e.rotation || u.Quaternion.Identity),
            (n.scale = e.scale || new u.Vector3(1, 1, 1)),
            n
          )
        }
        return (
          r(e, t),
          Object.defineProperty(e.prototype, 'eulerAngles', {
            get: function() {
              return this.rotation.eulerAngles
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.lookAt = function(t, e) {
            void 0 === e && (e = u.MathTmp.staticUp)
            var n = new u.Matrix()
            return u.Matrix.LookAtLHToRef(this.position, t, e, n), n.invert(), u.Quaternion.FromRotationMatrixToRef(n, this.rotation), this
          }),
          (e.prototype.rotate = function(t, e) {
            return this.rotation.multiplyInPlace(this.rotation.angleAxis(e, t)), this
          }),
          (e.prototype.translate = function(t) {
            return this.position.addInPlace(t), this
          }),
          s([p.ObservableComponent.field], e.prototype, 'position', void 0),
          s([p.ObservableComponent.field], e.prototype, 'rotation', void 0),
          s([p.ObservableComponent.field], e.prototype, 'scale', void 0),
          (e = s([p.Component('engine.transform', a.TRANSFORM)], e))
        )
      })(p.ObservableComponent)
      e.Transform = h
      var f = (function(t) {
        function e(e, n, o) {
          void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === o && (o = !0)
          var r = t.call(this) || this
          return (r.x = !0), (r.y = !0), (r.z = !0), (r.x = e), (r.y = n), (r.z = o), r
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'x', void 0),
          s([p.ObservableComponent.field], e.prototype, 'y', void 0),
          s([p.ObservableComponent.field], e.prototype, 'z', void 0),
          (e = s([p.Component('engine.billboard', a.BILLBOARD)], e))
        )
      })(p.ObservableComponent)
      e.Billboard = f
      var d = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.withCollisions = !0), (e.visible = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'withCollisions', void 0),
          s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
          e
        )
      })(p.ObservableComponent)
      e.Shape = d
      var y = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.BOX_SHAPE)], e))
      })(d)
      e.BoxShape = y
      var v = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.SPHERE_SHAPE)], e))
      })(d)
      e.SphereShape = v
      var m = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'segments', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CIRCLE_SHAPE)], e))
        )
      })(d)
      e.CircleShape = m
      var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.width = 1), (e.height = 1), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'width', void 0),
          s([p.ObservableComponent.field], e.prototype, 'height', void 0),
          s([p.ObservableComponent.field], e.prototype, 'uvs', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.PLANE_SHAPE)], e))
        )
      })(d)
      e.PlaneShape = b
      var g = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 0),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CONE_SHAPE)], e))
        )
      })(d)
      e.ConeShape = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 0),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CYLINDER_SHAPE)], e))
        )
      })(d)
      e.CylinderShape = _
      var C = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return r(e, t), s([d.readonly], e.prototype, 'src', void 0), (e = s([p.DisposableComponent('engine.shape', a.GLTF_SHAPE)], e))
      })(d)
      e.GLTFShape = C
      var x = (function(t) {
        function e(e, n) {
          void 0 === n && (n = new u.Color3(0.6404918, 0.611472, 0.8584906))
          var o = t.call(this) || this
          return (o.src = e), (o.color = n), o
        }
        return (
          r(e, t),
          s([d.readonly], e.prototype, 'src', void 0),
          s([p.ObservableComponent.field], e.prototype, 'color', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.NFT_SHAPE)], e))
        )
      })(d)
      e.NFTShape = x
      var w = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.src = e), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'hasAlpha', void 0),
          (e = s([p.DisposableComponent('engine.texture', a.TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.Texture = w
      var O = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.states = []), e
        }
        return (
          r(e, t),
          (e.prototype.addClip = function(t) {
            var e = this
            return (
              this.states.push(t),
              t.onChange(function() {
                e.dirty = !0
              }),
              this
            )
          }),
          (e.prototype.getClip = function(t) {
            for (var e = 0; e < this.states.length; e++) {
              var n = this.states[e]
              if (n.clip === t) return n
            }
            var o = new l.AnimationState(t)
            return this.addClip(o), o
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'states', void 0),
          (e = s([p.Component('engine.animator', a.ANIMATION)], e))
        )
      })(d)
      e.Animator = O
      var T = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.OBJ_SHAPE)], e))
        )
      })(d)
      e.OBJShape = T
      var R,
        A = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.outlineWidth = 0),
              (n.outlineColor = new u.Color3(1, 1, 1)),
              (n.color = new u.Color3(1, 1, 1)),
              (n.fontSize = 10),
              (n.fontWeight = 'normal'),
              (n.opacity = 1),
              (n.value = ''),
              (n.lineSpacing = '0px'),
              (n.lineCount = 0),
              (n.resizeToFit = !1),
              (n.textWrapping = !1),
              (n.shadowBlur = 0),
              (n.shadowOffsetX = 0),
              (n.shadowOffsetY = 0),
              (n.shadowColor = new u.Color3(1, 1, 1)),
              (n.zIndex = 0),
              (n.hTextAlign = 'center'),
              (n.vTextAlign = 'center'),
              (n.width = 1),
              (n.height = 1),
              (n.paddingTop = 0),
              (n.paddingRight = 0),
              (n.paddingBottom = 0),
              (n.paddingLeft = 0),
              (n.isPickable = !1),
              (n.billboard = !1),
              e && (n.value = e),
              n
            )
          }
          return (
            r(e, t),
            s([p.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
            s([p.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'color', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontSize', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
            s([p.ObservableComponent.field], e.prototype, 'opacity', void 0),
            s([p.ObservableComponent.field], e.prototype, 'value', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineCount', void 0),
            s([p.ObservableComponent.field], e.prototype, 'resizeToFit', void 0),
            s([p.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'zIndex', void 0),
            s([p.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'width', void 0),
            s([p.ObservableComponent.field], e.prototype, 'height', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
            s([p.ObservableComponent.field], e.prototype, 'isPickable', void 0),
            s([p.ObservableComponent.field], e.prototype, 'billboard', void 0),
            (e = s([p.Component('engine.text', a.TEXT_SHAPE)], e))
          )
        })(d)
      ;(e.TextShape = A),
        (function(t) {
          ;(t[(t.OPAQUE = 0)] = 'OPAQUE'),
            (t[(t.ALPHA_TEST = 1)] = 'ALPHA_TEST'),
            (t[(t.ALPHA_BLEND = 2)] = 'ALPHA_BLEND'),
            (t[(t.ALPHA_TEST_AND_BLEND = 3)] = 'ALPHA_TEST_AND_BLEND'),
            (t[(t.AUTO = 4)] = 'AUTO')
        })((R = e.TransparencyMode || (e.TransparencyMode = {})))
      var E = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.transparencyMode = R.AUTO), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'albedoColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'metallic', void 0),
          s([p.ObservableComponent.field], e.prototype, 'roughness', void 0),
          s([p.ObservableComponent.field], e.prototype, 'ambientColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectionColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectivityColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'directIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'microSurface', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'environmentIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'specularIntensity', void 0),
          s([p.ObservableComponent.component], e.prototype, 'albedoTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'alphaTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'emissiveTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'bumpTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'refractionTexture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'disableLighting', void 0),
          s([p.ObservableComponent.field], e.prototype, 'transparencyMode', void 0),
          (e = s([p.DisposableComponent('engine.material', a.PBR_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.Material = E
      var P = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.component], e.prototype, 'texture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          (e = s([p.DisposableComponent('engine.material', a.BASIC_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.BasicMaterial = P
      var z = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.uuid = c.newId('UUID')), !(e && 'apply' in e && 'call' in e))) throw new Error('Callback is not a function')
          return (n.callback = e), n
        }
        return (
          r(e, t),
          (e.uuidEvent = function(t, n) {
            if (delete t[n]) {
              var o = n + '_' + Math.random()
              ;(t[o] = void 0),
                Object.defineProperty(t, o, i(i({}, Object.getOwnPropertyDescriptor(t, o)), { enumerable: !1 })),
                Object.defineProperty(t, n.toString(), {
                  get: function() {
                    return this[o]
                  },
                  set: function(t) {
                    var r = this[o]
                    if (t) {
                      if (!(t instanceof e)) throw new Error('value is not an OnUUIDEvent')
                      this.data[n] = t.uuid
                    } else this.data[n] = null
                    if (((this[o] = t), t !== r)) {
                      this.dirty = !0
                      for (var i = 0; i < this.subscriptions.length; i++) this.subscriptions[i](n, t, r)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (e.prototype.toJSON = function() {
            return { uuid: this.uuid, type: this.type }
          }),
          s([p.ObservableComponent.field], e.prototype, 'callback', void 0),
          e
        )
      })(p.ObservableComponent)
      e.OnUUIDEvent = z
      var S = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onPointerLock'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onPointerLock', a.UUID_CALLBACK)], e))
        )
      })(z)
      e.OnPointerLock = S
      var I = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onAnimationEnd'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onAnimationEnd', a.UUID_CALLBACK)], e))
        )
      })(z)
      e.OnAnimationEnd = I
      var M = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.Component('engine.smartItem', a.SMART_ITEM)], e))
      })(p.ObservableComponent)
      e.SmartItem = M
    },
    function(t, e, n) {
      'use strict'
      function o(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        o(n(2)),
        o(n(9)),
        o(n(21)),
        o(n(22)),
        o(n(33)),
        o(n(34)),
        o(n(35)),
        o(n(23)),
        o(n(36)),
        o(n(37)),
        o(n(11)),
        o(n(38)),
        o(n(39)),
        o(n(24)),
        o(n(10)),
        o(n(6)),
        o(n(40)),
        o(n(14)),
        o(n(3)),
        o(n(20)),
        o(n(5))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = (function() {
        function t() {}
        return (
          (t.WithinEpsilon = function(t, e, n) {
            void 0 === n && (n = 1401298e-51)
            var o = t - e
            return -n <= o && o <= n
          }),
          (t.ToHex = function(t) {
            var e = t.toString(16)
            return t <= 15 ? ('0' + e).toUpperCase() : e.toUpperCase()
          }),
          (t.Sign = function(t) {
            var e = +t
            return 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
          }),
          (t.Clamp = function(t, e, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(n, Math.max(e, t))
          }),
          (t.Log2 = function(t) {
            return Math.log(t) * Math.LOG2E
          }),
          (t.Repeat = function(t, e) {
            return t - Math.floor(t / e) * e
          }),
          (t.Normalize = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.Denormalize = function(t, e, n) {
            return t * (n - e) + e
          }),
          (t.DeltaAngle = function(e, n) {
            var o = t.Repeat(n - e, 360)
            return o > 180 && (o -= 360), o
          }),
          (t.PingPong = function(e, n) {
            var o = t.Repeat(e, 2 * n)
            return n - Math.abs(o - n)
          }),
          (t.SmoothStep = function(e, n, o) {
            var r = t.Clamp(o)
            return n * (r = -2 * r * r * r + 3 * r * r) + e * (1 - r)
          }),
          (t.MoveTowards = function(e, n, o) {
            return Math.abs(n - e) <= o ? n : e + t.Sign(n - e) * o
          }),
          (t.MoveTowardsAngle = function(e, n, o) {
            var r = t.DeltaAngle(e, n)
            return -o < r && r < o ? n : t.MoveTowards(e, e + r, o)
          }),
          (t.Lerp = function(t, e, n) {
            return t + (e - t) * n
          }),
          (t.LerpAngle = function(e, n, o) {
            var r = t.Repeat(n - e, 360)
            return r > 180 && (r -= 360), e + r * t.Clamp(o)
          }),
          (t.InverseLerp = function(e, n, o) {
            return e !== n ? t.Clamp((o - e) / (n - e)) : 0
          }),
          (t.Hermite = function(t, e, n, o, r) {
            var i = r * r,
              s = r * i
            return t * (2 * s - 3 * i + 1) + n * (-2 * s + 3 * i) + e * (s - 2 * i + r) + o * (s - i)
          }),
          (t.RandomRange = function(t, e) {
            return t === e ? t : Math.random() * (e - t) + t
          }),
          (t.RangeToPercent = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.PercentToRange = function(t, e, n) {
            return (n - e) * t + e
          }),
          (t.NormalizeRadians = function(e) {
            return e - t.TwoPi * Math.floor((e + Math.PI) / t.TwoPi)
          }),
          (t.TwoPi = 2 * Math.PI),
          t
        )
      })()
      e.Scalar = o
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(8),
        i = (function() {
          function t(t, e, n) {
            ;(this.entity = t), (this.componentName = e), (this.component = n)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.ComponentRemoved = i
      var s = (function() {
        function t(t, e, n) {
          ;(this.entity = t), (this.componentName = e), (this.classId = n)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ComponentAdded = s
      var a = (function() {
        function t(t, e) {
          ;(this.entity = t), (this.parent = e)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ParentChanged = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(1),
        r = '__event_name__',
        i = []
      function s(t) {
        if (!(r in t) || 'string' != typeof t[r]) throw new Error('The EventConstructor is not registered')
        return t[r]
      }
      var a = (function() {
        function t() {
          this.listeners = {}
        }
        return (
          (t.prototype.addListener = function(t, e, n) {
            if (!t || 'function' != typeof t) throw new Error('Invalid EventConstructor')
            var o = s(t),
              r = this.listeners[o]
            r || (r = this.listeners[o] = [])
            for (var i = 0; i < r.length; i++) {
              if (r[i].listener === e) throw new Error('The provided listener is already registered')
            }
            return r.push({ listener: e, fn: n }), this
          }),
          (t.prototype.removeListener = function(t, e) {
            if (!e || 'function' != typeof e) throw new Error('Invalid EventConstructor')
            var n = s(e),
              o = this.listeners[n]
            if (!o) return !1
            for (var r = 0; r < o.length; r++) {
              if (o[r].listener === t) return o.splice(r, 1), !0
            }
            return !1
          }),
          (t.prototype.fireEvent = function(t) {
            var e = s(t.constructor),
              n = this.listeners[e]
            if (n)
              for (var r = 0; r < n.length; r++)
                try {
                  var i = n[r]
                  i.fn.call(i.listener, t)
                } catch (t) {
                  o.error(t)
                }
            return this
          }),
          t
        )
      })()
      ;(e.EventManager = a),
        (e.EventConstructor = function() {
          var t = o.newId('EV')
          if (-1 !== i.indexOf(t)) throw new Error('The event name ' + t + ' is already taken')
          return (
            i.push(t),
            function(e) {
              return (e[r] = t), e
            }
          )
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(1),
        r = n(3),
        i = n(10),
        s = n(11)
      e.MathTmp = {
        Vector3: o.buildArray(6, r.Vector3.Zero),
        Matrix: o.buildArray(2, s.Matrix.Identity),
        Quaternion: o.buildArray(3, i.Quaternion.Zero),
        staticUp: r.Vector3.Up(),
        tmpMatrix: s.Matrix.Zero()
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(11),
        r = n(3),
        i = n(9),
        s = n(2),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.x = t),
              (this.y = e),
              (this.z = n),
              (this.w = o)
          }
          return (
            (t.FromRotationMatrix = function(e) {
              var n = new t()
              return t.FromRotationMatrixToRef(e, n), n
            }),
            (t.FromRotationMatrixToRef = function(t, e) {
              var n,
                o = t.m,
                r = o[0],
                i = o[4],
                s = o[8],
                a = o[1],
                p = o[5],
                u = o[9],
                l = o[2],
                c = o[6],
                h = o[10],
                f = r + p + h
              f > 0
                ? ((n = 0.5 / Math.sqrt(f + 1)), (e.w = 0.25 / n), (e.x = (c - u) * n), (e.y = (s - l) * n), (e.z = (a - i) * n))
                : r > p && r > h
                ? ((n = 2 * Math.sqrt(1 + r - p - h)), (e.w = (c - u) / n), (e.x = 0.25 * n), (e.y = (i + a) / n), (e.z = (s + l) / n))
                : p > h
                ? ((n = 2 * Math.sqrt(1 + p - r - h)), (e.w = (s - l) / n), (e.x = (i + a) / n), (e.y = 0.25 * n), (e.z = (u + c) / n))
                : ((n = 2 * Math.sqrt(1 + h - r - p)), (e.w = (a - i) / n), (e.x = (s + l) / n), (e.y = (u + c) / n), (e.z = 0.25 * n))
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w
            }),
            (t.AreClose = function(e, n) {
              return t.Dot(e, n) >= 0
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.Inverse = function(e) {
              return new t(-e.x, -e.y, -e.z, e.w)
            }),
            (t.IsIdentity = function(t) {
              return t && 0 === t.x && 0 === t.y && 0 === t.z && 1 === t.w
            }),
            (t.RotationAxis = function(e, n) {
              var o = n * s.DEG2RAD
              return t.RotationAxisToRef(e, o, new t())
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = e * s.DEG2RAD,
                r = Math.sin(o / 2)
              return t.normalize(), (n.w = Math.cos(o / 2)), (n.x = t.x * r), (n.y = t.y * r), (n.z = t.z * r), n
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromEulerAnglesRef = function(e, n, o, r) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, r)
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              var r = 0.5 * n,
                i = 0.5 * e,
                s = 0.5 * t,
                a = Math.cos(i),
                p = Math.cos(s),
                u = Math.cos(r),
                l = Math.sin(i),
                c = Math.sin(s),
                h = Math.sin(r)
              ;(o.x = l * p * u + a * c * h), (o.y = a * c * u - l * p * h), (o.z = a * p * h + l * c * u), (o.w = a * p * u - l * c * h)
            }),
            (t.RotationAlphaBetaGamma = function(e, n, o) {
              var r = new t()
              return t.RotationAlphaBetaGammaToRef(e, n, o, r), r
            }),
            (t.RotationAlphaBetaGammaToRef = function(t, e, n, o) {
              var r = 0.5 * (n + t),
                i = 0.5 * (n - t),
                s = 0.5 * e
              ;(o.x = Math.cos(i) * Math.sin(s)),
                (o.y = Math.sin(i) * Math.sin(s)),
                (o.z = Math.sin(r) * Math.cos(s)),
                (o.w = Math.cos(r) * Math.cos(s))
            }),
            (t.RotationQuaternionFromAxis = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.RotationQuaternionFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationQuaternionFromAxisToRef = function(e, n, r, s) {
              var a = i.MathTmp.Matrix[0]
              o.Matrix.FromXYZAxesToRef(e.normalize(), n.normalize(), r.normalize(), a), t.FromRotationMatrixToRef(a, s)
            }),
            (t.Slerp = function(e, n, o) {
              var r = t.Identity
              return t.SlerpToRef(e, n, o, r), r
            }),
            (t.SlerpToRef = function(t, e, n, o) {
              var r,
                i,
                s = t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w,
                a = !1
              if ((s < 0 && ((a = !0), (s = -s)), s > 0.999999)) (i = 1 - n), (r = a ? -n : n)
              else {
                var p = Math.acos(s),
                  u = 1 / Math.sin(p)
                ;(i = Math.sin((1 - n) * p) * u), (r = a ? -Math.sin(n * p) * u : Math.sin(n * p) * u)
              }
              ;(o.x = i * t.x + r * e.x), (o.y = i * t.y + r * e.y), (o.z = i * t.z + r * e.z), (o.w = i * t.w + r * e.w)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c,
                e.w * p + o.w * u + n.w * l + r.w * c
              )
            }),
            Object.defineProperty(t, 'Identity', {
              get: function() {
                return new t(0, 0, 0, 1)
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.Angle = function(e, n) {
              var o = t.Dot(e, n)
              return 2 * Math.acos(Math.min(Math.abs(o), 1)) * s.RAD2DEG
            }),
            (t.Euler = function(e, n, o) {
              return t.RotationYawPitchRoll(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD)
            }),
            (t.LookRotation = function(e, n) {
              void 0 === n && (n = i.MathTmp.staticUp)
              var o = r.Vector3.Normalize(e),
                s = r.Vector3.Normalize(r.Vector3.Cross(n, o)),
                a = r.Vector3.Cross(o, s),
                p = s.x,
                u = s.y,
                l = s.z,
                c = a.x,
                h = a.y,
                f = a.z,
                d = o.x,
                y = o.y,
                v = o.z,
                m = p + h + v,
                b = new t()
              if (m > 0) {
                var g = Math.sqrt(m + 1)
                return (b.w = 0.5 * g), (g = 0.5 / g), (b.x = (f - y) * g), (b.y = (d - l) * g), (b.z = (u - c) * g), b
              }
              if (p >= h && p >= v) {
                var _ = Math.sqrt(1 + p - h - v),
                  C = 0.5 / _
                return (b.x = 0.5 * _), (b.y = (u + c) * C), (b.z = (l + d) * C), (b.w = (f - y) * C), b
              }
              if (h > v) {
                var x = Math.sqrt(1 + h - p - v),
                  w = 0.5 / x
                return (b.x = (c + u) * w), (b.y = 0.5 * x), (b.z = (y + f) * w), (b.w = (d - l) * w), b
              }
              var O = Math.sqrt(1 + v - p - h),
                T = 0.5 / O
              return (b.x = (d + l) * T), (b.y = (y + f) * T), (b.z = 0.5 * O), (b.w = (u - c) * T), b
            }),
            (t.RotateTowards = function(e, n, o) {
              var r = t.Angle(e, n)
              if (0 === r) return n
              var i = Math.min(1, o / r)
              return t.Slerp(e, n, i)
            }),
            (t.FromToRotation = function(e, n) {
              var o = new t(),
                i = e.normalize(),
                a = n.normalize(),
                p = r.Vector3.Dot(i, a)
              if (p > -1 + s.Epsilon) {
                var u = Math.sqrt(2 * (1 + p)),
                  l = 1 / u,
                  c = r.Vector3.Cross(i, a).scaleInPlace(l)
                o.set(c.x, c.y, c.z, 0.5 * u)
              } else {
                if (p > 1 - s.Epsilon) return new t(0, 0, 0, 1)
                var h = r.Vector3.Cross(r.Vector3.Right(), i)
                h.lengthSquared() < s.Epsilon && (h = r.Vector3.Cross(r.Vector3.Forward(), i)), o.set(h.x, h.y, h.z, 0)
              }
              return o.normalize()
            }),
            Object.defineProperty(t.prototype, 'normalized', {
              get: function() {
                return this.normalize()
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.setFromToRotation = function(e, n, r) {
              void 0 === r && (r = i.MathTmp.staticUp),
                (i.MathTmp.tmpMatrix = o.Matrix.Zero()),
                o.Matrix.LookAtLHToRef(e, n, r, i.MathTmp.tmpMatrix),
                i.MathTmp.tmpMatrix.invert(),
                t.FromRotationMatrixToRef(i.MathTmp.tmpMatrix, this)
            }),
            Object.defineProperty(t.prototype, 'eulerAngles', {
              get: function() {
                var t = new r.Vector3(),
                  e = new o.Matrix()
                this.toRotationMatrix(e)
                var n = o.Matrix.GetAsMatrix3x3(e)
                return (
                  (t.y = s.RAD2DEG * Math.asin(Math.max(-1, Math.min(1, n[6])))),
                  Math.abs(n[6]) < 0.99999
                    ? ((t.x = s.RAD2DEG * Math.atan2(-n[7], n[8])), (t.z = s.RAD2DEG * Math.atan2(-n[3], n[0])))
                    : ((t.x = s.RAD2DEG * Math.atan2(n[5], n[4])), (t.z = 0)),
                  t
                )
              },
              set: function(t) {
                this.setEuler(t.x, t.y, t.z)
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
            }),
            Object.defineProperty(t.prototype, 'length', {
              get: function() {
                return Math.sqrt(this.lengthSquared)
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'lengthSquared', {
              get: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getClassName = function() {
              return 'Quaternion'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              return [this.x, this.y, this.z, this.w]
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setEuler = function(e, n, o) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, this), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.multiply = function(e) {
              var n = new t(0, 0, 0, 1)
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              var n = this.x * t.w + this.y * t.z - this.z * t.y + this.w * t.x,
                o = -this.x * t.z + this.y * t.w + this.z * t.x + this.w * t.y,
                r = this.x * t.y - this.y * t.x + this.z * t.w + this.w * t.z,
                i = -this.x * t.x - this.y * t.y - this.z * t.z + this.w * t.w
              return e.copyFromFloats(n, o, r, i), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return this.multiplyToRef(t, this), this
            }),
            (t.prototype.conjugateToRef = function(t) {
              return t.copyFromFloats(-this.x, -this.y, -this.z, this.w), this
            }),
            (t.prototype.conjugateInPlace = function() {
              return (this.x *= -1), (this.y *= -1), (this.z *= -1), this
            }),
            (t.prototype.conjugate = function() {
              return new t(-this.x, -this.y, -this.z, this.w)
            }),
            (t.prototype.normalize = function() {
              var t = 1 / this.length
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.angleAxis = function(e, n) {
              if (0 === n.lengthSquared()) return t.Identity
              var o = t.Identity,
                r = e * s.DEG2RAD
              r *= 0.5
              var i = n.normalize()
              return (i = n.scaleInPlace(Math.sin(r))), (o.x = i.x), (o.y = i.y), (o.z = i.z), (o.w = Math.cos(r)), o.normalize()
            }),
            (t.prototype.toRotationMatrix = function(t) {
              return o.Matrix.FromQuaternionToRef(this, t), this
            }),
            (t.prototype.fromRotationMatrix = function(e) {
              return t.FromRotationMatrixToRef(e, this), this
            }),
            t
          )
        })()
      e.Quaternion = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(3),
        r = n(10),
        i = n(9),
        s = n(20),
        a = (function() {
          function t() {
            ;(this._isIdentity = !1),
              (this._isIdentityDirty = !0),
              (this._isIdentity3x2 = !0),
              (this._isIdentity3x2Dirty = !0),
              (this._m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              this._updateIdentityStatus(!1)
          }
          return (
            Object.defineProperty(t.prototype, 'm', {
              get: function() {
                return this._m
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t, 'IdentityReadOnly', {
              get: function() {
                return t._identityReadOnly
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.FromArray = function(e, n) {
              void 0 === n && (n = 0)
              var o = new t()
              return t.FromArrayToRef(e, n, o), o
            }),
            (t.FromArrayToRef = function(t, e, n) {
              for (var o = 0; o < 16; o++) n._m[o] = t[o + e]
              n._markAsUpdated()
            }),
            (t.FromFloatArrayToRefScaled = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t[r + e] * n
              o._markAsUpdated()
            }),
            (t.FromValuesToRef = function(t, e, n, o, r, i, s, a, p, u, l, c, h, f, d, y, v) {
              var m = v._m
              ;(m[0] = t),
                (m[1] = e),
                (m[2] = n),
                (m[3] = o),
                (m[4] = r),
                (m[5] = i),
                (m[6] = s),
                (m[7] = a),
                (m[8] = p),
                (m[9] = u),
                (m[10] = l),
                (m[11] = c),
                (m[12] = h),
                (m[13] = f),
                (m[14] = d),
                (m[15] = y),
                v._markAsUpdated()
            }),
            (t.FromValues = function(e, n, o, r, i, s, a, p, u, l, c, h, f, d, y, v) {
              var m = new t(),
                b = m._m
              return (
                (b[0] = e),
                (b[1] = n),
                (b[2] = o),
                (b[3] = r),
                (b[4] = i),
                (b[5] = s),
                (b[6] = a),
                (b[7] = p),
                (b[8] = u),
                (b[9] = l),
                (b[10] = c),
                (b[11] = h),
                (b[12] = f),
                (b[13] = d),
                (b[14] = y),
                (b[15] = v),
                m._markAsUpdated(),
                m
              )
            }),
            (t.Compose = function(e, n, o) {
              var r = new t()
              return t.ComposeToRef(e, n, o, r), r
            }),
            (t.ComposeToRef = function(e, n, o, r) {
              t.ScalingToRef(e.x, e.y, e.z, i.MathTmp.Matrix[1]),
                n.toRotationMatrix(i.MathTmp.Matrix[0]),
                i.MathTmp.Matrix[1].multiplyToRef(i.MathTmp.Matrix[0], r),
                r.setTranslation(o)
            }),
            (t.Identity = function() {
              var e = t.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              return e._updateIdentityStatus(!0), e
            }),
            (t.IdentityToRef = function(e) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(!0)
            }),
            (t.Zero = function() {
              var e = t.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
              return e._updateIdentityStatus(!1), e
            }),
            (t.RotationX = function(e) {
              var n = new t()
              return t.RotationXToRef(e, n), n
            }),
            (t.Invert = function(e) {
              var n = new t()
              return e.invertToRef(n), n
            }),
            (t.RotationXToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(1, 0, 0, 0, 0, r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationY = function(e) {
              var n = new t()
              return t.RotationYToRef(e, n), n
            }),
            (t.RotationYToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, 0, -o, 0, 0, 1, 0, 0, o, 0, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationZ = function(e) {
              var n = new t()
              return t.RotationZToRef(e, n), n
            }),
            (t.RotationZToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationAxis = function(e, n) {
              var o = new t()
              return t.RotationAxisToRef(e, n, o), o
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = Math.sin(-e),
                r = Math.cos(-e),
                i = 1 - r
              t.normalize()
              var s = n._m
              ;(s[0] = t.x * t.x * i + r),
                (s[1] = t.x * t.y * i - t.z * o),
                (s[2] = t.x * t.z * i + t.y * o),
                (s[3] = 0),
                (s[4] = t.y * t.x * i + t.z * o),
                (s[5] = t.y * t.y * i + r),
                (s[6] = t.y * t.z * i - t.x * o),
                (s[7] = 0),
                (s[8] = t.z * t.x * i - t.y * o),
                (s[9] = t.z * t.y * i + t.x * o),
                (s[10] = t.z * t.z * i + r),
                (s[11] = 0),
                (s[12] = 0),
                (s[13] = 0),
                (s[14] = 0),
                (s[15] = 1),
                n._markAsUpdated()
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              r.Quaternion.RotationYawPitchRollToRef(t, e, n, i.MathTmp.Quaternion[0]), i.MathTmp.Quaternion[0].toRotationMatrix(o)
            }),
            (t.Scaling = function(e, n, o) {
              var r = new t()
              return t.ScalingToRef(e, n, o, r), r
            }),
            (t.ScalingToRef = function(e, n, o, r) {
              t.FromValuesToRef(e, 0, 0, 0, 0, n, 0, 0, 0, 0, o, 0, 0, 0, 0, 1, r), r._updateIdentityStatus(1 === e && 1 === n && 1 === o)
            }),
            (t.Translation = function(e, n, o) {
              var r = new t()
              return t.TranslationToRef(e, n, o, r), r
            }),
            (t.TranslationToRef = function(e, n, o, r) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, o, 1, r), r._updateIdentityStatus(0 === e && 0 === n && 0 === o)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t()
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t._m[r] * (1 - n) + e._m[r] * n
              o._markAsUpdated()
            }),
            (t.DecomposeLerp = function(e, n, o) {
              var r = new t()
              return t.DecomposeLerpToRef(e, n, o, r), r
            }),
            (t.DecomposeLerpToRef = function(e, n, s, a) {
              var p = i.MathTmp.Vector3[0],
                u = i.MathTmp.Quaternion[0],
                l = i.MathTmp.Vector3[1]
              e.decompose(p, u, l)
              var c = i.MathTmp.Vector3[2],
                h = i.MathTmp.Quaternion[1],
                f = i.MathTmp.Vector3[3]
              n.decompose(c, h, f)
              var d = i.MathTmp.Vector3[4]
              o.Vector3.LerpToRef(p, c, s, d)
              var y = i.MathTmp.Quaternion[2]
              r.Quaternion.SlerpToRef(u, h, s, y)
              var v = i.MathTmp.Vector3[5]
              o.Vector3.LerpToRef(l, f, s, v), t.ComposeToRef(d, y, v, a)
            }),
            (t.LookAtLH = function(e, n, o) {
              var r = new t()
              return t.LookAtLHToRef(e, n, o, r), r
            }),
            (t.LookAtLHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              n.subtractToRef(e, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                f = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, f, 1, s)
            }),
            (t.LookAtRH = function(e, n, o) {
              var r = new t()
              return t.LookAtRHToRef(e, n, o, r), r
            }),
            (t.LookAtRHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              e.subtractToRef(n, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                f = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, f, 1, s)
            }),
            (t.OrthoLH = function(e, n, o, r) {
              var i = new t()
              return t.OrthoLHToRef(e, n, o, r, i), i
            }),
            (t.OrthoLHToRef = function(e, n, o, r, i) {
              var s = 2 / e,
                a = 2 / n,
                p = 2 / (r - o),
                u = -(r + o) / (r - o)
              t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 0, 0, 0, u, 1, i),
                i._updateIdentityStatus(1 === s && 1 === a && 1 === p && 0 === u)
            }),
            (t.OrthoOffCenterLH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterLHToRef = function(e, n, o, r, i, s, a) {
              var p = 2 / (n - e),
                u = 2 / (r - o),
                l = 2 / (s - i),
                c = -(s + i) / (s - i),
                h = (e + n) / (e - n),
                f = (r + o) / (o - r)
              t.FromValuesToRef(p, 0, 0, 0, 0, u, 0, 0, 0, 0, l, 0, h, f, c, 1, a), a._markAsUpdated()
            }),
            (t.OrthoOffCenterRH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterRHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterRHToRef = function(e, n, o, r, i, s, a) {
              t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), (a._m[10] *= -1)
            }),
            (t.PerspectiveLH = function(e, n, o, r) {
              var i = new t(),
                s = (2 * o) / e,
                a = (2 * o) / n,
                p = (r + o) / (r - o),
                u = (-2 * r * o) / (r - o)
              return t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 1, 0, 0, u, 0, i), i._updateIdentityStatus(!1), i
            }),
            (t.PerspectiveFovLH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovLHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovLHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = (p + a) / (p - a),
                f = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, 1, 0, 0, f, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovRH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovRHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovRHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = -(p + a) / (p - a),
                f = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, -1, 0, 0, f, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovWebVRToRef = function(t, e, n, o, r) {
              void 0 === r && (r = !1)
              var i = r ? -1 : 1,
                s = Math.tan((t.upDegrees * Math.PI) / 180),
                a = Math.tan((t.downDegrees * Math.PI) / 180),
                p = Math.tan((t.leftDegrees * Math.PI) / 180),
                u = Math.tan((t.rightDegrees * Math.PI) / 180),
                l = 2 / (p + u),
                c = 2 / (s + a),
                h = o._m
              ;(h[0] = l),
                (h[1] = h[2] = h[3] = h[4] = 0),
                (h[5] = c),
                (h[6] = h[7] = 0),
                (h[8] = (p - u) * l * 0.5),
                (h[9] = -(s - a) * c * 0.5),
                (h[10] = -n / (e - n)),
                (h[11] = 1 * i),
                (h[12] = h[13] = h[15] = 0),
                (h[14] = (-2 * n * e) / (n - e)),
                o._markAsUpdated()
            }),
            (t.GetAsMatrix2x2 = function(t) {
              return [t._m[0], t._m[1], t._m[4], t._m[5]]
            }),
            (t.GetAsMatrix3x3 = function(t) {
              return [t._m[0], t._m[1], t._m[2], t._m[4], t._m[5], t._m[6], t._m[8], t._m[9], t._m[10]]
            }),
            (t.Transpose = function(e) {
              var n = new t()
              return t.TransposeToRef(e, n), n
            }),
            (t.TransposeToRef = function(t, e) {
              var n = e._m,
                o = t._m
              ;(n[0] = o[0]),
                (n[1] = o[4]),
                (n[2] = o[8]),
                (n[3] = o[12]),
                (n[4] = o[1]),
                (n[5] = o[5]),
                (n[6] = o[9]),
                (n[7] = o[13]),
                (n[8] = o[2]),
                (n[9] = o[6]),
                (n[10] = o[10]),
                (n[11] = o[14]),
                (n[12] = o[3]),
                (n[13] = o[7]),
                (n[14] = o[11]),
                (n[15] = o[15]),
                e._updateIdentityStatus(t._isIdentity, t._isIdentityDirty)
            }),
            (t.Reflection = function(e) {
              var n = new t()
              return t.ReflectionToRef(e, n), n
            }),
            (t.ReflectionToRef = function(e, n) {
              e.normalize()
              var o = e.normal.x,
                r = e.normal.y,
                i = e.normal.z,
                s = -2 * o,
                a = -2 * r,
                p = -2 * i
              t.FromValuesToRef(
                s * o + 1,
                a * o,
                p * o,
                0,
                s * r,
                a * r + 1,
                p * r,
                0,
                s * i,
                a * i,
                p * i + 1,
                0,
                s * e.d,
                a * e.d,
                p * e.d,
                1,
                n
              )
            }),
            (t.FromXYZAxesToRef = function(e, n, o, r) {
              t.FromValuesToRef(e.x, e.y, e.z, 0, n.x, n.y, n.z, 0, o.x, o.y, o.z, 0, 0, 0, 0, 1, r)
            }),
            (t.FromQuaternionToRef = function(t, e) {
              var n = t.x * t.x,
                o = t.y * t.y,
                r = t.z * t.z,
                i = t.x * t.y,
                s = t.z * t.w,
                a = t.z * t.x,
                p = t.y * t.w,
                u = t.y * t.z,
                l = t.x * t.w
              ;(e._m[0] = 1 - 2 * (o + r)),
                (e._m[1] = 2 * (i + s)),
                (e._m[2] = 2 * (a - p)),
                (e._m[3] = 0),
                (e._m[4] = 2 * (i - s)),
                (e._m[5] = 1 - 2 * (r + n)),
                (e._m[6] = 2 * (u + l)),
                (e._m[7] = 0),
                (e._m[8] = 2 * (a + p)),
                (e._m[9] = 2 * (u - l)),
                (e._m[10] = 1 - 2 * (o + n)),
                (e._m[11] = 0),
                (e._m[12] = 0),
                (e._m[13] = 0),
                (e._m[14] = 0),
                (e._m[15] = 1),
                e._markAsUpdated()
            }),
            (t.prototype._markAsUpdated = function() {
              ;(this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = !1),
                (this._isIdentity3x2 = !1),
                (this._isIdentityDirty = !0),
                (this._isIdentity3x2Dirty = !0)
            }),
            (t.prototype.isIdentity = function() {
              if (this._isIdentityDirty) {
                this._isIdentityDirty = !1
                var t = this._m
                this._isIdentity =
                  1 === t[0] &&
                  0 === t[1] &&
                  0 === t[2] &&
                  0 === t[3] &&
                  0 === t[4] &&
                  1 === t[5] &&
                  0 === t[6] &&
                  0 === t[7] &&
                  0 === t[8] &&
                  0 === t[9] &&
                  1 === t[10] &&
                  0 === t[11] &&
                  0 === t[12] &&
                  0 === t[13] &&
                  0 === t[14] &&
                  1 === t[15]
              }
              return this._isIdentity
            }),
            (t.prototype.isIdentityAs3x2 = function() {
              return (
                this._isIdentity3x2Dirty &&
                  ((this._isIdentity3x2Dirty = !1),
                  1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15]
                    ? (this._isIdentity3x2 = !1)
                    : 0 !== this._m[1] ||
                      0 !== this._m[2] ||
                      0 !== this._m[3] ||
                      0 !== this._m[4] ||
                      0 !== this._m[6] ||
                      0 !== this._m[7] ||
                      0 !== this._m[8] ||
                      0 !== this._m[9] ||
                      0 !== this._m[10] ||
                      0 !== this._m[11] ||
                      0 !== this._m[12] ||
                      0 !== this._m[13] ||
                      0 !== this._m[14]
                    ? (this._isIdentity3x2 = !1)
                    : (this._isIdentity3x2 = !0)),
                this._isIdentity3x2
              )
            }),
            (t.prototype.determinant = function() {
              if (!0 === this._isIdentity) return 1
              var t = this._m,
                e = t[0],
                n = t[1],
                o = t[2],
                r = t[3],
                i = t[4],
                s = t[5],
                a = t[6],
                p = t[7],
                u = t[8],
                l = t[9],
                c = t[10],
                h = t[11],
                f = t[12],
                d = t[13],
                y = t[14],
                v = t[15],
                m = c * v - y * h,
                b = l * v - d * h,
                g = l * y - d * c,
                _ = u * v - f * h,
                C = u * y - c * f,
                x = u * d - f * l
              return (
                e * +(s * m - a * b + p * g) + n * -(i * m - a * _ + p * C) + o * +(i * b - s * _ + p * x) + r * -(i * g - s * C + a * x)
              )
            }),
            (t.prototype.toArray = function() {
              return this._m
            }),
            (t.prototype.asArray = function() {
              return this._m
            }),
            (t.prototype.invert = function() {
              return this.invertToRef(this), this
            }),
            (t.prototype.reset = function() {
              return t.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
            }),
            (t.prototype.add = function(e) {
              var n = new t()
              return this.addToRef(e, n), n
            }),
            (t.prototype.addToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] + t._m[n]
              return e._markAsUpdated(), this
            }),
            (t.prototype.addToSelf = function(t) {
              for (var e = 0; e < 16; e++) this._m[e] += t._m[e]
              return this._markAsUpdated(), this
            }),
            (t.prototype.invertToRef = function(e) {
              if (!0 === this._isIdentity) return t.IdentityToRef(e), this
              var n = this._m,
                o = n[0],
                r = n[1],
                i = n[2],
                s = n[3],
                a = n[4],
                p = n[5],
                u = n[6],
                l = n[7],
                c = n[8],
                h = n[9],
                f = n[10],
                d = n[11],
                y = n[12],
                v = n[13],
                m = n[14],
                b = n[15],
                g = f * b - m * d,
                _ = h * b - v * d,
                C = h * m - v * f,
                x = c * b - y * d,
                w = c * m - f * y,
                O = c * v - y * h,
                T = +(p * g - u * _ + l * C),
                R = -(a * g - u * x + l * w),
                A = +(a * _ - p * x + l * O),
                E = -(a * C - p * w + u * O),
                P = o * T + r * R + i * A + s * E
              if (0 === P) return e.copyFrom(this), this
              var z = 1 / P,
                S = u * b - m * l,
                I = p * b - v * l,
                M = p * m - v * u,
                D = a * b - y * l,
                F = a * m - y * u,
                L = a * v - y * p,
                U = u * d - f * l,
                N = p * d - h * l,
                j = p * f - h * u,
                H = a * d - c * l,
                V = a * f - c * u,
                B = a * h - c * p,
                k = -(r * g - i * _ + s * C),
                G = +(o * g - i * x + s * w),
                q = -(o * _ - r * x + s * O),
                W = +(o * C - r * w + i * O),
                Y = +(r * S - i * I + s * M),
                X = -(o * S - i * D + s * F),
                Z = +(o * I - r * D + s * L),
                Q = -(o * M - r * F + i * L),
                J = -(r * U - i * N + s * j),
                K = +(o * U - i * H + s * V),
                $ = -(o * N - r * H + s * B),
                tt = +(o * j - r * V + i * B)
              return (
                t.FromValuesToRef(
                  T * z,
                  k * z,
                  Y * z,
                  J * z,
                  R * z,
                  G * z,
                  X * z,
                  K * z,
                  A * z,
                  q * z,
                  Z * z,
                  $ * z,
                  E * z,
                  W * z,
                  Q * z,
                  tt * z,
                  e
                ),
                this
              )
            }),
            (t.prototype.addAtIndex = function(t, e) {
              return (this._m[t] += e), this._markAsUpdated(), this
            }),
            (t.prototype.multiplyAtIndex = function(t, e) {
              return (this._m[t] *= e), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslationFromFloats = function(t, e, n) {
              return (this._m[12] = t), (this._m[13] = e), (this._m[14] = n), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslation = function(t) {
              return this.setTranslationFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.getTranslation = function() {
              return new o.Vector3(this._m[12], this._m[13], this._m[14])
            }),
            (t.prototype.getTranslationToRef = function(t) {
              return (t.x = this._m[12]), (t.y = this._m[13]), (t.z = this._m[14]), this
            }),
            (t.prototype.removeRotationAndScaling = function() {
              var e = this.m
              return (
                t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e[12], e[13], e[14], e[15], this),
                this._updateIdentityStatus(0 === e[12] && 0 === e[13] && 0 === e[14] && 1 === e[15]),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              var n = new t()
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.copyFrom = function(t) {
              t.copyToArray(this._m)
              var e = t
              return this._updateIdentityStatus(e._isIdentity, e._isIdentityDirty, e._isIdentity3x2, e._isIdentity3x2Dirty), this
            }),
            (t.prototype.copyToArray = function(t, e) {
              void 0 === e && (e = 0)
              for (var n = 0; n < 16; n++) t[e + n] = this._m[n]
              return this
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return this._isIdentity
                ? (e.copyFrom(t), this)
                : t._isIdentity
                ? (e.copyFrom(this), this)
                : (this.multiplyToArray(t, e._m, 0), e._markAsUpdated(), this)
            }),
            (t.prototype.multiplyToArray = function(t, e, n) {
              var o = this._m,
                r = t.m,
                i = o[0],
                s = o[1],
                a = o[2],
                p = o[3],
                u = o[4],
                l = o[5],
                c = o[6],
                h = o[7],
                f = o[8],
                d = o[9],
                y = o[10],
                v = o[11],
                m = o[12],
                b = o[13],
                g = o[14],
                _ = o[15],
                C = r[0],
                x = r[1],
                w = r[2],
                O = r[3],
                T = r[4],
                R = r[5],
                A = r[6],
                E = r[7],
                P = r[8],
                z = r[9],
                S = r[10],
                I = r[11],
                M = r[12],
                D = r[13],
                F = r[14],
                L = r[15]
              return (
                (e[n] = i * C + s * T + a * P + p * M),
                (e[n + 1] = i * x + s * R + a * z + p * D),
                (e[n + 2] = i * w + s * A + a * S + p * F),
                (e[n + 3] = i * O + s * E + a * I + p * L),
                (e[n + 4] = u * C + l * T + c * P + h * M),
                (e[n + 5] = u * x + l * R + c * z + h * D),
                (e[n + 6] = u * w + l * A + c * S + h * F),
                (e[n + 7] = u * O + l * E + c * I + h * L),
                (e[n + 8] = f * C + d * T + y * P + v * M),
                (e[n + 9] = f * x + d * R + y * z + v * D),
                (e[n + 10] = f * w + d * A + y * S + v * F),
                (e[n + 11] = f * O + d * E + y * I + v * L),
                (e[n + 12] = m * C + b * T + g * P + _ * M),
                (e[n + 13] = m * x + b * R + g * z + _ * D),
                (e[n + 14] = m * w + b * A + g * S + _ * F),
                (e[n + 15] = m * O + b * E + g * I + _ * L),
                this
              )
            }),
            (t.prototype.equals = function(t) {
              var e = t
              if (!e) return !1
              if ((this._isIdentity || e._isIdentity) && !this._isIdentityDirty && !e._isIdentityDirty)
                return this._isIdentity && e._isIdentity
              var n = this.m,
                o = e.m
              return (
                n[0] === o[0] &&
                n[1] === o[1] &&
                n[2] === o[2] &&
                n[3] === o[3] &&
                n[4] === o[4] &&
                n[5] === o[5] &&
                n[6] === o[6] &&
                n[7] === o[7] &&
                n[8] === o[8] &&
                n[9] === o[9] &&
                n[10] === o[10] &&
                n[11] === o[11] &&
                n[12] === o[12] &&
                n[13] === o[13] &&
                n[14] === o[14] &&
                n[15] === o[15]
              )
            }),
            (t.prototype.clone = function() {
              var e = new t()
              return e.copyFrom(this), e
            }),
            (t.prototype.getClassName = function() {
              return 'Matrix'
            }),
            (t.prototype.getHashCode = function() {
              for (var t = this._m[0] || 0, e = 1; e < 16; e++) t = (397 * t) ^ (this._m[e] || 0)
              return t
            }),
            (t.prototype.decompose = function(e, n, o) {
              if (this._isIdentity) return o && o.setAll(0), e && e.setAll(1), n && n.copyFromFloats(0, 0, 0, 1), !0
              var s = this._m
              o && o.copyFromFloats(s[12], s[13], s[14])
              var a = e || i.MathTmp.Vector3[0]
              if (
                ((a.x = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2])),
                (a.y = Math.sqrt(s[4] * s[4] + s[5] * s[5] + s[6] * s[6])),
                (a.z = Math.sqrt(s[8] * s[8] + s[9] * s[9] + s[10] * s[10])),
                this.determinant() <= 0 && (a.y *= -1),
                0 === a.x || 0 === a.y || 0 === a.z)
              )
                return n && n.copyFromFloats(0, 0, 0, 1), !1
              if (n) {
                var p = 1 / a.x,
                  u = 1 / a.y,
                  l = 1 / a.z
                t.FromValuesToRef(
                  s[0] * p,
                  s[1] * p,
                  s[2] * p,
                  0,
                  s[4] * u,
                  s[5] * u,
                  s[6] * u,
                  0,
                  s[8] * l,
                  s[9] * l,
                  s[10] * l,
                  0,
                  0,
                  0,
                  0,
                  1,
                  i.MathTmp.Matrix[0]
                ),
                  r.Quaternion.FromRotationMatrixToRef(i.MathTmp.Matrix[0], n)
              }
              return !0
            }),
            (t.prototype.getRow = function(t) {
              if (t < 0 || t > 3) return null
              var e = 4 * t
              return new s.Vector4(this._m[e + 0], this._m[e + 1], this._m[e + 2], this._m[e + 3])
            }),
            (t.prototype.setRow = function(t, e) {
              return this.setRowFromFloats(t, e.x, e.y, e.z, e.w)
            }),
            (t.prototype.transpose = function() {
              return t.Transpose(this)
            }),
            (t.prototype.transposeToRef = function(e) {
              return t.TransposeToRef(this, e), this
            }),
            (t.prototype.setRowFromFloats = function(t, e, n, o, r) {
              if (t < 0 || t > 3) return this
              var i = 4 * t
              return (this._m[i + 0] = e), (this._m[i + 1] = n), (this._m[i + 2] = o), (this._m[i + 3] = r), this._markAsUpdated(), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t()
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] += this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.toNormalMatrix = function(e) {
              var n = i.MathTmp.Matrix[0]
              this.invertToRef(n), n.transposeToRef(e)
              var o = e._m
              t.FromValuesToRef(o[0], o[1], o[2], 0, o[4], o[5], o[6], 0, o[8], o[9], o[10], 0, 0, 0, 0, 1, e)
            }),
            (t.prototype.getRotationMatrix = function() {
              var e = new t()
              return this.getRotationMatrixToRef(e), e
            }),
            (t.prototype.getRotationMatrixToRef = function(e) {
              var n = i.MathTmp.Vector3[0]
              if (!this.decompose(n)) return t.IdentityToRef(e), this
              var o = this._m,
                r = 1 / n.x,
                s = 1 / n.y,
                a = 1 / n.z
              return (
                t.FromValuesToRef(
                  o[0] * r,
                  o[1] * r,
                  o[2] * r,
                  0,
                  o[4] * s,
                  o[5] * s,
                  o[6] * s,
                  0,
                  o[8] * a,
                  o[9] * a,
                  o[10] * a,
                  0,
                  0,
                  0,
                  0,
                  1,
                  e
                ),
                this
              )
            }),
            (t.prototype.toggleModelMatrixHandInPlace = function() {
              var t = this._m
              ;(t[2] *= -1), (t[6] *= -1), (t[8] *= -1), (t[9] *= -1), (t[14] *= -1), this._markAsUpdated()
            }),
            (t.prototype.toggleProjectionMatrixHandInPlace = function() {
              var t = this._m
              ;(t[8] *= -1), (t[9] *= -1), (t[10] *= -1), (t[11] *= -1), this._markAsUpdated()
            }),
            (t.prototype._updateIdentityStatus = function(e, n, o, r) {
              void 0 === n && (n = !1),
                void 0 === o && (o = !1),
                void 0 === r && (r = !0),
                (this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = e),
                (this._isIdentity3x2 = e || o),
                (this._isIdentityDirty = !this._isIdentity && n),
                (this._isIdentity3x2Dirty = !this._isIdentity3x2 && r)
            }),
            (t._updateFlagSeed = 0),
            (t._identityReadOnly = t.Identity()),
            t
          )
        })()
      e.Matrix = a
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(8),
        i = (function() {
          function t(t, e) {
            ;(this.uuid = t), (this.payload = e)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.UUIDEvent = i
      var s = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.RaycastResponse = s
      var a = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.PointerEvent = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(12),
        r = n(4),
        i = n(7),
        s = n(26),
        a = n(28),
        p = (function() {
          function t() {}
          return (
            (t.prototype.activate = function(t) {
              t.eventManager.addListener(o.RaycastResponse, this, function(t) {
                'HitFirst' === t.payload.queryType
                  ? a.PhysicsCast.instance.handleRaycastHitFirstResponse(t)
                  : 'HitAll' === t.payload.queryType && a.PhysicsCast.instance.handleRaycastHitAllResponse(t)
              }),
                'undefined' != typeof dcl && dcl.subscribe('raycastResponse')
            }),
            (t.prototype.deactivate = function() {
              'undefined' != typeof dcl && dcl.unsubscribe('raycastResponse')
            }),
            t
          )
        })()
      ;(e.RaycastEventSystem = p), (e.raycastEventSystem = new p())
      var u = (function() {
        function t() {}
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.PointerEvent, this, function(t) {
              s.Input.instance.handlePointerEvent(t.payload)
            }),
              'undefined' != typeof dcl && (dcl.subscribe('pointerUp'), dcl.subscribe('pointerDown'), dcl.subscribe('pointerEvent'))
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && (dcl.unsubscribe('pointerUp'), dcl.unsubscribe('pointerDown'), dcl.unsubscribe('pointerEvent'))
          }),
          t
        )
      })()
      ;(e.PointerEventSystem = u), (e.pointerEventSystem = new u())
      var l = (function() {
        function t() {
          this.handlerMap = {}
        }
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.UUIDEvent, this, this.handleEvent),
              t.eventManager.addListener(i.ComponentAdded, this, this.componentAdded),
              t.eventManager.addListener(i.ComponentRemoved, this, this.componentRemoved),
              'undefined' != typeof dcl && dcl.subscribe('uuidEvent')
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && dcl.unsubscribe('uuidEvent')
          }),
          (t.prototype.onAddEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && (this.handlerMap[n.uuid] = n)
            }
          }),
          (t.prototype.onRemoveEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && delete this.handlerMap[n.uuid]
            }
          }),
          (t.prototype.componentAdded = function(t) {
            if (t.entity.isAddedToEngine()) {
              var e = t.entity.components[t.componentName]
              e instanceof r.OnUUIDEvent && (this.handlerMap[e.uuid] = e)
            }
          }),
          (t.prototype.componentRemoved = function(t) {
            t.entity.isAddedToEngine() && t.component instanceof r.OnUUIDEvent && delete this.handlerMap[t.component.uuid]
          }),
          (t.prototype.handleEvent = function(t) {
            if (t.uuid in this.handlerMap) {
              var e = this.handlerMap[t.uuid]
              e && e.callback && 'call' in e.callback && e.callback(t.payload)
            }
          }),
          t
        )
      })()
      ;(e.UUIDEventSystem = l), (e.uuidEventSystem = new l())
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(2),
        r = n(6),
        i = (function() {
          function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), (this.x = t), (this.y = e)
          }
          return (
            (t.Zero = function() {
              return new t(0, 0)
            }),
            (t.One = function() {
              return new t(1, 1)
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = e.x
              r = (r = r > o.x ? o.x : r) < n.x ? n.x : r
              var i = e.y
              return new t(r, (i = (i = i > o.y ? o.y : i) < n.y ? n.y : i))
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(e.x * p + o.x * u + n.x * l + r.x * c, e.y * p + o.y * u + n.y * l + r.y * c)
            }),
            (t.Lerp = function(e, n, o) {
              return new t(e.x + (n.x - e.x) * o, e.y + (n.y - e.y) * o)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y
            }),
            (t.Normalize = function(e) {
              var n = new t(e.x, e.y)
              return n.normalize(), n
            }),
            (t.Minimize = function(e, n) {
              return new t(e.x < n.x ? e.x : n.x, e.y < n.y ? e.y : n.y)
            }),
            (t.Maximize = function(e, n) {
              return new t(e.x > n.x ? e.x : n.x, e.y > n.y ? e.y : n.y)
            }),
            (t.Transform = function(e, n) {
              var o = t.Zero()
              return t.TransformToRef(e, n, o), o
            }),
            (t.TransformToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + o[12],
                i = t.x * o[1] + t.y * o[5] + o[13]
              ;(n.x = r), (n.y = i)
            }),
            (t.PointInTriangle = function(t, e, n, o) {
              var r = 0.5 * (-n.y * o.x + e.y * (-n.x + o.x) + e.x * (n.y - o.y) + n.x * o.y),
                i = r < 0 ? -1 : 1,
                s = (e.y * o.x - e.x * o.y + (o.y - e.y) * t.x + (e.x - o.x) * t.y) * i,
                a = (e.x * n.y - e.y * n.x + (e.y - n.y) * t.x + (n.x - e.x) * t.y) * i
              return s > 0 && a > 0 && s + a < 2 * r * i
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y
              return n * n + o * o
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.DistanceOfPointFromSegment = function(e, n, o) {
              var r = t.DistanceSquared(n, o)
              if (0 === r) return t.Distance(e, n)
              var i = o.subtract(n),
                s = Math.max(0, Math.min(1, t.Dot(e.subtract(n), i) / r)),
                a = n.add(i.multiplyByFloats(s, s))
              return t.Distance(e, a)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector2'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * t) ^ (this.y || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), this
            }),
            (t.prototype.copyFromFloats = function(t, e) {
              return (this.x = t), (this.y = e), this
            }),
            (t.prototype.set = function(t, e) {
              return this.copyFromFloats(t, e)
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), this
            }),
            (t.prototype.addVector3 = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), this
            }),
            (t.prototype.multiplyByFloats = function(e, n) {
              return new t(this.x * e, this.y * n)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t(0, 0)
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return void 0 === e && (e = o.Epsilon), t && r.Scalar.WithinEpsilon(this.x, t.x, e) && r.Scalar.WithinEpsilon(this.y, t.y, e)
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              if (0 === t) return this
              var e = 1 / t
              return (this.x *= e), (this.y *= e), this
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y)
            }),
            t
          )
        })()
      e.Vector2 = i
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(7),
        s = n(0),
        a = n(8),
        p = n(31),
        u = n(1),
        l = (function() {
          function t(t) {
            ;(this.eventManager = new a.EventManager()),
              (this.systems = []),
              (this.entityLists = {}),
              (this.addedSystems = []),
              (this._entities = {}),
              (this._disposableComponents = {}),
              (this._componentGroups = {}),
              (this.simpleSystems = []),
              this.eventManager.addListener(i.ComponentAdded, this, this.componentAddedHandler),
              this.eventManager.addListener(i.ComponentRemoved, this, this.componentRemovedHandler),
              (this.rootEntity = t)
          }
          return (
            Object.defineProperty(t.prototype, 'entities', {
              get: function() {
                return this._entities
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'disposableComponents', {
              get: function() {
                return this._disposableComponents
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.addEntity = function(t) {
              var e = t.getParent()
              if (t.isAddedToEngine()) return t
              for (var n in ((t.eventManager = this.eventManager),
              (t.engine = this),
              (this._entities[t.uuid] = t),
              this.checkRequirementsAndAdd(t),
              e
                ? e.isAddedToEngine() ||
                  e === this.rootEntity ||
                  u.log('Engine: warning, added an entity with a parent not present in the engine. Parent id: ' + e.uuid)
                : t.setParent(this.rootEntity),
              (t.alive = !0),
              t.children)) {
                var o = t.children[n]
                o && (o.isAddedToEngine() || this.addEntity(o))
              }
              return t
            }),
            (t.prototype.removeEntity = function(t) {
              var e = t.uuid
              if (t.isAddedToEngine()) {
                for (var n in t.components) {
                  var o = this._componentGroups[n]
                  if (o) for (var r in o) o[r].removeEntity(t)
                  delete this.entityLists[n][e]
                }
                for (var i = 0; i < this.simpleSystems.length; i++) {
                  var s = this.simpleSystems[i]
                  s.onRemoveEntity && s.onRemoveEntity(t)
                }
                for (var i in t.children) {
                  var a = t.children[i]
                  a && this.removeEntity(a)
                }
                return (t.alive = !1), (t.eventManager = null), delete this._entities[e], !0
              }
              for (var n in (u.log('Engine: Trying to remove non existent entity from engine.'),
              t.isAddedToEngine()
                ? u.log('Engine: Entity id: ' + e)
                : u.log('Engine: Entity "' + t.uuid + '" has not been added to any engine yet.'),
              u.log("Engine: Entity's components:"),
              t.components))
                u.log(n)
              return !1
            }),
            (t.prototype.addSystem = function(t, e) {
              if ((void 0 === e && (e = 0), -1 !== this.addedSystems.indexOf(t)))
                return u.log('Engine: Trying to add a system that is already added. Aborting'), t
              if (this.systems.length > 0)
                for (var n = 0; n < this.systems.length; n++) {
                  var o = this.systems[n],
                    r = n === this.systems.length - 1
                  if (o.priority > e) {
                    this.addedSystems.push(t), this.systems.splice(n, 0, { system: t, priority: e })
                    break
                  }
                  if (r) {
                    this.addedSystems.push(t), this.systems.splice(n + 1, 0, { system: t, priority: e })
                    break
                  }
                }
              else this.addedSystems.push(t), this.systems.splice(1, 0, { system: t, priority: e })
              return this.registerSystem(t), t
            }),
            (t.prototype.removeSystem = function(t) {
              var e = this.addedSystems.indexOf(t)
              if (-1 !== e) {
                ;(t.active = !1), t.deactivate && t.deactivate(), this.addedSystems.splice(e, 1)
                for (var n = 0; n < this.systems.length; n++) {
                  this.systems[n].system === t && this.systems.splice(n, 1)
                }
                return !0
              }
              return !1
            }),
            (t.prototype.update = function(t) {
              for (var e in this.systems) {
                var n = this.systems[e].system
                if (n.active && n.update)
                  try {
                    n.update(t)
                  } catch (t) {
                    u.error(t)
                  }
              }
              return this
            }),
            (t.prototype.getEntitiesWithComponent = function(t) {
              var e = 'string' == typeof t ? t : s.getComponentName(t)
              return e in this.entityLists ? this.entityLists[e] : (this.entityLists[e] = {})
            }),
            (t.prototype.registerComponent = function(t) {
              var e = s.getComponentId(t),
                n = s.getComponentName(t),
                o = s.getComponentClassId(t)
              ;(this._disposableComponents[e] = t),
                null !== o &&
                  (this.eventManager.fireEvent(new s.DisposableComponentCreated(e, n, o)),
                  this.eventManager.fireEvent(new s.DisposableComponentUpdated(e, t)))
            }),
            (t.prototype.disposeComponent = function(t) {
              var e = s.getComponentId(t)
              return (
                delete this._disposableComponents[e] &&
                (this.eventManager.fireEvent(new s.DisposableComponentRemoved(e)), t.onDispose && t.onDispose(), !0)
              )
            }),
            (t.prototype.updateComponent = function(t) {
              this.eventManager.fireEvent(new s.DisposableComponentUpdated(s.getComponentId(t), t))
            }),
            (t.prototype.getComponentGroup = function() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
              var n = new (p.ComponentGroup.bind.apply(p.ComponentGroup, r([void 0], t)))()
              n.active = !0
              for (var o = n.requiresNames, i = 0; i < o.length; i++) {
                var s = o[i],
                  a = this._componentGroups[s]
                a || (this._componentGroups[s] = a = []), -1 === a.indexOf(n) && a.push(n)
              }
              for (var u in this._entities) this.checkRequirements(this._entities[u], n)
              return n
            }),
            (t.prototype.removeComponentGroup = function(t) {
              if (t.active) {
                t.active = !1
                for (var e = t.requiresNames, n = 0; n < e.length; n++) {
                  var o = e[n],
                    r = this._componentGroups[o]
                  if (r) {
                    var i = r.indexOf(t)
                    ;-1 !== i && r.splice(i, 1)
                  }
                }
                return !0
              }
              return !1
            }),
            (t.prototype.registerSystem = function(t) {
              ;(t.active = !0), t.activate && t.activate(this), this.simpleSystems.push(t)
            }),
            (t.prototype.checkRequirementsAndAdd = function(t) {
              if (t.isAddedToEngine()) {
                for (var e in t.components) {
                  e in this.entityLists || (this.entityLists[e] = {}), (this.entityLists[e][t.uuid] = t)
                  var n = this._componentGroups[e]
                  if (n) for (var o in n) this.checkRequirements(t, n[o])
                }
                for (var r = 0; r < this.simpleSystems.length; r++) {
                  var i = this.simpleSystems[r]
                  i.onAddEntity && i.onAddEntity(t)
                }
              }
            }),
            (t.prototype.checkRequirements = function(t, e) {
              e.meetsRequirements(t) ? e.hasEntity(t) || e.addEntity(t) : e.hasEntity(t) && e.removeEntity(t)
            }),
            (t.prototype.componentAddedHandler = function(t) {
              var e,
                n = t.entity,
                o = t.componentName
              if (n.isAddedToEngine()) {
                this.entityLists[o] ? (this.entityLists[o][n.uuid] = n) : (this.entityLists[o] = (((e = {})[n.uuid] = n), e))
                var r = this._componentGroups[o]
                if (r) for (var i in r) this.checkRequirements(n, r[i])
              }
            }),
            (t.prototype.componentRemovedHandler = function(t) {
              var e = t.entity,
                n = t.componentName
              if (e.isAddedToEngine()) {
                delete this.entityLists[n][e.uuid]
                var o = this._componentGroups[n]
                if (o) for (var r in o) this.checkRequirements(e, o[r])
              }
            }),
            t
          )
        })()
      e.Engine = l
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function(t) {
          ;(t[(t.PERCENT = 0)] = 'PERCENT'), (t[(t.PIXELS = 1)] = 'PIXELS')
        })((o = e.UIValueType || (e.UIValueType = {})))
      var r = (function() {
        function t(t) {
          if (((this.type = o.PIXELS), 'string' == typeof t)) {
            var e = t
            e.indexOf('px') > -1 ? (this.type = o.PIXELS) : e.indexOf('%') > -1 && (this.type = o.PERCENT), (this.value = parseFloat(e))
          } else this.value = t
        }
        return (
          (t.prototype.toString = function() {
            var t = this.value.toString()
            return this.type === o.PERCENT ? (t += '%') : (t += 'px'), t
          }),
          t
        )
      })()
      e.UIValue = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(0),
        r = n(7),
        i = n(1),
        s = (function() {
          function t(t) {
            ;(this.name = t),
              (this.children = {}),
              (this.eventManager = null),
              (this.alive = !1),
              (this.uuid = i.newId('E')),
              (this.components = {}),
              (this.engine = null),
              (this._parent = null)
          }
          return (
            (t.prototype.addComponentOrReplace = function(t) {
              if ('function' == typeof t)
                throw new Error('You passed a function or class as a component, an instance of component is expected')
              if ('object' != typeof t) throw new Error('You passed a ' + typeof t + ', an instance of component is expected')
              var e = o.getComponentName(t)
              if (this.components[e]) {
                if (this.components[e] === t) return t
                this.removeComponent(this.components[e], !1)
              }
              return this.addComponent(t)
            }),
            (t.prototype.hasComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'object' !== e && 'function' !== e)
                throw new Error('Entity#has(component): component is not a class, name or instance')
              if (null == t) return !1
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return !!r && ('object' === e ? r === t : 'function' !== e || r instanceof t)
            }),
            (t.prototype.getComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#get(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              if (!r) throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '"')
              if ('function' === e) {
                if (r instanceof t) return r
                throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '" (by instance)')
              }
              return r
            }),
            (t.prototype.getComponentOrNull = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#getOrNull(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return r ? ('function' === e ? (r instanceof t ? r : null) : r) : null
            }),
            (t.prototype.getComponentOrCreate = function(t) {
              if ('function' != typeof t) throw new Error('Entity#getOrCreate(component): component is not a class')
              var e = this.getComponentOrNull(t)
              return e || ((e = new t()), o.getComponentName(e), this.addComponentOrReplace(e)), e
            }),
            (t.prototype.addComponent = function(t) {
              if ('object' != typeof t)
                throw new Error(
                  'Entity#add(component): You passed a function or class as a component, an instance of component is expected'
                )
              var e = o.getComponentName(t),
                n = o.getComponentClassId(t)
              if (this.components[e])
                throw new Error('A component of type "' + e + '" is already present in entity "' + this.identifier + '"')
              ;(this.components[e] = t), this.eventManager && this.eventManager.fireEvent(new r.ComponentAdded(this, e, n))
              var i = t
              return 'function' == typeof i.addedToEntity && i.addedToEntity(this), t
            }),
            (t.prototype.removeComponent = function(t, e) {
              void 0 === e && (e = !0)
              var n = typeof t
              if ('string' !== n && 'function' !== n && 'object' !== n)
                throw new Error('Entity#remove(component): component is not a class, class or name')
              var s = 'string' === n ? t : o.getComponentName(t),
                a = this.components[s]
              if (a) {
                if ('function' === n)
                  return a instanceof t
                    ? (delete this.components[s],
                      void (
                        a &&
                        (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                        'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
                      ))
                    : void i.log(
                        'Entity Warning: Trying to remove wrong (by constructor) component "' +
                          s +
                          '" from entity "' +
                          this.identifier +
                          '"'
                      )
                delete this.components[s],
                  a &&
                    (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                    'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
              } else i.log('Entity Warning: Trying to remove inexisting component "' + s + '" from entity "' + this.identifier + '"')
            }),
            (t.prototype.isAddedToEngine = function() {
              return !(!this.engine || !(this.uuid in this.engine.entities || this.engine.rootEntity === this))
            }),
            (t.prototype.setParent = function(t) {
              var e = !t && this.engine ? this.engine.rootEntity : t,
                n = this.getParent()
              if (e === this)
                throw new Error(
                  'Failed to set parent for entity "' + this.identifier + '": An entity can\'t set itself as a its own parent'
                )
              if (e === n) return this
              var o = this.getCircularAncestor(e)
              if (o)
                throw new Error(
                  'Failed to set parent for entity "' +
                    this.identifier +
                    '": Circular parent references are not allowed (See entity "' +
                    o +
                    '")'
                )
              return (
                n && delete n.children[this.uuid],
                null !== e &&
                  '0' !== e.uuid &&
                  (!e.isAddedToEngine() && this.isAddedToEngine() && this.engine.removeEntity(this),
                  e.isAddedToEngine() && !this.isAddedToEngine() && e.engine.addEntity(this)),
                (this._parent = e || null),
                this.registerAsChild(),
                this.eventManager && this.engine && this.eventManager.fireEvent(new r.ParentChanged(this, e)),
                this
              )
            }),
            (t.prototype.getParent = function() {
              return this._parent
            }),
            Object.defineProperty(t.prototype, 'identifier', {
              get: function() {
                return this.name || this.uuid
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getCircularAncestor = function(t) {
              for (var e = this.engine ? this.engine.rootEntity : null, n = t; n && n !== e; ) {
                var o = n.getParent()
                if (o === this) return n.uuid
                n = o
              }
              return null
            }),
            (t.prototype.registerAsChild = function() {
              var t = this.getParent()
              this.uuid && t && (t.children[this.uuid] = this)
            }),
            t
          )
        })()
      e.Entity = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(1),
        r = Promise.resolve().then.bind(Promise.resolve())
      e.executeTask = function(t) {
        var e = r(t)
        return (
          (e.isComplete = !1),
          e
            .then(function(t) {
              ;(e.isComplete = !0), (e.result = t), (e.didFail = !1)
            })
            .catch(function(t) {
              ;(e.isComplete = !0), (e.error = t), (e.didFail = !0), o.error('executeTask: FAILED ' + t.toString(), t)
            }),
          e
        )
      }
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__awaiter) ||
          function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
              function s(t) {
                try {
                  p(o.next(t))
                } catch (t) {
                  i(t)
                }
              }
              function a(t) {
                try {
                  p(o.throw(t))
                } catch (t) {
                  i(t)
                }
              }
              function p(t) {
                var e
                t.done
                  ? r(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function(t) {
                          t(e)
                        })).then(s, a)
              }
              p((o = o.apply(t, e || [])).next())
            })
          },
        r =
          (this && this.__generator) ||
          function(t, e) {
            var n,
              o,
              r,
              i,
              s = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1]
                  return r[1]
                },
                trys: [],
                ops: []
              }
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function() {
                  return this
                }),
              i
            )
            function a(i) {
              return function(a) {
                return (function(i) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        o &&
                          (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) &&
                          !(r = r.call(o, i[1])).done)
                      )
                        return r
                      switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                        case 0:
                        case 1:
                          r = i
                          break
                        case 4:
                          return s.label++, { value: i[1], done: !1 }
                        case 5:
                          s.label++, (o = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = s.ops.pop()), s.trys.pop()
                          continue
                        default:
                          if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0
                            continue
                          }
                          if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                            s.label = i[1]
                            break
                          }
                          if (6 === i[0] && s.label < r[1]) {
                            ;(s.label = r[1]), (r = i)
                            break
                          }
                          if (r && s.label < r[2]) {
                            ;(s.label = r[2]), s.ops.push(i)
                            break
                          }
                          r[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      i = e.call(t, s)
                    } catch (t) {
                      ;(i = [6, t]), (o = 0)
                    } finally {
                      n = r = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, a])
              }
            }
          },
        i =
          (this && this.__values) ||
          function(t) {
            var e = 'function' == typeof Symbol && Symbol.iterator,
              n = e && t[e],
              o = 0
            if (n) return n.call(t)
            if (t && 'number' == typeof t.length)
              return {
                next: function() {
                  return t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
                }
              }
            throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(18),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === e && (e = !1), this.initalize(t, e, n, o)
          }
          return (
            (t.prototype.initalize = function(t, e, n, o) {
              return (
                void 0 === e && (e = !1), (this.mask = t), (this.skipNextObservers = e), (this.target = n), (this.currentTarget = o), this
              )
            }),
            t
          )
        })()
      e.ObserverEventState = a
      var p = function(t, e, n) {
        void 0 === n && (n = null),
          (this.callback = t),
          (this.mask = e),
          (this.scope = n),
          (this.unregisterOnNextCall = !1),
          (this._willBeUnregistered = !1)
      }
      e.Observer = p
      var u = (function() {
        function t() {
          ;(this._observers = null), (this._observables = null)
        }
        return (
          (t.Watch = function(e, n, o, r) {
            var s, a
            void 0 === o && (o = -1), void 0 === r && (r = null)
            var p = new t()
            ;(p._observers = new Array()), (p._observables = e)
            try {
              for (var u = i(e), l = u.next(); !l.done; l = u.next()) {
                var c = l.value.add(n, o, !1, r)
                c && p._observers.push(c)
              }
            } catch (t) {
              s = { error: t }
            } finally {
              try {
                l && !l.done && (a = u.return) && a.call(u)
              } finally {
                if (s) throw s.error
              }
            }
            return p
          }),
          (t.prototype.dispose = function() {
            if (this._observers && this._observables)
              for (var t = 0; t < this._observers.length; t++) this._observables[t].remove(this._observers[t])
            ;(this._observers = null), (this._observables = null)
          }),
          t
        )
      })()
      e.MultiObserver = u
      var l = (function() {
        function t(t) {
          ;(this._observers = new Array()), (this._onObserverAdded = null), (this._eventState = new a(0)), t && (this._onObserverAdded = t)
        }
        return (
          (t.prototype.add = function(t, e, n, o, r) {
            if ((void 0 === e && (e = -1), void 0 === n && (n = !1), void 0 === o && (o = null), void 0 === r && (r = !1), !t)) return null
            var i = new p(t, e, o)
            return (
              (i.unregisterOnNextCall = r),
              n ? this._observers.unshift(i) : this._observers.push(i),
              this._onObserverAdded && this._onObserverAdded(i),
              i
            )
          }),
          (t.prototype.addOnce = function(t) {
            return this.add(t, void 0, void 0, void 0, !0)
          }),
          (t.prototype.remove = function(t) {
            return !!t && -1 !== this._observers.indexOf(t) && (this._deferUnregister(t), !0)
          }),
          (t.prototype.removeCallback = function(t, e) {
            for (var n = 0; n < this._observers.length; n++)
              if (this._observers[n].callback === t && (!e || e === this._observers[n].scope))
                return this._deferUnregister(this._observers[n]), !0
            return !1
          }),
          (t.prototype.notifyObservers = function(t, e, n, o) {
            var r, s
            if ((void 0 === e && (e = -1), !this._observers.length)) return !0
            var a = this._eventState
            ;(a.mask = e), (a.target = n), (a.currentTarget = o), (a.skipNextObservers = !1), (a.lastReturnValue = t)
            try {
              for (var p = i(this._observers), u = p.next(); !u.done; u = p.next()) {
                var l = u.value
                if (
                  !l._willBeUnregistered &&
                  (l.mask & e &&
                    (l.scope ? (a.lastReturnValue = l.callback.apply(l.scope, [t, a])) : (a.lastReturnValue = l.callback(t, a)),
                    l.unregisterOnNextCall && this._deferUnregister(l)),
                  a.skipNextObservers)
                )
                  return !1
              }
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                u && !u.done && (s = p.return) && s.call(p)
              } finally {
                if (r) throw r.error
              }
            }
            return !0
          }),
          (t.prototype.notifyObserversWithPromise = function(t, e, n, o) {
            var r = this
            void 0 === e && (e = -1)
            var i = Promise.resolve(t)
            if (!this._observers.length) return i
            var s = this._eventState
            return (
              (s.mask = e),
              (s.target = n),
              (s.currentTarget = o),
              (s.skipNextObservers = !1),
              this._observers.forEach(function(n) {
                s.skipNextObservers ||
                  n._willBeUnregistered ||
                  (n.mask & e &&
                    ((i = n.scope
                      ? i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback.apply(n.scope, [t, s])
                        })
                      : i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback(t, s)
                        })),
                    n.unregisterOnNextCall && r._deferUnregister(n)))
              }),
              i.then(function() {
                return t
              })
            )
          }),
          (t.prototype.notifyObserver = function(t, e, n) {
            void 0 === n && (n = -1)
            var o = this._eventState
            ;(o.mask = n), (o.skipNextObservers = !1), t.callback(e, o)
          }),
          (t.prototype.hasObservers = function() {
            return this._observers.length > 0
          }),
          (t.prototype.clear = function() {
            ;(this._observers = new Array()), (this._onObserverAdded = null)
          }),
          (t.prototype.clone = function() {
            var e = new t()
            return (e._observers = this._observers.slice(0)), e
          }),
          (t.prototype.hasSpecificMask = function(t) {
            var e, n
            void 0 === t && (t = -1)
            try {
              for (var o = i(this._observers), r = o.next(); !r.done; r = o.next()) {
                var s = r.value
                if (s.mask & t || s.mask === t) return !0
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o)
              } finally {
                if (e) throw e.error
              }
            }
            return !1
          }),
          (t.prototype._deferUnregister = function(t) {
            var e = this
            ;(t.unregisterOnNextCall = !1),
              (t._willBeUnregistered = !0),
              s.executeTask(function() {
                return o(e, void 0, void 0, function() {
                  return r(this, function(e) {
                    return [2, this._remove(t)]
                  })
                })
              })
          }),
          (t.prototype._remove = function(t) {
            if (!t) return !1
            var e = this._observers.indexOf(t)
            return -1 !== e && (this._observers.splice(e, 1), !0)
          }),
          t
        )
      })()
      e.Observable = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(2),
        r = n(6),
        i = n(3),
        s = (function() {
          function t(t, e, n, o) {
            ;(this.x = t), (this.y = e), (this.z = n), (this.w = o)
          }
          return (
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z, e.w).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2]), (n.w = t[e + 3])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o, r) {
              ;(r.x = t), (r.y = e), (r.z = n), (r.w = o)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              e.copyFrom(t), e.normalize()
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z,
                i = t.w - e.w
              return n * n + o * o + r * r + i * i
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + t.z * o[8],
                i = t.x * o[1] + t.y * o[5] + t.z * o[9],
                s = t.x * o[2] + t.y * o[6] + t.z * o[10]
              ;(n.x = r), (n.y = i), (n.z = s), (n.w = t.w)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r, i) {
              var s = r.m
              ;(i.x = t * s[0] + e * s[4] + n * s[8]),
                (i.y = t * s[1] + e * s[5] + n * s[9]),
                (i.z = t * s[2] + e * s[6] + n * s[10]),
                (i.w = o)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), (e.z = this.z + t.z), (e.w = this.w + t.w), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z), (e.w = this.w - t.w), this
            }),
            (t.prototype.subtractFromFloats = function(e, n, o, r) {
              return new t(this.x - e, this.y - n, this.z - o, this.w - r)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o, r) {
              return (r.x = this.x - t), (r.y = this.y - e), (r.z = this.z - n), (r.w = this.w - o), this
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z, -this.w)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = o.Epsilon),
                t &&
                  r.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  r.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  r.Scalar.WithinEpsilon(this.z, t.z, e) &&
                  r.Scalar.WithinEpsilon(this.w, t.w, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n, o) {
              return this.x === t && this.y === e && this.z === n && this.w === o
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y, this.z * e.z, this.w * e.w)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), (e.z = this.z * t.z), (e.w = this.w * t.w), this
            }),
            (t.prototype.multiplyByFloats = function(e, n, o, r) {
              return new t(this.x * e, this.y * n, this.z * o, this.w * r)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z, this.w / e.w)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), (e.z = this.z / t.z), (e.w = this.w / t.w), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return (
                t.x < this.x && (this.x = t.x),
                t.y < this.y && (this.y = t.y),
                t.z < this.z && (this.z = t.z),
                t.w < this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return (
                t.x > this.x && (this.x = t.x),
                t.y > this.y && (this.y = t.y),
                t.z > this.z && (this.z = t.z),
                t.w > this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
            }),
            (t.prototype.fract = function() {
              return new t(
                this.x - Math.floor(this.x),
                this.y - Math.floor(this.y),
                this.z - Math.floor(this.z),
                this.w - Math.floor(this.w)
              )
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              return 0 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.toVector3 = function() {
              return new i.Vector3(this.x, this.y, this.z)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = this.w = t), this
            }),
            t
          )
        })()
      e.Vector4 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = (function() {
        function t(t) {
          ;(this._radians = t), this._radians < 0 && (this._radians += 2 * Math.PI)
        }
        return (
          (t.BetweenTwoPoints = function(e, n) {
            var o = n.subtract(e)
            return new t(Math.atan2(o.y, o.x))
          }),
          (t.FromRadians = function(e) {
            return new t(e)
          }),
          (t.FromDegrees = function(e) {
            return new t((e * Math.PI) / 180)
          }),
          (t.prototype.degrees = function() {
            return (180 * this._radians) / Math.PI
          }),
          (t.prototype.radians = function() {
            return this._radians
          }),
          t
        )
      })()
      e.Angle = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(21),
        r = n(14),
        i = n(2),
        s = function(t, e, n) {
          ;(this.startPoint = t), (this.midPoint = e), (this.endPoint = n)
          var s = Math.pow(e.x, 2) + Math.pow(e.y, 2),
            a = (Math.pow(t.x, 2) + Math.pow(t.y, 2) - s) / 2,
            p = (s - Math.pow(n.x, 2) - Math.pow(n.y, 2)) / 2,
            u = (t.x - e.x) * (e.y - n.y) - (e.x - n.x) * (t.y - e.y)
          ;(this.centerPoint = new r.Vector2((a * (e.y - n.y) - p * (t.y - e.y)) / u, ((t.x - e.x) * p - (e.x - n.x) * a) / u)),
            (this.radius = this.centerPoint.subtract(this.startPoint).length()),
            (this.startAngle = o.Angle.BetweenTwoPoints(this.centerPoint, this.startPoint))
          var l = this.startAngle.degrees(),
            c = o.Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
            h = o.Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees()
          c - l > 180 && (c -= 360),
            c - l < -180 && (c += 360),
            h - c > 180 && (h -= 360),
            h - c < -180 && (h += 360),
            (this.orientation = c - l < 0 ? i.Orientation.CW : i.Orientation.CCW),
            (this.angle = o.Angle.FromDegrees(this.orientation === i.Orientation.CW ? l - h : h - l))
        }
      e.Arc2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(6),
        r = n(2),
        i = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.r = t),
              (this.g = e),
              (this.b = n),
              (this.a = o)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 9 !== e.length) return new t(0, 0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16),
                i = parseInt(e.substring(7, 9), 16)
              return t.FromInts(n, o, r, i)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n), (o.a = t.a + (e.a - t.a) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0, 1)
            }),
            (t.Green = function() {
              return new t(0, 1, 0, 1)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0, 1)
            }),
            (t.White = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5, 1)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0, 1)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5, 1)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1, 1)
            }),
            (t.Clear = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.FromColor3 = function(e, n) {
              return void 0 === n && (n = 1), new t(e.r, e.g, e.b, n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromInts = function(e, n, o, r) {
              return new t(e / 255, n / 255, o / 255, r / 255)
            }),
            (t.CheckColors4 = function(t, e) {
              if (t.length === 3 * e) {
                for (var n = [], o = 0; o < t.length; o += 3) {
                  var r = (o / 3) * 4
                  ;(n[r] = t[o]), (n[r + 1] = t[o + 1]), (n[r + 2] = t[o + 2]), (n[r + 3] = 1)
                }
                return n
              }
              return t
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.r += t.r), (this.g += t.g), (this.b += t.b), (this.a += t.a), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), (t[e + 3] = this.a), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b, this.a + e.a)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b, this.a - e.a)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), (e.a = this.a - t.a), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e, this.a * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), (e.a = this.a * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), (e.a += this.a * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = o.Scalar.Clamp(this.r, t, e)),
                (n.g = o.Scalar.Clamp(this.g, t, e)),
                (n.b = o.Scalar.Clamp(this.b, t, e)),
                (n.a = o.Scalar.Clamp(this.a, t, e)),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b, this.a * e.a)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), (e.a = this.a * t.a), e
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + ' A:' + this.a + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))) ^ (this.a || 0))
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b, this.a)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), (this.a = t.a), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.r = t), (this.g = e), (this.b = n), (this.a = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0,
                r = (255 * this.a) | 0
              return '#' + o.Scalar.ToHex(t) + o.Scalar.ToHex(e) + o.Scalar.ToHex(n) + o.Scalar.ToHex(r)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToLinearSpace)),
                (t.g = Math.pow(this.g, r.ToLinearSpace)),
                (t.b = Math.pow(this.b, r.ToLinearSpace)),
                (t.a = this.a),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToGammaSpace)),
                (t.g = Math.pow(this.g, r.ToGammaSpace)),
                (t.b = Math.pow(this.b, r.ToGammaSpace)),
                (t.a = this.a),
                this
              )
            }),
            t
          )
        })()
      e.Color4 = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(3),
        r = n(11),
        i = n(9),
        s = (function() {
          function t(t, e, n, r) {
            ;(this.normal = new o.Vector3(t, e, n)), (this.d = r)
          }
          return (
            (t.FromArray = function(e) {
              return new t(e[0], e[1], e[2], e[3])
            }),
            (t.FromPoints = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return r.copyFromPoints(e, n, o), r
            }),
            (t.FromPositionAndNormal = function(e, n) {
              var o = new t(0, 0, 0, 0)
              return n.normalize(), (o.normal = n), (o.d = -(n.x * e.x + n.y * e.y + n.z * e.z)), o
            }),
            (t.SignedDistanceToPlaneFromPositionAndNormal = function(t, e, n) {
              var r = -(e.x * t.x + e.y * t.y + e.z * t.z)
              return o.Vector3.Dot(n, e) + r
            }),
            (t.prototype.asArray = function() {
              return [this.normal.x, this.normal.y, this.normal.z, this.d]
            }),
            (t.prototype.clone = function() {
              return new t(this.normal.x, this.normal.y, this.normal.z, this.d)
            }),
            (t.prototype.getClassName = function() {
              return 'Plane'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.normal.getHashCode()
              return (t = (397 * t) ^ (this.d || 0))
            }),
            (t.prototype.normalize = function() {
              var t = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z),
                e = 0
              return 0 !== t && (e = 1 / t), (this.normal.x *= e), (this.normal.y *= e), (this.normal.z *= e), (this.d *= e), this
            }),
            (t.prototype.transform = function(e) {
              var n = i.MathTmp.Matrix[0]
              r.Matrix.TransposeToRef(e, n)
              var o = n.m,
                s = this.normal.x,
                a = this.normal.y,
                p = this.normal.z,
                u = this.d
              return new t(
                s * o[0] + a * o[1] + p * o[2] + u * o[3],
                s * o[4] + a * o[5] + p * o[6] + u * o[7],
                s * o[8] + a * o[9] + p * o[10] + u * o[11],
                s * o[12] + a * o[13] + p * o[14] + u * o[15]
              )
            }),
            (t.prototype.dotCoordinate = function(t) {
              return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.d
            }),
            (t.prototype.copyFromPoints = function(t, e, n) {
              var o,
                r = e.x - t.x,
                i = e.y - t.y,
                s = e.z - t.z,
                a = n.x - t.x,
                p = n.y - t.y,
                u = n.z - t.z,
                l = i * u - s * p,
                c = s * a - r * u,
                h = r * p - i * a,
                f = Math.sqrt(l * l + c * c + h * h)
              return (
                (o = 0 !== f ? 1 / f : 0),
                (this.normal.x = l * o),
                (this.normal.y = c * o),
                (this.normal.z = h * o),
                (this.d = -(this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z)),
                this
              )
            }),
            (t.prototype.isFrontFacingTo = function(t, e) {
              return o.Vector3.Dot(this.normal, t) <= e
            }),
            (t.prototype.signedDistanceTo = function(t) {
              return o.Vector3.Dot(t, this.normal) + this.d
            }),
            t
          )
        })()
      e.Plane = s
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a = n(0),
        p = n(1),
        u = { looping: !0, speed: 1, weight: 1 },
        l = (function(t) {
          function e(e, n) {
            void 0 === n && (n = u)
            var o = t.call(this) || this
            return (
              (o.isAnimationClip = !0),
              (o.looping = u.looping),
              (o.weight = u.weight),
              (o.playing = !1),
              (o.shouldReset = !1),
              (o.speed = u.speed),
              (o.name = p.newId('AnimClip')),
              (o.clip = e),
              o.setParams(i({}, n)),
              o
            )
          }
          return (
            r(e, t),
            (e.prototype.setParams = function(t) {
              return (this.looping = void 0 !== t.looping ? t.looping : this.looping), (this.speed = t.speed || this.speed), this
            }),
            (e.prototype.toJSON = function() {
              var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
              return this.shouldReset && (this.shouldReset = !1), e
            }),
            (e.prototype.play = function() {
              this.playing = !0
            }),
            (e.prototype.pause = function() {
              this.playing = !1
            }),
            (e.prototype.reset = function() {
              this.shouldReset = !0
            }),
            (e.prototype.stop = function() {
              this.reset(), this.pause()
            }),
            s([a.ObservableComponent.readonly], e.prototype, 'clip', void 0),
            s([a.ObservableComponent.field], e.prototype, 'looping', void 0),
            s([a.ObservableComponent.field], e.prototype, 'weight', void 0),
            s([a.ObservableComponent.field], e.prototype, 'playing', void 0),
            s([a.ObservableComponent.field], e.prototype, 'shouldReset', void 0),
            s([a.ObservableComponent.field], e.prototype, 'speed', void 0),
            s([a.ObservableComponent.readonly], e.prototype, 'name', void 0),
            e
          )
        })(a.ObservableComponent)
      e.AnimationState = l
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a,
        p = n(27),
        u = n(5),
        l = n(0)
      !(function(t) {
        ;(t.POINTER = 'POINTER'), (t.PRIMARY = 'PRIMARY'), (t.SECONDARY = 'SECONDARY')
      })((a = e.ActionButton || (e.ActionButton = {})))
      var c = function(t) {
        if (((this.callback = t), !(t && 'apply' in t && 'call' in t))) throw new Error('Callback is not a function')
        y.ensureInstance()
      }
      e.PointerEventComponent = c
      var h = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerDown')], e))
      })(c)
      e.GlobalPointerDown = h
      var f = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerUp')], e))
      })(c)
      e.GlobalPointerUp = f
      var d = function(t, e) {
          ;(this.fn = t), (this.useRaycast = e)
        },
        y = (function() {
          function t() {
            var t, e
            ;(this.subscriptions =
              (((t = {})[a.POINTER] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.PRIMARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.SECONDARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              t)),
              (this.internalState =
                (((e = {})[a.POINTER] = { BUTTON_DOWN: !1 }),
                (e[a.PRIMARY] = { BUTTON_DOWN: !1 }),
                (e[a.SECONDARY] = { BUTTON_DOWN: !1 }),
                e))
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t.ensureInstance(), t._instance
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.ensureInstance = function() {
              t._instance || (t._instance = new t())
            }),
            (t.prototype.isButtonPressed = function(t) {
              return this.internalState[t]
            }),
            (t.prototype.subscribe = function(t, e, n, o) {
              var r = this
              return (
                this.subscriptions[e][t].push(new d(o, n)),
                function() {
                  return r.unsubscribe(t, e, o)
                }
              )
            }),
            (t.prototype.unsubscribe = function(t, e, n) {
              var o = this.getSubscriptionId(t, e, n)
              return o > -1 && this.subscriptions[e][t].splice(o, 1)
            }),
            (t.prototype.handlePointerEvent = function(t) {
              var e = this.getPointerById(t.buttonId),
                n = i(i({}, t), {
                  button: e,
                  direction: new u.Vector3().copyFrom(t.direction),
                  origin: new u.Vector3().copyFrom(t.origin),
                  hit: void 0
                }),
                o = t.hit
                  ? i(i({}, t.hit), {
                      hitPoint: new u.Vector3().copyFrom(t.hit.hitPoint),
                      normal: new u.Vector3().copyFrom(t.hit.normal),
                      worldNormal: new u.Vector3().copyFrom(t.hit.worldNormal)
                    })
                  : void 0
              if (t.type === p.InputEventType.DOWN) {
                this.internalState[e].BUTTON_DOWN = !0
                for (var r = 0; r < this.subscriptions[e].BUTTON_DOWN.length; r++) {
                  ;(s = this.subscriptions[e].BUTTON_DOWN[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(h)) && ((n.hit = o), c.callback(n))
              } else {
                this.internalState[e].BUTTON_DOWN = !1
                for (r = 0; r < this.subscriptions[e].BUTTON_UP.length; r++) {
                  var s
                  ;(s = this.subscriptions[e].BUTTON_UP[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                var a, c
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(f)) && ((n.hit = o), c.callback(n))
              }
            }),
            (t.prototype.getSubscriptionId = function(t, e, n) {
              for (var o = 0; o < this.subscriptions[e][t].length; o++) if (this.subscriptions[e][t][o].fn === n) return o
              return -1
            }),
            (t.prototype.getPointerById = function(t) {
              return 0 === t ? a.POINTER : 1 === t ? a.PRIMARY : a.SECONDARY
            }),
            t
          )
        })()
      e.Input = y
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function(t) {
          ;(t[(t.DOWN = 0)] = 'DOWN'), (t[(t.UP = 1)] = 'UP')
        })(e.InputEventType || (e.InputEventType = {})),
        (e.AVATAR_OBSERVABLE = 'AVATAR_OBSERVABLE')
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o,
        r = n(5),
        i = n(1),
        s = n(29)
      !(function(t) {
        ;(t.HitFirst = 'rqhf'), (t.HitAll = 'rqha')
      })(o || (o = {}))
      var a = (function() {
        function t() {
          this.queries = {}
        }
        return (
          Object.defineProperty(t, 'instance', {
            get: function() {
              return t.ensureInstance(), t._instance
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.ensureInstance = function() {
            t._instance || (t._instance = new t())
          }),
          (t.prototype.getRayFromCamera = function(t) {
            var e = s.Camera.instance.rotation,
              n = r.Matrix.Identity()
            e.toRotationMatrix(n)
            var o = r.Vector3.TransformCoordinates(r.Vector3.Forward(), n)
            return { origin: s.Camera.instance.position, direction: o, distance: t }
          }),
          (t.prototype.getRayFromPositions = function(t, e) {
            var n = e.subtract(t),
              o = n.length()
            return { origin: t, direction: n.normalize(), distance: o }
          }),
          (t.prototype.hitFirst = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitFirst + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitFirst', ray: t })
          }),
          (t.prototype.hitAll = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitAll + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitAll', ray: t })
          }),
          (t.prototype.hitFirstAvatar = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.hitAllAvatars = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.handleRaycastHitFirstResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          (t.prototype.handleRaycastHitAllResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          t
        )
      })()
      e.PhysicsCast = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(5),
        r = (function() {
          function t() {
            var t = this
            ;(this.position = new o.Vector3()),
              (this.rotation = new o.Quaternion()),
              (this.feetPosition = new o.Vector3()),
              (this.worldPosition = new o.Vector3()),
              (this.lastEventPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventWorldPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventRotation = { x: 0, y: 0, z: 0, w: 1 }),
              (this._playerHeight = 1.6),
              'undefined' != typeof dcl &&
                (dcl.subscribe('positionChanged'),
                dcl.subscribe('rotationChanged'),
                dcl.onEvent(function(e) {
                  switch (e.type) {
                    case 'positionChanged':
                      t.positionChanged(e.data)
                      break
                    case 'rotationChanged':
                      t.rotationChanged(e.data)
                  }
                })),
              Object.defineProperty(this.position, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.position, 'y', {
                get: function() {
                  return t.lastEventPosition.y
                }
              }),
              Object.defineProperty(this.position, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.worldPosition, 'x', {
                get: function() {
                  return t.lastEventWorldPosition.x
                }
              }),
              Object.defineProperty(this.worldPosition, 'y', {
                get: function() {
                  return t.lastEventWorldPosition.y
                }
              }),
              Object.defineProperty(this.worldPosition, 'z', {
                get: function() {
                  return t.lastEventWorldPosition.z
                }
              }),
              Object.defineProperty(this.feetPosition, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.feetPosition, 'y', {
                get: function() {
                  return t.lastEventPosition.y - t.playerHeight
                }
              }),
              Object.defineProperty(this.feetPosition, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.rotation, 'x', {
                get: function() {
                  return t.lastEventRotation.x
                }
              }),
              Object.defineProperty(this.rotation, 'y', {
                get: function() {
                  return t.lastEventRotation.y
                }
              }),
              Object.defineProperty(this.rotation, 'z', {
                get: function() {
                  return t.lastEventRotation.z
                }
              }),
              Object.defineProperty(this.rotation, 'w', {
                get: function() {
                  return t.lastEventRotation.w
                }
              })
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t._instance || (t._instance = new t()), t._instance
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'playerHeight', {
              get: function() {
                return this._playerHeight
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.positionChanged = function(t) {
              ;(this.lastEventPosition = t.position),
                (this.lastEventWorldPosition = t.cameraPosition),
                (this._playerHeight = t.playerHeight)
            }),
            (t.prototype.rotationChanged = function(t) {
              this.lastEventRotation = t.quaternion
            }),
            t
          )
        })()
      e.Camera = r
    },
    function(t, e, n) {
      'use strict'
      function o(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        o(n(15)),
        o(n(0)),
        o(n(17)),
        o(n(7)),
        o(n(18)),
        o(n(1)),
        o(n(19)),
        o(n(16)),
        o(n(8))
      var r = n(32),
        i = n(15),
        s = new (n(17).Entity)('scene')
      s.uuid = '0'
      var a = new i.Engine(s)
      ;(e.engine = a),
        (n(0).DisposableComponent.engine = a),
        'undefined' != typeof dcl && a.addSystem(new r.DecentralandSynchronizationSystem(dcl), 1 / 0)
      var p = n(13)
      a.addSystem(p.uuidEventSystem),
        a.addSystem(p.pointerEventSystem),
        a.addSystem(p.raycastEventSystem),
        o(n(27)),
        o(n(4)),
        o(n(13)),
        o(n(12)),
        o(n(29)),
        o(n(5)),
        o(n(25)),
        o(n(26)),
        o(n(41)),
        o(n(42)),
        o(n(43)),
        o(n(44)),
        o(n(45)),
        o(n(46)),
        o(n(28))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(0),
        r = (function() {
          function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            if (((this.entities = []), (this.active = !1), (this._requiresNames = []), !t))
              throw new Error('ComponentGroup: Could not load the requires list')
            if (!(t instanceof Array)) throw new Error('ComponentGroup: requires list is not an Array')
            Object.defineProperty(this, 'requires', {
              get: function() {
                return t.slice()
              }
            }),
              Object.defineProperty(this, 'requiresNames', {
                get: function() {
                  return this._requiresNames.slice()
                }
              })
            for (
              var n = function(e) {
                  var n = t[e],
                    i = null
                  if (!n) throw new Error('ComponentGroup: the required component at location ' + e + ' is invalid')
                  try {
                    i = o.getComponentName(n)
                  } catch (t) {
                    throw new Error(
                      'ComponentGroup: the required component at location ' +
                        e +
                        ' is not registered as a @Component. Remember to provide the class of the component, not the name'
                    )
                  }
                  if (
                    r._requiresNames.some(function(t) {
                      return t === i
                    })
                  )
                    throw new Error('ComponentGroup: the required component list has a repeated name ' + i)
                  r._requiresNames.push(i)
                },
                r = this,
                i = 0;
              i < t.length;
              i++
            )
              n(i)
          }
          return (
            (t.prototype.hasEntity = function(t) {
              return !!t.isAddedToEngine() && -1 !== this.entities.indexOf(t)
            }),
            (t.prototype.addEntity = function(t) {
              if (!t.isAddedToEngine()) throw new TypeError('ComponentGroup: Cannot add a entity that is not added to the engine')
              ;-1 === this.entities.indexOf(t) && this.entities.push(t)
            }),
            (t.prototype.removeEntity = function(t) {
              var e = this.entities.indexOf(t)
              ;-1 !== e && this.entities.splice(e, 1)
            }),
            (t.prototype.componentRemoved = function(t, e) {
              ;-1 !== this._requiresNames.indexOf(e) && this.removeEntity(t)
            }),
            (t.prototype.meetsRequirements = function(t) {
              for (var e = 0; e < this._requiresNames.length; e++) {
                if (!(this._requiresNames[e] in t.components)) return !1
              }
              return !0
            }),
            t
          )
        })()
      e.ComponentGroup = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(7),
        r = n(12),
        i = n(0),
        s = (function() {
          function t(t) {
            ;(this.dcl = t), (this.cachedComponents = {})
          }
          return (
            (t.prototype.activate = function(t) {
              var e = this
              ;(this.engine = t),
                t.eventManager.addListener(o.ComponentAdded, this, this.componentAdded),
                t.eventManager.addListener(o.ComponentRemoved, this, this.componentRemoved),
                t.eventManager.addListener(i.DisposableComponentCreated, this, this.disposableComponentCreated),
                t.eventManager.addListener(i.DisposableComponentRemoved, this, this.disposableComponentRemoved),
                t.eventManager.addListener(i.DisposableComponentUpdated, this, this.disposableComponentUpdated),
                t.eventManager.addListener(o.ParentChanged, this, this.parentChanged)
              var n = t.rootEntity.uuid
              this.dcl.addEntity(n),
                this.dcl.onUpdate(function(n) {
                  t.update(n), e.presentEntities()
                }),
                this.dcl.onEvent(function(e) {
                  var n = e.data
                  switch (e.type) {
                    case 'uuidEvent':
                      t.eventManager.fireEvent(new r.UUIDEvent(n.uuid, n.payload))
                      break
                    case 'raycastResponse':
                      'HitFirst' === n.queryType
                        ? t.eventManager.fireEvent(new r.RaycastResponse(n))
                        : 'HitAll' === n.queryType && t.eventManager.fireEvent(new r.RaycastResponse(n))
                      break
                    case 'pointerEvent':
                      t.eventManager.fireEvent(new r.PointerEvent(n.payload))
                  }
                })
            }),
            (t.prototype.onAddEntity = function(t) {
              if (t && t.isAddedToEngine()) {
                var e = t.uuid,
                  n = t.getParent()
                for (var o in (this.dcl.addEntity(e), n && this.dcl.setParent(e, n.uuid), (this.cachedComponents[e] = {}), t.components)) {
                  var r = t.components[o],
                    s = i.getComponentClassId(r)
                  if (null !== s)
                    if (i.isDisposableComponent(r)) this.dcl.attachEntityComponent(t.uuid, o, i.getComponentId(r))
                    else {
                      var a = JSON.stringify(r)
                      this.dcl.updateEntityComponent(e, o, s, a), (this.cachedComponents[e][o] = a)
                    }
                }
              }
            }),
            (t.prototype.onRemoveEntity = function(t) {
              if (t.isAddedToEngine()) {
                var e = t.uuid
                this.dcl.removeEntity(e), delete this.cachedComponents[e]
              }
            }),
            (t.prototype.presentEntities = function() {
              for (var t in this.engine.entities) {
                var e = this.engine.entities[t],
                  n = e.uuid
                for (var o in e.components) {
                  var r = e.components[o],
                    s = i.getComponentClassId(r)
                  if (null !== s && !i.isDisposableComponent(r)) {
                    var a = JSON.stringify(r)
                    this.cachedComponents[n][o] !== a &&
                      (this.dcl.updateEntityComponent(e.uuid, o, s, a), (this.cachedComponents[n][o] = a))
                  }
                }
              }
              for (var p in this.engine.disposableComponents) {
                ;(r = this.engine.disposableComponents[p]) instanceof i.ObservableComponent &&
                  r.dirty &&
                  (this.dcl.componentUpdated(p, JSON.stringify(r)), (r.dirty = !1))
              }
            }),
            (t.prototype.componentAdded = function(t) {
              if (t.entity.isAddedToEngine()) {
                var e = t.entity.components[t.componentName]
                if (i.isDisposableComponent(e)) this.dcl.attachEntityComponent(t.entity.uuid, t.componentName, i.getComponentId(e))
                else if (null !== t.classId) {
                  var n = JSON.stringify(e)
                  this.dcl.updateEntityComponent(t.entity.uuid, t.componentName, t.classId, n),
                    (this.cachedComponents[t.entity.uuid][t.componentName] = n)
                }
              }
            }),
            (t.prototype.componentRemoved = function(t) {
              t.entity.isAddedToEngine() &&
                (this.dcl.removeEntityComponent(t.entity.uuid, t.componentName),
                delete this.cachedComponents[t.entity.uuid][t.componentName])
            }),
            (t.prototype.disposableComponentCreated = function(t) {
              this.dcl.componentCreated(t.componentId, t.componentName, t.classId)
            }),
            (t.prototype.disposableComponentRemoved = function(t) {
              this.dcl.componentDisposed(t.componentId)
            }),
            (t.prototype.disposableComponentUpdated = function(t) {
              this.dcl.componentUpdated(t.componentId, JSON.stringify(t.component))
            }),
            (t.prototype.parentChanged = function(t) {
              this.dcl.setParent(t.entity.uuid, t.parent ? t.parent.uuid : '0')
            }),
            t
          )
        })()
      e.DecentralandSynchronizationSystem = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(3),
        r = (function() {
          function t() {}
          return (t.X = new o.Vector3(1, 0, 0)), (t.Y = new o.Vector3(0, 1, 0)), (t.Z = new o.Vector3(0, 0, 1)), t
        })()
      e.Axis = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = (function() {
        function t() {}
        return (
          (t.Interpolate = function(t, e, n, o, r) {
            for (var i = 1 - 3 * o + 3 * e, s = 3 * o - 6 * e, a = 3 * e, p = t, u = 0; u < 5; u++) {
              var l = p * p
              ;(p -= (i * (l * p) + s * l + a * p - t) * (1 / (3 * i * l + 2 * s * p + a))), (p = Math.min(1, Math.max(0, p)))
            }
            return 3 * Math.pow(1 - p, 2) * p * n + 3 * (1 - p) * Math.pow(p, 2) * r + Math.pow(p, 3)
          }),
          t
        )
      })()
      e.BezierCurve = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(2),
        r = n(23),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.r = t), (this.g = e), (this.b = n)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 7 !== e.length) return new t(0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16)
              return t.FromInts(n, o, r)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromInts = function(e, n, o) {
              return new t(e / 255, n / 255, o / 255)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0)
            }),
            (t.Green = function() {
              return new t(0, 1, 0)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0)
            }),
            (t.White = function() {
              return new t(1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1)
            }),
            (t.Random = function() {
              return new t(Math.random(), Math.random(), Math.random())
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), this
            }),
            (t.prototype.toColor4 = function(t) {
              return void 0 === t && (t = 1), new r.Color4(this.r, this.g, this.b, t)
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toLuminance = function() {
              return 0.3 * this.r + 0.59 * this.g + 0.11 * this.b
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.r === t.r && this.g === t.g && this.b === t.b
            }),
            (t.prototype.equalsFloats = function(t, e, n) {
              return this.r === t && this.g === e && this.b === n
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = i.Scalar.Clamp(this.r, t, e)),
                (n.g = i.Scalar.Clamp(this.g, t, e)),
                (n.b = i.Scalar.Clamp(this.b, t, e)),
                this
              )
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.r = this.r + t.r), (e.g = this.g + t.g), (e.b = this.b + t.b), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), this
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.r = t), (this.g = e), (this.b = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0
              return '#' + i.Scalar.ToHex(t) + i.Scalar.ToHex(e) + i.Scalar.ToHex(n)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToLinearSpace)),
                (t.g = Math.pow(this.g, o.ToLinearSpace)),
                (t.b = Math.pow(this.b, o.ToLinearSpace)),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToGammaSpace)),
                (t.g = Math.pow(this.g, o.ToGammaSpace)),
                (t.b = Math.pow(this.b, o.ToGammaSpace)),
                this
              )
            }),
            (t.prototype.toJSON = function() {
              return { r: this.r, g: this.g, b: this.b }
            }),
            t
          )
        })()
      e.Color3 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(3),
        r = (function() {
          function t(t) {
            ;(this._length = 0), (this._points = t), (this._length = this._computeLength(t))
          }
          return (
            (t.CreateQuadraticBezier = function(e, n, r, i) {
              i = i > 2 ? i : 3
              for (
                var s = new Array(),
                  a = function(t, e, n, o) {
                    return (1 - t) * (1 - t) * e + 2 * t * (1 - t) * n + t * t * o
                  },
                  p = 0;
                p <= i;
                p++
              )
                s.push(new o.Vector3(a(p / i, e.x, n.x, r.x), a(p / i, e.y, n.y, r.y), a(p / i, e.z, n.z, r.z)))
              return new t(s)
            }),
            (t.CreateCubicBezier = function(e, n, r, i, s) {
              s = s > 3 ? s : 4
              for (
                var a = new Array(),
                  p = function(t, e, n, o, r) {
                    return (1 - t) * (1 - t) * (1 - t) * e + 3 * t * (1 - t) * (1 - t) * n + 3 * t * t * (1 - t) * o + t * t * t * r
                  },
                  u = 0;
                u <= s;
                u++
              )
                a.push(new o.Vector3(p(u / s, e.x, n.x, r.x, i.x), p(u / s, e.y, n.y, r.y, i.y), p(u / s, e.z, n.z, r.z, i.z)))
              return new t(a)
            }),
            (t.CreateHermiteSpline = function(e, n, r, i, s) {
              for (var a = new Array(), p = 1 / s, u = 0; u <= s; u++) a.push(o.Vector3.Hermite(e, n, r, i, u * p))
              return new t(a)
            }),
            (t.CreateCatmullRomSpline = function(e, n, r) {
              var i = new Array(),
                s = 1 / n,
                a = 0
              if (r) {
                for (var p = e.length, u = 0; u < p; u++) {
                  a = 0
                  for (var l = 0; l < n; l++)
                    i.push(o.Vector3.CatmullRom(e[u % p], e[(u + 1) % p], e[(u + 2) % p], e[(u + 3) % p], a)), (a += s)
                }
                i.push(i[0])
              } else {
                var c = new Array()
                c.push(e[0].clone()), Array.prototype.push.apply(c, e), c.push(e[e.length - 1].clone())
                u = 0
                for (u = 0; u < c.length - 3; u++) {
                  a = 0
                  for (l = 0; l < n; l++) i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a)), (a += s)
                }
                u--, i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a))
              }
              return new t(i)
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.length = function() {
              return this._length
            }),
            (t.prototype.continue = function(e) {
              for (var n = this._points[this._points.length - 1], o = this._points.slice(), r = e.getPoints(), i = 1; i < r.length; i++)
                o.push(r[i].subtract(r[0]).add(n))
              return new t(o)
            }),
            (t.prototype._computeLength = function(t) {
              for (var e = 0, n = 1; n < t.length; n++) e += t[n].subtract(t[n - 1]).length()
              return e
            }),
            t
          )
        })()
      e.Curve3 = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(24),
        r = (function() {
          function t() {}
          return (
            (t.GetPlanes = function(e) {
              for (var n = [], r = 0; r < 6; r++) n.push(new o.Plane(0, 0, 0, 0))
              return t.GetPlanesToRef(e, n), n
            }),
            (t.GetNearPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[2]), (e.normal.y = n[7] + n[6]), (e.normal.z = n[11] + n[10]), (e.d = n[15] + n[14]), e.normalize()
            }),
            (t.GetFarPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[2]), (e.normal.y = n[7] - n[6]), (e.normal.z = n[11] - n[10]), (e.d = n[15] - n[14]), e.normalize()
            }),
            (t.GetLeftPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[0]), (e.normal.y = n[7] + n[4]), (e.normal.z = n[11] + n[8]), (e.d = n[15] + n[12]), e.normalize()
            }),
            (t.GetRightPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[0]), (e.normal.y = n[7] - n[4]), (e.normal.z = n[11] - n[8]), (e.d = n[15] - n[12]), e.normalize()
            }),
            (t.GetTopPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[1]), (e.normal.y = n[7] - n[5]), (e.normal.z = n[11] - n[9]), (e.d = n[15] - n[13]), e.normalize()
            }),
            (t.GetBottomPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[1]), (e.normal.y = n[7] + n[5]), (e.normal.z = n[11] + n[9]), (e.d = n[15] + n[13]), e.normalize()
            }),
            (t.GetPlanesToRef = function(e, n) {
              t.GetNearPlaneToRef(e, n[0]),
                t.GetFarPlaneToRef(e, n[1]),
                t.GetLeftPlaneToRef(e, n[2]),
                t.GetRightPlaneToRef(e, n[3]),
                t.GetTopPlaneToRef(e, n[4]),
                t.GetBottomPlaneToRef(e, n[5])
            }),
            t
          )
        })()
      e.Frustum = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(14),
        r = n(22),
        i = n(2),
        s = (function() {
          function t(t, e) {
            ;(this.closed = !1), (this._points = new Array()), (this._length = 0), this._points.push(new o.Vector2(t, e))
          }
          return (
            (t.StartingAt = function(e, n) {
              return new t(e, n)
            }),
            (t.prototype.addLineTo = function(t, e) {
              if (this.closed) return this
              var n = new o.Vector2(t, e),
                r = this._points[this._points.length - 1]
              return this._points.push(n), (this._length += n.subtract(r).length()), this
            }),
            (t.prototype.addArcTo = function(t, e, n, s, a) {
              if ((void 0 === a && (a = 36), this.closed)) return this
              var p = this._points[this._points.length - 1],
                u = new o.Vector2(t, e),
                l = new o.Vector2(n, s),
                c = new r.Arc2(p, u, l),
                h = c.angle.radians() / a
              c.orientation === i.Orientation.CW && (h *= -1)
              for (var f = c.startAngle.radians() + h, d = 0; d < a; d++) {
                var y = Math.cos(f) * c.radius + c.centerPoint.x,
                  v = Math.sin(f) * c.radius + c.centerPoint.y
                this.addLineTo(y, v), (f += h)
              }
              return this
            }),
            (t.prototype.close = function() {
              return (this.closed = !0), this
            }),
            (t.prototype.length = function() {
              var t = this._length
              if (!this.closed) {
                var e = this._points[this._points.length - 1]
                t += this._points[0].subtract(e).length()
              }
              return t
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.getPointAtLengthPosition = function(t) {
              if (t < 0 || t > 1) return o.Vector2.Zero()
              for (var e = t * this.length(), n = 0, r = 0; r < this._points.length; r++) {
                var i = (r + 1) % this._points.length,
                  s = this._points[r],
                  a = this._points[i].subtract(s),
                  p = a.length() + n
                if (e >= n && e <= p) {
                  var u = a.normalize(),
                    l = e - n
                  return new o.Vector2(s.x + u.x * l, s.y + u.y * l)
                }
                n = p
              }
              return o.Vector2.Zero()
            }),
            t
          )
        })()
      e.Path2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(3),
        r = n(2),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === e && (e = null),
              (this.path = t),
              (this._curve = new Array()),
              (this._distances = new Array()),
              (this._tangents = new Array()),
              (this._normals = new Array()),
              (this._binormals = new Array())
            for (var o = 0; o < t.length; o++) this._curve[o] = t[o].clone()
            ;(this._raw = n || !1), this._compute(e)
          }
          return (
            (t.prototype.getCurve = function() {
              return this._curve
            }),
            (t.prototype.getTangents = function() {
              return this._tangents
            }),
            (t.prototype.getNormals = function() {
              return this._normals
            }),
            (t.prototype.getBinormals = function() {
              return this._binormals
            }),
            (t.prototype.getDistances = function() {
              return this._distances
            }),
            (t.prototype.update = function(t, e) {
              void 0 === e && (e = null)
              for (var n = 0; n < t.length; n++) (this._curve[n].x = t[n].x), (this._curve[n].y = t[n].y), (this._curve[n].z = t[n].z)
              return this._compute(e), this
            }),
            (t.prototype._compute = function(t) {
              var e = this._curve.length
              ;(this._tangents[0] = this._getFirstNonNullVector(0)),
                this._raw || this._tangents[0].normalize(),
                (this._tangents[e - 1] = this._curve[e - 1].subtract(this._curve[e - 2])),
                this._raw || this._tangents[e - 1].normalize()
              var n,
                r,
                i,
                s,
                a = this._tangents[0],
                p = this._normalVector(this._curve[0], a, t)
              ;(this._normals[0] = p),
                this._raw || this._normals[0].normalize(),
                (this._binormals[0] = o.Vector3.Cross(a, this._normals[0])),
                this._raw || this._binormals[0].normalize(),
                (this._distances[0] = 0)
              for (var u = 1; u < e; u++)
                (n = this._getLastNonNullVector(u)),
                  u < e - 1 && ((r = this._getFirstNonNullVector(u)), (this._tangents[u] = n.add(r)), this._tangents[u].normalize()),
                  (this._distances[u] = this._distances[u - 1] + n.length()),
                  (i = this._tangents[u]),
                  (s = this._binormals[u - 1]),
                  (this._normals[u] = o.Vector3.Cross(s, i)),
                  this._raw || this._normals[u].normalize(),
                  (this._binormals[u] = o.Vector3.Cross(i, this._normals[u])),
                  this._raw || this._binormals[u].normalize()
            }),
            (t.prototype._getFirstNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t + e].subtract(this._curve[t]); 0 === n.length() && t + e + 1 < this._curve.length; )
                e++, (n = this._curve[t + e].subtract(this._curve[t]))
              return n
            }),
            (t.prototype._getLastNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t].subtract(this._curve[t - e]); 0 === n.length() && t > e + 1; )
                e++, (n = this._curve[t].subtract(this._curve[t - e]))
              return n
            }),
            (t.prototype._normalVector = function(t, e, n) {
              var s,
                a = e.length()
              if ((0 === a && (a = 1), null == n)) {
                var p = void 0
                ;(p = i.Scalar.WithinEpsilon(Math.abs(e.y) / a, 1, r.Epsilon)
                  ? i.Scalar.WithinEpsilon(Math.abs(e.x) / a, 1, r.Epsilon)
                    ? i.Scalar.WithinEpsilon(Math.abs(e.z) / a, 1, r.Epsilon)
                      ? o.Vector3.Zero()
                      : new o.Vector3(0, 0, 1)
                    : new o.Vector3(1, 0, 0)
                  : new o.Vector3(0, -1, 0)),
                  (s = o.Vector3.Cross(e, p))
              } else (s = o.Vector3.Cross(e, n)), o.Vector3.CrossToRef(s, e, s)
              return s.normalize(), s
            }),
            t
          )
        })()
      e.Path3D = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = (function() {
        function t(t, e) {
          ;(this.width = t), (this.height = e)
        }
        return (
          Object.defineProperty(t.prototype, 'surface', {
            get: function() {
              return this.width * this.height
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.Zero = function() {
            return new t(0, 0)
          }),
          (t.Lerp = function(e, n, o) {
            return new t(e.width + (n.width - e.width) * o, e.height + (n.height - e.height) * o)
          }),
          (t.prototype.toString = function() {
            return '{W: ' + this.width + ', H: ' + this.height + '}'
          }),
          (t.prototype.getClassName = function() {
            return 'Size'
          }),
          (t.prototype.getHashCode = function() {
            var t = this.width || 0
            return (t = (397 * t) ^ (this.height || 0))
          }),
          (t.prototype.copyFrom = function(t) {
            ;(this.width = t.width), (this.height = t.height)
          }),
          (t.prototype.copyFromFloats = function(t, e) {
            return (this.width = t), (this.height = e), this
          }),
          (t.prototype.set = function(t, e) {
            return this.copyFromFloats(t, e)
          }),
          (t.prototype.multiplyByFloats = function(e, n) {
            return new t(this.width * e, this.height * n)
          }),
          (t.prototype.clone = function() {
            return new t(this.width, this.height)
          }),
          (t.prototype.equals = function(t) {
            return !!t && this.width === t.width && this.height === t.height
          }),
          (t.prototype.add = function(e) {
            return new t(this.width + e.width, this.height + e.height)
          }),
          (t.prototype.subtract = function(e) {
            return new t(this.width - e.width, this.height - e.height)
          }),
          t
        )
      })()
      e.Size = o
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.loop = !1), (n.volume = 1), (n.url = e), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loadingCompleteEventId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
            (e = i([s.DisposableComponent('engine.AudioClip', a.CLASS_ID.AUDIO_CLIP)], e))
          )
        })(s.ObservableComponent)
      e.AudioClip = p
      var u = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.audioClip = e), (n.loop = !1), (n.volume = 1), (n.playing = !1), (n.pitch = 1), !(e instanceof p)))
            throw new Error('Trying to create AudioSource(AudioClip) with an invalid AudioClip')
          return (n.audioClipId = s.getComponentId(e)), n
        }
        return (
          r(e, t),
          (e.prototype.playOnce = function() {
            return (this.playing = !0), (this.dirty = !0), (this.data.nonce = Math.random()), this
          }),
          i([s.ObservableComponent.readonly], e.prototype, 'audioClipId', void 0),
          i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'pitch', void 0),
          (e = i([s.Component('engine.AudioSource', a.CLASS_ID.AUDIO_SOURCE)], e))
        )
      })(s.ObservableComponent)
      e.AudioSource = u
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(0),
        a = n(4)
      !(function(t) {
        ;(t.MOVE = 'MOVE'), (t.ROTATE = 'ROTATE'), (t.SCALE = 'SCALE'), (t.NONE = 'NONE')
      })(e.Gizmo || (e.Gizmo = {}))
      var p = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'gizmoEvent'), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.gizmoEvent', a.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(a.OnUUIDEvent)
      e.OnGizmoEvent = p
      var u = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.position = !0), (e.rotation = !0), (e.scale = !0), (e.cycle = !0), (e.localReference = !1), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'position', void 0),
          i([s.ObservableComponent.field], e.prototype, 'rotation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'scale', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cycle', void 0),
          i([s.ObservableComponent.field], e.prototype, 'selectedGizmo', void 0),
          i([s.ObservableComponent.field], e.prototype, 'localReference', void 0),
          (e = i([s.Component('engine.gizmos', a.CLASS_ID.GIZMOS)], e))
        )
      })(s.ObservableComponent)
      e.Gizmos = u
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(0),
        a = n(4),
        p = n(5),
        u = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.name = null),
              (n.visible = !0),
              (n.opacity = 1),
              (n.hAlign = 'center'),
              (n.vAlign = 'center'),
              (n.width = '100px'),
              (n.height = '50px'),
              (n.positionX = '0px'),
              (n.positionY = '0px'),
              (n.isPointerBlocker = !0),
              e && ((n._parent = e), (n.data.parentComponent = s.getComponentId(e))),
              n
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'parent', {
              get: function() {
                return this._parent
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'parentComponent', {
              get: function() {
                return this.data.parentComponent
              },
              enumerable: !0,
              configurable: !0
            }),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'visible', void 0),
            i([s.ObservableComponent.field], e.prototype, 'opacity', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hAlign', void 0),
            i([s.ObservableComponent.field], e.prototype, 'vAlign', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'width', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'height', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionX', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionY', void 0),
            i([s.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
            e
          )
        })(s.ObservableComponent)
      e.UIShape = u
      var l = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_FULLSCREEN_SHAPE)], e))
      })(u)
      e.UIFullScreen = l
      var c = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_WORLD_SPACE_SHAPE)], e))
      })(u)
      e.UIWorldSpace = c
      var h = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SCREEN_SPACE_SHAPE)], e))
      })(u)
      e.UICanvas = h
      var f,
        d = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.adaptWidth = !1), (e.adaptHeight = !1), (e.thickness = 0), (e.color = p.Color4.Clear()), (e.alignmentUsesSize = !0), e
          }
          return (
            r(e, t),
            i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
            i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
            i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
            i([s.ObservableComponent.field], e.prototype, 'color', void 0),
            i([s.ObservableComponent.field], e.prototype, 'alignmentUsesSize', void 0),
            (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_RECT)], e))
          )
        })(u)
      ;(e.UIContainerRect = d),
        (function(t) {
          ;(t[(t.VERTICAL = 0)] = 'VERTICAL'), (t[(t.HORIZONTAL = 1)] = 'HORIZONTAL')
        })((f = e.UIStackOrientation || (e.UIStackOrientation = {})))
      var y = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.adaptWidth = !0), (e.adaptHeight = !0), (e.color = p.Color4.Clear()), (e.stackOrientation = f.VERTICAL), (e.spacing = 0), e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'stackOrientation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'spacing', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_STACK)], e))
        )
      })(u)
      e.UIContainerStack = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.thickness = 0),
            (e.cornerRadius = 0),
            (e.color = p.Color4.White()),
            (e.background = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.text = 'button'),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cornerRadius', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'text', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_BUTTON_SHAPE)], e))
        )
      })(u)
      e.UIButton = v
      var m = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.White()),
            (e.color = p.Color4.White()),
            (e.fontSize = 10),
            (e.fontAutoSize = !1),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.lineSpacing = 0),
            (e.lineCount = 0),
            (e.adaptWidth = !1),
            (e.adaptHeight = !1),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontAutoSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineCount', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIText = m
      var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.Black()),
            (e.color = p.Color4.Clear()),
            (e.thickness = 1),
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.placeholderColor = p.Color4.White()),
            (e.placeholder = ''),
            (e.margin = 10),
            (e.maxWidth = 100),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.autoStretchWidth = !0),
            (e.background = p.Color4.Black()),
            (e.focusedBackground = p.Color4.Black()),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onTextSubmit = null),
            (e.onChanged = null),
            (e.onFocus = null),
            (e.onBlur = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholder', void 0),
          i([s.ObservableComponent.field], e.prototype, 'margin', void 0),
          i([s.ObservableComponent.field], e.prototype, 'maxWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'autoStretchWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'focusedBackground', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onTextSubmit', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onFocus', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onBlur', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_INPUT_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIInputText = b
      var g = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.sourceLeft = 0),
            (o.sourceTop = 0),
            (o.sourceWidth = 1),
            (o.sourceHeight = 1),
            (o.paddingTop = 0),
            (o.paddingRight = 0),
            (o.paddingBottom = 0),
            (o.paddingLeft = 0),
            (o.sizeInPixels = !0),
            (o.onClick = null),
            (o.source = n),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'sourceLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceHeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'source', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sizeInPixels', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onClick', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_IMAGE_SHAPE)], e))
        )
      })(u)
      e.UIImage = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.valueX = 0),
            (e.valueY = 0),
            (e.borderColor = p.Color4.White()),
            (e.backgroundColor = p.Color4.Clear()),
            (e.isHorizontal = !1),
            (e.isVertical = !1),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onChanged = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'valueX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'valueY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'borderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'backgroundColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isHorizontal', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isVertical', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SLIDER_SHAPE)], e))
        )
      })(u)
      e.UIScrollRect = _
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.useDummyModel = !1), e
          }
          var n
          return (
            r(e, t),
            (n = e),
            (e.Dummy = function() {
              var t = new n()
              return (t.useDummyModel = !0), t
            }),
            i([s.ObservableComponent.field], e.prototype, 'id', void 0),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'bodyShape', void 0),
            i([s.ObservableComponent.field], e.prototype, 'wearables', void 0),
            i([s.ObservableComponent.field], e.prototype, 'skinColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hairColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'eyeColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'useDummyModel', void 0),
            (e = n = i([s.Component('engine.avatarShape', a.CLASS_ID.AVATAR_SHAPE)], e))
          )
        })(s.ObservableComponent)
      e.AvatarShape = p
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var s = n(0),
        a = n(13),
        p = n(4),
        u = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this
            return (n.type = 'onFocus'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
            (e = i([s.Component('engine.onFocus', p.CLASS_ID.UUID_CALLBACK)], e))
          )
        })(p.OnUUIDEvent)
      e.OnFocus = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onTextSubmit'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onTextSubmit', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnTextSubmit = l
      var c = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onBlur'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onBlur', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnBlur = c
      var h = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onClick'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onClick', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnClick = h
      var f = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onEnter'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onEnter', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnEnter = f
      var d = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onChange'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onChange', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnChanged = d
      var y = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'pointerDown'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerDown', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnPointerDown = y
      var v = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'pointerUp'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerUp', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnPointerUp = v
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(19),
        r = n(1),
        i = null,
        s = null,
        a = null
      function p() {
        return a || (a = new o.Observable()), a
      }
      e.getMessageObserver = p
      var u = (function() {
        function t() {
          var t = this
          ;(this.messageQueue = []),
            (this.connected = !1),
            (this.flushing = !1),
            (function() {
              if (!s) {
                ;(s = dcl.loadModule('@decentraland/CommunicationsController')).then(function(t) {
                  i = t
                })
                var t = p()
                dcl.subscribe('comms'),
                  dcl.onEvent(function(e) {
                    'comms' === e.type && t.notifyObservers(e.data)
                  })
              }
              return s
            })().then(function(e) {
              ;(t.connected = !0), t.flush()
            })
        }
        return (
          (t.prototype.on = function(t, e) {
            return p().add(function(n) {
              try {
                var o = JSON.parse(n.message)
                o.message === t && e(o.payload, n.sender)
              } catch (n) {
                dcl.error('Error parsing comms message ' + n.message, n)
              }
            })
          }),
          (t.prototype.sendRaw = function(t) {
            this.messageQueue.push(t), this.connected && this.flush()
          }),
          (t.prototype.emit = function(t, e) {
            var n = JSON.stringify({ message: t, payload: e })
            this.sendRaw(n), p().notifyObservers({ message: n, sender: 'self' })
          }),
          (t.prototype.flush = function() {
            var t = this
            if (0 !== this.messageQueue.length && this.connected && i && !this.flushing) {
              var e = this.messageQueue.shift()
              ;(this.flushing = !0),
                dcl.callRpc(i.rpcHandle, 'send', [e]).then(
                  function(e) {
                    ;(t.flushing = !1), t.flush()
                  },
                  function(e) {
                    ;(t.flushing = !1), r.error('Error flushing MessageBus', e)
                  }
                )
            }
          }),
          t
        )
      })()
      e.MessageBus = u
    }
  ])
)

// AMD
/*! dcl-amd */;var global = self;var loader;(function(e){"use strict";var r=1;var d=2;var i=[];var f={baseUrl:""};var c={};function n(e){if(typeof e==="object"){for(var n in e){if(e.hasOwnProperty(n)){f[n]=e[n]}}}}e.config=n;function l(t,e,o){var n=arguments.length;if(n===1){o=t;e=["require","exports","module"];t=null}else if(n===2){if(f.toString.call(t)==="[object Array]"){o=e;e=t;t=null}else{o=e;e=["require","exports","module"]}}if(!t){i.push([e,o]);return}function r(){var e,n;if(c[t]){e=c[t].handlers;n=c[t].context}var r=c[t]=typeof o==="function"?o.apply(null,i.slice.call(arguments,0))||c[t]||{}:o;r.dclamd=d;r.context=n;for(var l=0,a=e?e.length:0;l<a;l++){e[l](r)}}u(e,r,t)}e.define=l;(function(e){e.amd={}})(l=e.define||(e.define={}));function u(r,l,a){var t=[];var o=0;var i=false;if(typeof r==="string"){if(c[r]&&c[r].dclamd===d){return c[r]}throw new Error(r+" has not been defined. Please include it as a dependency in "+a+"'s define()")}var f=r.length;var e=function(n){switch(r[n]){case"require":var e=function(e,n){return u(e,n,a)};e.toUrl=function(e){return p(e,a)};t[n]=e;o++;break;case"exports":t[n]=c[a]||(c[a]={});o++;break;case"module":t[n]={id:a,uri:p(a)};o++;break;case c[a]?c[a].context:"":t[n]=c[c[a].context];o++;break;default:s(r[n],function(e){t[n]=e;o++;if(o===f&&l){i=true;l.apply(null,t)}if(c[r[n]]){c[r[n]].dclamd=d}},a)}};for(var n=0;n<f;n++){e(n)}if(!i&&o===f&&l){l.apply(null,t)}}e.require=u;function t(e,n){return function(){return dcl.callRpc(e,n.name,i.slice.call(arguments,0))}}function s(e,a,n){e=n?p(e,n):e;if(c[e]){if(c[e].dclamd===r){a&&c[e].handlers.push(a)}else{a&&a(c[e])}return}else{c[e]={name:e,dclamd:r,handlers:[a],context:n}}if(e.indexOf("@")===0){if(typeof dcl!=="undefined"){dcl.loadModule(e).then(function(e){var n={};for(var r in e.methods){var l=e.methods[r];n[l.name]=t(e.rpcHandle,l)}a(n)})}}}if(typeof dcl!=="undefined"){dcl.onStart(function(){var e=[];for(var n in c){if(c[n]&&c[n].dclamd===r){e.push(c[n])}}if(e.length){throw new Error("These modules didn't load: "+e.map(function(e){return e.name}).join(", "))}})}function p(e,n){var r=false;switch(e){case"require":case"exports":case"module":return e}var l=(n||f.baseUrl).split("/");l.pop();var a=e.split("/");var t=a.length;while(--t){switch(e[0]){case"..":l.pop();case".":case"":a.shift();r=true}}return(l.length&&r?l.join("/")+"/":"")+a.join("/")}u.toUrl=p})(loader||(loader={}));global=typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof this!=="undefined"?this:null;if(!global)throw new Error("unknown global context");global.define=loader.define;global.dclamd=loader;;
// Builder generated code below
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d6dea640-b953-48b9-bfb0-d750c5f43ba1/src/item"
import Script2 from "../4519a0b9-98ef-4034-ab93-88134d1458e8/src/item"
import Script3 from "../6f54ea17-43bc-4b1e-a8c1-c9b24ff6e038/src/item"
import Script4 from "../221ca611-e905-43e8-ab98-f627c4287e74/src/item"
import Script5 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script6 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script7 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script8 from "../6ab20acc-eff6-4272-8243-c183e70a9fa1/src/item"
import Script9 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script10 from "../acbd6376-6c33-46b8-abb2-22c083540e9e/src/item"
import Script11 from "../7402ef02-fc7f-4e19-b44a-4613ee2526c5/src/item"
import Script12 from "../6d694c78-6dd5-4a4d-acee-21dbf67dd464/src/item"
import Script13 from "../0dc18897-c8fb-4673-8c39-5f7879a84379/src/item"
import Script14 from "../63cf389e-d14f-4b1a-8bd3-abccb5682255/src/item"
import Script15 from "../f7573b6c-f5d3-403c-ad74-2657adbe4a54/src/item"
import Script16 from "../dd9fb5a1-7530-4e07-ac3f-3e50572c239f/src/item"
import Script17 from "../d6043ef0-5f53-4dd0-8956-d1819c4c5046/src/item"
import Script18 from "../e948f0c2-0adc-406b-a2a4-76939071faa5/src/item"
import Script19 from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item"
import Script20 from "../18d6cc5f-e136-4e55-b1a9-14d451b7df54/src/item"
import Script21 from "../43166e90-5f00-4d06-ab07-8cefae85cbd1/src/item"
import Script22 from "../6464f5ed-d97d-49fc-9c99-4f9e2069dc71/src/item"
import Script23 from "../51ff7609-407f-481d-991b-8449ef59b390/src/item"
import Script24 from "../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item"
import Script25 from "../c37b52bf-204c-4c8f-aee5-3249129b8141/src/item"
import Script26 from "../0764e129-9fff-4158-98f0-6db8665dcf7b/src/item"
import Script27 from "../274df603-dd2b-4a32-b2a0-c4ad758cb037/src/item"
import Script28 from "../a186416e-81f1-4d0a-b0cd-a4b0077d264d/src/item"
import Script29 from "../a56ac3e0-aef8-48b9-b55b-844b3fa77056/src/item"
import Script30 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script31 from "../bb11e1cf-bed2-4ce8-be37-fe8bf953346d/src/item"
import Script32 from "../15fc8bc9-3240-460b-b767-a378b6366a5b/src/item"
import Script33 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script34 from "../6f380825-70bb-42f9-8dce-57563c7ac582/src/item"
import Script35 from "../6267507e-7b6c-49ef-be4c-cdab372e64cd/src/item"
import Script36 from "../a91b2938-246c-4178-a869-588377ad4fb8/src/item"
import Script37 from "../0b8f3b57-a7f3-48aa-a88a-41098f264566/src/item"
import Script38 from "../9d1d8101-5c1f-4a92-9603-b8e01b06bb48/src/item"
import Script39 from "../1fc96600-3d45-45f6-b364-86aa8cd15587/src/item"
import Script40 from "../1889bcdc-5608-48fa-9158-b0a56f0afa8b/src/item"
import Script41 from "../ad67f3a9-fa15-4e06-aced-a2a7716ebf85/src/item"
import Script42 from "../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const medicalBayScanner = new Entity('medicalBayScanner')
engine.addEntity(medicalBayScanner)
medicalBayScanner.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(25.167390823364258, 0.5725555419921875, 2.5886740684509277),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
medicalBayScanner.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/HealthBed_01/HealthBed_01.glb")
gltfShape.withCollisions = true
gltfShape.visible = true
medicalBayScanner.addComponentOrReplace(gltfShape)

const parrot = new Entity('parrot')
engine.addEntity(parrot)
parrot.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.45958137512207, 1.3788564205169678, 92.44359588623047),
  rotation: new Quaternion(-3.015245651020993e-15, 0.954347550868988, -1.1376707931276542e-7, 0.2986985743045807),
  scale: new Vector3(0.31338590383529663, 0.30669569969177246, 0.2997312545776367)
})
parrot.addComponentOrReplace(transform3)

const padlock = new Entity('padlock')
engine.addEntity(padlock)
padlock.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(30.271242141723633, 3.4125213623046875, 5.94852876663208),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
padlock.addComponentOrReplace(transform4)

const roundSignpost = new Entity('roundSignpost')
engine.addEntity(roundSignpost)
roundSignpost.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(37, 0.8943581581115723, 10.499999046325684),
  rotation: new Quaternion(0, 0.19509033858776093, -2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
roundSignpost.addComponentOrReplace(transform5)

const scroll = new Entity('scroll')
engine.addEntity(scroll)
scroll.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(18.578489303588867, 1.3181039094924927, 5.6318230628967285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scroll.addComponentOrReplace(transform6)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(23.60322380065918, 0.06668341159820557, 82.7798080444336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.469499349594116, 0.2816150188446045, 3.357264995574951)
})
verticalPlatform.addComponentOrReplace(transform7)

const tools2 = new Entity('tools2')
engine.addEntity(tools2)
tools2.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(23.646259307861328, 0, 82.3060302734375),
  rotation: new Quaternion(1.1079706793151126e-14, -0.28778523206710815, 3.430667661064035e-8, 0.9576950073242188),
  scale: new Vector3(1, 1, 1)
})
tools2.addComponentOrReplace(transform8)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(22.980667114257812, 27.055084228515625, 66.69906616210938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform9)

const verticalPlatform2 = new Entity('verticalPlatform2')
engine.addEntity(verticalPlatform2)
verticalPlatform2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(13.282303810119629, 0, 92.61092376708984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.767568826675415, 0.3542773723602295, 1)
})
verticalPlatform2.addComponentOrReplace(transform10)

const padlock2 = new Entity('padlock2')
engine.addEntity(padlock2)
padlock2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(13.286149024963379, 0.12463647127151489, 90.852783203125),
  rotation: new Quaternion(-0.435091495513916, -6.2712274484511e-8, -1.531069102611582e-7, 0.9003863334655762),
  scale: new Vector3(1, 1, 1)
})
padlock2.addComponentOrReplace(transform11)

const delorean2 = new Entity('delorean2')
engine.addEntity(delorean2)
delorean2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(23.093416213989258, 1.0359392166137695, 81.98521423339844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
delorean2.addComponentOrReplace(transform12)
const gltfShape2 = new GLTFShape("models/deLorean.glb")
gltfShape2.withCollisions = true
gltfShape2.visible = true
delorean2.addComponentOrReplace(gltfShape2)

const tools3 = new Entity('tools3')
engine.addEntity(tools3)
tools3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(24.314794540405273, 0, 0.7085312604904175),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.642210960388184, 1, 1.0000004768371582)
})
tools3.addComponentOrReplace(transform13)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(24.027362823486328, 0.28811168670654297, 3.3736839294433594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.454734802246094, 0.7644205093383789, 5.818234443664551)
})
triggerArea.addComponentOrReplace(transform14)

const tools4 = new Entity('tools4')
engine.addEntity(tools4)
tools4.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(18.112449645996094, 0.8199014663696289, 3.25618314743042),
  rotation: new Quaternion(-2.8107176874451805e-15, -0.6999884247779846, 8.344510860069931e-8, 0.7141542434692383),
  scale: new Vector3(2.881864070892334, 1, 1.0000001192092896)
})
tools4.addComponentOrReplace(transform15)

const padlockRomanNumber = new Entity('padlockRomanNumber')
engine.addEntity(padlockRomanNumber)
padlockRomanNumber.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(12.70130443572998, 11.645378112792969, 32.046390533447266),
  rotation: new Quaternion(0.031191909685730934, -0.7048459649085999, 0.026163475587964058, -0.7081912159919739),
  scale: new Vector3(1, 1, 1)
})
padlockRomanNumber.addComponentOrReplace(transform16)

const fantasyIronKey = new Entity('fantasyIronKey')
engine.addEntity(fantasyIronKey)
fantasyIronKey.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(3.91363787651062, 11.018381118774414, 31.142288208007812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6122877597808838, 1, 1)
})
fantasyIronKey.addComponentOrReplace(transform17)

const scifiChest = new Entity('scifiChest')
engine.addEntity(scifiChest)
scifiChest.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(3.8686866760253906, 10.033014297485352, 31.159643173217773),
  rotation: new Quaternion(-3.822235750968557e-15, -0.9683308601379395, 1.1543402678171333e-7, -0.24967074394226074),
  scale: new Vector3(1, 1, 1)
})
scifiChest.addComponentOrReplace(transform18)

const cableBox = new Entity('cableBox')
engine.addEntity(cableBox)
cableBox.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(35.611732482910156, 24.292768478393555, 50.027156829833984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cableBox.addComponentOrReplace(transform19)

const policeSiren = new Entity('policeSiren')
engine.addEntity(policeSiren)
policeSiren.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(38.78366470336914, 28.794715881347656, 59.5),
  rotation: new Quaternion(-0.6929038763046265, -0.710299551486969, 0.0903383269906044, -0.0848403126001358),
  scale: new Vector3(1, 1, 1)
})
policeSiren.addComponentOrReplace(transform20)

const verticalHallwayDoo = new Entity('verticalHallwayDoo')
engine.addEntity(verticalHallwayDoo)
verticalHallwayDoo.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(30.350826263427734, 0.5, 3.28999662399292),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0276538133621216, 1.3576879501342773, 0.9999999403953552)
})
verticalHallwayDoo.addComponentOrReplace(transform21)

const verticalHallwayDoo2 = new Entity('verticalHallwayDoo2')
engine.addEntity(verticalHallwayDoo2)
verticalHallwayDoo2.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(11.989985466003418, 9.937673568725586, 28.364540100097656),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.3272948265075684, 2.5045437812805176, 0.3235369920730591)
})
verticalHallwayDoo2.addComponentOrReplace(transform22)

const parrot2 = new Entity('parrot2')
engine.addEntity(parrot2)
parrot2.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(4.089826583862305, 12.966851234436035, 26),
  rotation: new Quaternion(-5.059347910982433e-16, 0.592933177947998, -7.068314999969516e-8, 0.8052517771720886),
  scale: new Vector3(1, 1, 1)
})
parrot2.addComponentOrReplace(transform23)

const chest = new Entity('chest')
engine.addEntity(chest)
chest.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(18.912952423095703, 1.2024743556976318, 5.630038261413574),
  rotation: new Quaternion(3.147408625297555e-15, 0.9997553825378418, -1.1918011466605094e-7, -0.02211884967982769),
  scale: new Vector3(1, 1, 1)
})
chest.addComponentOrReplace(transform24)

const silverKey = new Entity('silverKey')
engine.addEntity(silverKey)
silverKey.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(21.494192123413086, 3.3684730529785156, 1.0276908874511719),
  rotation: new Quaternion(-0.5103142857551575, 0.4894684851169586, -0.4894685447216034, 0.5103142261505127),
  scale: new Vector3(0.6874674558639526, 0.6874629259109497, 0.6874673962593079)
})
silverKey.addComponentOrReplace(transform25)

const scifiChest2 = new Entity('scifiChest2')
engine.addEntity(scifiChest2)
scifiChest2.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(45.56463623046875, 0.029072046279907227, 17.303470611572266),
  rotation: new Quaternion(-1.2483022699284058e-14, 0.8847216367721558, -1.0546703776981303e-7, -0.46611979603767395),
  scale: new Vector3(1, 1, 1)
})
scifiChest2.addComponentOrReplace(transform26)

const countdownTimer = new Entity('countdownTimer')
engine.addEntity(countdownTimer)
countdownTimer.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(45.72118377685547, 0.827304482460022, 17.06130599975586),
  rotation: new Quaternion(-4.2006680489451494e-15, 0.9589664340019226, -1.1431768598413328e-7, 0.2835196554660797),
  scale: new Vector3(0.1922590732574463, 0.1922590732574463, 0.1922590732574463)
})
countdownTimer.addComponentOrReplace(transform27)

const scroll2 = new Entity('scroll2')
engine.addEntity(scroll2)
scroll2.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(45.59000015258789, 1.0500303506851196, 17.330224990844727),
  rotation: new Quaternion(-4.2897448924146086e-16, 0.9636545777320862, -1.1487656337294538e-7, 0.26715150475502014),
  scale: new Vector3(0.76751708984375, 0.76751708984375, 0.76751708984375)
})
scroll2.addComponentOrReplace(transform28)

const fantasyChest = new Entity('fantasyChest')
engine.addEntity(fantasyChest)
fantasyChest.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(3.58115816116333, 0.9292311668395996, 16.950733184814453),
  rotation: new Quaternion(0.04232438653707504, 0.6884011626243591, 0.1615663319826126, 0.7058390974998474),
  scale: new Vector3(1, 1, 1)
})
fantasyChest.addComponentOrReplace(transform29)

const blueAccessCard = new Entity('blueAccessCard')
engine.addEntity(blueAccessCard)
blueAccessCard.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(11.24831771850586, 22.665611267089844, 24.278053283691406),
  rotation: new Quaternion(0.0014490669127553701, 0.21221823990345, 0.006672472693026066, 0.9771984219551086),
  scale: new Vector3(1, 1, 1)
})
blueAccessCard.addComponentOrReplace(transform30)

const verticalHallwayDoo3 = new Entity('verticalHallwayDoo3')
engine.addEntity(verticalHallwayDoo3)
verticalHallwayDoo3.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(31.949527740478516, 21.803070068359375, 55.17074966430664),
  rotation: new Quaternion(-1.5039369616405194e-15, 0.6742120981216431, -8.037233101276797e-8, 0.7385377883911133),
  scale: new Vector3(1.2284469604492188, 1.2284469604492188, 1.2284469604492188)
})
verticalHallwayDoo3.addComponentOrReplace(transform31)

const greenLightButton = new Entity('greenLightButton')
engine.addEntity(greenLightButton)
greenLightButton.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(31.75516128540039, 24.47511863708496, 57.095314025878906),
  rotation: new Quaternion(0, 0, 0.6851629614830017, 0.7283897995948792),
  scale: new Vector3(1, 1, 1)
})
greenLightButton.addComponentOrReplace(transform32)

const padlock3 = new Entity('padlock3')
engine.addEntity(padlock3)
padlock3.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(31.96063232421875, 24.708160400390625, 61.258689880371094),
  rotation: new Quaternion(-2.2369311738763657e-14, -0.7393417954444885, 8.813638174842708e-8, 0.6733303666114807),
  scale: new Vector3(1, 1, 1)
})
padlock3.addComponentOrReplace(transform33)

const woodenTrapdoor = new Entity('woodenTrapdoor')
engine.addEntity(woodenTrapdoor)
woodenTrapdoor.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(31.851619720458984, 24.938186645507812, 61.280460357666016),
  rotation: new Quaternion(0, 0, -0.745076060295105, 0.6669796109199524),
  scale: new Vector3(0.5273590087890625, 0.5273590087890625, 0.5273590087890625)
})
woodenTrapdoor.addComponentOrReplace(transform34)

const verticalHallwayDoo4 = new Entity('verticalHallwayDoo4')
engine.addEntity(verticalHallwayDoo4)
verticalHallwayDoo4.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(12.035346031188965, 18.770771026611328, 66.02345275878906),
  rotation: new Quaternion(2.5939208751448633e-15, -0.8335519433021545, 9.936712075386822e-8, 0.5524411797523499),
  scale: new Vector3(0.3837894797325134, 1.6353830099105835, 0.9739798307418823)
})
verticalHallwayDoo4.addComponentOrReplace(transform35)

const verticalPlatform3 = new Entity('verticalPlatform3')
engine.addEntity(verticalPlatform3)
verticalPlatform3.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(10.192737579345703, 4.0392937660217285, 20.34392547607422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalPlatform3.addComponentOrReplace(transform36)

const blueLightButton = new Entity('blueLightButton')
engine.addEntity(blueLightButton)
blueLightButton.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(11.763277053833008, 10.761086463928223, 23.827463150024414),
  rotation: new Quaternion(-0.7127454876899719, 9.626001108744273e-16, 8.49658761126193e-8, 0.7014228105545044),
  scale: new Vector3(1, 1, 1)
})
blueLightButton.addComponentOrReplace(transform37)

const blueLightCube = new Entity('blueLightCube')
engine.addEntity(blueLightCube)
blueLightCube.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(10.183971405029297, 2.490264415740967, 20.255285263061523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.3115386962890625, 4.306508541107178, 3.3115386962890625)
})
blueLightCube.addComponentOrReplace(transform38)
const gltfShape3 = new GLTFShape("models/LightCube_02/LightCube_02.glb")
gltfShape3.withCollisions = true
gltfShape3.visible = true
blueLightCube.addComponentOrReplace(gltfShape3)

const ironFenceDoor = new Entity('ironFenceDoor')
engine.addEntity(ironFenceDoor)
ironFenceDoor.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(39.28156280517578, 19.30986213684082, 55.300262451171875),
  rotation: new Quaternion(0.019351836293935776, -0.7125453948974609, -0.019668137654662132, 0.7010833621025085),
  scale: new Vector3(1.5144767761230469, 3.3568038940429688, 1.5144767761230469)
})
ironFenceDoor.addComponentOrReplace(transform39)

const chest2 = new Entity('chest2')
engine.addEntity(chest2)
chest2.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(40.370845794677734, 18.04973793029785, 59.93285369873047),
  rotation: new Quaternion(0.10512237995862961, 0.6997435688972473, -0.018535377457737923, 0.7063743472099304),
  scale: new Vector3(1, 1, 1)
})
chest2.addComponentOrReplace(transform40)

const bronzeKey = new Entity('bronzeKey')
engine.addEntity(bronzeKey)
bronzeKey.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(10.880111694335938, 10.364304542541504, 33.292938232421875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bronzeKey.addComponentOrReplace(transform41)

const scroll3 = new Entity('scroll3')
engine.addEntity(scroll3)
scroll3.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(3.498002529144287, 1.401383876800537, 17.167875289916992),
  rotation: new Quaternion(0.17398062348365784, -1.1097109005643127e-16, -2.074010296837514e-8, 0.9847490787506104),
  scale: new Vector3(1, 1, 1)
})
scroll3.addComponentOrReplace(transform42)

const scifiLever = new Entity('scifiLever')
engine.addEntity(scifiLever)
scifiLever.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(4.5582194328308105, 0.45624637603759766, 93.39949798583984),
  rotation: new Quaternion(4.18682583652112e-15, -0.9996671676635742, 1.1916960573898905e-7, 0.0257980078458786),
  scale: new Vector3(9.045783042907715, 7.317002296447754, 1.4155465364456177)
})
scifiLever.addComponentOrReplace(transform43)

const scroll4 = new Entity('scroll4')
engine.addEntity(scroll4)
scroll4.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(40.56733703613281, 18.30482292175293, 59.68006896972656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scroll4.addComponentOrReplace(transform44)

const scifiChest3 = new Entity('scifiChest3')
engine.addEntity(scifiChest3)
scifiChest3.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(11.726221084594727, 20.745040893554688, 67.67789459228516),
  rotation: new Quaternion(3.2991701684983483e-17, 0.7112667560577393, -8.478959045987722e-8, 0.7029222249984741),
  scale: new Vector3(1.0000001192092896, 2.5170962810516357, 1.0000001192092896)
})
scifiChest3.addComponentOrReplace(transform45)

const padlock4 = new Entity('padlock4')
engine.addEntity(padlock4)
padlock4.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(11.690984725952148, 23.44449806213379, 67.68820190429688),
  rotation: new Quaternion(-4.468698601972209e-16, 0.7102453112602234, -8.466783185667737e-8, 0.7039543390274048),
  scale: new Vector3(0.5786962509155273, 0.5786962509155273, 0.5786962509155273)
})
padlock4.addComponentOrReplace(transform46)

const ironFenceDoor2 = new Entity('ironFenceDoor2')
engine.addEntity(ironFenceDoor2)
ironFenceDoor2.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(42.29172134399414, 16.84286117553711, 66.60283660888672),
  rotation: new Quaternion(-0.0027468756306916475, -0.9999711513519287, -0.000019331993826199323, -0.007081008981913328),
  scale: new Vector3(1.795467734336853, 2.9921183586120605, 1)
})
ironFenceDoor2.addComponentOrReplace(transform47)

const verticalPlatform4 = new Entity('verticalPlatform4')
engine.addEntity(verticalPlatform4)
verticalPlatform4.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(43, 16.26809310913086, 82),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.8940536975860596, 1, 1.000000238418579)
})
verticalPlatform4.addComponentOrReplace(transform48)

const blueLightBlock = new Entity('blueLightBlock')
engine.addEntity(blueLightBlock)
blueLightBlock.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(43, 17.0225830078125, 84),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.648642539978027, 31.062612533569336, 1.0000007152557373)
})
blueLightBlock.addComponentOrReplace(transform49)
const gltfShape4 = new GLTFShape("models/LightBlock_02/LightBlock_02.glb")
gltfShape4.withCollisions = true
gltfShape4.visible = true
blueLightBlock.addComponentOrReplace(gltfShape4)

const fingerprintAccessC = new Entity('fingerprintAccessC')
engine.addEntity(fingerprintAccessC)
fingerprintAccessC.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(42.87109375, 21.046064376831055, 83.89118194580078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fingerprintAccessC.addComponentOrReplace(transform50)

const toggleButton = new Entity('toggleButton')
engine.addEntity(toggleButton)
toggleButton.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(40.114540100097656, 21.228832244873047, 78.56529235839844),
  rotation: new Quaternion(0.3972552418708801, 0.4757508933544159, -0.5491504669189453, 0.5606096386909485),
  scale: new Vector3(1, 1, 1)
})
toggleButton.addComponentOrReplace(transform51)

const ironFenceDoor3 = new Entity('ironFenceDoor3')
engine.addEntity(ironFenceDoor3)
ironFenceDoor3.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(2.6945924758911133, 1.5492095947265625, 81.92510223388672),
  rotation: new Quaternion(1.351483418991599e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.3956577777862549, 2.4409403800964355, 1.3495616912841797)
})
ironFenceDoor3.addComponentOrReplace(transform52)

const verticalHallwayDoo5 = new Entity('verticalHallwayDoo5')
engine.addEntity(verticalHallwayDoo5)
verticalHallwayDoo5.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(4.877723693847656, 0.5, 87.41165161132812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.1474440097808838, 1.7433596849441528, 1)
})
verticalHallwayDoo5.addComponentOrReplace(transform53)

const fantasyIronKey2 = new Entity('fantasyIronKey2')
engine.addEntity(fantasyIronKey2)
fantasyIronKey2.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(2.071815013885498, 3.600855827331543, 71.23090362548828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fantasyIronKey2.addComponentOrReplace(transform54)

const utilityHallway = new Entity('utilityHallway')
engine.addEntity(utilityHallway)
utilityHallway.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(28, 22.576339721679688, 67),
  rotation: new Quaternion(1.2979546424942714e-15, -0.6984467506408691, 8.32613196166676e-8, 0.7156620025634766),
  scale: new Vector3(0.7863434553146362, 1.3137078285217285, 2.796344757080078)
})
utilityHallway.addComponentOrReplace(transform55)
const gltfShape5 = new GLTFShape("models/Hallway_Module_StraightHalf_01.glb")
gltfShape5.withCollisions = true
gltfShape5.visible = true
utilityHallway.addComponentOrReplace(gltfShape5)

const verticalHallwayDoo6 = new Entity('verticalHallwayDoo6')
engine.addEntity(verticalHallwayDoo6)
verticalHallwayDoo6.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(19.5, 22.725648880004883, 67.21646881103516),
  rotation: new Quaternion(-3.432161355708868e-16, 0.7048267722129822, -8.402188456102522e-8, 0.7093794941902161),
  scale: new Vector3(0.6783233284950256, 0.9513833522796631, 0.2076905369758606)
})
verticalHallwayDoo6.addComponentOrReplace(transform56)

const faceAccessCard = new Entity('faceAccessCard')
engine.addEntity(faceAccessCard)
faceAccessCard.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(37, 19.956966400146484, 48.5),
  rotation: new Quaternion(-5.389182540643258e-16, -0.7830364108085632, 9.334520711945515e-8, 0.6219758987426758),
  scale: new Vector3(1, 1, 1)
})
faceAccessCard.addComponentOrReplace(transform57)

const scroll5 = new Entity('scroll5')
engine.addEntity(scroll5)
scroll5.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(35.57057189941406, 25.52734375, 50.3740119934082),
  rotation: new Quaternion(0.011193054728209972, -0.7063561081886292, 0.013110024854540825, 0.7076467871665955),
  scale: new Vector3(1, 1, 1)
})
scroll5.addComponentOrReplace(transform58)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(27.503305435180664, 22.227886199951172, 66.84259033203125),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.2965188026428223, 5.014585018157959, 2.990000009536743)
})
scoreboard.addComponentOrReplace(transform59)

const shipSWheel = new Entity('shipSWheel')
engine.addEntity(shipSWheel)
shipSWheel.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(26.972204208374023, 22.564693450927734, 68.29183959960938),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.7322750091552734, 1.7322750091552734, 1.7322750091552734)
})
shipSWheel.addComponentOrReplace(transform60)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape6 = new GLTFShape("models/GroundFloorSciFi_04/GroundFloorSciFi_04.glb")
gltfShape6.withCollisions = true
gltfShape6.visible = true
entity.addComponentOrReplace(gltfShape6)
const transform61 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform61)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape6)
const transform62 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform62)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape6)
const transform63 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform63)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape6)
const transform64 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform64)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape6)
const transform65 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform65)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape6)
const transform66 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform66)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform67)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape6)
const transform68 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform68)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape6)
const transform69 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform69)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape6)
const transform70 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform70)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape6)
const transform71 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform71)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape6)
const transform72 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform72)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape6)
const transform73 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform73)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape6)
const transform74 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform74)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape6)
const transform75 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform75)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape6)
const transform76 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform76)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape6)
const transform77 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform77)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape6)
const transform78 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform78)

const alienpulpo12 = new Entity('alienpulpo12')
engine.addEntity(alienpulpo12)
alienpulpo12.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(10.08591079711914, 22.64041519165039, 31.198986053466797),
  rotation: new Quaternion(-1.918229855277001e-16, 0.6681089997291565, -7.964479209476849e-8, 0.7440634369850159),
  scale: new Vector3(0.8153781890869141, 0.8153781890869141, 0.8153781890869141)
})
alienpulpo12.addComponentOrReplace(transform79)
const gltfShape7 = new GLTFShape("models/ALIENPULPO1.glb")
gltfShape7.withCollisions = true
gltfShape7.visible = true
alienpulpo12.addComponentOrReplace(gltfShape7)

const alienpulpo22 = new Entity('alienpulpo22')
engine.addEntity(alienpulpo22)
alienpulpo22.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(6.469967842102051, 0.65142822265625, 8.419939041137695),
  rotation: new Quaternion(-2.2640356882049995e-16, 0.3867306709289551, -4.610188497622403e-8, 0.9221927523612976),
  scale: new Vector3(0.8920860290527344, 0.8920860290527344, 0.8920860290527344)
})
alienpulpo22.addComponentOrReplace(transform80)
const gltfShape8 = new GLTFShape("models/ALIENPULPO2.glb")
gltfShape8.withCollisions = true
gltfShape8.visible = true
alienpulpo22.addComponentOrReplace(gltfShape8)

const alienpulpo32 = new Entity('alienpulpo32')
engine.addEntity(alienpulpo32)
alienpulpo32.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(23.7644100189209, 22.561235427856445, 61.34447479248047),
  rotation: new Quaternion(4.181449718404897e-15, 0.9876482486724854, -1.1773682473403824e-7, -0.15668760240077972),
  scale: new Vector3(0.6636848449707031, 0.6636848449707031, 0.6636848449707031)
})
alienpulpo32.addComponentOrReplace(transform81)
const gltfShape9 = new GLTFShape("models/ALIENPULPO3.glb")
gltfShape9.withCollisions = true
gltfShape9.visible = true
alienpulpo32.addComponentOrReplace(gltfShape9)

const vacapintadaaniblend = new Entity('vacapintadaaniblend')
engine.addEntity(vacapintadaaniblend)
vacapintadaaniblend.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(36.37805938720703, 5.472348690032959, 24.94515609741211),
  rotation: new Quaternion(0.012066186405718327, -0.8095987439155579, -0.00009789178875507787, 0.5868597030639648),
  scale: new Vector3(1, 1, 1)
})
vacapintadaaniblend.addComponentOrReplace(transform82)
const gltfShape10 = new GLTFShape("models/VACAPINTADAaniblend.glb")
gltfShape10.withCollisions = true
gltfShape10.visible = true
vacapintadaaniblend.addComponentOrReplace(gltfShape10)

const rayo2 = new Entity('rayo2')
engine.addEntity(rayo2)
rayo2.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(24.147289276123047, 21.930089950561523, 40.57963562011719),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rayo2.addComponentOrReplace(transform83)
const gltfShape11 = new GLTFShape("models/RAYO2.glb")
gltfShape11.withCollisions = true
gltfShape11.visible = true
rayo2.addComponentOrReplace(gltfShape11)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(23.5921630859375, 22.5531063079834, 61.320587158203125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.6291985511779785, 1)
})
clickArea2.addComponentOrReplace(transform84)

const clickArea3 = new Entity('clickArea3')
engine.addEntity(clickArea3)
clickArea3.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(10.041030883789062, 22.5531063079834, 29.108688354492188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2253260612487793, 3.7680258750915527, 4.940244674682617)
})
clickArea3.addComponentOrReplace(transform85)

const clickArea4 = new Entity('clickArea4')
engine.addEntity(clickArea4)
clickArea4.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(8.019379615783691, 1.0531063079833984, 8.659021377563477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.977661609649658, 3.7680258750915527, 4.940244674682617)
})
clickArea4.addComponentOrReplace(transform86)

const triggerArea3 = new Entity('triggerArea3')
engine.addEntity(triggerArea3)
triggerArea3.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(37.1479606628418, 4.399393081665039, 22.453964233398438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.0948333740234375, 4.707988739013672, 6.147582054138184)
})
triggerArea3.addComponentOrReplace(transform87)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(5.670368194580078, 1.514479637145996, 91.63583374023438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.219653129577637, 7.378727912902832, 1.0000001192092896)
})
invisibleWall.addComponentOrReplace(transform88)

const redLightButton = new Entity('redLightButton')
engine.addEntity(redLightButton)
redLightButton.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(7.714489459991455, 3.603005886077881, 89.29447174072266),
  rotation: new Quaternion(0.02668793499469757, 0.08554238080978394, 0.3697699308395386, 0.9247921705245972),
  scale: new Vector3(1, 1, 1)
})
redLightButton.addComponentOrReplace(transform89)

const shortCableAdapter = new Entity('shortCableAdapter')
engine.addEntity(shortCableAdapter)
shortCableAdapter.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(46.065345764160156, 17.551292419433594, 70.0019302368164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter.addComponentOrReplace(transform90)
const gltfShape12 = new GLTFShape("models/Cable_Adapter_01/Cable_Adapter_01.glb")
gltfShape12.withCollisions = true
gltfShape12.visible = true
shortCableAdapter.addComponentOrReplace(gltfShape12)

const shortCableAdapter2 = new Entity('shortCableAdapter2')
engine.addEntity(shortCableAdapter2)
shortCableAdapter2.setParent(_scene)
shortCableAdapter2.addComponentOrReplace(gltfShape12)
const transform91 = new Transform({
  position: new Vector3(46.065345764160156, 17.551292419433594, 71.8590087890625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter2.addComponentOrReplace(transform91)

const shortCableAdapter3 = new Entity('shortCableAdapter3')
engine.addEntity(shortCableAdapter3)
shortCableAdapter3.setParent(_scene)
shortCableAdapter3.addComponentOrReplace(gltfShape12)
const transform92 = new Transform({
  position: new Vector3(46.04143142700195, 17.551292419433594, 73.67903900146484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter3.addComponentOrReplace(transform92)

const shortCableAdapter4 = new Entity('shortCableAdapter4')
engine.addEntity(shortCableAdapter4)
shortCableAdapter4.setParent(_scene)
shortCableAdapter4.addComponentOrReplace(gltfShape12)
const transform93 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 77.38145446777344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter4.addComponentOrReplace(transform93)

const shortCableAdapter5 = new Entity('shortCableAdapter5')
engine.addEntity(shortCableAdapter5)
shortCableAdapter5.setParent(_scene)
shortCableAdapter5.addComponentOrReplace(gltfShape12)
const transform94 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 75.54192352294922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter5.addComponentOrReplace(transform94)

const shortCableAdapter6 = new Entity('shortCableAdapter6')
engine.addEntity(shortCableAdapter6)
shortCableAdapter6.setParent(_scene)
shortCableAdapter6.addComponentOrReplace(gltfShape12)
const transform95 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 79.10794067382812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter6.addComponentOrReplace(transform95)

const shortCableAdapter7 = new Entity('shortCableAdapter7')
engine.addEntity(shortCableAdapter7)
shortCableAdapter7.setParent(_scene)
shortCableAdapter7.addComponentOrReplace(gltfShape12)
const transform96 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 80.98104095458984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter7.addComponentOrReplace(transform96)

const shortCableAdapter8 = new Entity('shortCableAdapter8')
engine.addEntity(shortCableAdapter8)
shortCableAdapter8.setParent(_scene)
shortCableAdapter8.addComponentOrReplace(gltfShape12)
const transform97 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 82.8255386352539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter8.addComponentOrReplace(transform97)

const mOrangeStripedCable = new Entity('mOrangeStripedCable')
engine.addEntity(mOrangeStripedCable)
mOrangeStripedCable.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(30.63182830810547, 1.2199736833572388, 82.82587432861328),
  rotation: new Quaternion(3.1499152075467173e-15, 0.21197454631328583, -2.526933506885598e-8, -0.9772751927375793),
  scale: new Vector3(1, 1, 1)
})
mOrangeStripedCable.addComponentOrReplace(transform98)
const gltfShape13 = new GLTFShape("models/Cable_1M_Curve_01/Cable_1M_Curve_01.glb")
gltfShape13.withCollisions = true
gltfShape13.visible = true
mOrangeStripedCable.addComponentOrReplace(gltfShape13)

const mLongLoopedCable = new Entity('mLongLoopedCable')
engine.addEntity(mLongLoopedCable)
mLongLoopedCable.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(28.085575103759766, 0.1058816909790039, 74.1541519165039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mLongLoopedCable.addComponentOrReplace(transform99)
const gltfShape14 = new GLTFShape("models/Cable_2M_Curve_02/Cable_2M_Curve_02.glb")
gltfShape14.withCollisions = true
gltfShape14.visible = true
mLongLoopedCable.addComponentOrReplace(gltfShape14)

const mOrangeStripedCable2 = new Entity('mOrangeStripedCable2')
engine.addEntity(mOrangeStripedCable2)
mOrangeStripedCable2.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(30.501489639282227, 0.14853620529174805, 88.34086608886719),
  rotation: new Quaternion(7.36772749451187e-17, -0.4181172251701355, 4.984345025604853e-8, 0.9083930850028992),
  scale: new Vector3(1, 1, 1)
})
mOrangeStripedCable2.addComponentOrReplace(transform100)
const gltfShape15 = new GLTFShape("models/Cable_2M_02/Cable_2M_02.glb")
gltfShape15.withCollisions = true
gltfShape15.visible = true
mOrangeStripedCable2.addComponentOrReplace(gltfShape15)

const tweezers = new Entity('tweezers')
engine.addEntity(tweezers)
tweezers.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(30.62749671936035, 1.1712796688079834, 85.32512664794922),
  rotation: new Quaternion(-1.0687192043030839e-16, 0.8912005424499512, -1.0623937640730219e-7, -0.4536096155643463),
  scale: new Vector3(1, 1, 1)
})
tweezers.addComponentOrReplace(transform101)
const gltfShape16 = new GLTFShape("models/Tweezers_01/Tweezers_01.glb")
gltfShape16.withCollisions = true
gltfShape16.visible = true
tweezers.addComponentOrReplace(gltfShape16)

const tieredDesk = new Entity('tieredDesk')
engine.addEntity(tieredDesk)
tieredDesk.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(28.5, 0.03253209590911865, 73.42913055419922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tieredDesk.addComponentOrReplace(transform102)
const gltfShape17 = new GLTFShape("models/Desk_01/Desk_01.glb")
gltfShape17.withCollisions = true
gltfShape17.visible = true
tieredDesk.addComponentOrReplace(gltfShape17)

const octagonalTable = new Entity('octagonalTable')
engine.addEntity(octagonalTable)
octagonalTable.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(30.791793823242188, 1.2830802202224731, 78.74518585205078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2372417449951172, 0.2372417449951172, 0.2372417449951172)
})
octagonalTable.addComponentOrReplace(transform103)
const gltfShape18 = new GLTFShape("models/DigitalTable_01/DigitalTable_01.glb")
gltfShape18.withCollisions = true
gltfShape18.visible = true
octagonalTable.addComponentOrReplace(gltfShape18)

const curvedPipe = new Entity('curvedPipe')
engine.addEntity(curvedPipe)
curvedPipe.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(20.5, 0, 73.9808120727539),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
curvedPipe.addComponentOrReplace(transform104)
const gltfShape19 = new GLTFShape("models/Pipe_Curve_05M_01/Pipe_Curve_05M_01.glb")
gltfShape19.withCollisions = true
gltfShape19.visible = true
curvedPipe.addComponentOrReplace(gltfShape19)

const curvedPipe2 = new Entity('curvedPipe2')
engine.addEntity(curvedPipe2)
curvedPipe2.setParent(_scene)
curvedPipe2.addComponentOrReplace(gltfShape19)
const transform105 = new Transform({
  position: new Vector3(19.5, 0, 73.9808120727539),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
curvedPipe2.addComponentOrReplace(transform105)

const curvedPipe3 = new Entity('curvedPipe3')
engine.addEntity(curvedPipe3)
curvedPipe3.setParent(_scene)
curvedPipe3.addComponentOrReplace(gltfShape19)
const transform106 = new Transform({
  position: new Vector3(18.5, 0, 73.9808120727539),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
curvedPipe3.addComponentOrReplace(transform106)

const dreamwhisperCodex = new Entity('dreamwhisperCodex')
engine.addEntity(dreamwhisperCodex)
dreamwhisperCodex.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(30.463171005249023, 1.1891719102859497, 85.98006439208984),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
dreamwhisperCodex.addComponentOrReplace(transform107)
const gltfShape20 = new GLTFShape("models/Book_05/Book_05.glb")
gltfShape20.withCollisions = true
gltfShape20.visible = true
dreamwhisperCodex.addComponentOrReplace(gltfShape20)

const goldenOctahedronPeridot = new Entity('goldenOctahedronPeridot')
engine.addEntity(goldenOctahedronPeridot)
goldenOctahedronPeridot.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(30.71699333190918, 2, 83.63725280761719),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49434661865234375, 0.49434661865234375, 0.49434661865234375)
})
goldenOctahedronPeridot.addComponentOrReplace(transform108)
const gltfShape21 = new GLTFShape("models/Gem_07/Gem_07.glb")
gltfShape21.withCollisions = true
gltfShape21.visible = true
goldenOctahedronPeridot.addComponentOrReplace(gltfShape21)

const goldenOctahedronPeridot2 = new Entity('goldenOctahedronPeridot2')
engine.addEntity(goldenOctahedronPeridot2)
goldenOctahedronPeridot2.setParent(_scene)
goldenOctahedronPeridot2.addComponentOrReplace(gltfShape21)
const transform109 = new Transform({
  position: new Vector3(30.52064323425293, 2, 83.90122985839844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49434661865234375, 0.49434661865234375, 0.49434661865234375)
})
goldenOctahedronPeridot2.addComponentOrReplace(transform109)

const goldenOctahedronPeridot3 = new Entity('goldenOctahedronPeridot3')
engine.addEntity(goldenOctahedronPeridot3)
goldenOctahedronPeridot3.setParent(_scene)
goldenOctahedronPeridot3.addComponentOrReplace(gltfShape21)
const transform110 = new Transform({
  position: new Vector3(30.78558349609375, 2, 83.9820785522461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49434661865234375, 0.49434661865234375, 0.49434661865234375)
})
goldenOctahedronPeridot3.addComponentOrReplace(transform110)

const papyrusScroll = new Entity('papyrusScroll')
engine.addEntity(papyrusScroll)
papyrusScroll.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(30.926403045654297, 2.217773199081421, 83.3128433227539),
  rotation: new Quaternion(-1.621115578973018e-16, 0.4002441167831421, -4.771281325588461e-8, 0.9164085984230042),
  scale: new Vector3(1, 1, 1)
})
papyrusScroll.addComponentOrReplace(transform111)
const gltfShape22 = new GLTFShape("models/Papyrus_01/Papyrus_01.glb")
gltfShape22.withCollisions = true
gltfShape22.visible = true
papyrusScroll.addComponentOrReplace(gltfShape22)

const parchment = new Entity('parchment')
engine.addEntity(parchment)
parchment.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(30.70166778564453, 2.5872721672058105, 85.8226547241211),
  rotation: new Quaternion(0.6578626036643982, 0.2592618763446808, -0.25926196575164795, 0.657862663269043),
  scale: new Vector3(1, 1, 1)
})
parchment.addComponentOrReplace(transform112)
const gltfShape23 = new GLTFShape("models/Parchement_01/Parchement_01.glb")
gltfShape23.withCollisions = true
gltfShape23.visible = true
parchment.addComponentOrReplace(gltfShape23)

const pirateScroll = new Entity('pirateScroll')
engine.addEntity(pirateScroll)
pirateScroll.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(16.496665954589844, 1.047481894493103, 84.5771713256836),
  rotation: new Quaternion(0, 0, 0.14215245842933655, 0.9898448586463928),
  scale: new Vector3(1, 1, 1)
})
pirateScroll.addComponentOrReplace(transform113)
const gltfShape24 = new GLTFShape("models/Map_03/Map_03.glb")
gltfShape24.withCollisions = true
gltfShape24.visible = true
pirateScroll.addComponentOrReplace(gltfShape24)

const runeScroll = new Entity('runeScroll')
engine.addEntity(runeScroll)
runeScroll.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(15.972322463989258, 0.7992825508117676, 90.01255798339844),
  rotation: new Quaternion(1.242854884577583e-16, 0.9409821629524231, -1.1217380091466111e-7, -0.33845609426498413),
  scale: new Vector3(1, 1, 1)
})
runeScroll.addComponentOrReplace(transform114)
const gltfShape25 = new GLTFShape("models/PapyrusOpen_01/PapyrusOpen_01.glb")
gltfShape25.withCollisions = true
gltfShape25.visible = true
runeScroll.addComponentOrReplace(gltfShape25)

const treasureMap = new Entity('treasureMap')
engine.addEntity(treasureMap)
treasureMap.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(30.582122802734375, 1.2053313255310059, 82.13886260986328),
  rotation: new Quaternion(4.0928221729743966e-17, -0.8894359469413757, 1.0602901312495305e-7, -0.4570598900318146),
  scale: new Vector3(1, 1, 1)
})
treasureMap.addComponentOrReplace(transform115)
const gltfShape26 = new GLTFShape("models/Map_04/Map_04.glb")
gltfShape26.withCollisions = true
gltfShape26.visible = true
treasureMap.addComponentOrReplace(gltfShape26)

const spellScroll = new Entity('spellScroll')
engine.addEntity(spellScroll)
spellScroll.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(30.803483963012695, 0.20482230186462402, 90.20243072509766),
  rotation: new Quaternion(-7.445754713775057e-16, -0.39236870408058167, 4.6773994455406864e-8, 0.919808030128479),
  scale: new Vector3(1, 1, 1)
})
spellScroll.addComponentOrReplace(transform116)
const gltfShape27 = new GLTFShape("models/Map_01/Map_01.glb")
gltfShape27.withCollisions = true
gltfShape27.visible = true
spellScroll.addComponentOrReplace(gltfShape27)

const bumboo = new Entity('bumboo')
engine.addEntity(bumboo)
bumboo.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(30.92813491821289, 1.2070215940475464, 87.15747833251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5854225158691406, 0.5854225158691406, 0.5854225158691406)
})
bumboo.addComponentOrReplace(transform117)
const gltfShape28 = new GLTFShape("models/Bottle_03/Bottle_03.glb")
gltfShape28.withCollisions = true
gltfShape28.visible = true
bumboo.addComponentOrReplace(gltfShape28)

const computerThin = new Entity('computerThin')
engine.addEntity(computerThin)
computerThin.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(30.721315383911133, 0, 92.0452651977539),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
computerThin.addComponentOrReplace(transform118)
const gltfShape29 = new GLTFShape("models/Computer_01/Computer_01.glb")
gltfShape29.withCollisions = true
gltfShape29.visible = true
computerThin.addComponentOrReplace(gltfShape29)

const computerWide = new Entity('computerWide')
engine.addEntity(computerWide)
computerWide.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(34.5, 0.09049367904663086, 74.3517837524414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
computerWide.addComponentOrReplace(transform119)
const gltfShape30 = new GLTFShape("models/Computer_02/Computer_02.glb")
gltfShape30.withCollisions = true
gltfShape30.visible = true
computerWide.addComponentOrReplace(gltfShape30)

const curvedGreyDrawers = new Entity('curvedGreyDrawers')
engine.addEntity(curvedGreyDrawers)
curvedGreyDrawers.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(26.172805786132812, 0.07689237594604492, 74.12007904052734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedGreyDrawers.addComponentOrReplace(transform120)
const gltfShape31 = new GLTFShape("models/Drawer_03/Drawer_03.glb")
gltfShape31.withCollisions = true
gltfShape31.visible = true
curvedGreyDrawers.addComponentOrReplace(gltfShape31)

const curvedGreyDrawers2 = new Entity('curvedGreyDrawers2')
engine.addEntity(curvedGreyDrawers2)
curvedGreyDrawers2.setParent(_scene)
curvedGreyDrawers2.addComponentOrReplace(gltfShape31)
const transform121 = new Transform({
  position: new Vector3(25.014368057250977, 0.07689237594604492, 74.12898254394531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedGreyDrawers2.addComponentOrReplace(transform121)

const curvedGreyDrawers3 = new Entity('curvedGreyDrawers3')
engine.addEntity(curvedGreyDrawers3)
curvedGreyDrawers3.setParent(_scene)
curvedGreyDrawers3.addComponentOrReplace(gltfShape31)
const transform122 = new Transform({
  position: new Vector3(24.014368057250977, 0.07689237594604492, 74.12898254394531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedGreyDrawers3.addComponentOrReplace(transform122)

const gin = new Entity('gin')
engine.addEntity(gin)
gin.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(21.015554428100586, 0.9672110080718994, 92.79570770263672),
  rotation: new Quaternion(8.728150208061215e-15, 0.9930129647254944, -1.1837634872335911e-7, -0.11800575256347656),
  scale: new Vector3(1, 1, 1)
})
gin.addComponentOrReplace(transform123)
const gltfShape32 = new GLTFShape("models/Bottle_08/Bottle_08.glb")
gltfShape32.withCollisions = true
gltfShape32.visible = true
gin.addComponentOrReplace(gltfShape32)

const greyDrawers = new Entity('greyDrawers')
engine.addEntity(greyDrawers)
greyDrawers.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(23, 0, 74),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greyDrawers.addComponentOrReplace(transform124)
const gltfShape33 = new GLTFShape("models/Drawer_01/Drawer_01.glb")
gltfShape33.withCollisions = true
gltfShape33.visible = true
greyDrawers.addComponentOrReplace(gltfShape33)

const infoDisc = new Entity('infoDisc')
engine.addEntity(infoDisc)
infoDisc.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(22.01648712158203, 0.9522666931152344, 92.6396484375),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
infoDisc.addComponentOrReplace(transform125)
const gltfShape34 = new GLTFShape("models/DiscSciFi_01/DiscSciFi_01.glb")
gltfShape34.withCollisions = true
gltfShape34.visible = true
infoDisc.addComponentOrReplace(gltfShape34)

const monitorScreen = new Entity('monitorScreen')
engine.addEntity(monitorScreen)
monitorScreen.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(23.140466690063477, 0.968134880065918, 92.70137023925781),
  rotation: new Quaternion(-5.001426739258e-15, -0.9807853698730469, 1.1691871293351142e-7, 0.19509033858776093),
  scale: new Vector3(1, 1, 1)
})
monitorScreen.addComponentOrReplace(transform126)
const gltfShape35 = new GLTFShape("models/Monitor_01/Monitor_01.glb")
gltfShape35.withCollisions = true
gltfShape35.visible = true
monitorScreen.addComponentOrReplace(gltfShape35)

const paintBucket = new Entity('paintBucket')
engine.addEntity(paintBucket)
paintBucket.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(19.120792388916016, 0.10424423217773438, 91.18781280517578),
  rotation: new Quaternion(2.2702619097629106e-16, -0.419666051864624, 5.002808478593579e-8, 0.9076786041259766),
  scale: new Vector3(0.5706233978271484, 0.5706233978271484, 0.5706233978271484)
})
paintBucket.addComponentOrReplace(transform127)
const gltfShape36 = new GLTFShape("models/PaintBucket_01/PaintBucket_01.glb")
gltfShape36.withCollisions = true
gltfShape36.visible = true
paintBucket.addComponentOrReplace(gltfShape36)

const woodenWheel = new Entity('woodenWheel')
engine.addEntity(woodenWheel)
woodenWheel.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(19.692501068115234, 0.23780393600463867, 86.5),
  rotation: new Quaternion(-0.16221170127391815, 0.5448951721191406, 0.10838636010885239, 0.8154931664466858),
  scale: new Vector3(1, 1, 1)
})
woodenWheel.addComponentOrReplace(transform128)
const gltfShape37 = new GLTFShape("models/Wheel_01/Wheel_01.glb")
gltfShape37.withCollisions = true
gltfShape37.visible = true
woodenWheel.addComponentOrReplace(gltfShape37)

const streetClock = new Entity('streetClock')
engine.addEntity(streetClock)
streetClock.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(13.5, 0.06325888633728027, 74.18231201171875),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(1, 1, 1)
})
streetClock.addComponentOrReplace(transform129)
const gltfShape38 = new GLTFShape("models/StreetClock_01/StreetClock_01.glb")
gltfShape38.withCollisions = true
gltfShape38.visible = true
streetClock.addComponentOrReplace(gltfShape38)

const countdownTimer2 = new Entity('countdownTimer2')
engine.addEntity(countdownTimer2)
countdownTimer2.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(15.445372581481934, 1.288953185081482, 86.79395294189453),
  rotation: new Quaternion(-1.7037508692275063e-14, -0.6955452561378479, 8.291546294003638e-8, -0.7184823155403137),
  scale: new Vector3(1, 1, 1)
})
countdownTimer2.addComponentOrReplace(transform130)

const countdownTimer3 = new Entity('countdownTimer3')
engine.addEntity(countdownTimer3)
countdownTimer3.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(15.445372581481934, 1.288953185081482, 87.36611938476562),
  rotation: new Quaternion(-1.7037508692275063e-14, -0.6955452561378479, 8.291546294003638e-8, -0.7184823155403137),
  scale: new Vector3(1, 1, 1)
})
countdownTimer3.addComponentOrReplace(transform131)

const countdownTimer4 = new Entity('countdownTimer4')
engine.addEntity(countdownTimer4)
countdownTimer4.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(24.06916046142578, 2.552797317504883, 92.91096496582031),
  rotation: new Quaternion(9.262015592957813e-15, 0.9999721050262451, -1.1920594289449582e-7, -0.007475783117115498),
  scale: new Vector3(1, 1, 1)
})
countdownTimer4.addComponentOrReplace(transform132)

const ventFloorPanel = new Entity('ventFloorPanel')
engine.addEntity(ventFloorPanel)
ventFloorPanel.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(14.305432319641113, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel.addComponentOrReplace(transform133)
const gltfShape39 = new GLTFShape("models/Floor_Module_05/Floor_Module_05.glb")
gltfShape39.withCollisions = true
gltfShape39.visible = true
ventFloorPanel.addComponentOrReplace(gltfShape39)

const ventFloorPanel2 = new Entity('ventFloorPanel2')
engine.addEntity(ventFloorPanel2)
ventFloorPanel2.setParent(_scene)
ventFloorPanel2.addComponentOrReplace(gltfShape39)
const transform134 = new Transform({
  position: new Vector3(17.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel2.addComponentOrReplace(transform134)

const ventFloorPanel3 = new Entity('ventFloorPanel3')
engine.addEntity(ventFloorPanel3)
ventFloorPanel3.setParent(_scene)
ventFloorPanel3.addComponentOrReplace(gltfShape39)
const transform135 = new Transform({
  position: new Vector3(20.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel3.addComponentOrReplace(transform135)

const ventFloorPanel4 = new Entity('ventFloorPanel4')
engine.addEntity(ventFloorPanel4)
ventFloorPanel4.setParent(_scene)
ventFloorPanel4.addComponentOrReplace(gltfShape39)
const transform136 = new Transform({
  position: new Vector3(22.80543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel4.addComponentOrReplace(transform136)

const ventFloorPanel5 = new Entity('ventFloorPanel5')
engine.addEntity(ventFloorPanel5)
ventFloorPanel5.setParent(_scene)
ventFloorPanel5.addComponentOrReplace(gltfShape39)
const transform137 = new Transform({
  position: new Vector3(25.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel5.addComponentOrReplace(transform137)

const ventFloorPanel6 = new Entity('ventFloorPanel6')
engine.addEntity(ventFloorPanel6)
ventFloorPanel6.setParent(_scene)
ventFloorPanel6.addComponentOrReplace(gltfShape39)
const transform138 = new Transform({
  position: new Vector3(27.80543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel6.addComponentOrReplace(transform138)

const ventFloorPanel7 = new Entity('ventFloorPanel7')
engine.addEntity(ventFloorPanel7)
ventFloorPanel7.setParent(_scene)
ventFloorPanel7.addComponentOrReplace(gltfShape39)
const transform139 = new Transform({
  position: new Vector3(30.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel7.addComponentOrReplace(transform139)

const ventFloorPanel8 = new Entity('ventFloorPanel8')
engine.addEntity(ventFloorPanel8)
ventFloorPanel8.setParent(_scene)
ventFloorPanel8.addComponentOrReplace(gltfShape39)
const transform140 = new Transform({
  position: new Vector3(14.305432319641113, 0, 93.17509460449219),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 6.387600421905518)
})
ventFloorPanel8.addComponentOrReplace(transform140)

const blueNeonTube = new Entity('blueNeonTube')
engine.addEntity(blueNeonTube)
blueNeonTube.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(15.026832580566406, 3.7014355659484863, 85.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.173821210861206, 1, 1)
})
blueNeonTube.addComponentOrReplace(transform141)
const gltfShape40 = new GLTFShape("models/NeonLightTube_04/NeonLightTube_04.glb")
gltfShape40.withCollisions = true
gltfShape40.visible = true
blueNeonTube.addComponentOrReplace(gltfShape40)

const scroll6 = new Entity('scroll6')
engine.addEntity(scroll6)
scroll6.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(14.493066787719727, 16.02018165588379, 42.150508880615234),
  rotation: new Quaternion(-0.18357938528060913, -0.8007844090461731, -0.30532708764076233, 0.48147517442703247),
  scale: new Vector3(1, 1, 1)
})
scroll6.addComponentOrReplace(transform142)

const verticalHallwayDoo7 = new Entity('verticalHallwayDoo7')
engine.addEntity(verticalHallwayDoo7)
verticalHallwayDoo7.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(13.380016326904297, 0, 78.13340759277344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4281625747680664, 0.7590780258178711, 0.7590780258178711)
})
verticalHallwayDoo7.addComponentOrReplace(transform143)

const buttonChest = new Entity('buttonChest')
engine.addEntity(buttonChest)
buttonChest.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(15.323091506958008, 1.0708973407745361, 92.62623596191406),
  rotation: new Quaternion(-6.505165472027805e-18, 0.04902709648013115, -5.844484451955623e-9, 0.9987974762916565),
  scale: new Vector3(0.8345222473144531, 0.8345222473144531, 0.8345222473144531)
})
buttonChest.addComponentOrReplace(transform144)

const verticalHallwayDoo8 = new Entity('verticalHallwayDoo8')
engine.addEntity(verticalHallwayDoo8)
verticalHallwayDoo8.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(33.99541091918945, 0, 78),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8280017375946045, 0.9028594493865967, 0.9371986389160156)
})
verticalHallwayDoo8.addComponentOrReplace(transform145)

const padlock5 = new Entity('padlock5')
engine.addEntity(padlock5)
padlock5.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(34.522491455078125, 1.6308958530426025, 74.1685791015625),
  rotation: new Quaternion(-0.06392046064138412, 5.203957842512995e-18, 7.619912700818077e-9, 0.9979550242424011),
  scale: new Vector3(1, 1, 1)
})
padlock5.addComponentOrReplace(transform146)

const scroll7 = new Entity('scroll7')
engine.addEntity(scroll7)
scroll7.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(28.426637649536133, 0.9968539476394653, 73.98047637939453),
  rotation: new Quaternion(-9.870662340393942e-16, 0.657564103603363, -7.838773541379851e-8, -0.7533986568450928),
  scale: new Vector3(1, 1, 1)
})
scroll7.addComponentOrReplace(transform147)

const headAccessCard = new Entity('headAccessCard')
engine.addEntity(headAccessCard)
headAccessCard.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(31.41756248474121, 1.827182412147522, 88.16009521484375),
  rotation: new Quaternion(0, 0, -0.6988348364830017, 0.7152831554412842),
  scale: new Vector3(1, 1, 1)
})
headAccessCard.addComponentOrReplace(transform148)

const metalTrapdoor2 = new Entity('metalTrapdoor2')
engine.addEntity(metalTrapdoor2)
metalTrapdoor2.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(31.47696304321289, 1.8426539897918701, 88.19257354736328),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.2571525573730469, 0.2571525573730469, 0.2571525573730469)
})
metalTrapdoor2.addComponentOrReplace(transform149)

const greenLightButton2 = new Entity('greenLightButton2')
engine.addEntity(greenLightButton2)
greenLightButton2.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(33.76272964477539, 0.08069324493408203, 92.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.754589080810547, 1, 1.831366777420044)
})
greenLightButton2.addComponentOrReplace(transform150)

const tools5 = new Entity('tools5')
engine.addEntity(tools5)
tools5.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(23.633045196533203, 22.750844955444336, 82.84844207763672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.154325485229492, 1, 7.216909408569336)
})
tools5.addComponentOrReplace(transform151)

const scifiLever2 = new Entity('scifiLever2')
engine.addEntity(scifiLever2)
scifiLever2.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(35.70798110961914, 22.417377471923828, 82.35713195800781),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.867624282836914, 5.867624282836914, 5.867624282836914)
})
scifiLever2.addComponentOrReplace(transform152)

const clickArea5 = new Entity('clickArea5')
engine.addEntity(clickArea5)
clickArea5.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(15.497021675109863, 1.2192357778549194, 89.46353912353516),
  rotation: new Quaternion(3.3155662646676886e-15, 0.7442870140075684, -8.87259261617146e-8, -0.6678599119186401),
  scale: new Vector3(0.39555874466896057, 0.13662035763263702, 0.646013081073761)
})
clickArea5.addComponentOrReplace(transform153)

const scroll8 = new Entity('scroll8')
engine.addEntity(scroll8)
scroll8.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(15.378438949584961, 5.146726608276367, 18.35199546813965),
  rotation: new Quaternion(2.480963525914345e-15, -0.3310868442058563, 3.9468634582817685e-8, 0.9436002969741821),
  scale: new Vector3(1, 1, 1)
})
scroll8.addComponentOrReplace(transform154)

const shortCableAdapter9 = new Entity('shortCableAdapter9')
engine.addEntity(shortCableAdapter9)
shortCableAdapter9.setParent(_scene)
shortCableAdapter9.addComponentOrReplace(gltfShape12)
const transform155 = new Transform({
  position: new Vector3(46.065345764160156, 17.551292419433594, 68.0019302368164),
  rotation: new Quaternion(-0.09412770718336105, 5.203305197009691e-18, 1.122089621219402e-8, 0.9955601692199707),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter9.addComponentOrReplace(transform155)

const shortCableAdapter10 = new Entity('shortCableAdapter10')
engine.addEntity(shortCableAdapter10)
shortCableAdapter10.setParent(_scene)
shortCableAdapter10.addComponentOrReplace(gltfShape12)
const transform156 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 66.17022705078125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter10.addComponentOrReplace(transform156)

const shortCableAdapter11 = new Entity('shortCableAdapter11')
engine.addEntity(shortCableAdapter11)
shortCableAdapter11.setParent(_scene)
shortCableAdapter11.addComponentOrReplace(gltfShape12)
const transform157 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 64.30525207519531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter11.addComponentOrReplace(transform157)

const shortCableAdapter12 = new Entity('shortCableAdapter12')
engine.addEntity(shortCableAdapter12)
shortCableAdapter12.setParent(_scene)
shortCableAdapter12.addComponentOrReplace(gltfShape12)
const transform158 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 62.434730529785156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter12.addComponentOrReplace(transform158)

const shortCableAdapter13 = new Entity('shortCableAdapter13')
engine.addEntity(shortCableAdapter13)
shortCableAdapter13.setParent(_scene)
shortCableAdapter13.addComponentOrReplace(gltfShape12)
const transform159 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 60.642086029052734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter13.addComponentOrReplace(transform159)

const shortCableAdapter14 = new Entity('shortCableAdapter14')
engine.addEntity(shortCableAdapter14)
shortCableAdapter14.setParent(_scene)
shortCableAdapter14.addComponentOrReplace(gltfShape12)
const transform160 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 58.852291107177734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter14.addComponentOrReplace(transform160)

const shortCableAdapter15 = new Entity('shortCableAdapter15')
engine.addEntity(shortCableAdapter15)
shortCableAdapter15.setParent(_scene)
shortCableAdapter15.addComponentOrReplace(gltfShape12)
const transform161 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 57.053043365478516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter15.addComponentOrReplace(transform161)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(24, 20.676055908203125, 73.95116424560547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(14.781481742858887, 7.4547624588012695, 1.0000008344650269)
})
invisibleWall2.addComponentOrReplace(transform162)

const yellowButton = new Entity('yellowButton')
engine.addEntity(yellowButton)
yellowButton.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(24.399660110473633, 22.689653396606445, 77.06977844238281),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.1677474975585938, 3.1677474975585938, 3.1677474975585938)
})
yellowButton.addComponentOrReplace(transform163)

const shortCableAdapter16 = new Entity('shortCableAdapter16')
engine.addEntity(shortCableAdapter16)
shortCableAdapter16.setParent(_scene)
shortCableAdapter16.addComponentOrReplace(gltfShape12)
const transform164 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 55.21459197998047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter16.addComponentOrReplace(transform164)

const shortCableAdapter17 = new Entity('shortCableAdapter17')
engine.addEntity(shortCableAdapter17)
shortCableAdapter17.setParent(_scene)
shortCableAdapter17.addComponentOrReplace(gltfShape12)
const transform165 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 53.36128616333008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter17.addComponentOrReplace(transform165)

const shortCableAdapter18 = new Entity('shortCableAdapter18')
engine.addEntity(shortCableAdapter18)
shortCableAdapter18.setParent(_scene)
shortCableAdapter18.addComponentOrReplace(gltfShape12)
const transform166 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 51.54668045043945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter18.addComponentOrReplace(transform166)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(33.19681930541992, 20.759206771850586, 50.24976348876953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.213285207748413, 5.028546333312988, 2.2155184745788574)
})
invisibleWall3.addComponentOrReplace(transform167)

const bloomingBlueAcaciaTree = new Entity('bloomingBlueAcaciaTree')
engine.addEntity(bloomingBlueAcaciaTree)
bloomingBlueAcaciaTree.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(9.75230598449707, 16.98479461669922, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6529617309570312, 1.6529617309570312, 1.6529617309570312)
})
bloomingBlueAcaciaTree.addComponentOrReplace(transform168)
const gltfShape41 = new GLTFShape("models/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb")
gltfShape41.withCollisions = true
gltfShape41.visible = true
bloomingBlueAcaciaTree.addComponentOrReplace(gltfShape41)

const tallBlueAcaciaTree = new Entity('tallBlueAcaciaTree')
engine.addEntity(tallBlueAcaciaTree)
tallBlueAcaciaTree.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(40.62702178955078, 9.028440475463867, 34.902915954589844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.85552978515625, 1.85552978515625, 1.85552978515625)
})
tallBlueAcaciaTree.addComponentOrReplace(transform169)
const gltfShape42 = new GLTFShape("models/Tree_Forest_Blue_04/Tree_Forest_Blue_04.glb")
gltfShape42.withCollisions = true
gltfShape42.visible = true
tallBlueAcaciaTree.addComponentOrReplace(gltfShape42)

const clusteredTurquoiseAcaciaTree = new Entity('clusteredTurquoiseAcaciaTree')
engine.addEntity(clusteredTurquoiseAcaciaTree)
clusteredTurquoiseAcaciaTree.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(15.620946884155273, 2.776663303375244, 17.8361873626709),
  rotation: new Quaternion(8.705728928310038e-16, 0.9793487787246704, -1.1674745792333852e-7, 0.2021782398223877),
  scale: new Vector3(1.3690032958984375, 1.3690032958984375, 1.3690032958984375)
})
clusteredTurquoiseAcaciaTree.addComponentOrReplace(transform170)
const gltfShape43 = new GLTFShape("models/Tree_Forest_Turquoise_03/Tree_Forest_Turquoise_03.glb")
gltfShape43.withCollisions = true
gltfShape43.visible = true
clusteredTurquoiseAcaciaTree.addComponentOrReplace(gltfShape43)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(46.5, 0, 57.9289665222168),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8192365169525146, 41.11783218383789, 74.912109375)
})
invisibleWall4.addComponentOrReplace(transform171)

const blueAcaciaTree = new Entity('blueAcaciaTree')
engine.addEntity(blueAcaciaTree)
blueAcaciaTree.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(41.487850189208984, 0, 15.229951858520508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4710121154785156, 1.4710121154785156, 1.4710121154785156)
})
blueAcaciaTree.addComponentOrReplace(transform172)
const gltfShape44 = new GLTFShape("models/Tree_Forest_Blue_01/Tree_Forest_Blue_01.glb")
gltfShape44.withCollisions = true
gltfShape44.visible = true
blueAcaciaTree.addComponentOrReplace(gltfShape44)

const bloomingTurquoiseAcaciaTree = new Entity('bloomingTurquoiseAcaciaTree')
engine.addEntity(bloomingTurquoiseAcaciaTree)
bloomingTurquoiseAcaciaTree.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(41.72410202026367, 0, 4.701112747192383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9744949340820312, 0.9744949340820312, 0.9744949340820312)
})
bloomingTurquoiseAcaciaTree.addComponentOrReplace(transform173)
const gltfShape45 = new GLTFShape("models/Tree_Forest_Turquoise_02/Tree_Forest_Turquoise_02.glb")
gltfShape45.withCollisions = true
gltfShape45.visible = true
bloomingTurquoiseAcaciaTree.addComponentOrReplace(gltfShape45)

const terrenoFinal3 = new Entity('terrenoFinal3')
engine.addEntity(terrenoFinal3)
terrenoFinal3.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(23.919570922851562, 0.6475539207458496, 50.586936950683594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9927883148193359, 0.837672233581543, 0.9927883148193359)
})
terrenoFinal3.addComponentOrReplace(transform174)
const gltfShape46 = new GLTFShape("models/terreno_final3.glb")
gltfShape46.withCollisions = true
gltfShape46.visible = true
terrenoFinal3.addComponentOrReplace(gltfShape46)

const ventFloorPanel9 = new Entity('ventFloorPanel9')
engine.addEntity(ventFloorPanel9)
ventFloorPanel9.setParent(_scene)
ventFloorPanel9.addComponentOrReplace(gltfShape39)
const transform175 = new Transform({
  position: new Vector3(37.061737060546875, 0, 93.12052917480469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 6.387600421905518)
})
ventFloorPanel9.addComponentOrReplace(transform175)

const ventFloorPanel10 = new Entity('ventFloorPanel10')
engine.addEntity(ventFloorPanel10)
ventFloorPanel10.setParent(_scene)
ventFloorPanel10.addComponentOrReplace(gltfShape39)
const transform176 = new Transform({
  position: new Vector3(11.305432319641113, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel10.addComponentOrReplace(transform176)

const ventFloorPanel11 = new Entity('ventFloorPanel11')
engine.addEntity(ventFloorPanel11)
ventFloorPanel11.setParent(_scene)
ventFloorPanel11.addComponentOrReplace(gltfShape39)
const transform177 = new Transform({
  position: new Vector3(33.30543518066406, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel11.addComponentOrReplace(transform177)

const ventFloorPanel12 = new Entity('ventFloorPanel12')
engine.addEntity(ventFloorPanel12)
ventFloorPanel12.setParent(_scene)
ventFloorPanel12.addComponentOrReplace(gltfShape39)
const transform178 = new Transform({
  position: new Vector3(36.30543518066406, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel12.addComponentOrReplace(transform178)

const ventFloorPanel13 = new Entity('ventFloorPanel13')
engine.addEntity(ventFloorPanel13)
ventFloorPanel13.setParent(_scene)
ventFloorPanel13.addComponentOrReplace(gltfShape39)
const transform179 = new Transform({
  position: new Vector3(39.30543518066406, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel13.addComponentOrReplace(transform179)

const ventFloorPanel14 = new Entity('ventFloorPanel14')
engine.addEntity(ventFloorPanel14)
ventFloorPanel14.setParent(_scene)
ventFloorPanel14.addComponentOrReplace(gltfShape39)
const transform180 = new Transform({
  position: new Vector3(36.80543518066406, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel14.addComponentOrReplace(transform180)

const ventFloorPanel15 = new Entity('ventFloorPanel15')
engine.addEntity(ventFloorPanel15)
ventFloorPanel15.setParent(_scene)
ventFloorPanel15.addComponentOrReplace(gltfShape39)
const transform181 = new Transform({
  position: new Vector3(33.80543518066406, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel15.addComponentOrReplace(transform181)

const ventFloorPanel16 = new Entity('ventFloorPanel16')
engine.addEntity(ventFloorPanel16)
ventFloorPanel16.setParent(_scene)
ventFloorPanel16.addComponentOrReplace(gltfShape39)
const transform182 = new Transform({
  position: new Vector3(31.305435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel16.addComponentOrReplace(transform182)

const ventFloorPanel17 = new Entity('ventFloorPanel17')
engine.addEntity(ventFloorPanel17)
ventFloorPanel17.setParent(_scene)
ventFloorPanel17.addComponentOrReplace(gltfShape39)
const transform183 = new Transform({
  position: new Vector3(28.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel17.addComponentOrReplace(transform183)

const ventFloorPanel18 = new Entity('ventFloorPanel18')
engine.addEntity(ventFloorPanel18)
ventFloorPanel18.setParent(_scene)
ventFloorPanel18.addComponentOrReplace(gltfShape39)
const transform184 = new Transform({
  position: new Vector3(25.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel18.addComponentOrReplace(transform184)

const ventFloorPanel19 = new Entity('ventFloorPanel19')
engine.addEntity(ventFloorPanel19)
ventFloorPanel19.setParent(_scene)
ventFloorPanel19.addComponentOrReplace(gltfShape39)
const transform185 = new Transform({
  position: new Vector3(22.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel19.addComponentOrReplace(transform185)

const ventFloorPanel20 = new Entity('ventFloorPanel20')
engine.addEntity(ventFloorPanel20)
ventFloorPanel20.setParent(_scene)
ventFloorPanel20.addComponentOrReplace(gltfShape39)
const transform186 = new Transform({
  position: new Vector3(19.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel20.addComponentOrReplace(transform186)

const ventFloorPanel21 = new Entity('ventFloorPanel21')
engine.addEntity(ventFloorPanel21)
ventFloorPanel21.setParent(_scene)
ventFloorPanel21.addComponentOrReplace(gltfShape39)
const transform187 = new Transform({
  position: new Vector3(16.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel21.addComponentOrReplace(transform187)

const ventFloorPanel22 = new Entity('ventFloorPanel22')
engine.addEntity(ventFloorPanel22)
ventFloorPanel22.setParent(_scene)
ventFloorPanel22.addComponentOrReplace(gltfShape39)
const transform188 = new Transform({
  position: new Vector3(13.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel22.addComponentOrReplace(transform188)

const scroll10 = new Entity('scroll10')
engine.addEntity(scroll10)
scroll10.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(14.416342735290527, 2.4725024700164795, 84.03308868408203),
  rotation: new Quaternion(2.0988261470077845e-16, -0.020936409011483192, 2.495816220360325e-9, -0.9997808337211609),
  scale: new Vector3(1, 1, 1)
})
scroll10.addComponentOrReplace(transform189)

const buttonChest2 = new Entity('buttonChest2')
engine.addEntity(buttonChest2)
buttonChest2.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(14.704671859741211, 2.599666118621826, 84.0728759765625),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.5, 1.5, 1.5)
})
buttonChest2.addComponentOrReplace(transform190)

const invisibleWall5 = new Entity('invisibleWall5')
engine.addEntity(invisibleWall5)
invisibleWall5.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(6.747957229614258, 20.898799896240234, 28.30751609802246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.844951629638672, 1, 8.126704216003418)
})
invisibleWall5.addComponentOrReplace(transform191)

const invisibleWall6 = new Entity('invisibleWall6')
engine.addEntity(invisibleWall6)
invisibleWall6.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(39.376441955566406, 19.53072738647461, 53.5),
  rotation: new Quaternion(0, 0, -0.2052890658378601, 0.9787014126777649),
  scale: new Vector3(1, 0.40589845180511475, 3.3528127670288086)
})
invisibleWall6.addComponentOrReplace(transform192)

const metalTrapdoor3 = new Entity('metalTrapdoor3')
engine.addEntity(metalTrapdoor3)
metalTrapdoor3.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(23.700300216674805, 22.5185546875, 67.24351501464844),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.6013398170471191, 1.0000004768371582, 2.774482250213623)
})
metalTrapdoor3.addComponentOrReplace(transform193)

const invisibleWall7 = new Entity('invisibleWall7')
engine.addEntity(invisibleWall7)
invisibleWall7.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(10.656765937805176, 0, 78.86331176757812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598745584487915, 11.043367385864258, 25.53719711303711)
})
invisibleWall7.addComponentOrReplace(transform194)

const tablet = new Entity('tablet')
engine.addEntity(tablet)
tablet.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(19.896257400512695, 24.14000129699707, 74.12420654296875),
  rotation: new Quaternion(-0.7071068286895752, 2.9802322387695312e-8, 1.2665987014770508e-7, -0.7071067690849304),
  scale: new Vector3(7.237974166870117, 7.237974166870117, 7.237974166870117)
})
tablet.addComponentOrReplace(transform195)

const scroll9 = new Entity('scroll9')
engine.addEntity(scroll9)
scroll9.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(23.956745147705078, 1.3092396259307861, 74.16043090820312),
  rotation: new Quaternion(-2.454745156279305e-16, 0.30965209007263184, -3.6913405665472965e-8, 0.9508500099182129),
  scale: new Vector3(1, 1, 1)
})
scroll9.addComponentOrReplace(transform196)

const grassSprout = new Entity('grassSprout')
engine.addEntity(grassSprout)
grassSprout.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(33.10999298095703, 6.020819664001465, 25.422657012939453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout.addComponentOrReplace(transform197)
const gltfShape47 = new GLTFShape("models/Grass_03/Grass_03.glb")
gltfShape47.withCollisions = true
gltfShape47.visible = true
grassSprout.addComponentOrReplace(gltfShape47)

const grassSprout2 = new Entity('grassSprout2')
engine.addEntity(grassSprout2)
grassSprout2.setParent(_scene)
grassSprout2.addComponentOrReplace(gltfShape47)
const transform198 = new Transform({
  position: new Vector3(33.9425048828125, 6.020819664001465, 26.324718475341797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout2.addComponentOrReplace(transform198)

const grassSprout3 = new Entity('grassSprout3')
engine.addEntity(grassSprout3)
grassSprout3.setParent(_scene)
grassSprout3.addComponentOrReplace(gltfShape47)
const transform199 = new Transform({
  position: new Vector3(33.84273910522461, 5.456259250640869, 24.526199340820312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout3.addComponentOrReplace(transform199)

const grassSprout4 = new Entity('grassSprout4')
engine.addEntity(grassSprout4)
grassSprout4.setParent(_scene)
grassSprout4.addComponentOrReplace(gltfShape47)
const transform200 = new Transform({
  position: new Vector3(34.367305755615234, 4.830380916595459, 22.810985565185547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout4.addComponentOrReplace(transform200)

const grassSprout5 = new Entity('grassSprout5')
engine.addEntity(grassSprout5)
grassSprout5.setParent(_scene)
grassSprout5.addComponentOrReplace(gltfShape47)
const transform201 = new Transform({
  position: new Vector3(33.095855712890625, 5.527141094207764, 23.42445182800293),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout5.addComponentOrReplace(transform201)

const cyanLeafShrub = new Entity('cyanLeafShrub')
engine.addEntity(cyanLeafShrub)
cyanLeafShrub.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(8.253278732299805, 5.205371379852295, 28.081825256347656),
  rotation: new Quaternion(1.7343662373497608e-18, 0.10413361340761185, -1.2413693184498698e-8, 0.9945633411407471),
  scale: new Vector3(3.515106201171875, 3.515106201171875, 3.515106201171875)
})
cyanLeafShrub.addComponentOrReplace(transform202)
const gltfShape48 = new GLTFShape("models/Vegetation_09/Vegetation_09.glb")
gltfShape48.withCollisions = true
gltfShape48.visible = true
cyanLeafShrub.addComponentOrReplace(gltfShape48)

const cyanLeafShrub2 = new Entity('cyanLeafShrub2')
engine.addEntity(cyanLeafShrub2)
cyanLeafShrub2.setParent(_scene)
cyanLeafShrub2.addComponentOrReplace(gltfShape48)
const transform203 = new Transform({
  position: new Vector3(7.86820125579834, 7.338649749755859, 34.436424255371094),
  rotation: new Quaternion(-3.383562469783238e-15, 0.5606716275215149, -6.683725217726533e-8, 0.8280382752418518),
  scale: new Vector3(3.515106201171875, 3.515106201171875, 3.515106201171875)
})
cyanLeafShrub2.addComponentOrReplace(transform203)

const electricBluePalm = new Entity('electricBluePalm')
engine.addEntity(electricBluePalm)
electricBluePalm.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(16.5, 1.9160175323486328, 15.872905731201172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm.addComponentOrReplace(transform204)
const gltfShape49 = new GLTFShape("models/PlantSF_08/PlantSF_08.glb")
gltfShape49.withCollisions = true
gltfShape49.visible = true
electricBluePalm.addComponentOrReplace(gltfShape49)

const electricBluePalm2 = new Entity('electricBluePalm2')
engine.addEntity(electricBluePalm2)
electricBluePalm2.setParent(_scene)
electricBluePalm2.addComponentOrReplace(gltfShape49)
const transform205 = new Transform({
  position: new Vector3(41.256317138671875, 13.005581855773926, 39.11298751831055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm2.addComponentOrReplace(transform205)

const electricBluePalm3 = new Entity('electricBluePalm3')
engine.addEntity(electricBluePalm3)
electricBluePalm3.setParent(_scene)
electricBluePalm3.addComponentOrReplace(gltfShape49)
const transform206 = new Transform({
  position: new Vector3(9.51801872253418, 15.740333557128906, 60.09178161621094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm3.addComponentOrReplace(transform206)

const fatsia = new Entity('fatsia')
engine.addEntity(fatsia)
fatsia.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(13.101593971252441, 19.449405670166016, 48.34264373779297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fatsia.addComponentOrReplace(transform207)
const gltfShape50 = new GLTFShape("models/Vegetation_10/Vegetation_10.glb")
gltfShape50.withCollisions = true
gltfShape50.visible = true
fatsia.addComponentOrReplace(gltfShape50)

const fatsia2 = new Entity('fatsia2')
engine.addEntity(fatsia2)
fatsia2.setParent(_scene)
fatsia2.addComponentOrReplace(gltfShape50)
const transform208 = new Transform({
  position: new Vector3(31.721153259277344, 0.9858589172363281, 7.342643737792969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6984939575195312, 1.6984939575195312, 1.6984939575195312)
})
fatsia2.addComponentOrReplace(transform208)

const purplePalm = new Entity('purplePalm')
engine.addEntity(purplePalm)
purplePalm.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(40.829776763916016, 8.749282836914062, 33.01197814941406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purplePalm.addComponentOrReplace(transform209)
const gltfShape51 = new GLTFShape("models/PlantSF_01/PlantSF_01.glb")
gltfShape51.withCollisions = true
gltfShape51.visible = true
purplePalm.addComponentOrReplace(gltfShape51)

const purplePalm2 = new Entity('purplePalm2')
engine.addEntity(purplePalm2)
purplePalm2.setParent(_scene)
purplePalm2.addComponentOrReplace(gltfShape51)
const transform210 = new Transform({
  position: new Vector3(14.540176391601562, 4.87516450881958, 23.210529327392578),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purplePalm2.addComponentOrReplace(transform210)

const purplePalm3 = new Entity('purplePalm3')
engine.addEntity(purplePalm3)
purplePalm3.setParent(_scene)
purplePalm3.addComponentOrReplace(gltfShape51)
const transform211 = new Transform({
  position: new Vector3(3.5401763916015625, 0, 1.2105293273925781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purplePalm3.addComponentOrReplace(transform211)

const wildChives = new Entity('wildChives')
engine.addEntity(wildChives)
wildChives.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(41.6672477722168, 0.30455589294433594, 11.286907196044922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wildChives.addComponentOrReplace(transform212)
const gltfShape52 = new GLTFShape("models/Vegetation_07/Vegetation_07.glb")
gltfShape52.withCollisions = true
gltfShape52.visible = true
wildChives.addComponentOrReplace(gltfShape52)

const wildChives2 = new Entity('wildChives2')
engine.addEntity(wildChives2)
wildChives2.setParent(_scene)
wildChives2.addComponentOrReplace(gltfShape52)
const transform213 = new Transform({
  position: new Vector3(10.039741516113281, 1.1032381057739258, 13.04089641571045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8695592880249023, 0.8695592880249023, 0.8695592880249023)
})
wildChives2.addComponentOrReplace(transform213)

const wildChives3 = new Entity('wildChives3')
engine.addEntity(wildChives3)
wildChives3.setParent(_scene)
wildChives3.addComponentOrReplace(gltfShape52)
const transform214 = new Transform({
  position: new Vector3(10.914566040039062, 17.741933822631836, 51.539024353027344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8695592880249023, 0.8695592880249023, 0.8695592880249023)
})
wildChives3.addComponentOrReplace(transform214)

const rayotiempo = new Entity('rayotiempo')
engine.addEntity(rayotiempo)
rayotiempo.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(22.005369186401367, 23.2088565826416, 74.68112182617188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992790222167969, 0.9992790222167969, 0.9992790222167969)
})
rayotiempo.addComponentOrReplace(transform215)
const gltfShape53 = new GLTFShape("models/rayotiempo.glb")
gltfShape53.withCollisions = true
gltfShape53.visible = true
rayotiempo.addComponentOrReplace(gltfShape53)

const rayotiempo2 = new Entity('rayotiempo2')
engine.addEntity(rayotiempo2)
rayotiempo2.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(21.5, 2, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rayotiempo2.addComponentOrReplace(transform216)
rayotiempo2.addComponentOrReplace(gltfShape53)

const invisibleWall8 = new Entity('invisibleWall8')
engine.addEntity(invisibleWall8)
invisibleWall8.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(24.397722244262695, 22.320350646972656, 77.04273223876953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5215396881103516, 0.8973110318183899, 1.5215396881103516)
})
invisibleWall8.addComponentOrReplace(transform217)

const invisibleWall10 = new Entity('invisibleWall10')
engine.addEntity(invisibleWall10)
invisibleWall10.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(24.087871551513672, 0, 95.25923156738281),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(47.29714584350586, 20.251611709594727, 0.4247003495693207)
})
invisibleWall10.addComponentOrReplace(transform218)

const invisibleWall11 = new Entity('invisibleWall11')
engine.addEntity(invisibleWall11)
invisibleWall11.setParent(_scene)
const transform219 = new Transform({
  position: new Vector3(0.5873953104019165, 0, 57.91194152832031),
  rotation: new Quaternion(-3.0390917460685696e-15, -0.7061646580696106, 8.418138719434864e-8, 0.7080477476119995),
  scale: new Vector3(74.6324234008789, 20.251611709594727, 0.5529927611351013)
})
invisibleWall11.addComponentOrReplace(transform219)

const treasurehuntChest2 = new Entity('treasurehuntChest2')
engine.addEntity(treasurehuntChest2)
treasurehuntChest2.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(30.699342727661133, 0.10362625122070312, 77.29105377197266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6663200855255127, 0.6663200855255127, 0.6663200855255127)
})
treasurehuntChest2.addComponentOrReplace(transform220)
const gltfShape54 = new GLTFShape("models/TreasureHunt_Chest.glb")
gltfShape54.withCollisions = true
gltfShape54.visible = true
treasurehuntChest2.addComponentOrReplace(gltfShape54)

const scroll11 = new Entity('scroll11')
engine.addEntity(scroll11)
scroll11.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(15.616378784179688, 1.1888949871063232, 80.5),
  rotation: new Quaternion(-3.8820750817416063e-17, -0.3419187664985657, 4.075988613294612e-8, 0.9397295713424683),
  scale: new Vector3(1.2959692478179932, 1.2959672212600708, 1.2959692478179932)
})
scroll11.addComponentOrReplace(transform221)

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)
squareSignpost.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(14.5, 0.3098665475845337, 1.0349254608154297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareSignpost.addComponentOrReplace(transform222)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
const script16 = new Script16()
const script17 = new Script17()
const script18 = new Script18()
const script19 = new Script19()
const script20 = new Script20()
const script21 = new Script21()
const script22 = new Script22()
const script23 = new Script23()
const script24 = new Script24()
const script25 = new Script25()
const script26 = new Script26()
const script27 = new Script27()
const script28 = new Script28()
const script29 = new Script29()
const script30 = new Script30()
const script31 = new Script31()
const script32 = new Script32()
const script33 = new Script33()
const script34 = new Script34()
const script35 = new Script35()
const script36 = new Script36()
const script37 = new Script37()
const script38 = new Script38()
const script39 = new Script39()
const script40 = new Script40()
const script41 = new Script41()
const script42 = new Script42()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script16.init(options)
script17.init(options)
script18.init(options)
script19.init(options)
script20.init(options)
script21.init(options)
script22.init(options)
script23.init(options)
script24.init(options)
script25.init(options)
script26.init(options)
script27.init(options)
script28.init(options)
script29.init(options)
script30.init(options)
script31.init(options)
script32.init(options)
script33.init(options)
script34.init(options)
script35.init(options)
script36.init(options)
script37.init(options)
script38.init(options)
script39.init(options)
script40.init(options)
script41.init(options)
script42.init(options)
script1.spawn(parrot, {"onActivate":[{"entityName":"parrot","actionId":"activate","values":{}}]}, createChannel(channelId, parrot, channelBus))
script2.spawn(padlock, {"combination":3210,"onSolve":[{"entityName":"verticalHallwayDoo","actionId":"open","values":{}}]}, createChannel(channelId, padlock, channelBus))
script3.spawn(roundSignpost, {"text":"NO HUMANS\nALLOWED","fontSize":20}, createChannel(channelId, roundSignpost, channelBus))
script4.spawn(scroll, {"text":"Dear friend,\nI'm glad the portal worked.\nIf you're reading this then \nthings haven't turned out \nas we hoped. This world\nis different from the one \nyou remember. We don't\nhave much time, start in \n3...2...1...0  Go! Go! Go!","fontSize":30}, createChannel(channelId, scroll, channelBus))
script5.spawn(verticalPlatform, {"distance":80,"speed":3,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script6.spawn(tools2, {}, createChannel(channelId, tools2, channelBus))
script7.spawn(ambientSound, {"sound":"Factory","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script8.spawn(verticalPlatform2, {"distance":70,"speed":3,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform2, channelBus))
script2.spawn(padlock2, {"combination":3142,"onSolve":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, padlock2, channelBus))
script6.spawn(tools3, {}, createChannel(channelId, tools3, channelBus))
script9.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"tools3","actionId":"print","values":{"message":"where am i?","duration":5,"multiplayer":false}}],"onLeave":[{"entityName":"tools3","actionId":"print","values":{"message":"what happened here?","duration":5,"multiplayer":false}}]}, createChannel(channelId, triggerArea, channelBus))
script6.spawn(tools4, {}, createChannel(channelId, tools4, channelBus))
script10.spawn(padlockRomanNumber, {"combination":3142,"onSolve":[{"entityName":"verticalHallwayDoo2","actionId":"open","values":{}}]}, createChannel(channelId, padlockRomanNumber, channelBus))
script11.spawn(fantasyIronKey, {"onUse":[{"entityName":"ironFenceDoor2","actionId":"open","values":{}}],"onEquip":[],"target":"ironFenceDoor2"}, createChannel(channelId, fantasyIronKey, channelBus))
script12.spawn(scifiChest, {"onClick":[{"entityName":"scifiChest","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest, channelBus))
script13.spawn(cableBox, {"redCable":true,"greenCable":true,"blueCable":true,"onClick":[{"entityName":"cableBox","actionId":"toggleBox","values":{}}],"onRedCut":[{"entityName":"verticalHallwayDoo3","actionId":"close","values":{}}],"onBlueCut":[{"entityName":"policeSiren","actionId":"activate","values":{}}],"onBoxClose":[{"entityName":"policeSiren","actionId":"deactivate","values":{}},{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}],"onBoxOpen":[{"entityName":"policeSiren","actionId":"activate","values":{}}],"onGreenCut":[{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}]}, createChannel(channelId, cableBox, channelBus))
script14.spawn(policeSiren, {}, createChannel(channelId, policeSiren, channelBus))
script15.spawn(verticalHallwayDoo, {}, createChannel(channelId, verticalHallwayDoo, channelBus))
script15.spawn(verticalHallwayDoo2, {}, createChannel(channelId, verticalHallwayDoo2, channelBus))
script1.spawn(parrot2, {"onActivate":[{"entityName":"verticalHallwayDoo2","actionId":"close","values":{}}],"onDeactivate":[{"entityName":"verticalHallwayDoo2","actionId":"open","values":{}}]}, createChannel(channelId, parrot2, channelBus))
script16.spawn(chest, {"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"hmm.......\nit's locked","duration":5,"multiplayer":false}}],"onOpen":[]}, createChannel(channelId, chest, channelBus))
script17.spawn(silverKey, {"target":"chest","onUse":[{"entityName":"chest","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a silver key!","duration":5,"multiplayer":false}}]}, createChannel(channelId, silverKey, channelBus))
script12.spawn(scifiChest2, {"onClick":[{"entityName":"scifiChest2","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"countdownTimer","actionId":"activate","values":{}}]}, createChannel(channelId, scifiChest2, channelBus))
script18.spawn(countdownTimer, {"totalTime":30,"active":false,"onThreshold":[{"entityName":"fantasyChest","actionId":"open","values":{}}],"onTimeUp":[{"entityName":"fantasyChest","actionId":"open","values":{}}]}, createChannel(channelId, countdownTimer, channelBus))
script4.spawn(scroll2, {"text":"Everything changed\nwhen our planet \nbecame a threat to\nothers, their thirst\nfor power drained\nour civilisation dry. \nWhen the timer turns\nred you can see \ninside the alien chest.\nBe careful!\n","fontSize":30}, createChannel(channelId, scroll2, channelBus))
script19.spawn(fantasyChest, {"onClick":[]}, createChannel(channelId, fantasyChest, channelBus))
script20.spawn(blueAccessCard, {"target":"ironFenceDoor","onEquip":[],"onUse":[{"entityName":"ironFenceDoor","actionId":"open","values":{}}]}, createChannel(channelId, blueAccessCard, channelBus))
script15.spawn(verticalHallwayDoo3, {}, createChannel(channelId, verticalHallwayDoo3, channelBus))
script21.spawn(greenLightButton, {"onClick":[{"entityName":"woodenTrapdoor","actionId":"open","values":{}}]}, createChannel(channelId, greenLightButton, channelBus))
script2.spawn(padlock3, {"combination":2019,"onSolve":[{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}]}, createChannel(channelId, padlock3, channelBus))
script22.spawn(woodenTrapdoor, {}, createChannel(channelId, woodenTrapdoor, channelBus))
script15.spawn(verticalHallwayDoo4, {}, createChannel(channelId, verticalHallwayDoo4, channelBus))
script8.spawn(verticalPlatform3, {"distance":20,"speed":3,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform3","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform3","actionId":"goToStart","values":{}}]}, createChannel(channelId, verticalPlatform3, channelBus))
script23.spawn(blueLightButton, {"onClick":[{"entityName":"verticalPlatform3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueLightButton, channelBus))
script24.spawn(ironFenceDoor, {"onClick":[]}, createChannel(channelId, ironFenceDoor, channelBus))
script16.spawn(chest2, {"onClick":[]}, createChannel(channelId, chest2, channelBus))
script25.spawn(bronzeKey, {"target":"chest2","onUse":[{"entityName":"chest2","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a bronze key!","duration":5,"multiplayer":false}}]}, createChannel(channelId, bronzeKey, channelBus))
script4.spawn(scroll3, {"text":"We don't have much\ntime. The human\nrace is at stake. \nYou must find my \nsecret laboratory \nand turn on the \ntime machine!\n2019 is the key\nyou need...\nGood luck! ","fontSize":30}, createChannel(channelId, scroll3, channelBus))
script26.spawn(scifiLever, {"onActivate":[{"entityName":"verticalHallwayDoo6","actionId":"open","values":{}}],"onDeactivate":[]}, createChannel(channelId, scifiLever, channelBus))
script4.spawn(scroll4, {"text":"It's 2034, fifteen \nyears since the first \ninvasion. The rest of \nus have been hiding\nunderground but this \nyear will be our last. \nExtinction is imminent. \nYou must find a way \nback, remember this \nfateful year, 2034.","fontSize":30}, createChannel(channelId, scroll4, channelBus))
script12.spawn(scifiChest3, {"onClick":[{"entityName":"scifiChest3","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest3, channelBus))
script2.spawn(padlock4, {"combination":2034,"onSolve":[{"entityName":"verticalHallwayDoo4","actionId":"open","values":{}}]}, createChannel(channelId, padlock4, channelBus))
script24.spawn(ironFenceDoor2, {"onClick":[]}, createChannel(channelId, ironFenceDoor2, channelBus))
script5.spawn(verticalPlatform4, {"distance":10,"speed":5,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform4","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform4","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform4, channelBus))
script27.spawn(fingerprintAccessC, {"target":"verticalHallwayDoo5","onUse":[{"entityName":"verticalHallwayDoo5","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a fingerprint access card!","duration":5,"multiplayer":false}}]}, createChannel(channelId, fingerprintAccessC, channelBus))
script28.spawn(toggleButton, {"onActivate":[{"entityName":"verticalPlatform4","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalPlatform4","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton, channelBus))
script24.spawn(ironFenceDoor3, {"onClick":[]}, createChannel(channelId, ironFenceDoor3, channelBus))
script15.spawn(verticalHallwayDoo5, {"onOpen":[]}, createChannel(channelId, verticalHallwayDoo5, channelBus))
script11.spawn(fantasyIronKey2, {"target":"ironFenceDoor3","onUse":[{"entityName":"ironFenceDoor3","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"an iron key!","duration":5,"multiplayer":false}}]}, createChannel(channelId, fantasyIronKey2, channelBus))
script15.spawn(verticalHallwayDoo6, {}, createChannel(channelId, verticalHallwayDoo6, channelBus))
script29.spawn(faceAccessCard, {"target":"chest2","onUse":[{"entityName":"chest2","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a face access card!","duration":5,"multiplayer":false}}]}, createChannel(channelId, faceAccessCard, channelBus))
script4.spawn(scroll5, {"text":"Great! \nYou're close\nto the secret \nlaboratory...\nWatch out for\nthe aliens\nthey mustn't \nfind my machine... ","fontSize":36}, createChannel(channelId, scroll5, channelBus))
script30.spawn(scoreboard, {"initialVal":0,"threshold":3,"enabled":true,"onThreshold":[{"entityName":"metalTrapdoor3","actionId":"open","values":{}}]}, createChannel(channelId, scoreboard, channelBus))
script31.spawn(shipSWheel, {"onClick":[{"entityName":"scoreboard","actionId":"increase","values":{}}]}, createChannel(channelId, shipSWheel, channelBus))
script32.spawn(clickArea2, {"enabled":true,"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"intruder be gone!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea2, channelBus))
script32.spawn(clickArea3, {"enabled":true,"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"go away!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea3, channelBus))
script32.spawn(clickArea4, {"enabled":true,"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"intruder!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea4, channelBus))
script9.spawn(triggerArea3, {"enabled":true,"onEnter":[{"entityName":"tools2","actionId":"print","values":{"message":"holy cow","duration":5,"multiplayer":false}}]}, createChannel(channelId, triggerArea3, channelBus))
script33.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script34.spawn(redLightButton, {"onClick":[{"entityName":"invisibleWall","actionId":"disable","values":{}}]}, createChannel(channelId, redLightButton, channelBus))
script35.spawn(countdownTimer2, {"totalTime":60,"active":false}, createChannel(channelId, countdownTimer2, channelBus))
script35.spawn(countdownTimer3, {"totalTime":60,"active":false}, createChannel(channelId, countdownTimer3, channelBus))
script36.spawn(countdownTimer4, {"totalTime":10,"active":false,"onTimeUp":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}},{"entityName":"tools2","actionId":"move","values":{"x":0,"y":23,"z":0,"speed":2,"relative":true,"onComplete":[],"target":"delorean2"}}]}, createChannel(channelId, countdownTimer4, channelBus))
script4.spawn(scroll6, {"text":"finding your\nway is as \neasy as pi\nIII I IV II","fontSize":30}, createChannel(channelId, scroll6, channelBus))
script15.spawn(verticalHallwayDoo7, {}, createChannel(channelId, verticalHallwayDoo7, channelBus))
script37.spawn(buttonChest, {"onClick":[],"onOpen":[{"entityName":"parrot","actionId":"deactivate","values":{}}]}, createChannel(channelId, buttonChest, channelBus))
script15.spawn(verticalHallwayDoo8, {}, createChannel(channelId, verticalHallwayDoo8, channelBus))
script2.spawn(padlock5, {"combination":2020,"onSolve":[{"entityName":"verticalHallwayDoo8","actionId":"open","values":{}}]}, createChannel(channelId, padlock5, channelBus))
script4.spawn(scroll7, {"text":"My dear friend\nEverything is in\nyour hands now. \nWill you save us?\nTravel back in time\nso that humankind\ncan have a future. \n\nX = 100 x 20 + 19 + 1^3","fontSize":30}, createChannel(channelId, scroll7, channelBus))
script38.spawn(headAccessCard, {"target":"verticalHallwayDoo7","onUse":[{"entityName":"verticalHallwayDoo7","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a head access card!","duration":5,"multiplayer":false}}]}, createChannel(channelId, headAccessCard, channelBus))
script39.spawn(metalTrapdoor2, {}, createChannel(channelId, metalTrapdoor2, channelBus))
script21.spawn(greenLightButton2, {"onClick":[{"entityName":"metalTrapdoor2","actionId":"open","values":{}}]}, createChannel(channelId, greenLightButton2, channelBus))
script6.spawn(tools5, {}, createChannel(channelId, tools5, channelBus))
script26.spawn(scifiLever2, {"onActivate":[{"entityName":"tools5","actionId":"rotate","values":{"x":0,"y":120,"z":0,"speed":1,"onComplete":[{"entityName":"tools5","actionId":"move","values":{"x":0,"y":0,"z":-30,"speed":4,"relative":false,"onComplete":[{"entityName":"tools5","actionId":"scale","values":{"target":"delorean2","x":0,"y":0,"z":0,"speed":10,"onComplete":[]}}],"target":"delorean2"}}],"target":"delorean2"}},{"entityName":"invisibleWall8","actionId":"disable","values":{}}],"onDeactivate":[]}, createChannel(channelId, scifiLever2, channelBus))
script32.spawn(clickArea5, {"enabled":true,"onClick":[{"entityName":"countdownTimer4","actionId":"activate","values":{}},{"entityName":"tools2","actionId":"print","values":{"message":"the countdown begins!","duration":5,"multiplayer":true}}]}, createChannel(channelId, clickArea5, channelBus))
script4.spawn(scroll8, {"text":"Pay attention to the\nnumbers in my\nnotes, they are the\nkey to opening the\ndoors!","fontSize":30}, createChannel(channelId, scroll8, channelBus))
script33.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script40.spawn(yellowButton, {"onClick":[{"entityName":"invisibleWall2","actionId":"disable","values":{}}]}, createChannel(channelId, yellowButton, channelBus))
script33.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script33.spawn(invisibleWall4, {"enabled":true}, createChannel(channelId, invisibleWall4, channelBus))
script4.spawn(scroll10, {"text":"Pi will take you\nto the sky","fontSize":36}, createChannel(channelId, scroll10, channelBus))
script37.spawn(buttonChest2, {"onClick":[{"entityName":"buttonChest2","actionId":"toggle","values":{}}]}, createChannel(channelId, buttonChest2, channelBus))
script33.spawn(invisibleWall5, {"enabled":true}, createChannel(channelId, invisibleWall5, channelBus))
script33.spawn(invisibleWall6, {"enabled":true}, createChannel(channelId, invisibleWall6, channelBus))
script39.spawn(metalTrapdoor3, {}, createChannel(channelId, metalTrapdoor3, channelBus))
script33.spawn(invisibleWall7, {"enabled":true}, createChannel(channelId, invisibleWall7, channelBus))
script41.spawn(tablet, {"text":"Congratulations! You did it!\nYou sent the time machine \nto the year 2019 where I'll \nbe waiting for it. Thanks to \nyou and the car the human \nrace can now be saved! ","fontSize":30}, createChannel(channelId, tablet, channelBus))
script4.spawn(scroll9, {"text":"find the remote \ncontrol to activate\nthe time machine!","fontSize":30}, createChannel(channelId, scroll9, channelBus))
script33.spawn(invisibleWall8, {"enabled":true}, createChannel(channelId, invisibleWall8, channelBus))
script33.spawn(invisibleWall10, {"enabled":true}, createChannel(channelId, invisibleWall10, channelBus))
script33.spawn(invisibleWall11, {"enabled":true}, createChannel(channelId, invisibleWall11, channelBus))
script4.spawn(scroll11, {"text":"Back To The Past\n\n     created by\nKJWalker & FGR3D","fontSize":20}, createChannel(channelId, scroll11, channelBus))
script42.spawn(squareSignpost, {"text":"For next challenge\n\"/goto next\"\nin chat window\n","fontSize":15}, createChannel(channelId, squareSignpost, channelBus))