(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/1.e3789988.jpg"},13:function(e,a,t){e.exports=t.p+"static/media/1.42550798.jpg"},14:function(e,a,t){e.exports=t.p+"static/media/1.e88c5a62.jpg"},15:function(e,a,t){e.exports=t.p+"static/media/1.9eadf0de.jpg"},16:function(e,a,t){e.exports=t.p+"static/media/1.bead63cf.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/1.4171bb52.png"},30:function(e,a,t){e.exports=t.p+"static/media/2.e5a50fc6.png"},31:function(e,a,t){e.exports=t.p+"static/media/7.65eaba0f.png"},32:function(e,a,t){e.exports=t.p+"static/media/6.89b45609.png"},33:function(e,a,t){e.exports=t.p+"static/media/3.5da26f98.png"},34:function(e,a,t){e.exports=t.p+"static/media/4.d56eb56c.png"},35:function(e,a,t){e.exports=t.p+"static/media/5.0577346b.png"},42:function(e,a,t){e.exports=t.p+"static/media/profile-image.94a84cfb.png"},52:function(e,a,t){e.exports=t(92)},60:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(17),r=t.n(o),s=t(95),c=t(41),l=t.n(c),m=(t(60),t(6)),u=t(7),p=t(9),d=t(8),h=t(10),g=t(96),v=t(97),f=t(94),b=t(98),E=t(42),S=t.n(E),y={about:"Current freelance React Native developer and computer science\n    student at Lyc\xe9e Charles Poncet in France. A year\u2019s worth of\n    experience specialising in Mobile Application development with a\n    production level project. Loves UI/UX and providing a great\n    experience for users. Thoroughly enjoys problem-solving and learning\n    new technologies. Outgoing and keen to learn from others. Thrives in\n    a team environment and is quick to adapt to any situation. Able to work both in Australia and the European Union.",interests:"Enjoys building new products and working with teams of motivated\n    people. Loves cooking and travelling around the world when possible.",seeking:"Currently seeking a one-year internship for a\n    Licence Professionnelle in France, 2019-2020."},w={about:"D\xe9veloppeur et \xe9tudiant en BTS informatique au Lyc\xe9e Charles Poncet (74) souhaitant poursuivre son parcours en Licence Professionnelle par alternance \xe0 Lyon. Bilingue en anglais. Fort d'une ann\xe9e d\u2019experience dans le d\xe9veloppement d\u2019applications mobiles au sein d\u2019une entreprise de communication, Melbourne, Australie. Aime cr\xe9er UI / UX pour donner aux utilisateurs une exp\xe9rience agr\xe9able. Passionn\xe9 par la r\xe9solution de probl\xe8mes et l\u2019apprentissage de nouvelles technologies. Ouvert d\u2019esprit et d\xe9sireux d\u2019apprendre des autres. S\u2019\xe9panouit dans un environnement d\u2019\xe9quipe et s\u2019adapte rapidement \xe0 toutes les situations.",interests:"Aime construire de nouveaux produits et travailler avec des \xe9quipes de personnes motiv\xe9es. Aime cuisiner et voyager autour du monde lorsque cela est possible.",seeking:"Actuellement \xe0 la recherche d'un emploi en alternance d'un an pour une licence professionnelle en France, 2019 - 2020."},j=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.language,a="EN"===e?y:w;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content-container"},i.a.createElement("img",{className:"profile",src:S.a,alt:"Profile"}),i.a.createElement("h2",null,"EN"===e?"About me":"Synth\xe8se"),i.a.createElement("p",null,a.about),i.a.createElement("h2",null,"EN"===e?"Skills":"Comp\xe9tences"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Back-end"),"\xa0\xa0\xa0\xa0Node.js, Express, REST API."),i.a.createElement("li",null,i.a.createElement("strong",null,"Front-end"),"\xa0\xa0\xa0\xa0Redux, React Native, jQuery, HTML5, CSS."),i.a.createElement("li",null,i.a.createElement("strong",null,"EN"===e?"Programming":"Programmation"),"\xa0\xa0\xa0\xa0JavaScript, C, C++, Objective-C, Swift."),i.a.createElement("li",null,i.a.createElement("strong",null,"EN"===e?"Languages":"Langues"),"\xa0\xa0\xa0\xa0","EN"===e?"French fluently.":"Bilingue Anglais.")),i.a.createElement("h2",null,"EN"===e?"Interests":"Int\xe9r\xeats"),i.a.createElement("p",null,a.interests)))}}]),a}(n.Component),N=t(43),I=[{title:"Visa Restrictions",mainImg:t(12),imgs:[t(12)],desc:'<a href="http://visarequired.info" target="_blank">visarequired.info</a> is a website which allows you to select a nationality and get visa requirements for a variety of different countries. The site is made up of three parts.\n\nThe first part is a NodeJS web scraper which traverses Wikipedia in search for all nationalities visa information. It uses an implementation of jQuery to select data within tables located on Wikipedia pages. This web scraper automatically cleans and stores the data on a MySQL server located at gearhost.com. Code for the web scraper can be found <a target="_blank" href="https://github.com/mierz00/visa-webscraper">here</a>.\n\nThe second part is an ExpressJS API hosted on Heroku. This API allows access to the MySQL database information. The API is available at https://visa-info-api.herokuapp.com and the source code can be located <a target="_blank" href="https://github.com/mierz00/visa-info-api">here</a>.\n\nThe last part is a React front-end website which uses GitHub pages for hosting. The website connects with the ExpressJS API. You can find the source code <a target="_blank" href="https://github.com/mierz00/visa-info-site">here</a>.',toolIcons:[{name:"NodeJS",icon:"devicon-nodejs-plain"},{name:"ExpressJS",icon:"devicon-express-original"},{name:"MySQL",icon:"devicon-mysql-plain"},{name:"Heroku",icon:"devicon-heroku-original"},{name:"React",icon:"devicon-react-original"},{name:"jQuery",icon:"devicon-jquery-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"SCSS",icon:"devicon-sass-plain"},{name:"Git",icon:"devicon-git-plain"}]},{title:"uConnected App",mainImg:t(29),imgs:[t(30),t(31),t(32),t(33),t(34),t(35)],desc:'An IOS and Android application built using React native for uConnected. The app allows the clients of uConnected to connect and make calls through their VoIP service and includes various features such as user authentication, access to the device\'s contacts list complete with an alphabetical scroll list, a keypad, and an integration of uConnected\'s dashboard.\n\nThe app incorporates a variety of libraries such as Redux, React Native Navigation and React Native PJSIP. It contains a range of animations to ensure the user experience is smooth and in line with a native user experience.\n\nYou can visit uConnected\'s website <a target="_blank" href="https://www.uconnected.com.au">here</a>.',toolIcons:[{name:"React Native",icon:"devicon-react-original"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"},{name:"IOS",icon:"devicon-apple-plain"},{name:"Android",icon:"devicon-android-plain"},{name:"Git",icon:"devicon-git-plain"}]},{title:"Showcase backend",mainImg:t(13),imgs:[t(13)],toolIcons:[{name:"TypeScript",icon:"devicon-typescript-plain"},{name:"NodeJS",icon:"devicon-nodejs-plain"},{name:"MongoDB",icon:"devicon-mongodb-plain"},{name:"ExpressJS",icon:"devicon-express-original"}],desc:"A Node JS and MongoDB backend application which allows users to create, read, update and delete a portfolio. This API was written in conjunction with an IOS application but could easily be used with a web interface.\n\nFeaturing secure storage of user accounts with hashed passwords using the Bcrypt library. Image and description storage for portfolio items which are only accessible to authenticated users."},{title:"Tic Tac Toe",mainImg:t(14),imgs:[t(14)],toolIcons:[{name:"React",icon:"devicon-react-original"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"}],desc:'Tic Tac Toe is a React application which allows the user to play the famous game Tic Tac Toe against the computer. The game is currently unbeatable as it uses the Mini Max algorithm to traverse through all the possible plays in the game. I wrote this app to get a better understanding of React and how to animate changes to components.\n\nYou can find the source code and play the game here on <a target="_blank" href="https://codepen.io/mierz/full/BZBymp/">CodePen</a>.'},{title:"Simon Game",mainImg:t(15),imgs:[t(15)],desc:'This is my take on the popular 1978\'s electronic game Simon which tests the player\'s memory. The game shows a series of lights and sounds in which the player has to memorise and repeat in sequence. Built using jQuery, the game consists of a normal mode which allows the player to make a mistake and then it will repeat the last sequence. The strict mode resets the count to 0 if any mistake is made.\n\nYou can play the game and view the source code here at <a target="_blank" href="https://codepen.io/mierz/pen/RgbaVZ">CodePen</a>.',toolIcons:[{name:"jQuery",icon:"devicon-jquery-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"}]},{title:"Calculator",mainImg:t(16),imgs:[t(16)],toolIcons:[{name:"jQuery",icon:"devicon-jquery-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"},{name:"Bootstrap",icon:"devicon-bootstrap-plain"}],desc:'Built using jQuery, this calculator web app was written to get a better understanding of jQuery and positioning HTML elements whilst combining simple operations in a user interface.\n\n You can view the web app <a target="_blank" href="https://codepen.io/mierz/pen/zwEPXp">here</a>.'}],k=[{title:"Visa Restrictions",mainImg:t(12),imgs:[t(12)],desc:'Le <a href="http://visarequired.info" target="_blank">visarequired.info</a> est un site Web qui vous permet de s\xe9lectionner une nationalit\xe9 et d\'obtenir les conditions de visa pour diff\xe9rents pays. Le site est compos\xe9 de trois parties.\n\nLa premi\xe8re partie est un scraper Web NodeJS qui traverse Wikipedia \xe0 la recherche d\'informations sur les visas pour toutes les nationalit\xe9s. Il utilise une impl\xe9mentation de jQuery pour s\xe9lectionner des donn\xe9es dans des tableaux situ\xe9s sur des pages Wikipedia. Ce Web Scraper nettoie et stocke automatiquement les donn\xe9es sur un serveur MySQL situ\xe9 \xe0 gearhost.com. Le code pour le Web Scraper peut \xeatre trouv\xe9 <a target="_blank" href="https://github.com/mierz00/visa-webscraper">ici</a>.\n\nLa deuxi\xe8me partie est une API ExpressJS h\xe9berg\xe9e sur Heroku. Cette API permet d\'acc\xe9der aux informations de la base de donn\xe9es MySQL. L\'API est disponible \xe0 l\'adresse https://visa-info-api.herokuapp.com et le code source se trouve <a target="_blank" href="https://github.com/mierz00/visa-info-api">ici</a>.\n\nLa derni\xe8re partie est un site Web frontal React qui utilise des pages GitHub pour l\'h\xe9bergement. Le site Web se connecte \xe0 l\'API ExpressJS. Vous pouvez trouver le code source <a target="_blank" href="https://github.com/mierz00/visa-info-site">ici</a>.',toolIcons:[{name:"NodeJS",icon:"devicon-nodejs-plain"},{name:"ExpressJS",icon:"devicon-express-original"},{name:"MySQL",icon:"devicon-mysql-plain"},{name:"Heroku",icon:"devicon-heroku-original"},{name:"React",icon:"devicon-react-original"},{name:"jQuery",icon:"devicon-jquery-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"SCSS",icon:"devicon-sass-plain"},{name:"Git",icon:"devicon-git-plain"}]},{title:"uConnected Application",mainImg:t(29),imgs:[t(30),t(31),t(32),t(33),t(34),t(35)],desc:"Application IOS et Android construite \xe0 l\u2019aide de React Native pour uConnected. Elle permet aux clients d'uConnected de se connecter et de passer des appels via leur service VoIP. Elle comprend diverses fonctionnalit\xe9s telles que l'authentification de l'utilisateur, l'acc\xe8s \xe0 la liste de contacts de l'appareil avec une liste de d\xe9filement alphab\xe9tique, un clavier et l'int\xe9gration du tableau de bord de uConnected.\n\nL'application int\xe8gre diverses biblioth\xe8ques telles que Redux, React Native Navigation et PJSIP Native React. Elle contient une s\xe9rie d\u2019animations qui garantissent une exp\xe9rience utilisateur fluide et en ligne avec une exp\xe9rience utilisateur native.\n\nVous pouvez visiter le site Web de uConnected <a target=\"_blank\" href=\"https://www.uconnected.com.au\">ici</a>.",toolIcons:[{name:"React Native",icon:"devicon-react-original"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"},{name:"IOS",icon:"devicon-apple-plain"},{name:"Android",icon:"devicon-android-plain"},{name:"Git",icon:"devicon-git-plain"}]},{title:"Showcase backend",mainImg:t(13),imgs:[t(13)],toolIcons:[{name:"TypeScript",icon:"devicon-typescript-plain"},{name:"NodeJS",icon:"devicon-nodejs-plain"},{name:"MongoDB",icon:"devicon-mongodb-plain"},{name:"ExpressJS",icon:"devicon-express-original"}],desc:"Application back-end Node JS et MongoDB qui permet aux utilisateurs de cr\xe9er, lire, mettre \xe0 jour et supprimer un portfolio. Cette API a \xe9t\xe9 \xe9crite en conjonction avec une application IOS mais peut facilement \xeatre utilis\xe9e avec une interface Web.\n\nLe stockage s\xe9curis\xe9 des comptes utilisateur avec des mots de passe hach\xe9s \xe0 l'aide de la biblioth\xe8que Bcrypt. Stockage des images et des descriptions pour les \xe9l\xe9ments de portefeuille uniquement accessibles aux utilisateurs authentifi\xe9s."},{title:"Tic Tac Toe",mainImg:t(14),imgs:[t(14)],toolIcons:[{name:"React",icon:"devicon-react-original"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"}],desc:"Tic Tac Toe est une application de React qui permet \xe0 l'utilisateur de jouer au c\xe9l\xe8bre jeu Tic Tac Toe contre l'ordinateur. Le jeu est actuellement imbattable car il utilise l'algorithme Mini Max pour parcourir toutes les options possibles du jeu. J'ai \xe9crit cette application pour mieux comprendre React et comment animer les modifications apport\xe9es aux composants.\n\nVous pouvez trouver le code source et jouer au jeu ici sur <a target=\"_blank\" href=\"https://codepen.io/mierz/full/BZBymp/\">CodePen</a>."},{title:"Simon Game",mainImg:t(15),imgs:[t(15)],desc:'Ceci est ma version du jeu \xe9lectronique populaire de 1978, Simon, qui teste la m\xe9moire du joueur.\n\nVous pouvez jouer au jeu et afficher le code source ici \xe0 <a target="_blank" href="https: //codepen.io/mierz/pen/RgbaVZ">CodePen</a>.',toolIcons:[{name:"jQuery",icon:"devicon-jquery-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"}]},{title:"Calculator",mainImg:t(16),imgs:[t(16)],toolIcons:[{name:"jQuery",icon:"devicon-jquery-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"},{name:"Bootstrap",icon:"devicon-bootstrap-plain"}],desc:'Construite \xe0 l\'aide de jQuery, cette application Web a \xe9t\xe9 \xe9crite pour mieux comprendre jQuery et le positionnement des \xe9l\xe9ments HTML tout en combinant des op\xe9rations simples dans une interface utilisateur.\n\nVous pouvez afficher l\'application Web <a target="_blank" href="https://codepen.io/mierz/pen/zwEPXp">ici</a>.'}],C=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={openModal:!1,selectedItem:{},selectedImgInModal:""},t.onOpenModal=function(e){t.setState({openModal:!0,selectedItem:e})},t.onCloseModal=function(){t.setState({openModal:!1})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.props.language,t="EN"===a?I:k;return i.a.createElement("div",{className:"container"},i.a.createElement(N.a,{open:this.state.openModal,onClose:this.onCloseModal,center:!0},i.a.createElement(x,{item:this.state.selectedItem,language:a})),t.map(function(a){return i.a.createElement("div",{className:"item",key:a.title},i.a.createElement("button",{onClick:e.onOpenModal.bind(null,a)},i.a.createElement("img",{src:a.mainImg,alt:a.title})))}))}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={selectedImg:t.props.item.imgs[0]},t.selectImg=function(e){t.setState({selectedImg:e})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.item,n=a.language;return i.a.createElement("div",{className:"modalContainer"},i.a.createElement("div",{className:"imgsContainer"},i.a.createElement("img",{className:t.imgs.length>1?"mainImg":"mainImgWide",src:this.state.selectedImg}),i.a.createElement("div",{className:"imgBar"},Object.keys(t).length>0&&t.imgs.length>1&&t.imgs.map(function(a){return i.a.createElement("button",{onClick:e.selectImg.bind(e,a),key:a},i.a.createElement("img",{className:"thumb",src:a}))}))),i.a.createElement("div",null,i.a.createElement("h1",null,t.title),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.desc}}),i.a.createElement("h2",null,"EN"===n?"Tools":"Outils"),i.a.createElement("div",{className:"toolIconsContainer"},Object.keys(t).length>0&&t.toolIcons.map(function(e){return i.a.createElement("div",{className:"tooltip",key:e.name},i.a.createElement("span",{className:"tooltiptext"},e.name),i.a.createElement("i",{className:e.icon}))}))))}}]),a}(n.Component),T=C,M=t(47),_=t(18),O={title:"Contact me",name_title:"Name",name_placeholder:"Your name...",email_placeholder:"Your email...",message_title:"Message",message_placeholder:"Write something...",alternative_text:"Alternatively, you can contact me at",error_name:"Please enter your name.",error_email:"Please enter a valid email address",error_message:"The message field cannot be empty"},A={title:"Contactez-moi",name_title:"Nom",name_placeholder:"Votre nom ...",email_placeholder:"Votre email ...",message_placeholder:"\xc9crire un message...",alternative_text:"Sinon, vous pouvez me contacter \xe0",error_name:"S'il vous pla\xeet entrez votre nom.",error_email:"Veuillez saisir une adresse email valide",error_message:"Le champ du message ne peut pas \xeatre vide"},L=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={formEmailSent:!1,formSubmitted:!1,name:"",email:"",message:"",errors:{formSubmit:!1,name:"",email:"",message:""}},t.handleInputChange=function(e){var a=e.target;t.setState(Object(_.a)({},a.id,a.value))},t.handleClearErrors=function(){t.setState({errors:{formSubmit:!1,name:"",email:"",message:""}})},t.handleFormValidation=function(){var e=t.state,a=e.name,n=e.email,i=e.message,o="EN"===t.props.language?O:A,r=!1,s={formSubmit:!1,name:"",email:"",message:""};0===a.length&&(s.name=o.error_name,r=!0);return/\S+@\S+\.\S+/.test(n)||(s.email=o.error_email,r=!0),0===i.length&&(s.message=o.error_message,r=!0),t.setState({errors:s}),r},t.handleSubmit=function(e){if(e.preventDefault(),t.handleClearErrors(),!t.handleFormValidation()){t.sendMessage("template_lH9AknBK",t.state.name,t.state.email,t.state.message),t.setState({formSubmitted:!0})}},t.sendMessage=function(e,a,n,i){window.emailjs.send("mailgun",e,{name:a,email:n,message:i}).then(function(e){t.setState({formEmailSent:!0,formSubmitted:!1}),setTimeout(function(){t.setState({formEmailSent:!1,formSubmitted:!1})},5e3)}).catch(function(e){console.error("Failed to send feedback. Error: ",e),t.setState({formEmailSent:!1,formSubmitted:!1,errors:Object(M.a)({},t.state.errors,{formSubmit:!0})})})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,a){e.language!==this.props.language&&this.handleClearErrors()}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.message,o=e.errors,r=e.formSubmitted,s=e.formEmailSent,c="EN"===this.props.language?O:A;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content-container contact"},i.a.createElement("h2",null,c.title),i.a.createElement("form",{className:"contact_form",onSubmit:this.handleSubmit},i.a.createElement("label",null,c.name_title),i.a.createElement("br",null),i.a.createElement("label",{className:"error"},o.name),i.a.createElement("input",{type:"text",id:"name",placeholder:c.name_placeholder,onChange:this.handleInputChange,value:a}),i.a.createElement("label",null,"Email"),i.a.createElement("br",null),i.a.createElement("label",{className:"error"},o.email),i.a.createElement("input",{type:"text",id:"email",placeholder:c.email_placeholder,onChange:this.handleInputChange,value:t}),i.a.createElement("label",null,"Message"),i.a.createElement("br",null),i.a.createElement("label",{className:"error"},o.message),i.a.createElement("textarea",{className:"messageArea",id:"message",placeholder:c.message_placeholder,onChange:this.handleInputChange,value:n}),i.a.createElement("button",{type:"submit",value:"Submit",className:o.formSubmit?"errorBtn":""},o.formSubmit?"Retry":"Submit",r&&i.a.createElement("i",{class:"fa fa-refresh fa-spin"}),s&&i.a.createElement("i",{class:"fa fa-check"}),o.formSubmit&&i.a.createElement("i",{class:"fa fa-times"}))),i.a.createElement("p",{className:"contactText"},c.alternative_text," ",i.a.createElement("a",{href:"mailto:madhava.diflorio@gmail.com"},"madhava.diflorio@gmail.com"))))}}]),a}(n.Component),q=t(48),P=t.n(q),R=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={language:"EN"},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;P.a.get("http://ip-api.com/json/").then(function(a){"FR"===a.data.countryCode&&e.setState({language:"FR"})})}},{key:"render",value:function(){var e=this,a=this.state.language,t=this.props.location.pathname;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"language-btns-container"},i.a.createElement("button",{className:"EN"===a?"active":void 0,onClick:function(){return e.setState({language:"EN"})}},"EN"),"/",i.a.createElement("button",{className:"FR"===a?"active":void 0,onClick:function(){return e.setState({language:"FR"})}},"FR")),i.a.createElement("header",null,i.a.createElement("h1",null,"Madhava Di Florio"),i.a.createElement("nav",null,i.a.createElement(g.a,{className:"/"===t?"active":"",to:"/"},"Portfolio"),i.a.createElement(g.a,{className:"/about"===t?"active":"",to:"/about"},"EN"===a?"About":"CV"),i.a.createElement(g.a,{className:"/contact"===t?"active":"",to:"/contact"},"Contact"))),i.a.createElement("div",{className:"portfolio"},i.a.createElement(v.a,null,i.a.createElement(f.a,{exact:!0,path:"/",render:function(){return i.a.createElement(T,{language:a})}}),i.a.createElement(f.a,{path:"/about",render:function(){return i.a.createElement(j,{language:a})}}),i.a.createElement(f.a,{path:"/contact",render:function(){return i.a.createElement(L,{language:a})}}))),i.a.createElement("footer",null,i.a.createElement("div",{className:"footer"},i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/mierz00",className:"foot"},i.a.createElement("i",{className:"fa fa-github fa-2x ","aria-hidden":"true"})),i.a.createElement("a",{href:"mailto:madhava.diflorio@gmail.com",className:"foot"},i.a.createElement("i",{className:"fa fa-envelope fa-2x ","aria-hidden":"true"})),i.a.createElement("a",{href:"https://www.freecodecamp.com/mierz00",className:"foot"},i.a.createElement("i",{className:"fa fa-free-code-camp fa-2x ","aria-hidden":"true"}))))))}}]),a}(n.Component),J=Object(b.a)(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=l()({basename:""});r.a.render(i.a.createElement(s.a,{history:z},i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.a437f1d9.chunk.js.map