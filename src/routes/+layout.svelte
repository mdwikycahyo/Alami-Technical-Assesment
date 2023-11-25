<script>
	// @ts-nocheck
	import '../app.pcss';
	let selectedNav = 'home';

	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: 'smooth' });
	}

	function onChangeNav(nav) {
		selectedNav = nav;
		scrollToSection(nav);
	}
</script>

<div class="flex flex-col h-screen relative overflow-y-auto">
	<div class="p-7 sticky top-0 z-10 bg-[#F9F9F9]">
		<nav id="navbar" class="flex justify-end">
			<ul class="flex space-x-2">
				<li>
					<div
						role="button"
						tabindex="0"
						on:keydown={() => console.log('home')}
						on:click={() => onChangeNav('home')}
						class={`font-roboto mx-8 text-2xl relative group ${
							selectedNav === 'home' ? 'font-bold' : 'hover:font-bold'
						} duration-300 cursor-pointer`}
					>
						HOME
						<span
							class={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
								selectedNav === 'home' ? 'border-yellow-500' : 'group-hover:border-yellow-500'
							} group-hover:border-yellow-500 transition-all duration-300`}
						></span>
					</div>
				</li>
				<li>
					<div
						role="button"
						tabindex="0"
						on:keydown={() => console.log('home')}
						on:click={() => onChangeNav('projects')}
						class={`font-roboto mx-8 text-2xl relative group ${
							selectedNav === 'projects' ? 'font-bold' : 'hover:font-bold'
						}  duration-300 cursor-pointer`}
					>
						PROJECTS
						<span
							class={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
								selectedNav === 'projects' ? 'border-yellow-500' : 'group-hover:border-yellow-500'
							}  transition-all duration-300`}
						></span>
					</div>
				</li>
				<li>
					<div
						role="button"
						tabindex="0"
						on:keydown={() => console.log('home')}
						on:click={() => onChangeNav('articles')}
						class={`font-roboto mx-8 text-2xl relative group ${
							selectedNav === 'articles' ? 'font-bold' : 'hover:font-bold'
						}  duration-300 cursor-pointer`}
					>
						ARTICLES
						<span
							class={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
								selectedNav === 'articles' ? 'border-yellow-500' : 'group-hover:border-yellow-500'
							}  transition-all duration-300`}
						></span>
					</div>
				</li>
				<li>
					<div
						role="button"
						tabindex="0"
						on:keydown={() => console.log('home')}
						on:click={() => onChangeNav('contact')}
						class={`font-roboto mx-8 text-2xl relative group ${
							selectedNav === 'contact' ? 'font-bold' : 'hover:font-bold'
						}  duration-300 cursor-pointer`}
					>
						CONTACT
						<span
							class={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
								selectedNav === 'contact' ? 'border-yellow-500' : 'group-hover:border-yellow-500'
							}  transition-all duration-300`}
						></span>
					</div>
				</li>
			</ul>
		</nav>
	</div>
    <slot />
</div>

