function enableCookies() {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-47485892-13');
	gtag('event', 'page_view', { 'send_to': 'UA-47485892-13' });
}

function disableCookies(d,b,c) {
	try {
		if (function(h) {
			var e=document.cookie.split(";"),a="",f="",g="";
			for(i=0;i<e.length;i++) {
				a=e[i].split("=");
				f=a[0].replace(/^\s+|\s+$/g,"");
				if(f==h) {
					if(a.length>1)
						g=unescape(a[1].replace(/^\s+|\s+$/g,""));
					return g
				}
			}
			return null}(d)){b=b||document.domain;
			c=c||"/";
			document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c
		}
	}
	catch(j){

	}
};

cookieconsent.initialise({
	"palette": {
		"popup": {
			"background": "#252e39"
		},
		"button": {
			"background": "#14a7d0"
		}
	},
	"theme": "edgeless",
	"position": "bottom-right",
	"type": "opt-in",
	"content": {
		"href": "https://idzan.eu/cookies"
	},
	onInitialise: function (status) {
		var type = this.options.type;
		var didConsent = this.hasConsented();
		if (type == 'opt-in' && didConsent) {
			enableCookies()
		}
	},
	onStatusChange: function(status, chosenBefore) {
		var type = this.options.type;
		var didConsent = this.hasConsented();
		if (type == 'opt-in' && didConsent) {
			enableCookies()
		}
	},
	onRevokeChoice: function() {
		var type = this.options.type;
		if (type == 'opt-in') {
			disableCookies('_ga','idzan.eu','/');
			disableCookies('_gat_gtag_UA-47485892-13','idzan.eu','/');
			disableCookies('_gid','idzan.eu','/');
		}
	},
});