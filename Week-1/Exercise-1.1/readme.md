Exercise1.1:

\1. When a user enters an URL in the browser, how does the browser fetch the desired result? 

Explain this with the below in mind and demonstrate this by drawing a diagram for the same. (2-3hours)

a. What is the main functionality of the browser?

b. High Level Components of a browser.

c. Rendering engine and its use.

d. Parsers (HTML, CSS, etc)

e. Script Processors

f. Tree construction

g. Order of script processing

h. Layout and Painting

**Solution:**

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium), which is the standards organisation for the web. For years, browsers conformed to only a part of the specifications and developed their own extensions. That caused serious compatibility issues for web authors. Today, most of the browsers more or less conform to the specifications.

![How do Web Browsers Work?. Behind the scenes of modern Web… | by Bibek Shah  | Medium](Aspose.Words.1a7ddd99-7a2f-4338-bdca-7461363eef3e.001.png)

*Figure 1: High Level Components of a browser*

1. **The user interface**:

This includes the address bar, back/forward button, bookmarking menu, etc. Except for the window containing the requested page, the entire browser is displayed.

1. **The browser engine**: 

It is a core component of every web browser, which act as bridge between user interface and rendering engine. It handles the rendering engine according to what input received from user interface.

1. **The rendering engine:**

**is** responsible for displaying requested content. For example, if the requested content is HTML, the rendering engine parses HTML and CSS and displays the parsed content on the screen.

1. **Networking**: 

For network calls such as HTTP requests, different implementations are used for different platforms behind a platform-independent interface.

1. **UI backend**: 

This is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform-specific. Underneath, it uses operating system user interface methods.

1. **JavaScript interpreter**: 

It is responsible for parsing and executing the JavaScript code embedded in a website. Once the interpreted results are generated, they are forwarded to the rendering engine for display on the user interface.** 

1. **Data storage**:

This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL, and FileSystem.

By default, the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS. Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

![Rendering engine basic flow](Aspose.Words.1a7ddd99-7a2f-4338-bdca-7461363eef3e.002.png)

*Figure 2: Rendering engine basic flow*

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree, it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

So, we have HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can fi

![](Aspose.Words.1a7ddd99-7a2f-4338-bdca-7461363eef3e.003.png)

Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.

![](Aspose.Words.1a7ddd99-7a2f-4338-bdca-7461363eef3e.004.png)

When the parser is created the Document object is created. During the tree construction stage, the DOM tree with the Document in its root will be modified and elements will be added to it. Each node emitted by the tokenizer will be processed by the tree constructor. For each token the specification defines which DOM element is relevant to it and will be created for this token. The element is added to the DOM tree, and also the stack of open elements. This stack is used to correct nesting mismatches and unclosed tags. The algorithm is also described as a state machine. The states are called "insertion modes".

Script processors run an inline or stored [script](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html "Scripting") on incoming documents. The script is executed in the ingest context. 

The script processor uses the [script cache](https://www.elastic.co/guide/en/elasticsearch/reference/current/scripts-and-search-speed.html "Scripts, caching, and search speed") to avoid recompiling the script for each incoming document. To improve performance, ensure the script cache is properly sized before using a script processor in production.

So now we have a render tree with all the information that is needed to create a visual page. Now, the renderer will use this information to create a Layout and then a Paint, we will talk about Layout and Paint in next point before that here's what the overall process looks like:

![A diagram displaying that DOM and CSSOM come together to form Render Tree and then the Layout happens and then at the end the Paint happens](Aspose.Words.1a7ddd99-7a2f-4338-bdca-7461363eef3e.005.png)

The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position, so it takes all the properties related to the position (height, width, position, top left right bottom, etc.) from the render tree and places the elements on the screen.

After layout, painting happens. Paint has properties like color, background color, border color, box shadow, etc. to paint the screen with colors.

After the paint, we see the content on the screen, and the first time we see something other than a white screen is called the "first paint." The term "first paint" is used in performance reports to show how long it took your website to show something on the screen.

