/**
 * viewporter 2.0.0 
 * Viewport Size and Breakpoint Detection Library
 *
 * Copyright (c) 2023 Chris Mohrhauser
 *
 * Dual licensed under the MIT and GPLv2 licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl-2.0.html
 */


class viewporter {
	constructor(options) {
		this.curr = { w: 0, h: 0 };
		this.settings = Object.assign({}, {
			afixTo: 'body',
			addEvents: true,
			writeOut: false,
			writeTo: '#viewporter_debug',
			classPrefix: 'breakp-',
			breakPoints: [320, 480, 640, 720, 960, 1024],
			viewportIni: 1.0,
			viewportMax: 1.0,
			viewportScale: 0
		}, options);

		if (this.settings.addEvents) {
			this.addEvents();
		}
		this.writeStuff(this.getViewportSize());
	}

	writeStuff(obj) {
		if (this.settings.writeOut) {
			const writeTo = document.querySelector(this.settings.writeTo);
			if (writeTo) {
				writeTo.textContent = `Page size: width=${obj.w}, height=${obj.h}`;
			}
		}
	}

	getViewportSize() {
		let viewport = document.querySelector("meta[name=viewport]");
		let oldcontent = null;
		if (viewport) {
			oldcontent = viewport.getAttribute("content");
			viewport.setAttribute(
				"content",
				`width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0`
			);
		} else {
			let meta = document.createElement("meta");
			meta.name = "viewport";
			meta.content = `width=device-width, height=device-height, initial-scale=${this.settings.viewportIni
				}, maximum-scale=${this.settings.viewportMax}, user-scalable=${this.settings.viewportScale
				}`;
			document.head.appendChild(meta);
		}

		let w = window;
		let d = w.document;
		let ret = {};

		if (w.innerWidth != null) {
			ret = { w: w.innerWidth, h: w.innerHeight };
		}
		if (document.compatMode === "CSS1Compat" && !ret.w) {
			ret = { w: d.documentElement.clientWidth, h: d.documentElement.clientHeight };
		}
		if (!ret.w) {
			ret = { w: d.body.clientWidth, h: d.body.clientHeight };
		}
		if (viewport && oldcontent) {
			viewport.setAttribute("content", oldcontent);
		}
		this.curr = ret;
		this.setClasses();
		return ret;
	}

	addEvents() {
		window.addEventListener("resize", this.handleResize.bind(this));
		window.addEventListener("load", this.handleLoad.bind(this));
	}

	handleResize() {
		this.writeStuff(this.getViewportSize());
	}

	handleLoad() {
		this.writeStuff(this.getViewportSize());
	}

	setClasses() {
		let prefix = this.settings.classPrefix;
		let size = this.curr.w;
		let arr = this.settings.breakPoints;
		let cls = '', found = false;
		for (let i = 0; i < arr.length; i++) {
			if (size <= arr[i]) {
				cls = prefix + arr[i];
				found = true;
				break;
			}
		}
		if (!found) {
			cls = prefix + arr[arr.length - 1];
		}
		document.querySelector(this.settings.afixTo).className = cls;
	}
}
