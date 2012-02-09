### jQuery HTML5 placeholder plugin

The plugin adds cross-browser support for the HTML5 <code>placeholder</code> attribute functionality.

#### Usage

Please insert the following code inside your <code>$(document).ready</code> function:

<pre><code>$.placeholder();</code></pre>

#### Customization

The plugin comes with two customization options:

<pre><code>$.placeholder({
	'className': 'placeholder',
	'attrName': 'placeholder'
});</code></pre>

* The <code>className</code> parameter lets you pick the class which is toggled on the input element that has the <code>placeholder</code> attribute specified.
* The <code>attrName</code> parameter lets you choose which attribute to look for. For instance, you could make use of the placeholder functionality using an attribute different than <code>placeholder</code>, eg. <code>data-placeholder</code>.