import { Widget } from "rayous";
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';

export const CodeBlock = Widget.model({
	"selector": "pre.codeblock",
	"children": [
		"div.title.text-xl.font-bold",
		"code.code",
	],
	_onMount: function(){
		let that: Widget = this;
		(window as any).Prism.highlightElement(that.raw().find('code').at(0));
	},
	"options": {
		"text": {
			"string": {
				"code.code": {
					"html": "$code"
				}
			}
		},
		"lang": {
			"string": {
				"code.code": {
					"addClass": "language-$(lang)"
				},
				"this": {
					"addClass": "language-$(lang)"
				}
			}
		}
	}
}, { code: "" })