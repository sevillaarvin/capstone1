const yearNow = new Date().getFullYear()

Vue.component("menu-items", {
	props: ["item"],
	template: `<li><a v-bind:href="item.link">{{ item.name }}</a></li>`
})

const app = new Vue({
	el: "#app",
	data: {
		menu: [
			{id: 0, name: "Home", link: "index.html"},
			{id: 1, name: "About", link: "about.html"},
			{id: 2, name: "Contact Us", link: "contact.html"},
			{id: 3, name: "Donate", link: "donate.html"}
		],
		copyright: "Copyright " + yearNow + " Arvin Sevilla"
	}
})
