## Javascript ile Veri Yapıları ve Algoritmalar

Programlama, iki temel unsurdan oluşur:

 1. Veri yapıları: Veri yapıları verinin nasıl depolanacağı ile ilgilidir.
 2. Algoritma: Verilerin işlenmesi ile ilgilidir ve çözüme giden bir yoldur, süreçtir.

Programlamada algoritmanın temel performansı zaman ve bellek kullanımıyla belirlenir. Bunlar algoritmanın CPU'yu (işlemciyi) ne kadar süre kullandığı (time complexity) ve belleği ne kadar kullandığıdır (space complexity). Algoritma bunları ne kadar minimum düzeyde kullanıyorsa algoritma performansı o kadar artar. CPU ve bellek kullanımı fazla algoritmalar ise performans değeri düşük algoritmalardır. Algoritmanın performansını ölçebilmek için ise Big-O Notation kullanılır. Big-O Notation ile bir algoritmanın time complexity ve space complexity'si hesaplanır. Complexity O(x) ile gösterilir.

### Big-O Notation

+ O(1): Veri boyutu algoritma hızını değiştirmez. Veri boyutu artsa bile algoritma hızı sabittir. Örneğin bir sayı dizisinde 3 eleman olsa da 30 milyon eleman olsa da dizi içindeki herhangi bir değere ulaşmaya çalıştığınızda (index) çıktıyı sabit bir sürede alırsınız.

```
const numbers = [92];
console.log(numbers);       -> 0.2 saniyede çıktı verir.
```

```
const numbers_big = [3, 6, 9, 123, 123456, 123456789];
console.log(numbers_big)    -> 0.2 saniyede çıktı verir. 
```
+ O(n): Veri büyüklüğü algoritma hızını etkiler. Algoritma performansı veri boyutu arttıkça değişir. Array döngüsü örnek verilebilir. Aşağıda verilen bir dizi içerisinden verilen değerin kaçıncı indexde olduğunu bulan kod yapısında `numbers` arrayinin boyutu arttıkça algoritma hızı azalacaktır.

```
function getTargetNumber (target) {
    const numbers = [1,2,3,4,5,6,7,8,9];
    let index;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == target) {
            index = i;
        };
    };
    console.log(index)
};

console.log(getTargetNumber(5));
```

+ O(logn): Algoritma performans, girdi boyutunun logaritmasıyla orantılıdır. Binary Tree içinde arama yapmak buna örnektir.

```
log10(10) -> 1, 
log10(100) -> 2, 
log10(1000) -> 3
```

+ O(n^2): Algoritma performansı, girdinin karesi ile orantılıdır. İç içe 2 array döngüsü veya bubble sort buna örnektir. Aşağıdaki numbers dizisi 10 elemanlı olsaydı, 10 kere ve 10 kere döneceği için 100 birim zaman alıyor olacak.

```
for (let index = 0; index < numbers.length; index++) {
    const element = array[index];
    for (let index = 0; index < numbers.length; index++) {
        const element = array[index];
    }
}
```

+ O(n!): Algoritma performansı, girdinin faktöriyeli ile doğru orantılıdır. Bir dizinin tüm kombinasyonlarının bulunması buna örnektir.

```
50*49*48...1
```

Algoritma en iyi performansı O(n) durumunda gösterir. Veri boyutu ne olursa olsun, algoritma hızı sabittir. O(n)'den sonraki en iyi performansı O(1) belirtir. Big-O notasyonu, veri boyutuyla ile ilgili yapılacak işlemlerlerde, veri boyutu büyük ise göz önüne alınması gereken bir konudur.

## Veri Yapıları

**1. Stack:** Stack veri yapısı, içinde birden fazla eleman tutan, ilk giren elemanın son çıktığı dizi şeklinde bir veri yapısıdır. Stack üzerinde temel olarak 2 işlem yapılır: Birincisi "push", ikincisi "pop". Push, stack dizisine eleman eklerken Pop işlemi de en son eklenen elemanı diziden çıkarır. Pop işlemi yapılırken dizide herhangi bir indexteki eleman çıkarılamaz, daima en son eklenen eleman çıkarılır. Stack veri yapısında verilere sadece bir uçtan ulaşılır, bu sebepten doğrusal veri yapısı olarak da geçer. Stack veri yapısı O(1) zamanlıdır.

