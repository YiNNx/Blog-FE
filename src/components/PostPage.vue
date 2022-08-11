<template>
        <div class="post-detail">
            <!-- <div class="post-name">{{post.title}}</div> -->
            <div class="md">
            <div class="post-content"  v-html="html"></div>
            </div>
            <div class="post-info">
            <div class="post-date">{{post.time}}</div>
            <div class="post-tags">
                <ul type="none" v-for="tag in post.tags" :key="tag">
                    <li><a href="">{{tag}}</a></li>
                </ul>
            </div>
            </div>
        </div>
</template>

<script>
import PostService from '@/requests/post';

export default {
  name: 'PostPage',
  data() {
    return {
      post: {},
    };
  },
  created() {
    PostService.GetPostDetail(this.$route.params.pid).then((response) => {
      this.post = response.data.data;
      this.html = this.decodeUnicode(response.data.data.content);
    }).catch((err) => console.log(err));
  },
  methods: {
    decodeUnicode(str) {
      return unescape(str.replace(/\\u/gi, '%u'));
    },
  },

};
</script>

<style scoped>

/*post页面样式 */

/*通用样式*/
*{
    margin: 0;
    padding: 0;
	text-overflow:ellipsis;
	word-break:break-all;
}

a{
    text-decoration: none;
}

.post-detail{
  word-break: break-word;
    padding: 2rem 2rem;
    background-color: #ffffff;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2rem;
    text-align: left;
    cursor: pointer;
    overflow: hidden;
    /* border: 2px solid #d4d4d4; */
    border-radius: 1.8rem;
    margin-bottom: 1.5rem;
}

.post-name{
    padding: 2rem 2rem;
    text-overflow: hidden;
    overflow: hidden;
    /* white-space: nowrap; */
    display: block;
    flex: 0 0 auto;
    /* max-width: 30em; */
    float: left;
    border-left: 2px solid rgb(169, 169, 169);
    padding-left: 7px;
    font-size: 2ch;
}


.post-content{
	overflow: hidden;
    padding: 2rem 2rem;
    line-height: 2rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}

.post-date{
    padding: 2rem 2rem;
    float: left;
    padding-right: 5rem;
}

.post-info{
    float: right;
    text-align: right;

    padding: 0.2rem 0;
}
.post-info li{
    float: left;
    display: inline;
    padding: 0 10px;
}
.post-info a{
    color: gray;
}


.post-tag {
    float: right;
}

@media screen and (max-width: 1000px) {
  .post-detail{
    font-size: 0.6rem;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem 1rem;
  }

.post-content{
    padding: 0rem 1rem;
    line-height: 0.8rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}
}


@media screen and (max-width: 600px) {
  .post-detail{
    font-size: 0.6rem;
    margin-left: 1.4rem;
    margin-right: 1.4rem;
    margin-top: 0.2rem;
    padding: 0rem 0.4rem;
  }

.post-content{
    padding: 0rem 1rem;
    line-height: 0.8rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}

 h1 {
	font-size: 5em;
}
.md p {
	font-size: 2em;
}

.md h2 {
	font-size: 2.1em;
}
.md h3 {
	font-size: 1.9em;
}
.md h4 {
	font-size: 1.7em;
}
}

.md {
	word-wrap: break-word
}

.md [dir='auto'] {
	text-align: initial
}

.md *:first-child {
	margin-top: 0
}

.md>:last-child {
	margin-bottom: 0
}

.md p {
	margin: 0 0 16px
}

.md p>code {
	font-weight: inherit
}

.md p a:not(.no-attachment-icon) img {
	margin-bottom: 0
}

.md a {
	color: #1068bf
}

.md a>code {
	color: #1068bf
}

.md img:not(.emoji) {
	margin: 0 0 8px
}

.md img.lazy {
	/* min-width: 200px; */
	min-height: 100px;
	background-color: #fdfdfd
}

.md img.js-lazy-loaded,.md img.emoji {
	/* min-width: inherit; */
	min-height: inherit;
	background-color: inherit;
	/* max-width: 100% */
}

.md:not(.md) img:not(.emoji) {
	border: 1px solid #f0f0f0;
	padding: 5px;
	margin: 5px 0;
	max-height: calc(100vh - 100px)
}

.md details {
	margin-bottom: 16px
}

.md code {
	font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas", "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
	word-wrap: break-word;
	overflow-wrap: break-word;
	word-break: break-word
}

.md h1 {
	font-size: 2em;
	font-weight: 600;
	margin: 24px 0 16px;
	padding-bottom: 0.7em;
	border-bottom: 1px solid #eaeaea;
}

.md h1:first-child {
	margin-top: 0
}

.md h2 {
	font-size: 1.5em;
	font-weight: 600;
	margin: 24px 0 16px;
	padding-bottom: 0.3em;
	border-bottom: 1px solid #eaeaea;
}

.md h3 {
	margin: 24px 0 16px;
	font-size: 1.3em
}

