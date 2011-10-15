// ----------------------------------------------------------------------------
// Pagination Plugin - A jQuery Plugin to paginate content
// v 1.0 Beta
// Dual licensed under the MIT and GPL licenses.
// ----------------------------------------------------------------------------
// Copyright (C) 2010 Rohit Singh Sengar
// http://rohitsengar.cueblocks.net/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------

//------------ initializing all the values needed in paginator. -----------------

	//--- Variables for internal use ----

	var pageElement = Array();

	var paginatorId = '';

	var currentPage = 1; // current page, default 1

	var allItems = 0; // no. of repeating items in the container where paginator is applied

	var lastPage = 1; // last page, default 1

	//--- Attributes that can be changed according to use ---

	var startPage = 1; // start page

	var itemsPerPage = 5; // no. of items you want to show on one page

	var firstPageSymbol = '<<'; // to indicate First Page

	var previousPageSymbol = '<'; // to indicate Previous Page

	var nextPageSymbol = '>'; // to indicate Next Page

	var lastPageSymbol = '>>'; // to indicate Last Page

	var separator = ' | '; // To separate paginator's items

	var paginatorPosition = 'bottom'; // where you want the paginator to be. Accepted values are 'top','bottom','both'

	var paginatorStyle = 1; // To define which style of paginator you need.
	// 1 - for << | < | 1 | 2 | 3 | > | >>
	// 2 - for << | < | 1/8 | > | >>
	// 3 - for < | 1 | 2 | 3 | >
	// 4 - for < | >
    
	var enablePageOfOption = false; // it shows on which are you currently, i.e. Page 3 of 6 Page(s), if turned true
    
	var enableGoToPage = false; // shows a drop down of all pages for go/jump to any page user want to go, if turned true. Useful incase there are large no. of pages
    
    var textGoToPage = 'Go to'; // text for above option. You can change it to 'Jump to Page' or anything you like. The above option needs to turned on for this.
    
	var enableSelectNoItems = false; // if you want to change items per page on the fly.
    
    var textSelectNoItems = 'Items Per Page'; // text for above option. You can change it to 'Change No. of tag/page' or anything you like. The above option needs to turned on for this.

	var paginatorValues = Array(5,10,15,20,25,30); // list of values for above option (enableSelectNoItems).

    var anchorLink = 'javascript:void(0);'; // if you want to change href of the paginator anchor text (links for page) to '#' or to something else. As # is append on the address bar upon clicking I used javascript:void(); which is clean.
    
    var showIfSinglePage = true; // set it tp false if you don't want to show paginator incase there is only one page, true if show paginator even if there is just one page.


//-----------functions starts----------------------------------------------------
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1c.1d.1e({1f:A(){j=M;R(1g){y\'1h\':{j.S(\'<m 7="u"></m>\');z}y\'1i\':{j.N(\'<m 7="u"></m>\');z}y\'1j\':{j.S(\'<m 7="u"></m>\');j.N(\'<m 7="u"></m>\');z}T:{j.N(\'<m 7="u"></m>\')}}O()},1k:A(){$(\'.u\').1l();j.B().P()}});A O(){9(n<1)n=5;J=j.B().U;9(J%n==0)q=V(J/n);v q=V(J/n)+1;9((F<1)||(F>q))F=1;9(!1m){9(q>1)r(F,1)}v r(F,1)}A r(a,b){9(a<0){9(a==-1)a=w-1;v a=w+1}w=a;G=(w-1)*n;9(!b){j.1n("W",A(){Q();j.B().X();j.B().Y(G,n+G).P();j.1o("W")})}v{Q();j.B().X();j.B().Y(G,n+G).P()}}A Q(){$(".u").Z("");t a=\'\';t b=\'\';t c=\'\';t d=\'\';t e=\' 8 \'+w+\' 10 \'+q+\' 8(s) \';t f=\' \'+1p+\' <K 11="r(M.C);" >\';t g=\' \'+1q+\' <K 11="n=1r(M.C);O();" >\';12(t i=0;i<D.U;i++){9(n==D[i])g+=\'<x C="\'+D[i]+\'" L="L">\'+D[i]+\'</x>\';v g+=\'<x C="\'+D[i]+\'">\'+D[i]+\'</x>\'}g+=\'</K>\';9(w==1){6=\'<a k="\'+l+\'" 7="o" h="13 8">\'+14+\'</a>\'+p;a=b=6;6=\'<a k="\'+l+\'" 7="o" h="15 8">\'+16+\'</a>\'+p;a+=6;b+=6;c+=6;d+=6}v{6=\'<a k="\'+l+\'" 7="H" I="r(1);" h="13 8">\'+14+\'</a>\'+p;a=b=6;6=\'<a k="\'+l+\'" 7="H" I="r(-1);" h="15 8">\'+16+\'</a>\'+p;a+=6;b+=6;c+=6;d+=6}12(t i=1;i<=q;i++){9(i==w){a+=\'<a k="\'+l+\'" 7="o" h="8 \'+i+\'">\'+i+\'</a>\'+p;b+=\'<a k="\'+l+\'" 7="o" h="8 \'+i+\'">\'+i+\'/\'+q+\'</a>\'+p;c+=\'<a k="\'+l+\'" 7="o" h="8 \'+i+\'">\'+i+\'</a>\'+p;f+=\'<x C="\'+i+\'" L="L">\'+i+\'</x>\'}v{6=\'<a k="\'+l+\'" 7="H" I="r(\'+i+\');" h="8 \'+i+\'">\'+i+\'</a>\'+p;a+=6;c+=6;f+=\'<x C="\'+i+\'">\'+i+\'</x>\'}}f+=\'</K>\';9(w==q){6=\'<a k="\'+l+\'" 7="o" h="17 8">\'+18+\'</a>\';a+=6;b+=6;c+=6;d+=6;6=p+\'<a k="\'+l+\'" 7="o" h="19 8">\'+1a+\'</a>\';a+=6;b+=6}v{6=\'<a k="\'+l+\'" 7="H" I="r(-2);" h="17 8">\'+18+\'</a>\';a+=6;b+=6;c+=6;d+=6;6=p+\'<a k="\'+l+\'" 7="H" I="r(\'+q+\');" h="19 8">\'+1a+\'</a>\';a+=6;b+=6}R(1s){y 1:6=a;z;y 2:6=b;z;y 3:6=c;z;y 4:6=d;z;T:6=a}9(1t)6+=\'<E 7="o" h="8 1u">\'+e+\'</E>\';9(1v)6+=\'<E 7="o" h="1b 8">\'+f+\'</E>\';9(1w)6+=\'<E 7="o" h="1b 1x. 10 1y 1z 1A">\'+g+\'</E>\';$(".u").Z(6)}',62,99,'||||||style|class|Page|if||||||||title||paginatorId|href|anchorLink|div|itemsPerPage|inactive|separator|lastPage|appendContent||var|paginator|else|currentPage|option|case|break|function|children|value|paginatorValues|span|startPage|till|active|onclick|allItems|select|selected|this|after|initPaginator|show|createPaginator|switch|before|default|length|parseInt|medium|hide|slice|html|of|onchange|for|First|firstPageSymbol|Previous|previousPageSymbol|Next|nextPageSymbol|Last|lastPageSymbol|Select|jQuery|fn|extend|pagination|paginatorPosition|top|bottom|both|depagination|remove|showIfSinglePage|fadeOut|fadeIn|textGoToPage|textSelectNoItems|Number|paginatorStyle|enablePageOfOption|Information|enableGoToPage|enableSelectNoItems|no|items|per|page'.split('|'),0,{}))