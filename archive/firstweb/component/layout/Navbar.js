class Navbar{
    constructor(){
        this.content = `
            <div class="Navbar">
                <div class="site-name">
                    <h1>Vipul Sharma</h1>
                </div>
                <nav class="site-nav">
                    <ul class="nav-list">
                        <li id="nav-home" class="nav-item"><a href="/" class="nav-item-link">Home</a></li>
                        <li id="nav-about" class="nav-item"><a href="/about.html" class="nav-item-link">About Me</a></li>
                        <li id="nav-portfolio" class="nav-item"><a href="/portfolio.html" class="nav-item-link">Portfolio</a></li>
                        <li id="nav-blog" class="nav-item"><a href="/blog.html" class="nav-item-link">Blog</a></li>
                        <div style="clear:both"></div>
                    </ul>
                </nav>
            </div>`;
    }

    getContent(){
        return this.content;
    }
}