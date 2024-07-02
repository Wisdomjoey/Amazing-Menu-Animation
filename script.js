const toggleMenu = () => {
	const btn = document.getElementById("floating-icon");

	if (btn.dataset.state === "open") {
		const shadow = document.getElementById("shadow");
		const navCon = document.getElementById("nav-con");
		const activeLink = document.querySelector("ul[data-state='active']");

		if (activeLink) {
			activeLink.dataset.state = "";
		}

		navCon.dataset.state = "closed";
		btn.dataset.state = "closed";

		setTimeout(() => {
			shadow.style.height = "0px";
		}, 750);
	} else {
		btn.dataset.state = "open";
	}
};

const toggleNav = (name) => {
	const shadow = document.getElementById("shadow");
	const navCon = document.getElementById("nav-con");
	const navLink = document.getElementById(`${name}-links`);
	const activeLink = document.querySelector("ul[data-state='active']");
	let wait = 0;

	shadow.style.height = `${navLink.scrollHeight}px`;

	if (activeLink) {
		activeLink.dataset.state = "";
		wait = 450;
	}

	setTimeout(() => {
		navLink.dataset.state = "active";
	}, wait);

	navCon.dataset.state = "open";
};
