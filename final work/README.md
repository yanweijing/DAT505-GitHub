# DAT505-GitHub final work #
## Description ##
The subject of the assignment is a countdown timer.

Overall,the scene is mainly composed by 15*15 three-dimensional blocks，as we set up the background color into black, it to some degree seems like some squares. In different scenes, small squares will be rendered through the transformation of coordinates and colors. On the top of the canvas, an input box shows in front which allows you to set a positive integer with a value less than or equal to 10, and a text reminder is provided for easy understanding. When I first entered the page, the opening music became rhythmic with the silver small squares appear and disappear  iteratively. After the upper limit of the countdown number into the textbox mentioned above is set, the countdown of Arabic numerals and Chinese appeared on the screen, and metal strikes appeared synchronously with the digital transformation. By the end of the countdown, the music stops, the blocks on the whole scene falsh with random color and wave from the center to the edge.

### Code comment ###

```javascript
var renderer, scene, camera;
```
* Define the renderer, scene, camera.

```javascript
var cubes = [];
```
* Define an array of cubes.

```javascript
var rot = 0;
```
* Define the rot(rate of turning)=0.

```javascript
var start=0;
```
* Define the start(Initialization interval)=0,the value will be changed when rendering one more time.

```javascript
var barrelSize=0;
```
* Define the barrelSize(Countdown cap size)=0,the value will be changed when you enter a integer into the text area.

```javascript
function getPosition(coordinate) {
  return coordinate[0] + coordinate[1] * 15
}
```
* The function is to return the subscript of the small square represented by the current coordinate in the entire block array.

```javascript
var coordinates_10_p = [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[0,8],[5,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],[14,7],[10,5],[10,6],[10,8],[10,9]]
```
* This code is representative of the number 10 and the Chinese character ten.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 10 and the Chinese character ten, the small squares on the coordinates that make up the 10 and ten will bulge and twinkle with a random color.

```javascript
var coordinates_9_p = [[0,5],[1,5],[2,5],[3,5],[6,5],[0,6],[3,6],[6,6],[0,7],[3,7],[6,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[9,5],[14,5],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[9,7],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,9]]
```
* This code is representative of the number 9 and the Chinese character night.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 9 and the Chinese character night, the small squares on the coordinates that make up the 9 and nine will bulge and twinkle with a random color.

```javascript
var coordinates_8_p = [[0,5],[1,5],[2,5],[3,5],[6,5],[0,6],[3,6],[6,6],[0,7],[3,7],[6,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[4,5],[5,5],[13,3],[12,4],[9,5],[10,5],[11,5],[9,8],[10,8],[11,8],[12,9],[13,10]]
```
* This code is representative of the number 8 and the Chinese character eight.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 8 and the Chinese character eight, the small squares on the coordinates that make up the 8 and eight will bulge and twinkle with a random color.

```javascript
var coordinates_7_p = [[0,5],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[10,4],[10,5],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[10,7],[14,7],[10,8],[14,8]]
```
* This code is representative of the number 7 and the Chinese character seven.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 7 and the Chinese character seven, the small squares on the coordinates that make up the 7 and seven will bulge and twinkle with a random color.

```javascript
var coordinates_6_p = [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[0,6],[3,6],[6,6],[0,7],[3,7],[6,7],[0,8],[3,8],[4,8],[5,8],[6,8],[8,6],[10,3],[14,4],[10,5],[12,5],[13,5],[14,5],[8,6],[10,6],[10,7],[12,7],[13,7],[14,7],[10,8],[14,8]]
```
* This code is representative of the number 6 and the Chinese character six.
The coordinates in array represent those coordinates which need to be marked individually,which means.
When the countdown passes the number 6 and the Chinese character six, the small squares on the coordinates that make up the 6 and six will bulge and twinkle with a random color.

