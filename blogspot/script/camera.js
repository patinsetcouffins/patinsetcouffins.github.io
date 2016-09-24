! function(a) {
    a.fn.camera = function(e, t) {
        function i() {
            return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? !0 : void 0
        }

        function r() {
            var e = a(F).width();
            a("li", F).removeClass("camera_visThumb"), a("li", F).each(function() {
                var t = a(this).position(),
                    i = a("ul", F).outerWidth(),
                    r = a("ul", F).offset().left,
                    o = a("> div", F).offset().left,
                    s = o - r;
                s > 0 ? a(".camera_prevThumbs", Y).removeClass("hideNav") : a(".camera_prevThumbs", Y).addClass("hideNav"), i - s > e ? a(".camera_nextThumbs", Y).removeClass("hideNav") : a(".camera_nextThumbs", Y).addClass("hideNav");
                var n = t.left,
                    c = t.left + a(this).width();
                e >= c - s && n - s >= 0 && a(this).addClass("camera_visThumb")
            })
        }

        function o() {
            function t() {
                if (u = h.width(), -1 != e.height.indexOf("%")) {
                    var t = Math.round(u / (100 / parseFloat(e.height)));
                    v = "" != e.minHeight && t < parseFloat(e.minHeight) ? parseFloat(e.minHeight) : t, h.css({
                        height: v
                    })
                } else "auto" == e.height ? v = h.height() : (v = parseFloat(e.height), h.css({
                    height: v
                }));
                a(".camerarelative", _).css({
                    width: u,
                    height: v
                }), a(".imgLoaded", _).each(function() {
                    var t, i, r = a(this),
                        o = r.attr("width"),
                        s = r.attr("height"),
                        n = (r.index(), r.attr("data-alignment")),
                        c = r.attr("data-portrait");
                    if (("undefined" == typeof n || n === !1 || "" === n) && (n = e.alignment), ("undefined" == typeof c || c === !1 || "" === c) && (c = e.portrait), 0 == c || "false" == c)
                        if (u / v > o / s) {
                            var l = u / o,
                                d = .5 * Math.abs(v - s * l);
                            switch (n) {
                                case "topLeft":
                                    t = 0;
                                    break;
                                case "topCenter":
                                    t = 0;
                                    break;
                                case "topRight":
                                    t = 0;
                                    break;
                                case "centerLeft":
                                    t = "-" + d + "px";
                                    break;
                                case "center":
                                    t = "-" + d + "px";
                                    break;
                                case "centerRight":
                                    t = "-" + d + "px";
                                    break;
                                case "bottomLeft":
                                    t = "-" + 2 * d + "px";
                                    break;
                                case "bottomCenter":
                                    t = "-" + 2 * d + "px";
                                    break;
                                case "bottomRight":
                                    t = "-" + 2 * d + "px"
                            }
                            r.css({
                                height: s * l,
                                "margin-left": 0,
                                "margin-right": 0,
                                "margin-top": t,
                                position: "absolute",
                                visibility: "visible",
                                width: u
                            })
                        } else {
                            var l = v / s,
                                d = .5 * Math.abs(u - o * l);
                            switch (n) {
                                case "topLeft":
                                    i = 0;
                                    break;
                                case "topCenter":
                                    i = "-" + d + "px";
                                    break;
                                case "topRight":
                                    i = "-" + 2 * d + "px";
                                    break;
                                case "centerLeft":
                                    i = 0;
                                    break;
                                case "center":
                                    i = "-" + d + "px";
                                    break;
                                case "centerRight":
                                    i = "-" + 2 * d + "px";
                                    break;
                                case "bottomLeft":
                                    i = 0;
                                    break;
                                case "bottomCenter":
                                    i = "-" + d + "px";
                                    break;
                                case "bottomRight":
                                    i = "-" + 2 * d + "px"
                            }
                            r.css({
                                height: v,
                                "margin-left": i,
                                "margin-right": i,
                                "margin-top": 0,
                                position: "absolute",
                                visibility: "visible",
                                width: o * l
                            })
                        } else if (u / v > o / s) {
                        var l = v / s,
                            d = .5 * Math.abs(u - o * l);
                        switch (n) {
                            case "topLeft":
                                i = 0;
                                break;
                            case "topCenter":
                                i = d + "px";
                                break;
                            case "topRight":
                                i = 2 * d + "px";
                                break;
                            case "centerLeft":
                                i = 0;
                                break;
                            case "center":
                                i = d + "px";
                                break;
                            case "centerRight":
                                i = 2 * d + "px";
                                break;
                            case "bottomLeft":
                                i = 0;
                                break;
                            case "bottomCenter":
                                i = d + "px";
                                break;
                            case "bottomRight":
                                i = 2 * d + "px"
                        }
                        r.css({
                            height: v,
                            "margin-left": i,
                            "margin-right": i,
                            "margin-top": 0,
                            position: "absolute",
                            visibility: "visible",
                            width: o * l
                        })
                    } else {
                        var l = u / o,
                            d = .5 * Math.abs(v - s * l);
                        switch (n) {
                            case "topLeft":
                                t = 0;
                                break;
                            case "topCenter":
                                t = 0;
                                break;
                            case "topRight":
                                t = 0;
                                break;
                            case "centerLeft":
                                t = d + "px";
                                break;
                            case "center":
                                t = d + "px";
                                break;
                            case "centerRight":
                                t = d + "px";
                                break;
                            case "bottomLeft":
                                t = 2 * d + "px";
                                break;
                            case "bottomCenter":
                                t = 2 * d + "px";
                                break;
                            case "bottomRight":
                                t = 2 * d + "px"
                        }
                        r.css({
                            height: s * l,
                            "margin-left": 0,
                            "margin-right": 0,
                            "margin-top": t,
                            position: "absolute",
                            visibility: "visible",
                            width: u
                        })
                    }
                })
            }
            var i;
            1 == z ? (clearTimeout(i), i = setTimeout(t, 200)) : t(), z = !0
        }

        function s() {
            a("iframe", p).each(function() {
                a(".camera_caption", p).show();
                var t = a(this),
                    i = t.attr("data-src");
                t.attr("src", i);
                var r = e.imagePath + "blank.gif",
                    o = new Image;
                if (o.src = r, -1 != e.height.indexOf("%")) {
                    var s = Math.round(u / (100 / parseFloat(e.height)));
                    v = "" != e.minHeight && s < parseFloat(e.minHeight) ? parseFloat(e.minHeight) : s
                } else v = "auto" == e.height ? h.height() : parseFloat(e.height);
                t.after(a(o).attr({
                    "class": "imgFake",
                    width: u,
                    height: v
                }));
                var n = t.clone();
                t.remove(), a(o).bind("click", function() {
                    "absolute" == a(this).css("position") ? (a(this).remove(), -1 != i.indexOf("vimeo") || -1 != i.indexOf("youtube") ? -1 != i.indexOf("?") ? autoplay = "&autoplay=1" : autoplay = "?autoplay=1" : -1 != i.indexOf("dailymotion") && (-1 != i.indexOf("?") ? autoplay = "&autoPlay=1" : autoplay = "?autoPlay=1"), n.attr("src", i + autoplay), U = !0) : (a(this).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10
                    }).after(n), n.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 9
                    }))
                })
            })
        }

        function n(a) {
            for (var e, t, i = a.length; i; e = parseInt(Math.random() * i), t = a[--i], a[i] = a[e], a[e] = t);
            return a
        }

        function c() {
            if (a(F).length && !a(R).length) {
                var e, t = a(F).outerWidth(),
                    i = (a("ul > li", F).outerWidth(), a("li.cameracurrent", F).length ? a("li.cameracurrent", F).position() : ""),
                    o = a("ul > li", F).length * a("ul > li", F).outerWidth(),
                    s = a("ul", F).offset().left,
                    n = a("> div", F).offset().left;
                e = 0 > s ? "-" + (n - s) : n - s, 1 == ra && (a("ul", F).width(a("ul > li", F).length * a("ul > li", F).outerWidth()), a(F).length && !a(R).lenght && h.css({
                    marginBottom: a(F).outerHeight()
                }), r(), a("ul", F).width(a("ul > li", F).length * a("ul > li", F).outerWidth()), a(F).length && !a(R).lenght && h.css({
                    marginBottom: a(F).outerHeight()
                })), ra = !1;
                var c = a("li.cameracurrent", F).length ? i.left : "",
                    l = a("li.cameracurrent", F).length ? i.left + a("li.cameracurrent", F).outerWidth() : "";
                c < a("li.cameracurrent", F).outerWidth() && (c = 0), l - e > t ? o > c + t ? a("ul", F).animate({
                    "margin-left": "-" + c + "px"
                }, 500, r) : a("ul", F).animate({
                    "margin-left": "-" + (a("ul", F).outerWidth() - t) + "px"
                }, 500, r) : 0 > c - e ? a("ul", F).animate({
                    "margin-left": "-" + c + "px"
                }, 500, r) : (a("ul", F).css({
                    "margin-left": "auto",
                    "margin-right": "auto"
                }), setTimeout(r, 100))
            }
        }

        function l() {
            aa = 0;
            var t = a(".camera_bar_cont", Y).width(),
                i = a(".camera_bar_cont", Y).height();
            if ("pie" != g) switch (X) {
                case "leftToRight":
                    a("#" + b).css({
                        right: t
                    });
                    break;
                case "rightToLeft":
                    a("#" + b).css({
                        left: t
                    });
                    break;
                case "topToBottom":
                    a("#" + b).css({
                        bottom: i
                    });
                    break;
                case "bottomToTop":
                    a("#" + b).css({
                        top: i
                    })
            } else ta.clearRect(0, 0, e.pieDiameter, e.pieDiameter)
        }

        function d(t) {
            y.addClass("camerasliding"), U = !1;
            var r = parseFloat(a("div.cameraSlide.cameracurrent", _).index());
            if (t > 0) var m = t - 1;
            else if (r == P - 1) var m = 0;
            else var m = r + 1;
            var f = a(".cameraSlide:eq(" + m + ")", _),
                k = a(".cameraSlide:eq(" + (m + 1) + ")", _).addClass("cameranext");
            if (r != m + 1 && k.hide(), a(".cameraContent", p).fadeOut(600), a(".camera_caption", p).show(), a(".camerarelative", f).append(a("> div ", y).eq(m).find("> div.camera_effected")), a(".camera_target_content .cameraContent:eq(" + m + ")", h).append(a("> div ", y).eq(m).find("> div")), a(".imgLoaded", f).length) {
                if (S.length > m + 1 && !a(".imgLoaded", k).length) {
                    var w = S[m + 1],
                        C = new Image;
                    C.src = w, k.prepend(a(C).attr("class", "imgLoaded").css("visibility", "hidden")), C.onload = function() {
                        ya = C.naturalWidth, _a = C.naturalHeight, a(C).attr("data-alignment", q[m + 1]).attr("data-portrait", O[m + 1]), a(C).attr("width", ya), a(C).attr("height", _a), o()
                    }
                }
                e.onLoaded.call(this), a(".camera_loader", h).is(":visible") ? a(".camera_loader", h).fadeOut(400) : (a(".camera_loader", h).css({
                    visibility: "hidden"
                }), a(".camera_loader", h).fadeOut(400, function() {
                    a(".camera_loader", h).css({
                        visibility: "visible"
                    })
                }));
                var x, T, L, M, B, I = e.rows,
                    H = e.cols,
                    A = 1,
                    W = 0,
                    E = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");
                marginLeft = 0, marginTop = 0, opacityOnGrid = 0, 1 == e.opacityOnGrid ? opacityOnGrid = 0 : opacityOnGrid = 1;
                var z = a(" > div", y).eq(m).attr("data-fx");
                if (M = i() && "" != e.mobileFx && "default" != e.mobileFx ? e.mobileFx : "undefined" != typeof z && z !== !1 && "default" !== z ? z : e.fx, "random" == M ? (M = n(E), M = M[0]) : (M = M, M.indexOf(",") > 0 && (M = M.replace(/ /g, ""), M = M.split(","), M = n(M), M = M[0])), dataEasing = a(" > div", y).eq(m).attr("data-easing"), mobileEasing = a(" > div", y).eq(m).attr("data-mobileEasing"), B = i() && "" != e.mobileEasing && "default" != e.mobileEasing ? "undefined" != typeof mobileEasing && mobileEasing !== !1 && "default" !== mobileEasing ? mobileEasing : e.mobileEasing : "undefined" != typeof dataEasing && dataEasing !== !1 && "default" !== dataEasing ? dataEasing : e.easing, x = a(" > div", y).eq(m).attr("data-slideOn"), "undefined" != typeof x && x !== !1) N = x;
                else if ("random" == e.slideOn) {
                    var N = new Array("next", "prev");
                    N = n(N), N = N[0]
                } else N = e.slideOn;
                var Q = a(" > div", y).eq(m).attr("data-time");
                T = "undefined" != typeof Q && Q !== !1 && "" !== Q ? parseFloat(Q) : e.time;
                var K = a(" > div", y).eq(m).attr("data-transPeriod");
                switch (L = "undefined" != typeof K && K !== !1 && "" !== K ? parseFloat(K) : e.transPeriod, a(y).hasClass("camerastarted") || (M = "simpleFade", N = "next", B = "", L = 400, a(y).addClass("camerastarted")), M) {
                    case "simpleFade":
                        H = 1, I = 1;
                        break;
                    case "curtainTopLeft":
                        H = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                        break;
                    case "curtainTopRight":
                        H = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                        break;
                    case "curtainBottomLeft":
                        H = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                        break;
                    case "curtainBottomRight":
                        H = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                        break;
                    case "curtainSliceLeft":
                        H = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                        break;
                    case "curtainSliceRight":
                        H = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                        break;
                    case "blindCurtainTopLeft":
                        I = 0 == e.slicedRows ? e.rows : e.slicedRows, H = 1;
                        break;
                    case "blindCurtainTopRight":
                        I = 0 == e.slicedRows ? e.rows : e.slicedRows, H = 1;
                        break;
                    case "blindCurtainBottomLeft":
                        I = 0 == e.slicedRows ? e.rows : e.slicedRows, H = 1;
                        break;
                    case "blindCurtainBottomRight":
                        I = 0 == e.slicedRows ? e.rows : e.slicedRows, H = 1;
                        break;
                    case "blindCurtainSliceTop":
                        I = 0 == e.slicedRows ? e.rows : e.slicedRows, H = 1;
                        break;
                    case "blindCurtainSliceBottom":
                        I = 0 == e.slicedRows ? e.rows : e.slicedRows, H = 1;
                        break;
                    case "stampede":
                        W = "-" + L;
                        break;
                    case "mosaic":
                        W = e.gridDifference;
                        break;
                    case "mosaicReverse":
                        W = e.gridDifference;
                        break;
                    case "mosaicRandom":
                        break;
                    case "mosaicSpiral":
                        W = e.gridDifference, A = 1.7;
                        break;
                    case "mosaicSpiralReverse":
                        W = e.gridDifference, A = 1.7;
                        break;
                    case "topLeftBottomRight":
                        W = e.gridDifference, A = 6;
                        break;
                    case "bottomRightTopLeft":
                        W = e.gridDifference, A = 6;
                        break;
                    case "bottomLeftTopRight":
                        W = e.gridDifference, A = 6;
                        break;
                    case "topRightBottomLeft":
                        W = e.gridDifference, A = 6;
                        break;
                    case "scrollLeft":
                        H = 1, I = 1;
                        break;
                    case "scrollRight":
                        H = 1, I = 1;
                        break;
                    case "scrollTop":
                        H = 1, I = 1;
                        break;
                    case "scrollBottom":
                        H = 1, I = 1;
                        break;
                    case "scrollHorz":
                        H = 1, I = 1
                }
                for (var J, Z, $ = 0, ia = I * H, ra = u - Math.floor(u / H) * H, oa = v - Math.floor(v / I) * I, sa = 0, na = 0, ca = new Array, la = new Array, da = new Array; ia > $;) {
                    ca.push($), la.push($), D.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                    var ma = a(".cameraappended:eq(" + $ + ")", _);
                    "scrollLeft" == M || "scrollRight" == M || "scrollTop" == M || "scrollBottom" == M || "scrollHorz" == M ? V.eq(m).clone().show().appendTo(ma) : "next" == N ? V.eq(m).clone().show().appendTo(ma) : V.eq(r).clone().show().appendTo(ma), J = ra > $ % H ? 1 : 0, $ % H == 0 && (sa = 0), Z = Math.floor($ / H) < oa ? 1 : 0, ma.css({
                        height: Math.floor(v / I + Z + 1),
                        left: sa,
                        top: na,
                        width: Math.floor(u / H + J + 1)
                    }), a("> .cameraSlide", ma).css({
                        height: v,
                        "margin-left": "-" + sa + "px",
                        "margin-top": "-" + na + "px",
                        width: u
                    }), sa = sa + ma.width() - 1, $ % H == H - 1 && (na = na + ma.height() - 1), $++
                }
                switch (M) {
                    case "curtainTopLeft":
                        break;
                    case "curtainBottomLeft":
                        break;
                    case "curtainSliceLeft":
                        break;
                    case "curtainTopRight":
                        ca = ca.reverse();
                        break;
                    case "curtainBottomRight":
                        ca = ca.reverse();
                        break;
                    case "curtainSliceRight":
                        ca = ca.reverse();
                        break;
                    case "blindCurtainTopLeft":
                        break;
                    case "blindCurtainBottomLeft":
                        ca = ca.reverse();
                        break;
                    case "blindCurtainSliceTop":
                        break;
                    case "blindCurtainTopRight":
                        break;
                    case "blindCurtainBottomRight":
                        ca = ca.reverse();
                        break;
                    case "blindCurtainSliceBottom":
                        ca = ca.reverse();
                        break;
                    case "stampede":
                        ca = n(ca);
                        break;
                    case "mosaic":
                        break;
                    case "mosaicReverse":
                        ca = ca.reverse();
                        break;
                    case "mosaicRandom":
                        ca = n(ca);
                        break;
                    case "mosaicSpiral":
                        var ha, pa, fa, ga = I / 2,
                            ua = 0;
                        for (fa = 0; ga > fa; fa++) {
                            for (pa = fa, ha = fa; H - fa - 1 > ha; ha++) da[ua++] = pa * H + ha;
                            for (ha = H - fa - 1, pa = fa; I - fa - 1 > pa; pa++) da[ua++] = pa * H + ha;
                            for (pa = I - fa - 1, ha = H - fa - 1; ha > fa; ha--) da[ua++] = pa * H + ha;
                            for (ha = fa, pa = I - fa - 1; pa > fa; pa--) da[ua++] = pa * H + ha
                        }
                        ca = da;
                        break;
                    case "mosaicSpiralReverse":
                        var ha, pa, fa, ga = I / 2,
                            ua = ia - 1;
                        for (fa = 0; ga > fa; fa++) {
                            for (pa = fa, ha = fa; H - fa - 1 > ha; ha++) da[ua--] = pa * H + ha;
                            for (ha = H - fa - 1, pa = fa; I - fa - 1 > pa; pa++) da[ua--] = pa * H + ha;
                            for (pa = I - fa - 1, ha = H - fa - 1; ha > fa; ha--) da[ua--] = pa * H + ha;
                            for (ha = fa, pa = I - fa - 1; pa > fa; pa--) da[ua--] = pa * H + ha
                        }
                        ca = da;
                        break;
                    case "topLeftBottomRight":
                        for (var pa = 0; I > pa; pa++)
                            for (var ha = 0; H > ha; ha++) da.push(ha + pa);
                        la = da;
                        break;
                    case "bottomRightTopLeft":
                        for (var pa = 0; I > pa; pa++)
                            for (var ha = 0; H > ha; ha++) da.push(ha + pa);
                        la = da.reverse();
                        break;
                    case "bottomLeftTopRight":
                        for (var pa = I; pa > 0; pa--)
                            for (var ha = 0; H > ha; ha++) da.push(ha + pa);
                        la = da;
                        break;
                    case "topRightBottomLeft":
                        for (var pa = 0; I > pa; pa++)
                            for (var ha = H; ha > 0; ha--) da.push(ha + pa);
                        la = da
                }
                a.each(ca, function(t, i) {
                    function o() {
                        if (a(this).addClass("cameraeased"), a(".cameraeased", _).length >= 0 && a(F).css({
                                visibility: "visible"
                            }), a(".cameraeased", _).length == ia) {
                            c(), a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", p).each(function() {
                                a(this).css("visibility", "hidden")
                            }), V.eq(m).show().css("z-index", "999").removeClass("cameranext").addClass("cameracurrent"), V.eq(r).css("z-index", "1").removeClass("cameracurrent"), a(".cameraContent", p).eq(m).addClass("cameracurrent"), r >= 0 && a(".cameraContent", p).eq(r).removeClass("cameracurrent"), e.onEndTransition.call(this), "hide" != a("> div", y).eq(m).attr("data-video") && a(".cameraContent.cameracurrent .imgFake", p).length && a(".cameraContent.cameracurrent .imgFake", p).click();
                            var t = V.eq(m).find(".fadeIn").length,
                                i = a(".cameraContent", p).eq(m).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
                            0 != t && a(".cameraSlide.cameracurrent .fadeIn", p).each(function() {
                                if ("" != a(this).attr("data-easing")) var e = a(this).attr("data-easing");
                                else var e = B;
                                var i = a(this);
                                if ("undefined" == typeof i.attr("data-outerWidth") || i.attr("data-outerWidth") === !1 || "" === i.attr("data-outerWidth")) {
                                    var r = i.outerWidth();
                                    i.attr("data-outerWidth", r)
                                } else var r = i.attr("data-outerWidth");
                                if ("undefined" == typeof i.attr("data-outerHeight") || i.attr("data-outerHeight") === !1 || "" === i.attr("data-outerHeight")) {
                                    var o = i.outerHeight();
                                    i.attr("data-outerHeight", o)
                                } else var o = i.attr("data-outerHeight");
                                var s = i.position(),
                                    n = (s.left, s.top, i.attr("class")),
                                    c = i.index();
                                i.parents(".camerarelative").outerHeight(), i.parents(".camerarelative").outerWidth(); - 1 != n.indexOf("fadeIn") ? i.animate({
                                    opacity: 0
                                }, 0).css("visibility", "visible").delay(T / t * (.1 * (c - 1))).animate({
                                    opacity: 1
                                }, T / t * .15, e) : i.css("visibility", "visible")
                            }), a(".cameraContent.cameracurrent", p).show(), 0 != i && a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", p).each(function() {
                                if ("" != a(this).attr("data-easing")) var e = a(this).attr("data-easing");
                                else var e = B;
                                var t = a(this),
                                    r = t.position(),
                                    o = (r.left, r.top, t.attr("class")),
                                    s = t.index(),
                                    n = t.outerHeight(); - 1 != o.indexOf("moveFromLeft") ? (t.css({
                                    left: "-" + u + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    left: r.left
                                }, T / i * .15, e)) : -1 != o.indexOf("moveFromRight") ? (t.css({
                                    left: u + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    left: r.left
                                }, T / i * .15, e)) : -1 != o.indexOf("moveFromTop") ? (t.css({
                                    top: "-" + v + "px",
                                    bottom: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    top: r.top
                                }, T / i * .15, e, function() {
                                    t.css({
                                        top: "auto",
                                        bottom: 0
                                    })
                                })) : -1 != o.indexOf("moveFromBottom") ? (t.css({
                                    top: v + "px",
                                    bottom: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    top: r.top
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeFromLeft") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    left: "-" + u + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    left: r.left,
                                    opacity: 1
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeFromRight") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    left: u + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    left: r.left,
                                    opacity: 1
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeFromTop") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    top: "-" + v + "px",
                                    bottom: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    top: r.top,
                                    opacity: 1
                                }, T / i * .15, e, function() {
                                    t.css({
                                        top: "auto",
                                        bottom: 0
                                    })
                                })) : -1 != o.indexOf("fadeFromBottom") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    bottom: "-" + n + "px"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    bottom: "0",
                                    opacity: 1
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeIn") ? t.animate({
                                    opacity: 0
                                }, 0).css("visibility", "visible").delay(T / i * (.1 * (s - 1))).animate({
                                    opacity: 1
                                }, T / i * .15, e) : t.css("visibility", "visible")
                            }), a(".cameraappended", _).remove(), y.removeClass("camerasliding"), V.eq(r).hide();
                            var o, n = a(".camera_bar_cont", Y).width(),
                                h = a(".camera_bar_cont", Y).height();
                            o = "pie" != g ? .05 : .005, a("#" + b).animate({
                                opacity: e.loaderOpacity
                            }, 200), G = setInterval(function() {
                                if (y.hasClass("stopped") && clearInterval(G), "pie" != g) switch (1.002 >= aa && !y.hasClass("stopped") && !y.hasClass("paused") && !y.hasClass("hovered") ? aa += o : 1 >= aa && (y.hasClass("stopped") || y.hasClass("paused") || y.hasClass("stopped") || y.hasClass("hovered")) ? aa = aa : y.hasClass("stopped") || y.hasClass("paused") || y.hasClass("hovered") || (clearInterval(G), s(), a("#" + b).animate({
                                    opacity: 0
                                }, 200, function() {
                                    clearTimeout(j), j = setTimeout(l, f), d(), e.onStartLoading.call(this)
                                })), X) {
                                    case "leftToRight":
                                        a("#" + b).animate({
                                            right: n - n * aa
                                        }, T * o, "linear");
                                        break;
                                    case "rightToLeft":
                                        a("#" + b).animate({
                                            left: n - n * aa
                                        }, T * o, "linear");
                                        break;
                                    case "topToBottom":
                                        a("#" + b).animate({
                                            bottom: h - h * aa
                                        }, T * o, "linear");
                                        break;
                                    case "bottomToTop":
                                        a("#" + b).animate({
                                            bottom: h - h * aa
                                        }, T * o, "linear")
                                } else ea = aa, ta.clearRect(0, 0, e.pieDiameter, e.pieDiameter), ta.globalCompositeOperation = "destination-over", ta.beginPath(), ta.arc(e.pieDiameter / 2, e.pieDiameter / 2, e.pieDiameter / 2 - e.loaderStroke, 0, 2 * Math.PI, !1), ta.lineWidth = e.loaderStroke, ta.strokeStyle = e.loaderBgColor, ta.stroke(), ta.closePath(), ta.globalCompositeOperation = "source-over", ta.beginPath(), ta.arc(e.pieDiameter / 2, e.pieDiameter / 2, e.pieDiameter / 2 - e.loaderStroke, 0, 2 * Math.PI * ea, !1), ta.lineWidth = e.loaderStroke - 2 * e.loaderPadding, ta.strokeStyle = e.loaderColor, ta.stroke(), ta.closePath(), 1.002 >= aa && !y.hasClass("stopped") && !y.hasClass("paused") && !y.hasClass("hovered") ? aa += o : 1 >= aa && (y.hasClass("stopped") || y.hasClass("paused") || y.hasClass("hovered")) ? aa = aa : y.hasClass("stopped") || y.hasClass("paused") || y.hasClass("hovered") || (clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", Y).animate({
                                    opacity: 0
                                }, 200, function() {
                                    clearTimeout(j), j = setTimeout(l, f), d(), e.onStartLoading.call(this)
                                }))
                            }, T * o)
                        }
                    }
                    switch (J = ra > i % H ? 1 : 0, i % H == 0 && (sa = 0), Z = Math.floor(i / H) < oa ? 1 : 0, M) {
                        case "simpleFade":
                            height = v, width = u, opacityOnGrid = 0;
                            break;
                        case "curtainTopLeft":
                            height = 0, width = Math.floor(u / H + J + 1), marginTop = "-" + Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "curtainTopRight":
                            height = 0, width = Math.floor(u / H + J + 1), marginTop = "-" + Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "curtainBottomLeft":
                            height = 0, width = Math.floor(u / H + J + 1), marginTop = Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "curtainBottomRight":
                            height = 0, width = Math.floor(u / H + J + 1), marginTop = Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "curtainSliceLeft":
                            height = 0, width = Math.floor(u / H + J + 1), i % 2 == 0 ? marginTop = Math.floor(v / I + Z + 1) + "px" : marginTop = "-" + Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "curtainSliceRight":
                            height = 0, width = Math.floor(u / H + J + 1), i % 2 == 0 ? marginTop = Math.floor(v / I + Z + 1) + "px" : marginTop = "-" + Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "blindCurtainTopLeft":
                            height = Math.floor(v / I + Z + 1), width = 0, marginLeft = "-" + Math.floor(u / H + J + 1) + "px";
                            break;
                        case "blindCurtainTopRight":
                            height = Math.floor(v / I + Z + 1), width = 0, marginLeft = Math.floor(u / H + J + 1) + "px";
                            break;
                        case "blindCurtainBottomLeft":
                            height = Math.floor(v / I + Z + 1), width = 0, marginLeft = "-" + Math.floor(u / H + J + 1) + "px";
                            break;
                        case "blindCurtainBottomRight":
                            height = Math.floor(v / I + Z + 1), width = 0, marginLeft = Math.floor(u / H + J + 1) + "px";
                            break;
                        case "blindCurtainSliceBottom":
                            height = Math.floor(v / I + Z + 1), width = 0, i % 2 == 0 ? marginLeft = "-" + Math.floor(u / H + J + 1) + "px" : marginLeft = Math.floor(u / H + J + 1) + "px";
                            break;
                        case "blindCurtainSliceTop":
                            height = Math.floor(v / I + Z + 1), width = 0, i % 2 == 0 ? marginLeft = "-" + Math.floor(u / H + J + 1) + "px" : marginLeft = Math.floor(u / H + J + 1) + "px";
                            break;
                        case "stampede":
                            height = 0, width = 0, marginLeft = .2 * u * (t % H - (H - Math.floor(H / 2))) + "px", marginTop = .2 * v * (Math.floor(t / H) + 1 - (I - Math.floor(I / 2))) + "px";
                            break;
                        case "mosaic":
                            height = 0, width = 0;
                            break;
                        case "mosaicReverse":
                            height = 0, width = 0, marginLeft = Math.floor(u / H + J + 1) + "px", marginTop = Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "mosaicRandom":
                            height = 0, width = 0, marginLeft = .5 * Math.floor(u / H + J + 1) + "px", marginTop = .5 * Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "mosaicSpiral":
                            height = 0, width = 0, marginLeft = .5 * Math.floor(u / H + J + 1) + "px", marginTop = .5 * Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "mosaicSpiralReverse":
                            height = 0, width = 0, marginLeft = .5 * Math.floor(u / H + J + 1) + "px", marginTop = .5 * Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "topLeftBottomRight":
                            height = 0, width = 0;
                            break;
                        case "bottomRightTopLeft":
                            height = 0, width = 0, marginLeft = Math.floor(u / H + J + 1) + "px", marginTop = Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "bottomLeftTopRight":
                            height = 0, width = 0, marginLeft = 0, marginTop = Math.floor(v / I + Z + 1) + "px";
                            break;
                        case "topRightBottomLeft":
                            height = 0, width = 0, marginLeft = Math.floor(u / H + J + 1) + "px", marginTop = 0;
                            break;
                        case "scrollRight":
                            height = v, width = u, marginLeft = -u;
                            break;
                        case "scrollLeft":
                            height = v, width = u, marginLeft = u;
                            break;
                        case "scrollTop":
                            height = v, width = u, marginTop = v;
                            break;
                        case "scrollBottom":
                            height = v, width = u, marginTop = -v;
                            break;
                        case "scrollHorz":
                            height = v, width = u, 0 == r && m == P - 1 ? marginLeft = -u : m > r || r == P - 1 && 0 == m ? marginLeft = u : marginLeft = -u
                    }
                    var n = a(".cameraappended:eq(" + i + ")", _);
                    "undefined" != typeof G && (clearInterval(G), clearTimeout(j), j = setTimeout(l, L + W)), a(R).length && (a(".camera_pag li", h).removeClass("cameracurrent"), a(".camera_pag li", h).eq(m).addClass("cameracurrent")), a(F).length && (a("li", F).removeClass("cameracurrent"), a("li", F).eq(m).addClass("cameracurrent"), a("li", F).not(".cameracurrent").find("img").animate({
                        opacity: .5
                    }, 0), a("li.cameracurrent img", F).animate({
                        opacity: 1
                    }, 0), a("li", F).hover(function() {
                        a("img", this).stop(!0, !1).animate({
                            opacity: 1
                        }, 150)
                    }, function() {
                        a(this).hasClass("cameracurrent") || a("img", this).stop(!0, !1).animate({
                            opacity: .5
                        }, 150)
                    }));
                    var f = parseFloat(L) + parseFloat(W);
                    "scrollLeft" == M || "scrollRight" == M || "scrollTop" == M || "scrollBottom" == M || "scrollHorz" == M ? (e.onStartTransition.call(this), f = 0, n.delay((L + W) / ia * la[t] * A * .5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width
                    }).animate({
                        height: Math.floor(v / I + Z + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        width: Math.floor(u / H + J + 1)
                    }, L - W, B, o), V.eq(r).delay((L + W) / ia * la[t] * A * .5).animate({
                        "margin-left": -1 * marginLeft,
                        "margin-top": -1 * marginTop
                    }, L - W, B, function() {
                        a(this).css({
                            "margin-top": 0,
                            "margin-left": 0
                        })
                    })) : (e.onStartTransition.call(this), f = parseFloat(L) + parseFloat(W), "next" == N ? n.delay((L + W) / ia * la[t] * A * .5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }).animate({
                        height: Math.floor(v / I + Z + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(u / H + J + 1)
                    }, L - W, B, o) : (V.eq(m).show().css("z-index", "999").addClass("cameracurrent"), V.eq(r).css("z-index", "1").removeClass("cameracurrent"), a(".cameraContent", p).eq(m).addClass("cameracurrent"), a(".cameraContent", p).eq(r).removeClass("cameracurrent"), n.delay((L + W) / ia * la[t] * A * .5).css({
                        display: "block",
                        height: Math.floor(v / I + Z + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(u / H + J + 1)
                    }).animate({
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }, L - W, B, o)))
                })
            } else {
                var va = S[m],
                    ba = new Image;
                ba.src = va, f.css("visibility", "hidden"), f.prepend(a(ba).attr("class", "imgLoaded").css("visibility", "hidden"));
                var ya, _a;
                a(ba).get(0).complete && "0" != ya && "0" != _a && "undefined" != typeof ya && ya !== !1 && "undefined" != typeof _a && _a !== !1 || (a(".camera_loader", h).delay(500).fadeIn(400), ba.onload = function() {
                    ya = ba.naturalWidth, _a = ba.naturalHeight, a(ba).attr("data-alignment", q[m]).attr("data-portrait", O[m]), a(ba).attr("width", ya), a(ba).attr("height", _a), _.find(".cameraSlide_" + m).hide().css("visibility", "visible"), o(), d(m + 1)
                })
            }
        }
        var m = {
            alignment: "center",
            autoAdvance: 0,
            mobileAutoAdvance: 0,
            barDirection: "leftToRight",
            barPosition: "bottom",
            cols: 6,
            easing: "easeInOutExpo",
            mobileEasing: "",
            fx: "random",
            mobileFx: "",
            gridDifference: 250,
            height: "50%",
            imagePath: "images/",
            hover: !0,
            loader: "pie",
            loaderColor: "#000",
            loaderBgColor: "#fff",
            loaderOpacity: .5,
            loaderPadding: 0,
            loaderStroke: 5,
            minHeight: "200px",
            navigation: !0,
            navigationHover: !0,
            mobileNavHover: !0,
            opacityOnGrid: !1,
            overlayer: !0,
            pagination: !0,
            playPause: !0,
            pauseOnClick: !0,
            pieDiameter: 38,
            piePosition: "rightTop",
            portrait: !1,
            rows: 4,
            slicedCols: 12,
            slicedRows: 8,
            slideOn: "random",
            thumbnails: !1,
            time: 7e3,
            transPeriod: 1500,
            onEndTransition: function() {},
            onLoaded: function() {},
            onStartLoading: function() {},
            onStartTransition: function() {}
        };
        a.support.borderRadius = !1, a.each(["borderRadius", "BorderRadius", "MozBorderRadius", "WebkitBorderRadius", "OBorderRadius", "KhtmlBorderRadius"], function() {
            void 0 !== document.body.style[this] && (a.support.borderRadius = !0)
        });
        var e = a.extend({}, m, e),
            h = a(this).addClass("camera_wrap");
        h.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
        var p = a(".camera_fakehover", h),
            f = h;
        p.append('<div class="camera_target"></div>'), 1 == e.overlayer && p.append('<div class="camera_overlayer"></div>'), p.append('<div class="camera_target_content"></div>');
        var g;
        g = "pie" != e.loader || a.support.borderRadius ? e.loader : "bar", "pie" == g ? p.append('<div class="camera_pie"></div>') : "bar" == g ? p.append('<div class="camera_bar"></div>') : p.append('<div class="camera_bar" style="display:none"></div>'), 1 == e.playPause && p.append('<div class="camera_commands"></div>'), 1 == e.navigation && p.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'), 1 == e.thumbnails && h.append('<div class="camera_thumbs_cont" />'), 1 == e.thumbnails && 1 != e.pagination && a(".camera_thumbs_cont", h).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'), 1 == e.pagination && h.append('<div class="camera_pag"></div>'), h.append('<div class="camera_loader"></div>'), a(".camera_caption", h).each(function() {
            a(this).wrapInner("<div />")
        });
        var u, v, b = "pie_" + h.index(),
            y = a(".camera_src", h),
            _ = a(".camera_target", h),
            k = a(".camera_target_content", h),
            w = a(".camera_pie", h),
            C = a(".camera_bar", h),
            x = a(".camera_prev", h),
            T = a(".camera_next", h),
            L = a(".camera_commands", h),
            R = a(".camera_pag", h),
            F = a(".camera_thumbs_cont", h),
            S = new Array;
        a("> div", y).each(function() {
            S.push(a(this).attr("data-src"))
        });
        var M = new Array;
        a("> div", y).each(function() {
            a(this).attr("data-link") ? M.push(a(this).attr("data-link")) : M.push("")
        });
        var B = new Array;
        a("> div", y).each(function() {
            a(this).attr("data-target") ? B.push(a(this).attr("data-target")) : B.push("")
        });
        var O = new Array;
        a("> div", y).each(function() {
            a(this).attr("data-portrait") ? O.push(a(this).attr("data-portrait")) : O.push("")
        });
        var q = new Array;
        a("> div", y).each(function() {
            a(this).attr("data-alignment") ? q.push(a(this).attr("data-alignment")) : q.push("")
        });
        var I = new Array;
        a("> div", y).each(function() {
            a(this).attr("data-thumb") ? I.push(a(this).attr("data-thumb")) : I.push("")
        });
        var P = S.length;
        a(k).append('<div class="cameraContents" />');
        var H;
        for (H = 0; P > H; H++)
            if (a(".cameraContents", k).append('<div class="cameraContent" />'), "" != M[H]) {
                var A = a("> div ", y).eq(H).attr("data-box");
                A = "undefined" != typeof A && A !== !1 && "" != A ? 'data-box="' + a("> div ", y).eq(H).attr("data-box") + '"' : "", a(".camera_target_content .cameraContent:eq(" + H + ")", h).append('<a class="camera_link" href="' + M[H] + '" ' + A + ' target="' + B[H] + '"></a>')
            }
        a(".camera_caption", h).each(function() {
            var e = a(this).parent().index(),
                t = h.find(".cameraContent").eq(e);
            a(this).appendTo(t)
        }), _.append('<div class="cameraCont" />');
        var W, D = a(".cameraCont", h);
        for (W = 0; P > W; W++) {
            D.append('<div class="cameraSlide cameraSlide_' + W + '" />');
            var E = a("> div:eq(" + W + ")", y);
            _.find(".cameraSlide_" + W).clone(E)
        }
        a(window).bind("load resize pageshow", function() {
            c(), r()
        }), D.append('<div class="cameraSlide cameraSlide_' + W + '" />');
        var z;
        h.show();
        var N, u = _.width(),
            v = _.height();
        a(window).bind("resize pageshow", function() {
            1 == z && o(), a("ul", F).animate({
                "margin-top": 0
            }, 0, c), y.hasClass("paused") || (y.addClass("paused"), a(".camera_stop", Y).length ? (a(".camera_stop", Y).hide(), a(".camera_play", Y).show(), "none" != g && a("#" + b).hide()) : "none" != g && a("#" + b).hide(), clearTimeout(N), N = setTimeout(function() {
                y.removeClass("paused"), a(".camera_play", Y).length ? (a(".camera_play", Y).hide(), a(".camera_stop", Y).show(), "none" != g && a("#" + b).fadeIn()) : "none" != g && a("#" + b).fadeIn()
            }, 1500))
        });
        var G, j, Q, K, L, R, J, U;
        if (Q = i() && "" != e.mobileAutoAdvance ? e.mobileAutoAdvance : e.autoAdvance, 0 == Q && y.addClass("paused"), K = i() && "" != e.mobileNavHover ? e.mobileNavHover : e.navigationHover, 0 != y.length) {
            var V = a(".cameraSlide", _);
            V.wrapInner('<div class="camerarelative" />');
            var X = e.barDirection,
                Y = h;
            a("iframe", p).each(function() {
                var e = a(this),
                    t = e.attr("src");
                e.attr("data-src", t);
                var i = e.parent().index(".camera_src > div");
                a(".camera_target_content .cameraContent:eq(" + i + ")", h).append(e)
            }), s(), 1 == e.hover && (i() || p.hover(function() {
                y.addClass("hovered")
            }, function() {
                y.removeClass("hovered")
            })), 1 == K && (a(x, h).animate({
                opacity: 0
            }, 0), a(T, h).animate({
                opacity: 0
            }, 0), a(L, h).animate({
                opacity: 0
            }, 0), i() ? (a(document).on("vmouseover", f, function() {
                a(x, h).animate({
                    opacity: 1
                }, 200), a(T, h).animate({
                    opacity: 1
                }, 200), a(L, h).animate({
                    opacity: 1
                }, 200)
            }), a(document).on("vmouseout", f, function() {
                a(x, h).delay(500).animate({
                    opacity: 0
                }, 200), a(T, h).delay(500).animate({
                    opacity: 0
                }, 200), a(L, h).delay(500).animate({
                    opacity: 0
                }, 200)
            })) : p.hover(function() {
                a(x, h).animate({
                    opacity: 1
                }, 200), a(T, h).animate({
                    opacity: 1
                }, 200), a(L, h).animate({
                    opacity: 1
                }, 200)
            }, function() {
                a(x, h).animate({
                    opacity: 0
                }, 200), a(T, h).animate({
                    opacity: 0
                }, 200), a(L, h).animate({
                    opacity: 0
                }, 200)
            })), Y.on("click", ".camera_stop", function() {
                Q = !1, y.addClass("paused"), a(".camera_stop", Y).length ? (a(".camera_stop", Y).hide(), a(".camera_play", Y).show(), "none" != g && a("#" + b).hide()) : "none" != g && a("#" + b).hide()
            }), Y.on("click", ".camera_play", function() {
                Q = !0, y.removeClass("paused"), a(".camera_play", Y).length ? (a(".camera_play", Y).hide(), a(".camera_stop", Y).show(), "none" != g && a("#" + b).show()) : "none" != g && a("#" + b).show()
            }), 1 == e.pauseOnClick && a(".camera_target_content", p).mouseup(function() {
                Q = !1, y.addClass("paused"), a(".camera_stop", Y).hide(), a(".camera_play", Y).show(), a("#" + b).hide()
            }), a(".cameraContent, .imgFake", p).hover(function() {
                J = !0
            }, function() {
                J = !1
            }), a(".cameraContent, .imgFake", p).bind("click", function() {
                1 == U && 1 == J && (Q = !1, a(".camera_caption", p).hide(), y.addClass("paused"), a(".camera_stop", Y).hide(), a(".camera_play", Y).show(), a("#" + b).hide())
            })
        }
        if ("pie" != g) {
            C.append('<span class="camera_bar_cont" />'), a(".camera_bar_cont", C).animate({
                opacity: e.loaderOpacity
            }, 0).css({
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                "background-color": e.loaderBgColor
            }).append('<span id="' + b + '" />'), a("#" + b).animate({
                opacity: 0
            }, 0);
            var Z = a("#" + b);
            switch (Z.css({
                position: "absolute",
                "background-color": e.loaderColor
            }), e.barPosition) {
                case "left":
                    C.css({
                        right: "auto",
                        width: e.loaderStroke
                    });
                    break;
                case "right":
                    C.css({
                        left: "auto",
                        width: e.loaderStroke
                    });
                    break;
                case "top":
                    C.css({
                        bottom: "auto",
                        height: e.loaderStroke
                    });
                    break;
                case "bottom":
                    C.css({
                        top: "auto",
                        height: e.loaderStroke
                    })
            }
            switch (X) {
                case "leftToRight":
                    Z.css({
                        left: 0,
                        right: 0,
                        top: e.loaderPadding,
                        bottom: e.loaderPadding
                    });
                    break;
                case "rightToLeft":
                    Z.css({
                        left: 0,
                        right: 0,
                        top: e.loaderPadding,
                        bottom: e.loaderPadding
                    });
                    break;
                case "topToBottom":
                    Z.css({
                        left: e.loaderPadding,
                        right: e.loaderPadding,
                        top: 0,
                        bottom: 0
                    });
                    break;
                case "bottomToTop":
                    Z.css({
                        left: e.loaderPadding,
                        right: e.loaderPadding,
                        top: 0,
                        bottom: 0
                    })
            }
        } else {
            w.append('<canvas id="' + b + '"></canvas>');
            var Z = document.getElementById(b);
            Z.setAttribute("width", e.pieDiameter), Z.setAttribute("height", e.pieDiameter);
            var $;
            switch (e.piePosition) {
                case "leftTop":
                    $ = "left:0; top:0;";
                    break;
                case "rightTop":
                    $ = "right:0; top:0;";
                    break;
                case "leftBottom":
                    $ = "left:0; bottom:0;";
                    break;
                case "rightBottom":
                    $ = "right:0; bottom:0;"
            }
            Z.setAttribute("style", "position:absolute; z-index:1002; " + $);
            var aa, ea;
            if (Z && Z.getContext) {
                var ta = Z.getContext("2d");
                ta.rotate(1.5 * Math.PI), ta.translate(-e.pieDiameter, 0)
            }
        }
        if (("none" == g || 0 == Q) && (a("#" + b).hide(), a(".camera_canvas_wrap", Y).hide()),
            a(R).length) {
            a(R).append('<ul class="camera_pag_ul" />');
            var ia;
            for (ia = 0; P > ia; ia++) a(".camera_pag_ul", h).append('<li class="pag_nav_' + ia + '" style="position:relative; z-index:1002"><span><span>' + ia + "</span></span></li>");
            a(".camera_pag_ul li", h).hover(function() {
                if (a(this).addClass("camera_hover"), a(".camera_thumb", this).length) {
                    var e = a(".camera_thumb", this).outerWidth(),
                        t = a(".camera_thumb", this).outerHeight(),
                        i = a(this).outerWidth();
                    a(".camera_thumb", this).show().css({
                        top: "-" + t + "px",
                        left: "-" + (e - i) / 2 + "px"
                    }).animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200), a(".thumb_arrow", this).show().animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200)
                }
            }, function() {
                a(this).removeClass("camera_hover"), a(".camera_thumb", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function() {
                    a(this).css({
                        marginTop: "5px"
                    }).hide()
                }), a(".thumb_arrow", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function() {
                    a(this).css({
                        marginTop: "5px"
                    }).hide()
                })
            })
        }
        if (a(F).length) {
            a(R).length ? (a.each(I, function(e, t) {
                if ("" != a("> div", y).eq(e).attr("data-thumb")) {
                    var i = a("> div", y).eq(e).attr("data-thumb"),
                        r = new Image;
                    r.src = i, a("li.pag_nav_" + e, R).append(a(r).attr("class", "camera_thumb").css({
                        position: "absolute"
                    }).animate({
                        opacity: 0
                    }, 0)), a("li.pag_nav_" + e + " > img", R).after('<div class="thumb_arrow" />'), a("li.pag_nav_" + e + " > .thumb_arrow", R).animate({
                        opacity: 0
                    }, 0)
                }
            }), h.css({
                marginBottom: a(R).outerHeight()
            })) : (a(F).append("<div />"), a(F).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'), a("> div", F).append("<ul />"), a.each(I, function(e, t) {
                if ("" != a("> div", y).eq(e).attr("data-thumb")) {
                    var i = a("> div", y).eq(e).attr("data-thumb"),
                        r = new Image;
                    r.src = i, a("ul", F).append('<li class="pix_thumb pix_thumb_' + e + '" />'), a("li.pix_thumb_" + e, F).append(a(r).attr("class", "camera_thumb"))
                }
            }))
        } else !a(F).length && a(R).length && h.css({
            marginBottom: a(R).outerHeight()
        });
        var ra = !0;
        a(L).length && (a(L).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'), 1 == Q ? (a(".camera_play", Y).hide(), a(".camera_stop", Y).show()) : (a(".camera_stop", Y).hide(), a(".camera_play", Y).show())), l(), a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", p).each(function() {
            a(this).css("visibility", "hidden")
        }), e.onStartLoading.call(this), d(), a(x).length && a(x).click(function() {
            if (!y.hasClass("camerasliding")) {
                var t = parseFloat(a(".cameraSlide.cameracurrent", _).index());
                clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", h).animate({
                    opacity: 0
                }, 0), l(), d(0 != t ? t : P), e.onStartLoading.call(this)
            }
        }), a(T).length && a(T).click(function() {
            if (!y.hasClass("camerasliding")) {
                var t = parseFloat(a(".cameraSlide.cameracurrent", _).index());
                clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", Y).animate({
                    opacity: 0
                }, 0), l(), d(t == P - 1 ? 1 : t + 2), e.onStartLoading.call(this)
            }
        }), i() && (p.bind("swipeleft", function(t) {
            if (!y.hasClass("camerasliding")) {
                var i = parseFloat(a(".cameraSlide.cameracurrent", _).index());
                clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", Y).animate({
                    opacity: 0
                }, 0), l(), d(i == P - 1 ? 1 : i + 2), e.onStartLoading.call(this)
            }
        }), p.bind("swiperight", function(t) {
            if (!y.hasClass("camerasliding")) {
                var i = parseFloat(a(".cameraSlide.cameracurrent", _).index());
                clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", Y).animate({
                    opacity: 0
                }, 0), l(), d(0 != i ? i : P), e.onStartLoading.call(this)
            }
        })), a(R).length && a(".camera_pag li", h).click(function() {
            if (!y.hasClass("camerasliding")) {
                var t = parseFloat(a(this).index()),
                    i = parseFloat(a(".cameraSlide.cameracurrent", _).index());
                t != i && (clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", Y).animate({
                    opacity: 0
                }, 0), l(), d(t + 1), e.onStartLoading.call(this))
            }
        }), a(F).length && (a(".pix_thumb img", F).click(function() {
            if (!y.hasClass("camerasliding")) {
                var t = parseFloat(a(this).parents("li").index()),
                    i = parseFloat(a(".cameracurrent", _).index());
                t != i && (clearInterval(G), s(), a("#" + b + ", .camera_canvas_wrap", Y).animate({
                    opacity: 0
                }, 0), a(".pix_thumb", F).removeClass("cameracurrent"), a(this).parents("li").addClass("cameracurrent"), l(), d(t + 1), c(), e.onStartLoading.call(this))
            }
        }), a(".camera_thumbs_cont .camera_prevThumbs", Y).hover(function() {
            a(this).stop(!0, !1).animate({
                opacity: 1
            }, 250)
        }, function() {
            a(this).stop(!0, !1).animate({
                opacity: .7
            }, 250)
        }), a(".camera_prevThumbs", Y).click(function() {
            var e = 0,
                t = (a(F).outerWidth(), a("ul", F).offset().left),
                i = a("> div", F).offset().left,
                o = i - t;
            a(".camera_visThumb", F).each(function() {
                var t = a(this).outerWidth();
                e += t
            }), o - e > 0 ? a("ul", F).animate({
                "margin-left": "-" + (o - e) + "px"
            }, 500, r) : a("ul", F).animate({
                "margin-left": 0
            }, 500, r)
        }), a(".camera_thumbs_cont .camera_nextThumbs", Y).hover(function() {
            a(this).stop(!0, !1).animate({
                opacity: 1
            }, 250)
        }, function() {
            a(this).stop(!0, !1).animate({
                opacity: .7
            }, 250)
        }), a(".camera_nextThumbs", Y).click(function() {
            var e = 0,
                t = a(F).outerWidth(),
                i = a("ul", F).outerWidth(),
                o = a("ul", F).offset().left,
                s = a("> div", F).offset().left,
                n = s - o;
            a(".camera_visThumb", F).each(function() {
                var t = a(this).outerWidth();
                e += t
            }), i > n + e + e ? a("ul", F).animate({
                "margin-left": "-" + (n + e) + "px"
            }, 500, r) : a("ul", F).animate({
                "margin-left": "-" + (i - t) + "px"
            }, 500, r)
        }))
    }
}(jQuery),
function(a) {
    a.fn.cameraStop = function() {
        var e = a(this),
            t = a(".camera_src", e);
        "pie_" + e.index();
        if (t.addClass("stopped"), a(".camera_showcommands").length) {
            a(".camera_thumbs_wrap", e)
        } else;
    }
}(jQuery),
function(a) {
    a.fn.cameraPause = function() {
        var e = a(this),
            t = a(".camera_src", e);
        t.addClass("paused")
    }
}(jQuery),
function(a) {
    a.fn.cameraResume = function() {
        var e = a(this),
            t = a(".camera_src", e);
        ("undefined" == typeof autoAdv || autoAdv !== !0) && t.removeClass("paused")
    }
}(jQuery);