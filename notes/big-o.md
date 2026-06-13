# Big O Cheat Sheet

## Common Complexities (best to worst)
| Notation   | Name         | Example                        |
|------------|--------------|--------------------------------|
| O(1)       | Constant     | Array index, HashMap get       |
| O(log n)   | Logarithmic  | Binary search                  |
| O(n)       | Linear       | Single loop                    |
| O(n log n) | Linearithmic | Merge sort                     |
| O(n²)      | Quadratic    | Nested loops                   |
| O(2ⁿ)      | Exponential  | Recursive fibonacci (naive)    |

## JavaScript Built-ins
| Operation               | Time       |
|-------------------------|------------|
| arr[i]                  | O(1)       |
| arr.push() / pop()      | O(1)       |
| arr.shift() / unshift() | O(n)       |
| arr.indexOf()           | O(n)       |
| arr.sort()              | O(n log n) |
| map.get() / set()       | O(1)       |
| set.has() / add()       | O(1)       |