```javascript
var coordinates_5_p = [[0,5],[1,5],[2,5],[3,5],[6,5],[0,6],[3,6],[6,6],[0,7],[3,7],[6,7],[0,8],[3,8],[4,8],[5,8],[6,8],[8,4],[10,4],[13,4],[8,5],[10,5],[11,5],[12,5],[13,5],[8,6],[9,6],[10,6],[13,6],[8,7],[10,7],[13,7],[8,8],[10,8],[11,8],[12,8],[13,8],[13,9]]
```
* This code is representative of the number 5 and the Chinese character five.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 5 and the Chinese character five, the small squares on the coordinates that make up the 5 and five will bulge and twinkle with a random color.

```javascript
var coordinates_4_p = [[0,5],[1,5],[2,5],[3,5],[3,6],[3,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[9,4],[10,4],[11,4],[12,4],[13,4],[14,4],[9,5],[12,5],[14,5],[9,6],[10,6],[11,6],[14,6],[9,7],[10,7],[11,7],[14,7],[9,8],[12,8],[14,8],[9,9],[10,9],[11,9],[12,9],[13,9],[14,9]]
```
* This code is representative of the number 4 and the Chinese character four.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 4 and the Chinese character four, the small squares on the coordinates that make up the 4 and four will bulge and twinkle with a random color.

```javascript
var coordinates_3_p = [[0,5],[3,5],[6,5],[0,6],[3,6],[6,6],[0,7],[3,7],[6,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[13,4],[9,5],[13,5],[9,6],[11,6],[13,6],[9,7],[11,7],[13,7],[9,8],[13,8],[13,9]]
```
* This code is representative of the number 3 and the Chinese character three.
The coordinates in array represent those coordinates which need to be marked individually,which means.
When the countdown passes the number 3 and the Chinese character three, the small squares on the coordinates that make up the 3 and three will bulge and twinkle with a random color.

```javascript
var coordinates_2_p = [[0,5],[3,5],[4,5],[5,5],[6,5],[0,6],[3,6],[6,6],[0,7],[3,7],[6,7],[0,8],[1,8],[2,8],[3,8],[6,8],[13,4],[10,5],[13,5],[10,6],[13,6],[10,7],[13,7],[10,8],[13,8],[13,9]]
```
* This code is representative of the number 2 and the Chinese character two.
The coordinates in array represent those coordinates which need to be marked individually,which means,when the countdown passes the number 2 and the Chinese character two, the small squares on the coordinates that make up the 2 and two will bulge and twinkle with a random color.

```javascript
var coordinates_1_p = [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[11,5],[11,6],[11,7],[11,8],[11,9]]
```
* This code is representative of the number 1 and the Chinese character one.
The coordinates in array represent those coordinates which need to be marked individually,which means.
When the countdown passes the number 1 and the Chinese character one, the small squares on the coordinates that make up the 1 and one will bulge and twinkle with a random color.

```javascript
var coordinates_10 = coordinates_10_p.map(getPosition)
var coordinates_9 = coordinates_9_p.map(getPosition)
var coordinates_8 = coordinates_8_p.map(getPosition)
var coordinates_7 = coordinates_7_p.map(getPosition)
var coordinates_6 = coordinates_6_p.map(getPosition)
var coordinates_5 = coordinates_5_p.map(getPosition)
var coordinates_4 = coordinates_4_p.map(getPosition)
var coordinates_3 = coordinates_3_p.map(getPosition)
var coordinates_2 = coordinates_2_p.map(getPosition)
var coordinates_1 = coordinates_1_p.map(getPosition)
```
* Convert each of the patterns, that is, numbers and Chinese characters, the coordinates that need to be highlighted are converted into subscripts corresponding to small squares arrays.

```javascript
var targetCoo = [coordinates_10, coordinates_9, coordinates_8,coordinates_7,coordinates_6,coordinates_5,coordinates_4,coordinates_3,coordinates_2,coordinates_1]
```
* Defines an array containing the countdown animation sequence, the pattern will be shown in the order of the array.

```javascript
var coordinates_15_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14]]
```
* As soon as you enter the main page and load the page, the sequence of blocks that need to be brighted progressively is the 15th line at the top,we name the line appeared first as line 15,the second one as line 14,and so on.The coordinates here are the rows of gray small square coordinates displayed.