.md h4 {
	margin: 24px 0 16px;
	font-size: 1.2em
}

.md h5 {
	margin: 24px 0 16px;
	font-size: 1em
}

.md h6 {
	margin: 24px 0 16px;
	font-size: 0.95em
}

.md blockquote,.md .blockquote {
	color: #7f8fa4;
	font-size: inherit;
	padding: 8px 24px;
	margin: 16px 0;
	border-left: 3px solid #eaeaea
}

.md blockquote:dir(rtl),.md .blockquote:dir(rtl) {
	border-left: 0;
	border-right: 3px solid #eaeaea
}

.md blockquote p,.md .blockquote p {
	color: #7f8fa4 !important;
	font-size: inherit;
	line-height: 1.5
}

.md blockquote p:last-child,.md .blockquote p:last-child {
	margin: 0
}

.md hr {
	border-color: #e1e1e1;
	margin: 10px 0
}

.md table:not(.code) {
	margin: 16px 0;
	border: 0;
	width: auto;
	display: block;
}

.md table:not(.code) tbody {
	background-color: #fff
}

.md table:not(.code) tbody td {
	border-color: #dbdbdb
}

.md table:not(.code) tr th {
	border-bottom: solid 2px #bfbfbf
}

.md table:not(.code).grid-none>thead>tr>th {
	border-bottom-width: 0;
	border-right-width: 0;
	border-left-width: 0
}

.md table:not(.code).grid-none>thead>tr>th:first-child {
	border-left-width: 1px
}

.md table:not(.code).grid-none>thead>tr>th:last-child {
	border-right-width: 1px
}

.md table:not(.code).grid-none>tbody>tr>td {
	border-width: 0
}

.md table:not(.code).grid-none>tbody>tr>td:first-child {
	border-left-width: 1px
}

.md table:not(.code).grid-none>tbody>tr>td:last-child {
	border-right-width: 1px
}

.md table:not(.code).grid-none>tbody>tr:last-child>td {
	border-bottom-width: 1px
}

.md table:not(.code).grid-rows>thead>tr>th,.md table:not(.code).grid-rows>tbody>tr>td {
	border-right-width: 0;
	border-left-width: 0
}

.md table:not(.code).grid-rows>thead>tr>th:first-child {
	border-left-width: 1px
}

.md table:not(.code).grid-rows>thead>tr>th:last-child {
	border-right-width: 1px
}

.md table:not(.code).grid-rows>tbody>tr>td {
	border-left-width: 0;
	border-right-width: 0
}

.md table:not(.code).grid-rows>tbody>tr>td:first-child {
	border-left-width: 1px
}

.md table:not(.code).grid-rows>tbody>tr>td:last-child {
	border-right-width: 1px
}

.md table:not(.code).grid-cols>thead>tr>th {
	border-bottom-width: 0
}

.md table:not(.code).grid-cols>tbody>tr>td {
	border-top-width: 0;
	border-bottom-width: 0
}

.md table:not(.code).grid-cols>tbody>tr:last-child>td {
	border-bottom-width: 1px
}

.md table:not(.code).frame-sides>thead>tr>th {
	border-top-width: 0
}

.md table:not(.code).frame-sides>tbody>tr:last-child>td {
	border-bottom-width: 0
}

.md table:not(.code).frame-topbot>thead>tr>th:first-child,.md table:not(.code).frame-topbot>tbody>tr>td:first-child,.md table:not(.code).frame-ends>thead>tr>th:first-child,.md table:not(.code).frame-ends>tbody>tr>td:first-child {
	border-left-width: 0
}

.md table:not(.code).frame-topbot>thead>tr>th:last-child,.md table:not(.code).frame-topbot>tbody>tr>td:last-child,.md table:not(.code).frame-ends>thead>tr>th:last-child,.md table:not(.code).frame-ends>tbody>tr>td:last-child {
	border-right-width: 0
}

.md table:not(.code).frame-none>thead>tr>th {
	border-top-width: 0
}

.md table:not(.code).frame-none>tbody>tr:last-child>td {
	border-bottom-width: 0
}

.md table:not(.code).frame-none>thead>tr>th:first-child,.md table:not(.code).frame-none>tbody>tr>td:first-child {
	border-left-width: 0
}

.md table:not(.code).frame-none>thead>tr>th:last-child,.md table:not(.code).frame-none>tbody>tr>td:last-child {
	border-right-width: 0
}

.md table:not(.code).stripes-all tr,.md table:not(.code).stripes-odd tr:nth-of-type(odd),.md table:not(.code).stripes-even tr:nth-of-type(even),.md table:not(.code).stripes-hover tr:hover {
	background: #fafafa
}

.md table:dir(rtl) th {
	text-align: right
}

pre {
    overflow: auto;
}

.md pre {
	overflow: auto;
	word-break:break-all;	
	margin-bottom: 16px;
	font-size: 13px;
	line-height: 1.6em;
	border-radius: 2px
}

