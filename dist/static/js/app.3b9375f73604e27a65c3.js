webpackJsonp([1], {
  "3xXU": function(t, e) {},
  NHnr: function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = a("7+uW"),
      n = {
        render: function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            attrs: {
              id: "app"
            }
          }, [e("router-view"), this._v(" "), e("link", {
            attrs: {
              rel: "stylesheet",
              href: "https://bootswatch.com/3/slate/bootstrap.min.css"
            }
          }), this._v(" "), e("link", {
            attrs: {
              rel: "stylesheet",
              href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
            }
          })], 1)
        },
        staticRenderFns: []
      };
    var s = a("VU/8")({
        name: "App"
      }, n, !1, function(t) {
        a("pC1C")
      }, null, null).exports,
      r = a("/ocq"),
      l = {
        render: function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("body", {
            staticClass: "body",
            attrs: {
              id: "splash"
            }
          }, [this._m(0), this._v(" "), e("div", [e("router-link", {
            attrs: {
              to: {
                name: "Home"
              }
            }
          }, [e("button", {
            staticClass: "btn btn-success",
            attrs: {
              type: "button",
              name: "button"
            }
          }, [this._v("\n        CLICK ME\n      ")])])], 1), this._v(" "), e("br"), this._v(" "), this._m(1)])
        },
        staticRenderFns: [function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "everything"
          }, [e("h1", {
            staticClass: "animated flipInX infinite",
            attrs: {
              id: "mainHeader"
            }
          }, [this._v("Burke Weather!")])])
        }, function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "appInfo"
          }, [e("div", {
            staticClass: "panel panel-info"
          }, [e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("What does Burke Weather! do?")])]), this._v(" "), e("div", {
            staticClass: "panel-body"
          }, [this._v("\n        Burke Weather! is a low-memory weather-by-zip-code app.\n      ")])]), this._v(" "), e("div", {
            staticClass: "panel panel-info"
          }, [e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("Who is this app for?")])]), this._v(" "), e("div", {
            staticClass: "panel-body"
          }, [this._v("\n        Anyone who lacks the internet connection speeds who needs the weather asap.\n      ")])])])
        }]
      };
    var c = a("VU/8")({}, l, !1, function(t) {
        a("3xXU")
      }, "data-v-5efb7c93", null).exports,
      o = {
        name: "Home",
        data: function() {
          return {
            weatherAPI: "https://api.openweathermap.org/data/2.5/weather?zip=",
            weatherKey: "&APPID=262303768614f8e18789b312097675b8",
            nasaAPI: "https://api.nasa.gov/planetary/earth/imagery/?",
            nasaKey: "EwX2q6G0QtxB1bFBHrxa6M2v1ZNjYtjKWYQXIjSg",
            inputZip: "",
            nasaImageUrl: "",
            cityData: {
              cityName: "",
              description: "",
              temperature: "",
              humidity: "",
              wind: "",
              latitude: "",
              longitude: ""
            }
          }
        },
        methods: {
          getWeather: function() {
            var t = this;
            if (5 == this.inputZip.length) {
              var e = this.weatherAPI + this.inputZip + this.weatherKey;
              fetch(e).then(function(t) {
                return t.json()
              }).then(function(e) {
                t.cityData.cityName = e.name, t.cityData.description = e.weather[0].main, t.cityData.temperature = (1.8 * (e.main.temp - 273) + 32).toFixed(1), t.cityData.humidity = e.main.humidity, t.cityData.wind = (1.61 * e.wind.speed).toFixed(0), t.cityData.longitude = e.coord.lon, t.cityData.latitude = e.coord.lat, t.lookupMapPicture()
              }).catch(function(e) {
                alert("Uh oh, that zip code didn't seem to work...try another one."), t.inputZip = "", console.log(e)
              })
            } else alert("Zip Code Needs to Be 5 digits")
          },
          lookupMapPicture: function() {
            var t = this,
              e = "&lat=" + this.cityData.latitude,
              a = "lon=" + this.cityData.longitude,
              i = "&api_key=" + this.nasaKey,
              n = this.nasaAPI + a + "&dim=0.05" + e + i;
            fetch(n).then(function(t) {
              return t.json()
            }).then(function(e) {
              t.nasaImageUrl = e.url
            }).catch(function(t) {
              console.log(t)
            })
          }
        }
      },
      p = {
        render: function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("body", {
            staticClass: "body"
          }, [a("div", {
            staticClass: "everything"
          }, [a("h1", {
            staticClass: "animated flipInX"
          }, [t._v("Burke Weather!")]), t._v(" "), a("div", {
            staticClass: "form-group"
          }, [a("label", {
            staticClass: "control-label",
            attrs: {
              for: "focusedInput"
            }
          }, [t._v("Enter your zip code here:")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.inputZip,
              expression: "inputZip"
            }],
            staticClass: "form-control  make-wider",
            attrs: {
              type: "number",
              maxlength: "5",
              size: "8",
              id: "focusedInput"
            },
            domProps: {
              value: t.inputZip
            },
            on: {
              keyup: function(e) {
                if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key)) return null;
                t.getWeather(e)
              },
              input: function(e) {
                e.target.composing || (t.inputZip = e.target.value)
              }
            }
          }), t._v(" "), a("button", {
            staticClass: "btn btn-danger",
            attrs: {
              type: "button",
              name: "button"
            },
            on: {
              click: t.getWeather
            }
          }, [t._v("Enter")])]), t._v(" "), a("div", {
            staticClass: "panel panel-primary"
          }, [t._m(0), t._v(" "), a("h2", {
            staticClass: "panel-body text-danger",
            attrs: {
              size: "20px"
            }
          }, [t._v("\n        " + t._s(t.cityData.temperature) + "°F\n      ")])]), t._v(" "), a("div", {
            staticClass: "panel panel-primary"
          }, [t._m(1), t._v(" "), a("div", {
            staticClass: "panel-body text-danger city-name"
          }, [t._v("\n        " + t._s(t.cityData.cityName) + "\n      ")])]), t._v(" "), a("div", {
            staticClass: "panel panel-primary"
          }, [t._m(2), t._v(" "), a("div", {
            staticClass: "panel-body text-danger"
          }, [t._v("\n        " + t._s(t.cityData.humidity) + "%\n      ")])]), t._v(" "), a("div", {
            staticClass: "panel panel-primary"
          }, [t._m(3), t._v(" "), a("div", {
            staticClass: "panel-body text-danger"
          }, [t._v("\n        " + t._s(t.cityData.wind) + "mph\n      ")])]), t._v(" "), a("div", {
            staticClass: "panel panel-primary"
          }, [t._m(4), t._v(" "), a("div", {
            staticClass: "panel-body text-danger"
          }, [t._v("\n        " + t._s(t.cityData.description) + "\n      ")])]), t._v(" "), a("div", [a("h4", [t._v("Nasa Satellite Picture of Coordinates:")]), t._v(" "), a("img", {
            staticClass: "weather-pic sizer",
            attrs: {
              src: t.nasaImageUrl
            }
          })])])])
        },
        staticRenderFns: [function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("Current Temperature")])])
        }, function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("City")])])
        }, function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("Humidity")])])
        }, function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("Wind")])])
        }, function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "panel-heading"
          }, [e("h3", {
            staticClass: "panel-title"
          }, [this._v("Visibility")])])
        }]
      };
    var h = a("VU/8")(o, p, !1, function(t) {
      a("knE5")
    }, "data-v-460feaf0", null).exports;
    i.a.use(r.a);
    var d = new r.a({
      routes: [{
        path: "/home",
        name: "Home",
        component: h
      }, {
        path: "/",
        name: "Splash",
        component: c
      }]
    });
    i.a.config.productionTip = !1, new i.a({
      el: "#app",
      router: d,
      components: {
        App: s
      },
      template: "<App/>"
    })
  },
  knE5: function(t, e) {},
  pC1C: function(t, e) {}
}, ["NHnr"]);
//# sourceMappingURL=app.3b9375f73604e27a65c3.js.map
