<p align="center">
  <img src="https://github.com/TobiasPrt/website/blob/master/preview.png?raw=true" alt="Screenshot of Website" width="800">

<h1 align="center">
  My Personal Website and Portfolio.
</h1>

<p align="center">
  <a href="https://github.com/TobiasPrt/website/releases/">
    <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/TobiasPrt/website?label=version">
  </a>
  <a href="https://github.com/TobiasPrt/website/actions/workflows/deploy.yml">
    <img alt="Deploy passing" src="https://github.com/TobiasPrt/website/actions/workflows/deploy.yml/badge.svg">
  </a>
  <a href="https://gohugo.io">
    <img alt="Made with Hugo" src="https://img.shields.io/badge/made%20with-Hugo-ff69b4">
  </a>
  
  
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#content-management">Content Management</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Key Features

- responsive design
- subtle animated navigation bar
- local fonts
- reusable components
- uses different archetypes

## Development

Download and install hugo extended. For more information look [here](https://gohugo.io/installation/macos/).
```shell
$ brew install hugo
```

Clone this repository to your local machine.
```shell
$ git clone https://github.com/TobiasPrt/website.git
```

Start the local server for development and include draft content.
```shell
$ hugo server -D
```
You should now be able to access the website at http://localhost:1313/.

## Deployment

To create the entire stack of static files in the `/public`
directory use this command.
```shell
$ hugo
```

The deployment is handled by a workflow triggered on creating a release on GitHub.

## Content Management

> "All content should be organized in a manner that reflects the rendered website."

Read all about how content in Hugo projects is organized [here](https://gohugo.io/content-management/organization/).

Use directory based archetypes to create new case studies or blog posts.
```shell
$ hugo new --kind case-study work/name # case study
$ hugo new --kind blog-post blog/name # blog post
```
Alternatively use the makefile commands:
```shell
$ make work N="name" # case study
$ make post N="name" # blog post
```

## Credits

Thanks to the community for the following open source projects used for this website:
- [Hugo](https://github.com/gohugoio/hugo) 
- [Cookies EU Banner](https://github.com/Alex-D/Cookies-EU-banner)

## License

All rights reserved