---
title: 'Depth-first search (DFS)'
description: 'How to implement a Depth First Search in Kotlin'
pubDate: 'Apr 12 2024'
heroImage: '/imgs/blog/04.jpg'
tags: ["kotlin","DFS"]
---

How to implement a Depth First Search in Kotlin

It's an algorithm for searching in a tree or graph structure, like [BFS](https://hashnode.com/post/clvw9s9wq000g08l716z8g2l9). 
But Depth-first searches (DFS) are advantageous in situations where it is necessary to explore a path as deeply as possible, for example, in the identification of cycles in directed graphs, the determination of topological sorts (assuming the absence of cycles), and the resolution of mazes or puzzles.
More info on [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search).

It's very useful for solving the typical problems of finding the shorter path between City A and City D.
[![](https://mermaid.ink/img/pako:eNpN0MEKwyAMBuBXkZzbF_AwaNXjTttps4dQ7Sq0WpwySum7z2nH5sn_SwghG_ROaaAwTO7Vj-gDuXJpSXrNnZmwkqYjdX0ibUltV4ptRlaQHcgy8oL8wCajKCgOFKXzf5aQVlqoYNZ-RqPSStunLCGMetYSaPoqPWCcggRp99QaF4VBC2WC80CDj7oCjMFdVtt_c-nhBh8eZ6ADTs-kC9qbc7-s84xzOUW-yP4G5TpV8w?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNpN0MEKwyAMBuBXkZzbF_AwaNXjTttps4dQ7Sq0WpwySum7z2nH5sn_SwghG_ROaaAwTO7Vj-gDuXJpSXrNnZmwkqYjdX0ibUltV4ptRlaQHcgy8oL8wCajKCgOFKXzf5aQVlqoYNZ-RqPSStunLCGMetYSaPoqPWCcggRp99QaF4VBC2WC80CDj7oCjMFdVtt_c-nhBh8eZ6ADTs-kC9qbc7-s84xzOUW-yP4G5TpV8w)

## How it works

This algorithm has 2 pillars:
- **Recursion:** We need a function to search the next possible steps. Move to the next item and use the function again.
- **Log of visited items:** We need to store all the visited items to avoid circular dependencies.

## Ok let's code

First of all, we need a graph structure to test our solution:
[![](https://mermaid.ink/img/pako:eNpN0L0OgyAQB_BXITfrCzA08QtdOrVTw0LkrCYihsLQGN-9VGx6TPzg-F-4DXqrETg8nVpHdq_lwuIqWJ5fWElRUZxl5YGCokloaECCoOgSOhogaICgTQV909K0lpZV9CahpTj71AmQgUFn1KTj97fvlQQ_okEJPG41DirMXoJc9lgaVq08Nnry1gH3LmAGKnh7ey_9z6mmnlQcpgE-qPkVT1e1PKz9G4-Maxr7Mf39AyAVZSk?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNpN0L0OgyAQB_BXITfrCzA08QtdOrVTw0LkrCYihsLQGN-9VGx6TPzg-F-4DXqrETg8nVpHdq_lwuIqWJ5fWElRUZxl5YGCokloaECCoOgSOhogaICgTQV909K0lpZV9CahpTj71AmQgUFn1KTj97fvlQQ_okEJPG41DirMXoJc9lgaVq08Nnry1gH3LmAGKnh7ey_9z6mmnlQcpgE-qPkVT1e1PKz9G4-Maxr7Mf39AyAVZSk)

```kotlin
        private const val ROOT = "A"

        private val nodeMapping = mapOf(
            "A" to listOf("B", "C", "D"),
            "B" to listOf("A", "E"),
            "E" to listOf("B", "F", "H"),
            "H" to listOf("A"),
            "F" to listOf("E", "C", "G"),
            "G" to listOf("F", "C"),
            "C" to listOf("F", "G", "A"),
            "D" to listOf("A"),
        )
```

---

> Image of <a href="https://unsplash.com/es/@redzeppelin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Red Zeppelin</a> en <a href="https://unsplash.com/es/fotos/muro-de-hormigon-marron-y-negro-ynAo7ZSZWO0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
