function Article() {
    this.tags = ['css', 'js'];
}

let article = new Article();

function BlogPost() {}

BlogPost.prototype = article;

let blog = new BlogPost();


function StaticPage() {
    Article.call(this);
}

let page = new StaticPage();


blog.tags.push('html');
page.tags.push('php');

console.log(article);
console.log(blog);
console.log(page);


