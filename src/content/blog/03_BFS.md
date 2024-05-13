---
title: 'Breadth-first search (BFS)'
description: 'Breadth-first search in Kotlin'
pubDate: 'May 07 2024'
heroImage: '/personal-blog/imgs/blog/03.jpg'
tags: ["kotlin","BFS"]
---

Breadth-first search (BFS) it's an algorithm for searching in a tree structure, it's useful for graph problems like what is shortest path between city A and city F or finding the shortest path to reach the exit for a maze.  
More info on [wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)

Honestly, I only use it for Hackerank problems or some tricky job code challenges, but I haven't used it in my work experience.

## How it works

The algorithm starts the search in the closest nodes before going to depth. For example, in the image, it will begin looking at B and C nodes before other nodes.

[![](https://mermaid.ink/img/pako:eNpdz80KwjAMB_BXKTlvL9CDh33oyYt6kl7CmrnB2o6aIjL27taWyTCn_MKfhCzQOU0goZ_cqxvQs7g1yopYF-dYlOVBVH-us6uEZo82o0447nHKgAIMeYOjjieX70wBD2RIgYytph7DxAqUXWM0zBqZWj2y8yB7nJ5UAAZ217ftQLIPtIWaER8ezS81o707Z7YQpR3n_Gr6eP0AJSBK7Q?type=png)](https://mermaid.live/edit#pako:eNpdz80KwjAMB_BXKTlvL9CDh33oyYt6kl7CmrnB2o6aIjL27taWyTCn_MKfhCzQOU0goZ_cqxvQs7g1yopYF-dYlOVBVH-us6uEZo82o0447nHKgAIMeYOjjieX70wBD2RIgYytph7DxAqUXWM0zBqZWj2y8yB7nJ5UAAZ217ftQLIPtIWaER8ezS81o707Z7YQpR3n_Gr6eP0AJSBK7Q)

It will be processed in this order: 
1. Check the root neighbors
2. Check B node. 
3. Check C node.
4. Check the neighbors of B and C
5. Check D node.
6. Check E node.
7. Check F node.

For more circular graphs of nodes, you have to take care not to check any checked node to avoid cyclical checks. Check the image: 

[![](https://mermaid.ink/img/pako:eNpd0M0KwjAMB_BXKTlvPsAOwj7Ukxf1JL2ENXODtR01RWTs3a2rU1xP-ZF_SsgItVUEGTS9fdQtOhaXShoR3slaFmm6FfnKxcpldD7jM1yIdPOngH1EGVs_BRwgAU1OY6fCLuO7JYFb0iQhC6WiBn3PEqSZQtQPCpl2qmPrIGuwv1MC6Nmen6aGjJ2nJVR1eHOov6kBzdVavYRo_uMYbzCfYnoBZwFQrg?type=png)](https://mermaid.live/edit#pako:eNpd0M0KwjAMB_BXKTlvPsAOwj7Ukxf1JL2ENXODtR01RWTs3a2rU1xP-ZF_SsgItVUEGTS9fdQtOhaXShoR3slaFmm6FfnKxcpldD7jM1yIdPOngH1EGVs_BRwgAU1OY6fCLuO7JYFb0iQhC6WiBn3PEqSZQtQPCpl2qmPrIGuwv1MC6Nmen6aGjJ2nJVR1eHOov6kBzdVavYRo_uMYbzCfYnoBZwFQrg)

It will be processed in this order: 
1. Check the root neighbors
2. Check A node.
3. Check B node.
4. Check C node.
5. Check the second level of neighbors.
6. Check D (neighbor of A).
7. Skip D (neighbor of B). It was checked.
8. Check F (neighbor of B).
9. Skip F (neighbor of C). It was checked. 
10. Check G (neighbor of C).

## Ok, let's code

### Create a Tree node

First of all, we have to write the tree node in Kotlin (or the language you want).

```kotlin
private const val ROOT = "Root"
private val nodeMapping = mapOf(
    ROOT to listOf("A", "B", "C"),
    "A" to listOf("D"),
    "B" to listOf("D", "F"),
    "C" to listOf("F", "G"),
)
```

### Create a log 

We need to save all the checked nodes to avoid re-check any node.

```kotlin
// val visitedLog = BooleanArray(nodeMapping.size){ false } # Only for ints
val visitedLog = mutableSetOf(ROOT)
```
it will have all the checked nodes.

### Create a queue 

We need to store all the neighbors to check, the best way is to use a queue to store and process one by one all the nodes. 
Don't forget to add the Root node to start.

```kotlin
val queue: Queue<String> = LinkedList()
queue.add(ROOT)
```

### Iterate and check 

Now the funny part, iterate over each queue item to get neighbors and check:
1. Get one item from queue.
2. Check it! In this example, we will only print it.
3. Get the neighbors of the checked node.
4. iterate over all the neighbors checking if they were checked, if not add to the end of the queue.

```kotlin
// iterate over queue
while (queue.isNotEmpty()) {
    // get first queue item and remove it from queue (poll).
    val currentElement = queue.poll()
    // Check: do things with current element
    println("- $currentElement")
    // Get neighbors 
    val neighbors = nodeMapping[currentElement]
    neighbors?.forEach {
        // It was checked?
        if (!visitedLog.contains(it)) {
            visitedLog += it
            queue.add(it)
        }
    }
}
```

## Summary

It's an elementary example of how to check all the nodes of a tree or a node graph. But I think it is a good first step to start with more complex examples.

---

 > Image of <a href="https://unsplash.com/es/@photoroutes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Claudio Cesaro</a> en <a href="https://unsplash.com/es/fotos/campo-de-hierba-verde-durante-el-dia-Fwj_JvfXUCs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  