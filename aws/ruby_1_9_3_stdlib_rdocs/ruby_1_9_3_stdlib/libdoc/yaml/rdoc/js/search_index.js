var search_data = {"index":{"searchIndex":["yaml","dbm","store","[]()","[]=()","delete()","delete_if()","each()","each_pair()","each_value()","fetch()","has_value?()","index()","invert()","new()","reject()","replace()","select()","shift()","store()","to_a()","to_hash()","update()","values()","values_at()"],"longSearchIndex":["yaml","yaml::dbm","yaml::store","yaml::dbm#[]()","yaml::dbm#[]=()","yaml::dbm#delete()","yaml::dbm#delete_if()","yaml::dbm#each()","yaml::dbm#each_pair()","yaml::dbm#each_value()","yaml::dbm#fetch()","yaml::dbm#has_value?()","yaml::dbm#index()","yaml::dbm#invert()","yaml::store::new()","yaml::dbm#reject()","yaml::dbm#replace()","yaml::dbm#select()","yaml::dbm#shift()","yaml::dbm#store()","yaml::dbm#to_a()","yaml::dbm#to_hash()","yaml::dbm#update()","yaml::dbm#values()","yaml::dbm#values_at()"],"info":[["YAML","","YAML.html","","<p>YAML Ain’t Markup Language\n<p>This module provides a Ruby interface for data serialization in YAML\nformat. …\n"],["YAML::DBM","","YAML/DBM.html","","<p>YAML + DBM = YDBM\n<p>YAML::DBM provides the same interface as ::DBM.\n<p>However, while DBM only allows strings …\n"],["YAML::Store","","YAML/Store.html","","<p>YAML::Store provides the same functionality as PStore, except it uses YAML\nto dump objects instead of …\n"],["[]","YAML::DBM","YAML/DBM.html#method-i-5B-5D","( key )","<p>Return value associated with <code>key</code> from database.\n<p>Returns <code>nil</code> if there is no such <code>key</code>.\n"],["[]=","YAML::DBM","YAML/DBM.html#method-i-5B-5D-3D","( key, val )","<p>Set <code>key</code> to <code>value</code> in database.\n<p><code>value</code> will be converted to YAML before storage.\n"],["delete","YAML::DBM","YAML/DBM.html#method-i-delete","( key )","<p>Deletes value from database associated with <code>key</code>.\n<p>Returns value or <code>nil</code>.\n"],["delete_if","YAML::DBM","YAML/DBM.html#method-i-delete_if","()","<p>Calls the given block once for each <code>key</code>, <code>value</code>\npair in the database. Deletes all entries for which the …\n"],["each","YAML::DBM","YAML/DBM.html#method-i-each","()",""],["each_pair","YAML::DBM","YAML/DBM.html#method-i-each_pair","()","<p>Calls the given block once for each <code>key</code>, <code>value</code>\npair in the database.\n<p>Returns <code>self</code>.\n"],["each_value","YAML::DBM","YAML/DBM.html#method-i-each_value","()","<p>Calls the given block for each value in database.\n<p>Returns <code>self</code>.\n"],["fetch","YAML::DBM","YAML/DBM.html#method-i-fetch","( keystr, ifnone = nil )","<p>Return value associated with <code>key</code>.\n<p>If there is no value for <code>key</code> and no block is given, returns\n<code>ifnone</code>. …\n"],["has_value?","YAML::DBM","YAML/DBM.html#method-i-has_value-3F","( val )","<p>Returns true if specified value is found in the database.\n"],["index","YAML::DBM","YAML/DBM.html#method-i-index","( keystr )","<p>Deprecated, used YAML::DBM#key instead.\n"],["invert","YAML::DBM","YAML/DBM.html#method-i-invert","()","<p>Returns a Hash (not a DBM database) created by using each value in the\ndatabase as a key, with the corresponding …\n"],["new","YAML::Store","YAML/Store.html#method-c-new","( *o )","<p>Creates a new YAML::Store object, which will store data in\n<code>file_name</code>. If the file does not already exist, …\n"],["reject","YAML::DBM","YAML/DBM.html#method-i-reject","()","<p>Converts the contents of the database to an in-memory Hash, then calls\nHash#reject with the specified …\n"],["replace","YAML::DBM","YAML/DBM.html#method-i-replace","( hsh )","<p>Replaces the contents of the database with the contents of the specified\nobject. Takes any object which …\n"],["select","YAML::DBM","YAML/DBM.html#method-i-select","( *keys )","<p>If a block is provided, returns a new array containing [key, value] pairs\nfor which the block returns …\n"],["shift","YAML::DBM","YAML/DBM.html#method-i-shift","()","<p>Removes a [key, value] pair from the database, and returns it. If the\ndatabase is empty, returns <code>nil</code> …\n"],["store","YAML::DBM","YAML/DBM.html#method-i-store","( key, val )","<p>Stores <code>value</code> in database with <code>key</code> as the index.\n<code>value</code> is converted to YAML before being stored.\n<p>Returns …\n"],["to_a","YAML::DBM","YAML/DBM.html#method-i-to_a","()","<p>Converts the contents of the database to an array of [key, value] arrays,\nand returns it.\n"],["to_hash","YAML::DBM","YAML/DBM.html#method-i-to_hash","()","<p>Converts the contents of the database to an in-memory Hash object, and\nreturns it.\n"],["update","YAML::DBM","YAML/DBM.html#method-i-update","( hsh )","<p>Updates the database with multiple values from the specified object. Takes\nany object which implements …\n"],["values","YAML::DBM","YAML/DBM.html#method-i-values","()","<p>Returns an array of values from the database.\n"],["values_at","YAML::DBM","YAML/DBM.html#method-i-values_at","( *keys )","<p>Returns an array containing the values associated with the given keys.\n"]]}}