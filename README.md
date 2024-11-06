# Nereid

![alt text](image.png)

![](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Diagram editor based on MermaidJS, born from my will to make class diagrams quickly but not finding a good alternative for linux.

I am currently focusing on local save.

## How to run

    npm install

    npm run ng serve

Then access [localhost:4200](localhost:4200)

## Goals

- [X] Basic interface elements (topbar, sidebar, mainview)
- [X] Class CRUD
- [X] Mermaid logic (transpilation from objects to mermaid code)
- [ ] Attribute CRUD
- [ ] Method CRUD
- [ ] Relationship CRUD

- [ ] Deal and store multiple diagrams
- [ ] Objects to Mermaid code
- [ ] Mermaid code to objects

## Test later

- Test attribute CRUD with reactive forms so maybe i wouldnt need to declare a new classes array in sidebar template