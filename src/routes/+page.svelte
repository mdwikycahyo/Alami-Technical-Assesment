<script>
	// @ts-nocheck
	import data from '../data.json';

	const handleEmailClick = () => {
		const emailAddress = data.email;
		const subject = 'Hello';
		const body = 'I hope this email finds you well.';

		window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	};
</script>

<div id="container" class="flex-1 overflow-y-auto">
	<div id="home" class="ml-36 w-3/4 h-full flex items-center">
		<div>
			<h1 class="text-6xl font-bold leading-normal font-mono">
				Hi, I'm {data.username}!
			</h1>
			<p class="leading-10 text-xl">{@html data.summary}</p>
			<div class="mt-4">
				<i
					role="button"
					tabindex="0"
					on:keydown={() => console.log('linkedin')}
					class="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer"
					on:click={() => window.open(data.linkedin, '_blank')}
				/>
				<i
					role="button"
					tabindex="0"
					on:keydown={() => console.log('github')}
					class="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
					on:click={() => window.open(data.github, '_blank')}
				/>
				<i
					role="button"
					tabindex="0"
					on:keydown={() => console.log('medium')}
					class="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer"
					on:click={() => window.open(data.medium, '_blank')}
				/>
			</div>
		</div>
	</div>
	<div id="projects" class="my-20">
		{#each data.projects as project}
			<div class="flex justify-between my-10">
				<div class="w-10/12">
					<div class="flex items-center">
						<div class="w-36 h-0.5 bg-black" />
						<h1 class="text-xl mx-6 font-mono">{project.year}</h1>
						<h1 class="text-3xl font-bold font-mono">{project.name}</h1>
					</div>
					<div class="flex justify-between">
						<div class="ml-60">
							<p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">
								{project.description}
							</p>
							<p class="leading-10 text-lg font-extralight">
								{project.techStacks}
							</p>
						</div>
					</div>
				</div>
				<div class="w-1/4 flex items-center justify-center">
					{#if project.name === 'WhatsApp Chatbot'}
						<a
							class="flex items-center justify-center cursor-pointer hover:font-bold"
							href="/project/wa-chatbot"
						>
							<div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
							<p class="-ml-[25px] mr-2 font-mono">View Details</p>
							<i class="bi bi-arrow-right text-yellow-500 text-3xl" />
						</a>
					{:else}
						<div
							class="flex items-center justify-center cursor-pointer hover:font-bold"
							on:click={() => {
								window.open(project.url, '_blank');
							}}
							role="button"
							tabindex="0"
							on:keydown={() => console.log('detail project')}
						>
							<div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
							<p class="-ml-[25px] mr-2 font-mono">Visit Website</p>
							<i class="bi bi-arrow-right text-yellow-500 text-3xl" />
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<div id="articles" class="my-20">
		{#each data.articles as article}
			<div class="flex justify-between my-14">
				<div class="w-10/12">
					<div class="flex items-center">
						<div class="w-36 h-0.5 bg-black" />
						<h1 class="text-xl mx-6 font-mono">{article.date}</h1>
					</div>
					<div class="flex justify-between">
						<div class="ml-[167px]">
							<h1 class="text-3xl leading-relaxed font-bold font-mono">
								{article.name}
							</h1>
							<p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">
								{article.description}
							</p>
						</div>
					</div>
				</div>
				<div class="w-1/4 flex items-center justify-center">
					<div
						class="flex items-center justify-center cursor-pointer hover:font-bold"
						on:click={() => {
							window.open(article.url, '_blank');
						}}
						role="button"
						tabindex="0"
						on:keydown={() => console.log('detail article')}
					>
						<div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
						<p class="-ml-[25px] mr-2 font-mono">Read More</p>
						<i class="bi bi-arrow-right text-yellow-500 text-3xl" />
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div id="contact" class="mt-20 bg-black text-white item-center flex flex-col items-center">
		<h1 class="text-6xl mt-14 font-bold leading-normal">Let's Work Together</h1>
		<p class="leading-10 text-xl mb-14">{@html data.closingStatement}</p>
		<div class="w-1/4 flex items-center justify-center mb-14">
			<div
				class="flex items-center justify-center cursor-pointer hover:font-bold"
				on:click={handleEmailClick}
				role="button"
				tabindex="0"
				on:keydown={() => console.log('send email')}
			>
				<div class="bg-[#363636] rounded-full w-[50px] h-[50px]" />
				<p class="-ml-[25px] mr-2 font-mono">Say Hello!</p>
				<i class="bi bi-arrow-right text-yellow-500 text-3xl" />
			</div>
		</div>
		<div class="mt-4 flex items-center my-5">
			<p>© 2023 Muhammad Dwiky Cahyo Wicaksono</p>
			<p class="mx-20">|</p>
			<p>
				<i
					class="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer mr-5"
					on:click={() => window.open(data.linkedin, '_blank')}
					role="button"
					tabindex="0"
					on:keydown={() => console.log('linkedin')}
				/>
				<i
					class="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
					on:click={() => window.open(data.github, '_blank')}
					role="button"
					tabindex="0"
					on:keydown={() => console.log('github')}
				/>
				<i
					class="bi bi-instagram text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
					on:click={() => window.open(data.instagram, '_blank')}
					role="button"
					tabindex="0"
					on:keydown={() => console.log('instagram')}
				/>
				<i
					class="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
					on:click={() => window.open(data.medium, '_blank')}
					role="button"
					tabindex="0"
					on:keydown={() => console.log('medium')}
				/>
				<i
					class="bi bi-envelope-fill text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
					on:click={handleEmailClick}
					role="button"
					tabindex="0"
					on:keydown={() => console.log('email')}
				/>
			</p>
		</div>
	</div>
</div>
