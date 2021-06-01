// Rename it 'Navbar' and you'll get a lexical declaration error.
// const navbar = new Navbar();

class App{
    constructor(params = {}){
        this.self = this;
        this.siteHead = document.getElementById('site-head');
        this.title = (params.title) ? params.title : 'Vipul Sharma';
        this.css = (params.css) ? params.css : `<link rel="stylesheet" href="static/css/main.css"/>`;
        this.metaTag = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        `;

        this.navbar = new Navbar();
        this.footer = new Footer();
    }

    init(){
        this.initHead();
        this.initBody();
    }

    // renderUI(self, self.initHead)

    initHead(){
        const siteHeadContent = this.title + this.css + this.metaTag;
        this.siteHead.innerHTML = siteHeadContent;
        console.log('Head');
    }

    initBody(){
        document.getElementById('vip-header').innerHTML = this.navbar.content;
        document.getElementById('vip-footer').innerHTML = this.footer.content;
        console.log('Body!');
    }

    // renderUI(){
    //     document.querySelector('full-page').setAttribute('width', window.innerWidth);
    // }
}