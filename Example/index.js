import { createVNode, mount, patch} from "../src/VDOM/vdom-skeleton.js"

const node = createVNode('div', {class:"container"}, [
    createVNode("div", null, "x"),
    createVNode("span", null, "hello"),
    createVNode("span", null, "world")
])
const node2 = createVNode('div', { class: 'container' }, [
    createVNode('h1', null, 'Hello Dev 💻'),
    createVNode('p', null, [
        createVNode('span', null, 'Thanks for reading the '),
        createVNode('a', { href: 'https://marc.dev' }, 'marc.dev'),
        createVNode('span', null, ' blog'),
    ]),
    createVNode(
        'img',
        {
            src: 'https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif',
            style: 'width: 350px; border-radius: 0.5rem;',
        },
        [],
    ),
])
console.log(node.el)
console.log(mount(node, document.querySelector("#app")))
setTimeout(() => {
    patch(node, node2)
}, 3000)
