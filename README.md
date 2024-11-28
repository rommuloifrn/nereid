# Nereid

![alt text](image.png)

![](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Diagram editor based on MermaidJS, born from my will to make class diagrams quickly but not finding a good alternative for linux.

Currently its only possible to save locally.

## How it works

```mermaid
---
title: Diagram Service (simplified)
---
classDiagram

class DiagramService {
    currentDiagram: Diagram

    %%addClass()
    %%classTitleIsValid(title:string)
    %%deleteClass(title:string)
    %%addAtributeOnClass(classtitle: string, att: Attribute)
    loadDiagramFromStorage()
    %%generateDiagram(d: Diagram)
    updateDiagramRender()
    saveDiagram()
    
    
}

```

### What happens when you add a class to the diagram?
<!-- lembrar de usar métodos como atores e agrupar eles nos rsepectivos services.  -->
```mermaid
sequenceDiagram
participant CreateClassBtnComponent
participant DiagramService
%%participant MainviewComponent
participant mermaid
CreateClassBtnComponent->>DiagramService: addClass(classTitle)
DiagramService->>DiagramService: saveDiagram()
DiagramService->>DiagramService: updateDiagramRender()
DiagramService->>DiagramService: generateDiagramString()

DiagramService->>mermaid: render()
```

## How to run

    npm install

    npm run ng serve

Then access [localhost:4200](localhost:4200)
