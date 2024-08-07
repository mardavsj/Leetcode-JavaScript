<h2><a href="https://leetcode.com/problems/design-cancellable-function/">2650. Design Cancellable Function</a></h2><h3>Hard</h3><hr><div><p>Sometimes you have a long running task, and you may wish to cancel it before it completes. To help with this goal, write a function&nbsp;<code>cancellable</code> that accepts a generator object and returns an array of two values: a <strong>cancel function</strong> and a <strong>promise</strong>.</p>

<p>You may assume the generator function will only&nbsp;yield promises. It is your function's responsibility to pass the values resolved by the promise back to the generator. If the promise rejects, your function should throw that&nbsp;error back to the generator.</p>

<p>If the cancel callback is called before the generator is done, your function should throw an error back to the generator. That error should be the string&nbsp;<code>"Cancelled"</code>&nbsp;(Not an <code>Error</code>&nbsp;object). If the error was caught, the returned&nbsp;promise should resolve with the next value that was yielded or returned. Otherwise, the promise should reject with the thrown error. No more code should be executed.</p>

<p>When the generator is done, the promise your function returned should resolve the value the generator returned. If, however, the generator throws an error, the returned promise should reject with the error.</p>

<p>An example of how your code would be used:</p>

<pre>function* tasks() {
  const val = yield new Promise(resolve =&gt; resolve(2 + 2));
  yield new Promise(resolve =&gt; setTimeout(resolve, 100));
  return val + 1; // calculation shouldn't be done.
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms
</pre>

<p>If&nbsp;instead&nbsp;<code>cancel()</code> was not called or was called after <code>t=100ms</code>, the promise would&nbsp;have resolved&nbsp;<code>5</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> 
generatorFunction = function*() { 
&nbsp; return 42; 
}
cancelledAt = 100
<strong>Output:</strong> {"resolved": 42}
<strong>Explanation:</strong>
const generator = generatorFunction();
const [cancel, promise] = cancellable(generator);
setTimeout(cancel, 100);
promise.then(console.log); // resolves 42 at t=0ms

The generator immediately yields 42 and finishes. Because of that, the returned promise immediately resolves 42. Note that cancelling a finished generator does nothing.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong>
generatorFunction = function*() { 
&nbsp; const msg = yield new Promise(res =&gt; res("Hello")); 
&nbsp; throw `Error: ${msg}`; 
}
cancelledAt = null
<strong>Output:</strong> {"rejected": "Error: Hello"}
<strong>Explanation:</strong>
A promise is yielded. The function handles this by waiting for it to resolve and then passes the resolved value back to the generator. Then an error is thrown which has the effect of causing the promise to reject with the same thrown error.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> 
generatorFunction = function*() { 
&nbsp; yield new Promise(res =&gt; setTimeout(res, 200)); 
&nbsp; return "Success"; 
}
cancelledAt = 100
<strong>Output:</strong> {"rejected": "Cancelled"}
<strong>Explanation:</strong>
While the function is waiting for the yielded promise to resolve, cancel() is called. This causes an error message to be sent back to the generator. Since this error is uncaught, the returned promise rejected with this error.
</pre>

<p><strong class="example">Example 4:</strong></p>

<pre><strong>Input:</strong>
generatorFunction = function*() { 
&nbsp; let result = 0; 
&nbsp; yield new Promise(res =&gt; setTimeout(res, 100));
&nbsp; result += yield new Promise(res =&gt; res(1)); 
&nbsp; yield new Promise(res =&gt; setTimeout(res, 100)); 
&nbsp; result += yield new Promise(res =&gt; res(1)); 
&nbsp; return result;
}
cancelledAt = null
<strong>Output:</strong> {"resolved": 2}
<strong>Explanation:</strong>
4 promises are yielded. Two of those promises have their values added to the result. After 200ms, the generator finishes with a value of 2, and that value is resolved by the returned promise.
</pre>

<p><strong class="example">Example 5:</strong></p>

<pre><strong>Input:</strong> 
generatorFunction = function*() { 
&nbsp; let result = 0; 
&nbsp; try { 
&nbsp;   yield new Promise(res =&gt; setTimeout(res, 100)); 
&nbsp;   result += yield new Promise(res =&gt; res(1)); 
&nbsp;   yield new Promise(res =&gt; setTimeout(res, 100)); 
&nbsp;   result += yield new Promise(res =&gt; res(1)); 
&nbsp; } catch(e) { 
&nbsp;   return result; 
&nbsp; } 
&nbsp; return result; 
}
cancelledAt = 150
<strong>Output:</strong> {"resolved": 1}
<strong>Explanation:</strong>
The first two yielded promises resolve and cause the result to increment. However, at t=150ms, the generator is cancelled. The error sent to the generator is caught and the result is returned and finally resolved by the returned promise.
</pre>

<p><strong class="example">Example 6:</strong></p>

<pre><strong>Input:</strong> 
generatorFunction = function*() { 
&nbsp; try { 
&nbsp;   yield new Promise((resolve, reject) =&gt; reject("Promise Rejected")); 
&nbsp; } catch(e) { 
&nbsp;   let a = yield new Promise(resolve =&gt; resolve(2));
    let b = yield new Promise(resolve =&gt; resolve(2)); 
&nbsp;   return a + b; 
&nbsp; }; 
}
cancelledAt = null
<strong>Output:</strong> {"resolved": 4}
<strong>Explanation:</strong>
The first yielded promise immediately rejects. This error is caught. Because the generator hasn't been cancelled, execution continues as usual. It ends up resolving 2 + 2 = 4.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>cancelledAt == null or 0 &lt;= cancelledAt &lt;= 1000</code></li>
	<li><code>generatorFunction</code> returns a generator object</li>
</ul>
</div>