.md pre code {
	overflow: auto;
	word-wrap: break-word;
	overflow-wrap: break-word;
	word-break:break-all;
}

.md dd {
	margin-left: 16px
}

.md ul,.md ol {
	padding: 0;
	margin: 0 0 16px
}

.md ul ul,.md ul ol,.md ol ul,.md ol ol {
	margin-bottom: 0
}

.md ul:dir(rtl),.md ol:dir(rtl) {
	margin: 3px 28px 3px 0 !important
}

.md>ul {
	list-style-type: disc
}

.md>ul ul {
	list-style-type: circle
}

.md>ul ul ul {
	list-style-type: square
}

.md ul.checklist,.md ul.none,.md ol.none,.md ul.no-bullet,.md ol.no-bullet,.md ol.unnumbered,.md ul.unstyled,.md ol.unstyled {
	list-style-type: none
}

.md ul.checklist li,.md ul.none li,.md ol.none li,.md ul.no-bullet li,.md ol.no-bullet li,.md ol.unnumbered li,.md ul.unstyled li,.md ol.unstyled li {
	margin-left: 0
}

.md li {
	line-height: 1.6em;
	margin-left: 25px;
	padding-left: 3px
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
	.md li {
		margin-left: 28px;
		padding-left: 0
	}
}

.md ul.task-list>li.task-list-item {
	list-style-type: none;
	position: relative;
	min-height: 22px;
	padding-left: 28px;
	margin-left: 0 !important
}

.md ul.task-list>li.task-list-item>input.task-list-item-checkbox {
	position: absolute;
	left: 8px;
	top: 5px
}

.md a.with-attachment-icon::before,.md a[href*='/uploads/']::before,.md a[href*='storage.googleapis.com/google-code-attachments/']::before {
	margin-right: 4px;
	font-style: normal;
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	content: '📎'
}

.md a[href*='/uploads/'].no-attachment-icon::before,.md a[href*='storage.googleapis.com/google-code-attachments/'].no-attachment-icon::before {
	display: none
}

.md h1 a.anchor,.md h2 a.anchor,.md h3 a.anchor,.md h4 a.anchor,.md h5 a.anchor,.md h6 a.anchor {
	float: left;
	margin-left: -20px;
	text-decoration: none;
	outline: none
}

.md h1 a.anchor::after,.md h2 a.anchor::after,.md h3 a.anchor::after,.md h4 a.anchor::after,.md h5 a.anchor::after,.md h6 a.anchor::after {
	visibility: hidden
}

.md h1:hover>a.anchor::after,.md h2:hover>a.anchor::after,.md h3:hover>a.anchor::after,.md h4:hover>a.anchor::after,.md h5:hover>a.anchor::after,.md h6:hover>a.anchor::after {
	visibility: visible
}

.md h1>a.anchor:focus::after,.md h2>a.anchor:focus::after,.md h3>a.anchor:focus::after,.md h4>a.anchor:focus::after,.md h5>a.anchor:focus::after,.md h6>a.anchor:focus::after {
	visibility: visible;
	outline: auto
}

.md .big {
	font-size: larger
}

.md .small {
	font-size: smaller
}

.md .underline {
	text-decoration: underline
}

.md .overline {
	text-decoration: overline
}

.md .line-through {
	text-decoration: line-through
}

.md .fa {
	display: inline-block;
	font-style: normal;
	font-size: 14px;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.md .fa-2x,.md .admonitionblock td.icon [class^='fa icon-'] {
	font-size: 2em
}

.md .fa-exclamation-triangle::before,.md .admonitionblock td.icon .icon-warning::before {
	content: '⚠'
}

.md .fa-exclamation-circle::before,.md .admonitionblock td.icon .icon-important::before {
	content: '❗'
}

.md .fa-lightbulb-o::before,.md .admonitionblock td.icon .icon-tip::before {
	content: '💡'
}

.md .fa-thumb-tack::before,.md .admonitionblock td.icon .icon-note::before {
	content: '📌'
}

.md .fa-fire::before,.md .admonitionblock td.icon .icon-caution::before {
	content: '🔥'
}

.md .fa-square-o::before {
	content: '\2610'
}

.md .fa-check-square-o::before {
	content: '\2611'
}

.md .admonitionblock td.icon {
	width: 1%
}

.md .metrics-embed h3.popover-header {
	margin: 0;
	font-size: 12px
}

.md .metrics-embed ul.dropdown-menu {
	margin-top: 4px;
	margin-bottom: 24px;
	padding: 8px 0
}

.md .metrics-embed ul.dropdown-menu li {
	margin: 0;
	padding: 0 1px
}

.md .text-left {
	text-align: left !important
}

.md .text-right {
	text-align: right !important
}

.md .text-center {
	text-align: center !important
}

.md .text-justify {
	text-align: justify !important
}


</style>
