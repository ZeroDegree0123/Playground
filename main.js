// // globals
// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '#', subLinks: [
//       {text: 'all', href: '/catalog/all'},
//       {text: 'top selling', href: '/catalog/top'},
//       {text: 'search', href: '/catalog/search'},
//     ]},
//     {text: 'orders', href: '#' , subLinks: [
//       {text: 'new', href: '/orders/new'},
//       {text: 'pending', href: '/orders/pending'},
//       {text: 'history', href: '/orders/history'},
//     ]},
//     {text: 'account', href: '#', subLinks: [
//       {text: 'profile', href: '/account/profile'},
//       {text: 'sign out', href: '/account/signout'},
//     ]},
//   ];
// let showingSubMenu;
// showingSubMenu = false;
// //// SELECTORS
// // main
// const mainEl = document.querySelector('main');
// mainEl.style.backgroundColor="var(--main-bg)";
// mainEl.innerHTML="<h1>SEI Rocks!</h1>";
// mainEl.classList.add("flex-ctr");
// console.log(mainEl);
// // nav
// const topMenuEl = document.getElementById('top-menu');
// topMenuEl.style.height="100%";
// topMenuEl.style.backgroundColor="var(--top-menu-bg)";
// topMenuEl.classList.add("flex-around");
// console.log(topMenuEl);
// //topnav
// const topMenuLinks = document.querySelectorAll("#top-menu a");
// console.log(topMenuLinks)
// // subNav
// const subMenuEl = document.getElementById('sub-menu');
// subMenuEl.style.height = "100%";
// subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// subMenuEl.classList.add("flex-around");
// subMenuEl.style.position = "absolute";
// subMenuEl.style.top = "0";
// console.log(subMenuEl)

// // navbar options
// menuLinks.forEach(element => {
//     let linkEl = document.createElement("a");
//     linkEl.setAttribute('href', element.href)
//     linkEl.textContent = element.text
//     topMenuEl.appendChild(linkEl)
// });
// //// EVENT LISTENERS
// //main
// topMenuEl.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     let link = evt.target
//     if (link.tagName !== "A") return;
//     console.log(link.innerHTML);
//     if(link.classList.contains("active")) {
//         link.classList.remove("active");
//         showingSubMenu = false;
//         subMenuEl.style.top = "0";
//         return;
//     }
//     topMenuLinks.forEach(element => {
//         return element.classList.remove("active")
//     })
//     link.classList.add("active");
//     let linkData = menuLinks.find(element => {
//         return element.text === link.textContent;
//      })
//     showingSubMenu = 'subLinks' in linkData
//     if (!showingSubMenu) mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
//     if (showingSubMenu) {
//         buildSubMenu(linkData.subLinks);
//         subMenuEl.style.top = "100%";
//     } else {
//         subMenuEl.style.top = "0";
//     }
//     return;
// })
// // sub category event listner
// subMenuEl.addEventListener('click', function(evt) {
//     evt.preventDefault(); 
//     let link = evt.target;
//     if (link.tagName !== "A") return;
//     console.log(link.innerHTML);
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     topMenuLinks.forEach(element => {
//         element.classList.remove("active")
//     })
//     mainEl.innerHTML = `<h1>${link.textContent}</h1>` 
// })
// //// FUNCTIONS 
// const buildSubMenu = (subLinks) => {
//     subMenuEl.innerHTML = "";
//     subLinks.forEach(element => {
//         let linkEl = document.createElement("a")
//         linkEl.setAttribute("href", element.href);
//         linkEl.textContent = element.text;
//         subMenuEl.appendChild(linkEl)
//     })
// }