```javascript
var coordinates_14_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14]]
```
* Here are the two rows of gray small square coordinates on lines 15 and 14.

```javascript
var coordinates_13_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14]]
```
* Here are the three rows of gray small square coordinates from the 15th line to the 13th line.

```javascript
var coordinates_12_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14]]
```
* Here are the four rows of gray small square coordinates from the 15th line to the 12th line.

```javascript
var coordinates_11_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14]]
```
* Here are the five rows of gray small square coordinates from the 15th line to the 11th line.

```javascript
var coordinates_10_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14]]
```
* Here are the six rows of gray small square coordinates from the 15th line to the 10th line.

```javascript
var coordinates_9_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14]]
```
* Here are the seven rows of gray small square coordinates from the 15th line to the 9th line.

```javascript
var coordinates_8_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14]]
```
* Here are the eight rows of gray small square coordinates from the 15th line to the 8th line.

```javascript
var coordinates_7_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14]]
```
* Here are the nine rows of gray small square coordinates from the 15th line to the 7th line.

```javascript
var coordinates_6_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14]]
```
* Here are the ten rows of gray small square coordinates from the 15th line to the 6th line.

```javascript
var coordinates_5_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14],
[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13],[10,14]]
```
* Here are the eleven rows of gray small square coordinates from the 15th line to the 5th line.

```javascript
var coordinates_4_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14],
[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13],[10,14],
[11,0],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14]]
```
* Here are the twelve rows of gray small square coordinates from the 15th line to the 4th line.

```javascript
var coordinates_3_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14],
[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13],[10,14],
[11,0],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14],
[12,0],[12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[12,12],[12,13],[12,14]]
```
* Here are the thirteen rows of gray small square coordinates from the 15th line to the 3rd line.

```javascript
var coordinates_2_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14],
[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13],[10,14],
[11,0],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14],
[12,0],[12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[12,12],[12,13],[12,14],
[13,0],[13,1],[13,2],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[13,13],[13,14]]
```
* Here are the fourteen rows of gray small square coordinates from the 15th line to the 2nd line.

```javascript
var coordinates_1_line = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14],
[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13],[10,14],
[11,0],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14],
[12,0],[12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[12,12],[12,13],[12,14],
[13,0],[13,1],[13,2],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[13,13],[13,14],
[14,0],[14,1],[14,2],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[14,13],[14,14]]
```
* Here are the fifteen rows of gray small square coordinates from the 15th line to the 1st line.

```javascript
var coordinates_15_line_pos = coordinates_15_line.map(getPosition)
var coordinates_14_line_pos = coordinates_14_line.map(getPosition)
var coordinates_13_line_pos = coordinates_13_line.map(getPosition)
var coordinates_12_line_pos = coordinates_12_line.map(getPosition)
var coordinates_11_line_pos = coordinates_11_line.map(getPosition)
var coordinates_10_line_pos = coordinates_10_line.map(getPosition)
var coordinates_9_line_pos = coordinates_9_line.map(getPosition)
var coordinates_8_line_pos = coordinates_8_line.map(getPosition)
var coordinates_7_line_pos = coordinates_7_line.map(getPosition)
var coordinates_6_line_pos = coordinates_6_line.map(getPosition)
var coordinates_5_line_pos = coordinates_5_line.map(getPosition)
var coordinates_4_line_pos = coordinates_4_line.map(getPosition)
var coordinates_3_line_pos = coordinates_3_line.map(getPosition)
var coordinates_2_line_pos = coordinates_2_line.map(getPosition)
var coordinates_1_line_pos = coordinates_1_line.map(getPosition)
```
* Convert the coordinates to be highlighted in each line to the subscript of the corresponding small square array.

