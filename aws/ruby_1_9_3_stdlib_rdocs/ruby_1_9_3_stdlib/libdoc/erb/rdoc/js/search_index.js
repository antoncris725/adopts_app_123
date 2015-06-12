var search_data = {"index":{"searchIndex":["erb","defmethod","util","def_class()","def_erb_method()","def_method()","def_module()","h()","html_escape()","new()","result()","run()","set_eoutvar()","u()","url_encode()","version()"],"longSearchIndex":["erb","erb::defmethod","erb::util","erb#def_class()","erb::defmethod::def_erb_method()","erb#def_method()","erb#def_module()","erb::util::h()","erb::util::html_escape()","erb::new()","erb#result()","erb#run()","erb#set_eoutvar()","erb::util::u()","erb::util::url_encode()","erb::version()"],"info":[["ERB","","ERB.html","",""],["ERB::DefMethod","","ERB/DefMethod.html","","<p>Utility module to define eRuby script as instance method.\n<p>Example\n<p>example.rhtml:\n"],["ERB::Util","","ERB/Util.html","","<p>A utility module for conversion routines, often handy in HTML generation.\n"],["def_class","ERB","ERB.html#method-i-def_class","(superklass=Object, methodname='result')","<p>Define unnamed class which has <em>methodname</em> as instance method, and\nreturn it.\n<p>example:\n\n<pre class=\"ruby\"><span class=\"ruby-keyword\">class</span> <span class=\"ruby-constant\">MyClass_</span>\n  <span class=\"ruby-operator\">...</span>\n</pre>\n"],["def_erb_method","ERB::DefMethod","ERB/DefMethod.html#method-c-def_erb_method","(methodname, erb_or_fname)","<p>define <em>methodname</em> as instance method of current module, using ERB\nobject or eRuby file\n"],["def_method","ERB","ERB.html#method-i-def_method","(mod, methodname, fname='(ERB)')","<p>Define <em>methodname</em> as instance method of <em>mod</em> from compiled\nruby source.\n<p>example:\n\n<pre>filename = 'example.rhtml' ...</pre>\n"],["def_module","ERB","ERB.html#method-i-def_module","(methodname='erb')","<p>Create unnamed module, define <em>methodname</em> as instance method of it,\nand return it.\n<p>example:\n\n<pre>filename = 'example.rhtml' ...</pre>\n"],["h","ERB::Util","ERB/Util.html#method-c-h","(s)",""],["html_escape","ERB::Util","ERB/Util.html#method-c-html_escape","(s)","<p>A utility method for escaping HTML tag characters in <em>s</em>.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&quot;erb&quot;</span>\n<span class=\"ruby-identifier\">include</span> <span class=\"ruby-constant\">ERB</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Util</span>\n\n<span class=\"ruby-identifier\">puts</span> <span class=\"ruby-identifier\">html_escape</span>(<span class=\"ruby-string\">&quot;is ...\n</span></pre>\n"],["new","ERB","ERB.html#method-c-new","(str, safe_level=nil, trim_mode=nil, eoutvar='_erbout')","<p>Constructs a new ERB object with the template specified in <em>str</em>.\n<p>An ERB object works by building a chunk …\n"],["result","ERB","ERB.html#method-i-result","(b=TOPLEVEL_BINDING)","<p>Executes the generated ERB code to produce a completed template, returning\nthe results of that code. …\n"],["run","ERB","ERB.html#method-i-run","(b=TOPLEVEL_BINDING)","<p>Generate results and print them. (see ERB#result)\n"],["set_eoutvar","ERB","ERB.html#method-i-set_eoutvar","(compiler, eoutvar = '_erbout')","<p>Can be used to set <em>eoutvar</em> as described in ERB#new.  It’s probably\neasier to just use the constructor …\n"],["u","ERB::Util","ERB/Util.html#method-c-u","(s)",""],["url_encode","ERB::Util","ERB/Util.html#method-c-url_encode","(s)","<p>A utility method for encoding the String <em>s</em> as a URL.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&quot;erb&quot;</span>\n<span class=\"ruby-identifier\">include</span> <span class=\"ruby-constant\">ERB</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Util</span>\n\n<span class=\"ruby-identifier\">puts</span> <span class=\"ruby-identifier\">url_encode</span>(<span class=\"ruby-string\">&quot;Programming ...\n</span></pre>\n"],["version","ERB","ERB.html#method-c-version","()","<p>Returns revision information for the erb.rb module.\n"]]}}