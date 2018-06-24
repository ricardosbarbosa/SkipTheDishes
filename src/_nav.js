export default {
  items: [
    
    {
      title: true,
      name: 'Restaurant View',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Overview',
      url: '/restaurants/overview',
      icon: 'icon-basket',
    },
    {
      name: 'Shopping',
      url: '/restaurants/shopping',
      icon: 'icon-basket',
    },
    {
      title: true,
      name: 'Supplier View',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Overview',
      url: '/suppliers/overview',
      icon: 'icon-basket',
    },
    
    {
      title: true,
      name: 'Courier View',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Overview',
      url: '/couriers/overview',
      icon: 'icon-basket',
    },
  ],
};