```javascript
var targetDefaultOpeningCoo = [coordinates_15_line_pos, coordinates_14_line_pos, coordinates_13_line_pos,coordinates_12_line_pos,coordinates_11_line_pos,coordinates_10_line_pos,coordinates_9_line_pos,coordinates_8_line_pos,coordinates_7_line_pos,coordinates_6_line_pos,coordinates_5_line_pos,coordinates_4_line_pos,coordinates_3_line_pos,coordinates_2_line_pos,coordinates_1_line_pos]
```
* Defines an array containing countdown animation sequence, the pattern will be shown in the order of the array.

```javascript
var listener = new THREE.AudioListener();
```
* Define a AudioListener.

```javascript
var sound = new THREE.Audio( listener );
```
* Create a global audio source.

```javascript
var audioLoader = new THREE.AudioLoader();
```
* Load a sound and set it as the Audio object's buffer.

```javascript
function getTargetCoo(time){}
```
* Get the pattern of the countdown screen to be displayed at the current time based on the current time.

```javascript
var sec;
```
* The subscript of the picture displayed in the current time interval in the array.

```javascript
if(barrelSize==0)
{
  sec=Math.floor(time / 1000);
}
else {
  sec=Math.floor(time / 1000+10-barrelSize);
}
return targetCoo[sec]
}
```
* The initial countdown time resulting from the user input, if greater than 0, the start countdown animation will starting from the barrelSize.
#### For example ####
When the start time is 0, it returns TargetCoo (0) = coordinates_10. After one second, it returns TargetCoo(1), and returns coordinates_9. Similarly, when the barrelSize is greater than 0, the overall process is the same as above, except that the starting position will be shifted back by 10 - barrelSize.

```javascript
function getDefaultOpeningCoo(time){}
```
* Get the opening animation of time (time).

```javascript
function getDefaultOpeningCoo(time) {
  var sec=(Math.floor(time / 1000))%15;
  return targetDefaultOpeningCoo[sec]
}
```
* When the return time is (time), the opening animation displayed, time=0, returns targetDefaultOpeningCoo(0)= coordinates_15_line_pos. It should be noted that when the time is greater than 15, the pattern display will come back again.

```javascript
scene = new THREE.Scene();
```
* Define a scene.

```javascript
var W = window.innerWidth,
```
* Define the width of the window.

```javascript
H = window.innerHeight;
```
* Define the height of the window.

```javascript
camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
```
* Define a PerspectiveCamera,and define its properties.

```javascript
camera.position.set(0, 40, 80);
```
* Set the position of the camera.

```javascript
camera.lookAt(scene.position);
```
* After setting, you can see the object in the middle of the screen no matter how you change the position of the camera.

```javascript
camera.add(listener);
```
* Add the listener in the camera.

```javascript
var spotLight = new THREE.SpotLight(0xFFFFFF);
```
* Define a SpotLight and set its colour.

```javascript
spotLight.position.set(0, 1000, 0);
```
* Set the position of the spotlight.

```javascript
scene.add(spotLight);
```
* Add the spotlight in the scene.

```javascript
renderer = new THREE.WebGLRenderer({antialias:true});
```
* Generate render object (property: anti-aliasing effect is valid).

```javascript
renderer.setClearColor(0x000000);
```
* Render the background color.

```javascript
renderer.setSize(W, H);
```
* Render background canvas length and width.

```javascript
controls = new THREE.OrbitControls(camera, renderer.domElement);
```
* Constructing  orbitcontrols, mainly by controlling the camera to rotate along the target object through the mouse, so as to observe the object from different angles as in the rotating scene.

```javascript
  for (var x = -35; x < 40; x += 5)
  for (var y = -35; y < 40; y += 5)
```
* Start from -35 and sequentially add one every 5 pixels.

```javascript
var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
```
* Define a boxGeometry.

```javascript
var boxMaterial = new THREE.MeshLambertMaterial({color:0x000000});
```
* Define a MeshLambertMaterial,its color is black.

```javascript
var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
```
* Define a mesh,and give it the attributes of boxGeometry and boxMaterial.

```javascript
mesh.position.x = x;
mesh.position.z = y;
```
* Set the coordinates of the meshX axis to x and the coordinates of the Z axis to y.