![image](https://user-images.githubusercontent.com/101933251/170832608-28985a96-3d3b-4f7b-96af-972c3d42b430.png)

+ Class yapısı ile bir tane `Stack` adında bir sınıf oluşturalım. İçinde books adında bir array olsun ve işlemler tanımlansın. Ardından `Stack` sınıfından bir tane `myStack` adında bir instance oluşturalım:
 
```
class Stack {
    constructor(){
        this.books = []
    };

    push(book1){
        this.books.push(book1)
    }

    pop() {
        return this.books.pop()
    }   
};

let myStack = new Stack();
```

`myStack` class'ı içinde push ve pop işlemlerini gerçekleştirebiliriz. Push işlemi eleman eklerken, pop işlemi son elemanı çıkarır:

```
myStack.push("book-1"); 
myStack.push("book-2");
myStack.push("book-3");

console.log(myStack.books); -> çıktı: [ 'book-1', 'book-2', 'book-3' ]

myStack.pop()

console.log(myStack.books); -> çıktı: [ 'book-1', 'book-2' ]
```

Alternatif olarak boş array oluşturup içine push() ve pop() işlemleri gerçekleştirilerek Javascript'te temel Stack yapısı daha anlaşılabilir hale gelir:

```
const myIdeas = []

myIdeas.push("web");
myIdeas.push("mobile");
myIdeas.pop();

console.log(myIdeas);
```
---
**2. Queue:** Stack gibi dizi şeklinde bir veri yapısıdır ama Stack'in tersine ilk giren eleman ilk çıkar. Kuyruk yapısına benzer. Queue üzerinde de iki tip işlem vardır: "Enqueue" ve "Dequeue". Enqueue dizinin sonuna yeni eleman ekler. Dequeue dizinin sonundan elemanı çıkarır ve döndürür. Enqueue işlemi O(1) zamana sahiptir ancak dequeue işlemi bütün elemanları sola doğru kaydırdığı için O(n) zamana sahiptir.

İlk giren eleman "Dequeue" ile ilk çıkarılır:

![image](https://user-images.githubusercontent.com/101933251/170833730-ee982d8a-778e-4323-ba33-e304c2450bb9.png)

Bir `Queue` class'ı oluşturarak içinde "enqueue" ve "dequeue" işlemlerini tanımlayabiliriz. Enqueue eleman eklediğinden push ile gerçekleştirebilir fakat dequeue için Javascript'teki `shift()` metodu gerekir. "shift()" array'in ilk indexindeki elemanı çıkarır. Opsiyonel olarak da `peek()` fonksiyonu ilk elemanı çıkarmadan değerini okumayı sağlar.

```
class Queue {
    constructor(){
        this.elements = [];
    };

    enqueue(element) {
        this.elements.push(element);
    }

    dequeue() {
        return this.elements.shift();
    }

    peek() {
        return this.elements[0];
    }
};
```

Bu class'dan bir instance yaratalım ve enqueue-dequeue işlemlerini gerçekleştirelim.

```
const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.dequeue();

console.log(queue.elements); -> çıktı: [ 'b', 'c' ]
console.log(queue.peek());   -> çıktı: a [ 'b', 'c' ]
```
---
**3. Linked List:** Linked List, birbirine zincir şeklinde arka arkaya bağlanmış olan elemanlardan oluşan bir veri yapısıdır. Bu listedeki her bir elemana `node` denir ve her bir node, tuttuğu verinin yanı sıra kendinden bir sonraki gelecek node'un adresini tutar. Listenin arasından eleman silmeyi ve araya eleman eklemeyi O(1) zamanda yapar ama index'e O(n) zamanda erişilir. 

Node, üzerinde bir sonraki node'a işaret eden property'i örnekteki gibi tutar. Next() property'si bir sonraki node'u işaret eder. Ardından gelen node da sonraki node'a işaret eder. En son node null değeri alır ve liste sonlanır.

![image](https://user-images.githubusercontent.com/101933251/170834676-a7506a7d-68bf-4d88-a9c9-28f3f7d4b8fe.png)

Aşağıdaki link listed örneğinde `node_1, node_2, node_3` adında 3 node değeri vardır ve value key değeriyle `veri` ve ardından next değeri ile bir sonraki node'un adresini tutarlar. Fakat adres verilmemiş ve değerleri null olarak atanmıştır. Adresler `node_1.next = node_2` örneğinde olduğu gibi verilmiştir. En son olarak nodelar, while döngüsüyle yazdırılmıştır.

```
let node_1 = {
    value: "Node 1",
    next: null
};

let node_2 = {
    value: "Node 2",
    next: null
};

let node_3 = {
    value: "Node 3",
    next: null
};

node_1.next = node_2;
node_2.next = node_3;

let node = node_1;

while(node) {
     console.log(node.value);
     node = node.next;
}

```
---

**4. Hash Table:** Anahtarları değerlere bağlayan bir veri yapısıdır. Anahtarlardan ve değerlerden oluşur. Anahtar verildiğinde değere O(1) zamanda erişilir. 

![image](https://user-images.githubusercontent.com/101933251/170835200-f124c289-dc9b-4f92-9449-b70b1ab400fd.png)

Javascript objeleri hash table'a örnektir:

```
const students = {
   1: {id: 1, name: "Mert"},
   2: {id: 2, name: "Ceren"},
   3: {id: 3, name: "Deniz"},
   4: {id: 4, name: "Ali"},
   5: {id: 5, name: "Ece"}
};
```

Öğrenciyi id değerine göre bulmak istersek bu tarz bir fonksiyonla key değerine ulaşarak öğrenciye ulaşabiliriz. Bu fonksiyon O(1) zamanda çalışır. Girdi boyutu algoritma performansını değiştirmez.

`console.log(students[4]);`

---

**5. Tree:** Hiyerarşik yapıları gösteren bir veri yapısıdır ve her bir elemanına "node" denir. Her node'un altında 0, 1 veya daha fazla `alt node` bulunur. Bir node'un üstündeki node'a "parent", altındaki node'a ise "child" denir. Hiyerarşide en üstteki node'a "root" ve en alttaki node'a "leaf" denir. Leaf node'un bir alt node'u yoktur, hiyerarşi orada biter.

![node](https://user-images.githubusercontent.com/101933251/170880587-f0bf0981-17cc-45ba-8cd8-27c68f6a1923.jpg)

Tree veri yapısına örnek bir kod:

```
class Tree {
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

let root = new Tree("Javascript");

let node1 = new Tree("Node.js");
let node2 = new Tree("Electron.js");
let node3 = new Tree("React.js");

root.children.push(node1, node2, node3);

node1.children.push(
    new Tree("Express.js"),
    new Tree("Nest.js")
);

console.log(root);
```

Konsol çıktısı şu şekilde olacaktır:

```
Tree {
  value: 'Javascript',
  children: [
    Tree { value: 'Node.js', children: [Array] },
    Tree { value: 'Electron.js', children: [] }, 
    Tree { value: 'React.js', children: [] }     
  ]
}

```
---
**6. Graph:** Birbirlerine herhangi bir şekilde bağlı olan elemanları gösteren veri yapısıdır. Her bir elemanına `node` ya da `vertex` denir. Elemanlar arası ilişki veya bağlantıya `edge` denir. Graph, Tree veri yapısına benzer ancak onun gibi hiyerarşik yapıda olmak zorunda değildir. Arkadaşlık ilişkileri veya internet cihazları bu veri yapısına örnektir. Sosyal medya uygulamaları gibi ilişkilerin veya bağlantıların bulunduğu yerlerde sıklıkla kullanılan bir veri yapısıdır. 

![image](https://user-images.githubusercontent.com/101933251/170881455-44df976d-4fac-4b0c-9ff3-6a3edf96bf45.png)

---

## Algoritmalar

Eklenecek
