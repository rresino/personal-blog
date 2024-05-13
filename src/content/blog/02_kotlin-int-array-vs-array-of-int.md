---
title: 'Kotlin: IntArray vs Array of Int'
description: 'As you know in Kotlin we have arrays and we have collections (List, Map...), but what are the difference between using an "IntArray" and an "Array", looks pretty much the same right?'
pubDate: 'Apr 01 2024'
heroImage: '/personal-blog/imgs/blog/02.webp'
tags: ["kotlin"]
---

As you know in Kotlin we have arrays and we have collections (List, Map...), but what are the difference between using an "IntArray" and an "Array", looks pretty much the same right?

## IntArray

It's a array of primitives, I mean it's a Int[] under the hood.

```kotlin
val aa: IntArray = IntArray(12)
val bb: LongArray = LongArray(5)
```

Remember that an array has a fixed size, but it has a better performance if you cannot increase or decrease the size. Because it reserves all the space for all the items.

It can use primitives (Int, Long ...) but not custom class.

# Array&lt;int&gt;

It's a collection, it's an ArrayList but with a type class verification in compiled time.

It means that it's an ArrayList that can increase or decrease with no big impact on performance.

The compile validates that all the content it's of the type Int in this example but can be any object type. [Remember the type of erasure](https://kotlinlang.org/docs/generics.html#type-erasure).

```kotlin
val a: Array<Int> = arrayOf(1, 2, 3)
val b: Array<Pepe> = arrayOf()
```

You can use any class or data class in the type.

```kotlin
data class Pepe(val name: String)
val b: Array<Pepe> = arrayOf()
```

# How to create

* **IntArray:** You can create an empty list with a fixed size, or add a generator lambda to init each item.
    
* **Array:** As with any list you can use collections methods to create and init a list.
    

```kotlin
// Integer[3] => (1, 2, 3)
val a: Array<Int> = arrayOf(1, 2, 3)

// int[12] => [0, 0, 0, 0, ...]
val b1: IntArray = IntArray(size = 12)
// int[5] => [1, 2, 3, 4, 5]
val b2 = IntArray(size = 5, init = { it + 1})
```