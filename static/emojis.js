!(function (e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 10));
})([
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.shuffleArray = t.randomArrayMember = t.obtainValue = void 0),
      (t.obtainValue = (e) => ("function" == typeof e ? e() : e)),
      (t.randomArrayMember = (e) => e[Math.floor(Math.random() * e.length)]),
      (t.shuffleArray = (e) => {
        const t = e.slice();
        for (let e = t.length - 1; e > 0; e -= 1) {
          const i = Math.floor(Math.random() * (e + 1)),
            n = t[e];
          (t[e] = t[i]), (t[i] = n);
        }
        return t;
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.defaultEmojis = void 0),
      (t.defaultEmojis = [
        "😁",
        "😂",
        "🤣",
        "😃",
        "😅",
        "😆",
        "😍",
        "🤩",
        "😎",
        "🤔",
        "😒",
        "😭",
        "😱",
        "🤖",
        "😻",
        "🙀",
        "🙈",
        "🙉",
        "🙊",
        "🏄",
        "💪",
        "👌",
        "👋",
        "🙌",
        "💝",
        "💖",
        "💗",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🚀",
        "⛄",
        "🔥",
        "🔥",
        "✨",
        "✨",
        "🎉",
        "🎉",
        "💯",
        "💯",
      ]);
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.emojisplosion =
        t.defaultTagName =
        t.defaultPosition =
        t.defaultPhysics =
        t.defaultEmojiCount =
        t.defaultCreateContainer =
        t.defaultClassName =
          void 0);
    const n = i(3),
      o = i(5),
      s = i(1),
      a = i(6),
      r = i(0);
    (t.defaultClassName = "emoji-styles"),
      (t.defaultCreateContainer = (() => {
        let e;
        return () => (
          (null == e ? void 0 : e.parentNode) === document.body ||
            ((e = document.createElement("div")), document.body.prepend(e)),
          e
        );
      })()),
      (t.defaultEmojiCount = () => Math.floor(14 * Math.random()) + 14),
      (t.defaultPhysics = {
        fontSize: { max: 28, min: 14 },
        framerate: 60,
        gravity: 0.35,
        initialVelocities: {
          rotation: { max: 7, min: -7 },
          x: { max: 7, min: -7 },
          y: { max: -7, min: -21 },
        },
        preserveOutOfBounds: !1,
        rotation: { max: 45, min: -45 },
        rotationDeceleration: 0.98,
      }),
      (t.defaultPosition = () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
      }));
    const l = () => {};
    (t.defaultTagName = "span"),
      (t.emojisplosion = (e = {}) => {
        const {
          animator: i = new o.Animator().start(),
          className: c = t.defaultClassName,
          container: u = t.defaultCreateContainer,
          emojiCount: d = t.defaultEmojiCount,
          emojis: m = s.defaultEmojis,
          position: h = t.defaultPosition,
          process: p = l,
          tagName: f = t.defaultTagName,
          uniqueness: y = 1 / 0,
        } = e;
        a.createStyleElementAndClass(c);
        const b = Object.assign(
            Object.assign(Object.assign({}, t.defaultPhysics), e.physics),
            {
              initialVelocities: Object.assign(
                Object.assign({}, t.defaultPhysics.initialVelocities),
                void 0 !== e.physics ? e.physics.initialVelocities : {}
              ),
            }
          ),
          v = {
            className: c,
            container: r.obtainValue(u),
            emojis: r.shuffleArray(r.obtainValue(m)).slice(0, r.obtainValue(y)),
            physics: b,
            position: r.obtainValue(h),
            process: p,
            tagName: r.obtainValue(f),
          },
          j = r.obtainValue(d);
        for (let e = 0; e < j; e += 1) i.add(new n.EmojiActor(v));
        return i;
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.EmojiActor = void 0);
    const n = i(4),
      o = i(0);
    t.EmojiActor = class {
      constructor(e) {
        (this.opacity = 1),
          (this.element = document.createElement(e.tagName)),
          (this.element.className = e.className),
          (this.element.style.transition = "16ms opacity, 16ms transform"),
          (this.element.textContent = o.randomArrayMember(e.emojis)),
          this.element.setAttribute("aria-label", "Random emoji"),
          this.element.setAttribute("role", "img"),
          (this.element.style.fontSize =
            n.randomInRange(e.physics.fontSize) + "px"),
          (this.physics = e.physics),
          (this.position = {
            rotation: n.randomInRange(e.physics.rotation),
            x: e.position.x,
            y: e.position.y,
          }),
          (this.velocity = {
            rotation: n.randomInRange(e.physics.initialVelocities.rotation),
            x: n.randomInRange(e.physics.initialVelocities.x),
            y: n.randomInRange(e.physics.initialVelocities.y),
          }),
          this.updateElement(),
          e.process(this.element),
          e.container.appendChild(this.element);
      }
      act(e) {
        if (
          this.physics.opacityDecay &&
          ((this.opacity -=
            e / (this.physics.opacityDecay * this.physics.framerate)),
          this.opacity <= 0)
        )
          return !0;
        if (
          ((this.velocity.rotation *= this.physics.rotationDeceleration),
          (this.velocity.y += this.physics.gravity),
          (this.position.rotation += this.velocity.rotation),
          (this.position.x += (this.velocity.x * e) / this.physics.framerate),
          (this.position.y += (this.velocity.y * e) / this.physics.framerate),
          !this.physics.preserveOutOfBounds)
        ) {
          if (
            this.position.y - this.element.clientHeight >
            window.outerHeight + 350
          )
            return !0;
          if (this.position.y + this.element.clientHeight < -350) return !0;
          if (
            this.position.x - this.element.clientWidth >
            window.outerWidth + 350
          )
            return !0;
          if (this.position.x + this.element.clientWidth < -350) return !0;
        }
        return this.updateElement(), !1;
      }
      dispose() {
        null !== this.element.parentElement &&
          this.element.parentElement.removeChild(this.element);
      }
      updateElement() {
        (this.element.style.opacity = "" + this.opacity),
          (this.element.style.transform = `translate(${this.position.x}px, ${
            this.position.y
          }px) rotate(${Math.round(this.position.rotation)}deg)`);
      }
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.randomInRange = void 0),
      (t.randomInRange = (e) =>
        "number" == typeof e
          ? e
          : Math.floor(Math.random() * (e.max - e.min + 1)) + e.min);
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Animator = void 0);
    t.Animator = class {
      constructor() {
        (this.actors = []),
          (this.tick = (e) => {
            const t = e - this.previousTime;
            for (let e = 0; e < this.actors.length; e += 1) {
              const i = this.actors[e];
              i.act(t) && (i.dispose(), this.actors.splice(e, 1), (e -= 1));
            }
            0 !== this.actors.length &&
              ((this.previousTime = e), requestAnimationFrame(this.tick));
          });
      }
      add(e) {
        this.actors.push(e);
      }
      start() {
        return (
          (this.previousTime = performance.now()),
          requestAnimationFrame(this.tick),
          this
        );
      }
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createStyleElementAndClass = void 0);
    const n = new Set();
    t.createStyleElementAndClass = (e) => {
      if (n.has(e)) return;
      n.add(e);
      const t = document.createElement("style");
      (t.type = "text/css"),
        t.appendChild(
          document.createTextNode(
            `\n        .${e} {\n            cursor: default;\n            margin-left: -1em;\n            margin-top: -1em;\n            position: fixed;\n            user-select: none;\n            z-index: 2147483647;\n        }\n    `
          )
        ),
        document.head.appendChild(t);
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.emojisplosions = void 0);
    const n = i(2),
      o = i(0),
      s = () => 700 + Math.floor(1401 * Math.random());
    t.emojisplosions = (e = {}) => {
      const { interval: t = s, scheduler: i = setTimeout } = e;
      let a = !1;
      const r = () => n.emojisplosion(e),
        l = () => {
          a ||
            ("visible" === document.visibilityState && r(),
            i(l, o.obtainValue(t)));
        };
      return (
        i(l, 0),
        {
          blast: r,
          cancel() {
            a = !0;
          },
        }
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, i, n) {
              void 0 === n && (n = i),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[i];
                  },
                });
            }
          : function (e, t, i, n) {
              void 0 === n && (n = i), (e[n] = t[i]);
            }),
      o =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      o(i(1), t),
      o(i(2), t),
      o(i(7), t);
  },
  ,
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = i(8);
    (window.emojisplosion = n.emojisplosion),
      (window.emojisplosions = n.emojisplosions);
  },
]);

function getAbsolutePosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }
  return { x: xPosition, y: yPosition };
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".emoji-button")
    .addEventListener("click", partyMode);
  main();
});

function partyMode() {
  const element = document.querySelector(".emoji-button");
  emojisplosion({
    position() {
      // https://stackoverflow.com/questions/1480133
      const offset = getAbsolutePosition(element);

      return {
        x: offset.x + element.clientWidth / 2,
        y: offset.y + element.clientHeight / 2,
      };
    },
  });
}
