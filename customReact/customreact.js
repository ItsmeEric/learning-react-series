// Takes the reactElement and whatever container you want inject
function mainContainer(reactElement, container) {
  const domNewElement = document.createElement(reactElement.type);
  domNewElement.innerHTML = reactElement.children;
  domNewElement.setAttribute("href", reactElement.props.href);
  domNewElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domNewElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click here to visit Google",
};

const mainContainer = document.getElementById("root");

// Method to inject reactElement code into the root
customRender(reactElement, mainContainer);
