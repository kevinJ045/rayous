import { Button, Component, Container, Image, Text, Widget } from "rayous";
import { Style, buildProps } from "rayous/extra";
import { SVG } from "rayous/svg";
import { React } from "rayous/react";
import { CodeBlock } from "./component/codeblock";

import "@/styles/main.tail.css";
import "@/styles/bg.css";
import { Bg } from "./component/bg";

function Icon({ic}){
	return <img src={ic} class="w-[18px] mt-[-4px] inline-block" />;
}

function TryButton(props, children){
	return <a href="https://kevinj045.github.io/guilib/" class="bg-blue-500 font-bold rounded-[25px] my-2 w-auto mx-auto inline-block px-10 py-3 hover:bg-blue-600 duration-300">{...children}</a>;
}

export default class extends Component {
	build(props: buildProps) {
		const html = Widget.from(document.querySelector(':root') as HTMLElement);
		html.addClass('bg-slate-900 text-white');
		html.style = { zoom: '80%' };

		return new Container({
			onMount(){
				const that: Widget = this;
				that.raw().find('.scroll-in').forEach((item: HTMLElement) => {
					item.style.opacity = '0';
				});
			},
			children: [
				<Bg />,
				<div class="">
					<div class="w-full flex h-10 p-3 justify-end">
						

						<a href="https://github.com/kevinJ045/guilib" class="p-2 h-11 rounded-lg hover:border-slate-950 border-slate-700 border-[1px] bg-slate-800">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
						</a>

					</div>
					<Image class="mx-auto w-80" src="https://raw.githubusercontent.com/kevinJ045/guilib/main/assets/logo.png" />
					<div class="w-full font-extrabold text-[60px] text-center">Rayous</div>
					<div class="w-full text-[24px] text-center">An extensive component based typescript ui framework.</div>
					<div className="text-center"><TryButton>Try it 🚀</TryButton></div>
					<Button class="font-bold mt-[-4px] mx-auto block" onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }}>See more 🔍</Button>
				</div>,
				<div>
					<div className="flex flex-wrap p-10 gap-2">

						<div className="bg-slate-800 bg-opacity-70 backdrop-blur-lg p-4 rounded-lg w-full sm:w-[100%] md:w-[calc(33%-12px)]">
							
							<div className="w-10 float-left h-10 bg-slate-700 rounded-md leading-10 text-center">
								🛠️
							</div>

							<div className="float-left ml-4 w-[calc(100%-60px)] space-y-2">
								<h3 class="font-bold">Component-Based Architecture</h3>
								<p class="text-slate-300">
									Build modular and reusable components to create sophisticated user interfaces, promoting code reusability and maintainability.
								</p>
							</div>

						</div>

						<div className="bg-slate-800 bg-opacity-70 backdrop-blur-lg p-3 rounded-lg w-full sm:w-[100%] md:w-[calc(33%-12px)]">
							
							<div className="w-10 float-left h-10 bg-slate-700 rounded-md leading-10 text-center">
								🔩
							</div>

							<div className="float-left ml-4 w-[calc(100%-60px)] space-y-2">
								<h3 class="font-bold">Flexible Routing System</h3>
								<p class="text-slate-300">
									Easily define and manage your application's URLs using a routing system inspired by popular frameworks like Next.js.
								</p>
							</div>
							
						</div>

						<div className="bg-slate-800 bg-opacity-70 backdrop-blur-lg p-2 rounded-lg w-full sm:w-[100%] md:w-[calc(33%-12px)]">
							
							<div className="w-10 float-left h-10 bg-slate-700 rounded-md leading-10 text-center">
								📦
							</div>

							<div className="float-left ml-4 w-[calc(100%-60px)] space-y-2">
								<h3 class="font-bold">Static Files Organization</h3>
								<p class="text-slate-300">
									Rayous promotes a component-based architecture, making it easy to create reusable and modular components that can be combined to build complex user interfaces.
								</p>
							</div>

						</div>

					</div>
				</div>,
				<div className="my-[50dvh] w-full flex justify-center flex-col">
					<div className="scroll-in w-full font-extrabold text-[60px] text-center">What is rayous?</div>
					<div class="scroll-in w-full text-[24px] text-center">A ui framework, made with ❤️ and <Icon ic='data:image/png;base64,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' />.</div>

					<CodeBlock class="scroll-in mx-auto my-1 w-auto sm:w-[80%] md:max-w-[400px]" lang="typescript">
						import * as Rayous from "rayous";
					</CodeBlock>
				
				</div>,
				<div className="my-[100dvh] w-full flex justify-center gap-5 flex-col">

					<div className="scroll-n">

						<div className="scroll-in w-full font-extrabold text-[60px] text-center">Getting Started</div>
						<div class="scroll-in w-full text-[24px] text-center">You can get started by installing rayous with npm.</div>


						<CodeBlock class="scroll-in max-w-[90%] mx-auto my-1 w-auto sm:w-[80%] md:max-w-[400px]">
							npm i rayous@latest
						</CodeBlock>
					</div>

				</div>,
				<div className="mt-[100dvh] mb-[50dvh]">

					<div className="w-full font-extrabold text-[60px] text-center">Start Coding</div>
					<div class="w-full text-[24px] text-center">Look at the docs and start coding with ✨ Rayous ✨</div>

					<div className="text-center"><TryButton>Start Coding 🚀</TryButton></div>

				</div>,
				<div className="w-full bg-slate-950 text-[12px] p-5 text-center">
					Made with ❤️ by <a href="https://makano.vercel.app/">Makano</a>
				</div>
			]
		});
	}

	afterBuild(props: buildProps): void {
		const that: Widget = props.page!;
		const element: HTMLElement = that.raw().at(0);

		window.addEventListener('scroll', () => {
			that.raw().find('.scroll-in').forEach((item: HTMLElement, index: number) => {
					const itemTop = item.getBoundingClientRect().top;
					const itemHeight = item.getBoundingClientRect().height;
					const itemBottom = item.getBoundingClientRect().bottom;
					const windowHeight = window.innerHeight;

					if(index > 3) index -= 3;
	
					// Check if the element is in the viewport
					if (itemBottom > 0 && itemTop < windowHeight) {
							// Calculate the distance from the center of the screen
							const distanceToCenter = Math.abs(itemTop - windowHeight / 2);
	
							// Calculate opacity based on the distance to the center
							const opacity = 1 - (distanceToCenter / (windowHeight / 2)) * (index / 2);
	
							// Ensure opacity doesn't go below 0
							const finalOpacity = Math.max(0, opacity);
	
							// Apply the fade-in effect
							item.style.opacity = finalOpacity.toString();
	
							// Apply the parallax effect
							const translateY = ((windowHeight - itemTop) / 5) * (index / 2);
	
							// Apply the parallax effect
							item.style.transform = `translateY(${translateY}px)`;

							item.style.transform = `translateY(${translateY}px)`;
							item.style.opacity = finalOpacity.toString();
					} else {
							// If the element is not in the viewport, reset styles
							item.style.opacity = '0';
							item.style.transform = 'translateY(-50px)';
					}
			});
		});
	
	}
}