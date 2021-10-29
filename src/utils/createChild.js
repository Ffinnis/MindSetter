import Vue from "vue";
import Children from "../components/MapsComponents/Children";

export const createChildFunction = (event, arrayOfChild) => {
  const childClass = Vue.extend(Children);
  const childInstance = new childClass({
    propsData: {
      parent: event.target.id,
      index: arrayOfChild.length,
    },
  });

  childInstance.$mount();

  event.target.parentNode.appendChild(childInstance.$el);

  return arrayOfChild.push(childInstance);
};