```javascript
scene.add(mesh);
```
* Add the mesh in the scene.

```javascript
cubes.push(mesh);
```
* Push the mesh in the cubes.

```javascript
document.body.appendChild(renderer.domElement);
```
* Put the elements in the array.

```javascript
function drawFrame(ts){
  if(!start) start = ts
 var interval = ts - start}
```
* (ts) is the current execution time.

```javascript
var localTarget = getDefaultOpeningCoo(interval)
```
* Current time interval localTarget is to judge if current station is in opening stage.

```javascript
var desti=0;
```
* Define the middle of the entire small square to be 0.

```javascript
var absx=0;
var absz=0;
```
* Get the position of the middle elements X and Z of the entire block array.

```javascript
if(barrelSize==0||barrelSize>10||barrelSize<1)
```
* The opening music is played when the user does not have any input during the opening stage.

```javascript
{
  audioLoader.load( 'audio/opening.wav', function( buffer ) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });
}
```
* Set the opening music, loop until the number is entered, set the music volume to 0.5.

```javascript
else if ((!target))
```
* It is not the opening stage, not the countdown stage, or the end stage, and nothing is done.

```javascript
else
```
* Countdown phase.

```javascript
audioLoader.load('audio/1s.wav', function(buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(false);
  sound.setVolume(0.5);
  sound.play();
});
```
* Set the countdown music, the music does not loop, the countdown ends, the music ends, set the volume to 0.5.

```javascript
requestAnimationFrame(drawFrame);
```
* Constantly refreshing.

```javascript
if(barrelSize==0||barrelSize>10||barrelSize<1)
```
* During the first stage or user's input is error.

```javascript
  if(!localTarget)
```
* Not in the opening animation stage (there is no such scene), nothing is done.

```javascript
else
```
* Opening rendering effects.

```javascript
if(!!~localTarget.indexOf(i)) {
  c.scale.y = 1
  c.material.color.setHex(0Xc0c0c0);
} else {
  c.scale.y = 1
  c.material.color.setHex(0x000000);
}
```
* The small square is set to silver in the list of small squares that the current opening animation needs to process. If the coordinates of the mesh are points that need to be raised, it is set to silver, otherwise it is set to black.

```javascript
else if ((!target)){}
```
* Non-opening, non-countdown, stage after countdown.

```javascript
if(c.position.x<desti){
  absx=(desti-c.position.x);
}else {
  absx=(c.position.x-desti);
}
if(c.position.z<desti){
  absz=(desti-c.position.z);
}else {
  absz=(c.position.z-desti);
}
```
* Absx is the absolute value of the X coordinate of the current mesh.
Absz is the absolute value of the Y coordinate of the current mesh.

```javascript
c.scale.y = Math.cos(ts/1000*Math.PI+(35-absx)*4.95+(40-absz)*4.95) +1;
```
* Set the coordinates of Y of each cube, the formula show that at the beginning the center cube is the highest one.

```javascript
c.material.color.setHex(Math.random() * 0xFFFFFF);
```
* Randomly change colors.

```javascript
if (!!~target.indexOf(i))
```
* Countdown phase.

```javascript
c.material.color.setHex(Math.random() * 0xFFFFFF);
```
* If the numbers and Chinese characters being counted down are displayed on the canvas, the color of the small squares of these coordinates will be randomly changed.

```javascript
else {
  c.scale.y = 1
  c.material.color.setHex( 0Xc0c0c0);
}
```
* Other than that, the small squares that do not represent the numbers and Chinese characters are silver.

```javascript
init();
```
* Call the initialization function.

```javascript
document.querySelector('.btn').addEventListener('click', function name() {
  start = 0,
  barrelSize=document.getElementById("inputnum").value;
  if(barrelSize<=0||barrelSize>10)
  alert("please enter a positive integer less than or eauql to 10!");
})
```
* Get the control with the id btn on the page, and add the listener for the click event.
Assign the value in the input box to barrelSize. When the ratioSize is less than or equal to 0 or greater than 10, a prompt will pop up.
