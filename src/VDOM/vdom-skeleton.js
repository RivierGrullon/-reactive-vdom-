//create a virtual node
export function createVNode(tag, props, children) {
    //return virtual node
    return {
        tag,
        props,
        children
    }
}

/**
 * mount a virtual node to the DOM
 * @param vnode virtual node to render
 * @param container container where will be mount
*/
export function mount(vnode, container) {
    //create element
    const el = (vnode.el = document.createElement(vnode.tag));
    //set props
    for (const key in vnode.props) {
        el.setAttribute(key, vnode.props[key])
    }
    //handle children
    // if children is a text
    if ( typeof(vnode.children) === "string") {
        el.textContent = vnode.children;
    }

    // if childre are virtual nodes
    else {
        vnode.children.forEach(child => {
            mount(child, el);
        });
    }
    //mount to the DOM
    container.appendChild(el);

    return vnode

}

//** Unmounte a vnode from the DOM */
export function unmount(vnode) {
    vnode.el.parentNode.removeChild(vnode.el);

}

//** take 2 vnodes, compare and figure out what's the difference */
export function patch(vn1, vn2) {
    const el = (vn2.el = vn1.el);

    if (vn1.tag !== vn2.tag) {
        mount(vn2, el.parentNode);
    } else {
        //Case where the new vnode has a string children
        if (typeof(vn2.children) === "string") {
            el.textContent = n2.children;
        } else {
            //Case where the new vnode has an array of vnodes
            const c1 = vn1.children;
            const c2 = vn2.children;
            const commonLength = Math.min(c1.length, c2.length);

            for (let i = 0; i < commonLength; i++) {
                patch(c1[i], c2[i]);
            }

            if (c1.length > c2.length) {
                c1.slice(c2.length).forEach(child => {
                    unmount(child);
                })
            }
            else if (c2.length > c1.length) {
                c2.slice(c1.length).forEach(child => {
                    mount(child, el);
                })
            }
        }
    }
}

function render(message) {
    //render a vnode 
}