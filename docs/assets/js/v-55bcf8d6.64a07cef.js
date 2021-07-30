(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[725],{927:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-55bcf8d6",path:"/guide/admin.html",title:"4.3 管理端",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"4.3.1 登录",slug:"_4-3-1-登录",children:[]},{level:3,title:"4.3.2 登出",slug:"_4-3-2-登出",children:[]},{level:3,title:"4.3.3 首页",slug:"_4-3-3-首页",children:[]},{level:3,title:"4.3.4 用户列表",slug:"_4-3-4-用户列表",children:[]},{level:3,title:"4.3.5 用户查询",slug:"_4-3-5-用户查询",children:[]},{level:3,title:"4.3.6 用户编辑",slug:"_4-3-6-用户编辑",children:[]},{level:3,title:"4.3.7 用户删除",slug:"_4-3-7-用户删除",children:[]},{level:3,title:"4.3.8 用户状态修改",slug:"_4-3-8-用户状态修改",children:[]},{level:3,title:"4.3.9 学科列表",slug:"_4-3-9-学科列表",children:[]},{level:3,title:"4.3.10 学科分页",slug:"_4-3-10-学科分页",children:[]},{level:3,title:"4.3.11 学科查询",slug:"_4-3-11-学科查询",children:[]},{level:3,title:"4.3.12 学科编辑",slug:"_4-3-12-学科编辑",children:[]},{level:3,title:"4.3.13 学科删除",slug:"_4-3-13-学科删除",children:[]},{level:3,title:"4.3.14 试卷列表",slug:"_4-3-14-试卷列表",children:[]},{level:3,title:"4.3.15 试卷查询",slug:"_4-3-15-试卷查询",children:[]},{level:3,title:"4.3.16 试卷编辑",slug:"_4-3-16-试卷编辑",children:[]}],filePathRelative:"guide/admin.md",git:{updatedTime:1627540827e3,contributors:[{name:"mindskip",email:"mindskip@qq.com",commits:15}]}}},7664:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});const a=(0,e(6252).uE)('<h1 id="_4-3-管理端" tabindex="-1"><a class="header-anchor" href="#_4-3-管理端" aria-hidden="true">#</a> 4.3 管理端</h1><h3 id="_4-3-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-3-1-登录" aria-hidden="true">#</a> 4.3.1 登录</h3><ul><li>接口地址：/api/user/login</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;userName&quot;: &quot;admin&quot;,  //用户名\n    &quot;password&quot;: &quot;&quot;,  //密码\n    &quot;remember&quot;: false  //记住我\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: null,\n        &quot;userUuid&quot;: null,\n        &quot;userName&quot;: &quot;admin&quot;,  //用户名\n        &quot;password&quot;: null,\n        &quot;realName&quot;: null,\n        &quot;age&quot;: null,\n        &quot;sex&quot;: null,\n        &quot;birthDay&quot;: null,\n        &quot;userLevel&quot;: null,\n        &quot;phone&quot;: null,\n        &quot;role&quot;: null,\n        &quot;status&quot;: null,\n        &quot;imagePath&quot;: null,\n        &quot;createTime&quot;: null,\n        &quot;modifyTime&quot;: null,\n        &quot;lastActiveTime&quot;: null,\n        &quot;deleted&quot;: null,\n        &quot;wxOpenId&quot;: null\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_4-3-2-登出" tabindex="-1"><a class="header-anchor" href="#_4-3-2-登出" aria-hidden="true">#</a> 4.3.2 登出</h3><ul><li>接口地址：/api/user/logout</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-3-3-首页" tabindex="-1"><a class="header-anchor" href="#_4-3-3-首页" aria-hidden="true">#</a> 4.3.3 首页</h3><ul><li>接口地址：/api/admin/dashboard/index</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> {\n    &quot;examPaperCount&quot;: 2413,  //试卷总数\n    &quot;questionCount&quot;: 1025,  //题目总数\n    &quot;doExamPaperCount&quot;: 6148,  //总答卷数\n    &quot;doQuestionCount&quot;: 23945,  //总题数\n    &quot;mothDayUserActionValue&quot;: [  //活跃度\n        85\n    ],\n    &quot;mothDayDoExamQuestionValue&quot;: [  //月做题数\n        22\n    ],\n    &quot;mothDayText&quot;: [  //本月天数\n        &quot;1&quot;\n    ]\n}    \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_4-3-4-用户列表" tabindex="-1"><a class="header-anchor" href="#_4-3-4-用户列表" aria-hidden="true">#</a> 4.3.4 用户列表</h3><ul><li>接口地址：/api/admin/user/page/list</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;userName&quot;: &quot;&quot;,  //用户名\n    &quot;role&quot;: 1,   //角色\n    &quot;pageIndex&quot;: 1,  //页码\n    &quot;pageSize&quot;: 10   //每页条数\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 81,  //总数\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 100,     //用户id\n                &quot;userUuid&quot;: &quot;fd31ab62-c32f-433c-8dc4-c07e653d390a&quot;,  //用户uuid\n                &quot;userName&quot;: &quot;王&quot;,  //用户名\n                &quot;realName&quot;: null,  //真实姓名\n                &quot;age&quot;: null,  //年龄\n                &quot;role&quot;: 1,  //角色\n                &quot;sex&quot;: null,  //性别\n                &quot;birthDay&quot;: &quot;&quot;,  //出生日期          \n                &quot;phone&quot;: null,   //手机号                 \n                &quot;lastActiveTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //最后活动时间\n                &quot;createTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //创建时间\n                &quot;modifyTime&quot;: &quot;2021-06-21 20:01:35&quot;,  //修改时间\n                &quot;status&quot;: 1,  //状态\n                &quot;userLevel&quot;: 1,  //年级\n                &quot;imagePath&quot;: null   //头像\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-3-5-用户查询" tabindex="-1"><a class="header-anchor" href="#_4-3-5-用户查询" aria-hidden="true">#</a> 4.3.5 用户查询</h3><ul><li>接口地址：/api/admin/user/select/1</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 100,     //用户id\n        &quot;userUuid&quot;: &quot;fd31ab62-c32f-433c-8dc4-c07e653d390a&quot;,  //用户uuid\n        &quot;userName&quot;: &quot;王&quot;,  //用户名\n        &quot;realName&quot;: null,  //真实姓名\n        &quot;age&quot;: null,  //年龄\n        &quot;role&quot;: 1,  //角色\n        &quot;sex&quot;: null,  //性别\n        &quot;birthDay&quot;: &quot;&quot;,  //出生日期          \n        &quot;phone&quot;: null,   //手机号                 \n        &quot;lastActiveTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //最后活动时间\n        &quot;createTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //创建时间\n        &quot;modifyTime&quot;: &quot;2021-06-21 20:01:35&quot;,  //修改时间\n        &quot;status&quot;: 1,  //状态\n        &quot;userLevel&quot;: 1,  //年级\n        &quot;imagePath&quot;: null   //头像\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_4-3-6-用户编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-6-用户编辑" aria-hidden="true">#</a> 4.3.6 用户编辑</h3><ul><li>接口地址：/api/admin/user/edit</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;id&quot;: null,\n    &quot;userName&quot;: &quot;testzz&quot;,  //用户名\n    &quot;password&quot;: &quot;123456&quot;,  //密码\n    &quot;realName&quot;: &quot;tesx&quot;,  //真实姓名\n    &quot;role&quot;: 1,  //角色\n    &quot;status&quot;: 1, //状态\n    &quot;age&quot;: &quot;&quot;, //年龄\n    &quot;sex&quot;: &quot;&quot;, //性别\n    &quot;birthDay&quot;: null, //生日\n    &quot;phone&quot;: null,  //手机号\n    &quot;userLevel&quot;: 1  //年级\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 109,\n        &quot;userUuid&quot;: &quot;321dec89-0656-4736-ae4c-e2b07f4fcc67&quot;,  //用户id\n        &quot;userName&quot;: &quot;testzz&quot;, //用户名\n        &quot;password&quot;: &quot;&quot; //密码\n        &quot;realName&quot;: &quot;tesx&quot;,  //真实姓名\n        &quot;age&quot;: null, //年龄\n        &quot;sex&quot;: null, //性别\n        &quot;birthDay&quot;: null, //生日\n        &quot;userLevel&quot;: 1, //年级\n        &quot;phone&quot;: null, //手机号\n        &quot;role&quot;: 1, //角色\n        &quot;status&quot;: 1, //状态\n        &quot;imagePath&quot;: null, //头像\n        &quot;createTime&quot;: 1624538837259, //创建日期\n        &quot;modifyTime&quot;: null, //修改时间\n        &quot;lastActiveTime&quot;: 1624538837259, //最后活动时间\n        &quot;deleted&quot;: false, //是否删除\n        &quot;wxOpenId&quot;: null //微信openId\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_4-3-7-用户删除" tabindex="-1"><a class="header-anchor" href="#_4-3-7-用户删除" aria-hidden="true">#</a> 4.3.7 用户删除</h3><ul><li>接口地址：/api/admin/user/delete/3</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,  //返回状态\n    &quot;message&quot;: &quot;成功&quot;, //返回消息\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-3-8-用户状态修改" tabindex="-1"><a class="header-anchor" href="#_4-3-8-用户状态修改" aria-hidden="true">#</a> 4.3.8 用户状态修改</h3><ul><li>接口地址：/api/admin/user/changeStatus/1</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: 2\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-3-9-学科列表" tabindex="-1"><a class="header-anchor" href="#_4-3-9-学科列表" aria-hidden="true">#</a> 4.3.9 学科列表</h3><ul><li>接口地址：/api/admin/education/subject/list</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: [\n        {\n            &quot;id&quot;: 1,  //学科id\n            &quot;name&quot;: &quot;语文&quot;,  //学科名称\n            &quot;level&quot;: 1,  //年级\n            &quot;levelName&quot;: &quot;一年级&quot;,  //年级名称\n            &quot;itemOrder&quot;: null,  //排序\n            &quot;deleted&quot;: false  //是否删除\n        }\n    ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_4-3-10-学科分页" tabindex="-1"><a class="header-anchor" href="#_4-3-10-学科分页" aria-hidden="true">#</a> 4.3.10 学科分页</h3><ul><li>接口地址：/api/admin/education/subject/page</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;level&quot;: null,  //年级\n    &quot;pageIndex&quot;: 1,\n    &quot;pageSize&quot;: 10\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 2,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 2,\n                &quot;name&quot;: &quot;数学&quot;,  //学科名称\n                &quot;level&quot;: 1,  //年级\n                &quot;levelName&quot;: &quot;一年级&quot;  //年级名称\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_4-3-11-学科查询" tabindex="-1"><a class="header-anchor" href="#_4-3-11-学科查询" aria-hidden="true">#</a> 4.3.11 学科查询</h3><ul><li>接口地址：/api/admin/education/subject/select/2</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 2,\n        &quot;name&quot;: &quot;数学&quot;,  //学科名称\n        &quot;level&quot;: 1,    //年级\n        &quot;levelName&quot;: &quot;一年级&quot;   //年级名称\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_4-3-12-学科编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-12-学科编辑" aria-hidden="true">#</a> 4.3.12 学科编辑</h3><ul><li>接口地址：/api/admin/subject/edit</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;id&quot;: 41,\n    &quot;name&quot;: &quot;数学&quot;,  //学科名称\n    &quot;level&quot;: 2,   //年级\n    &quot;levelName&quot;: &quot;二年级&quot;  //年级名称\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-3-13-学科删除" tabindex="-1"><a class="header-anchor" href="#_4-3-13-学科删除" aria-hidden="true">#</a> 4.3.13 学科删除</h3><ul><li>接口地址：/api/admin/education/subject/delete/3</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-3-14-试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-3-14-试卷列表" aria-hidden="true">#</a> 4.3.14 试卷列表</h3><ul><li>接口地址：/api/admin/exam/paper/page</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;id&quot;: null,\n    &quot;level&quot;: null,   //年级\n    &quot;subjectId&quot;: null,  //学科\n    &quot;pageIndex&quot;: 1,  //页码\n    &quot;pageSize&quot;: 10  //每页数量\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 9,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 8,     //试卷id\n                &quot;name&quot;: &quot;中级任务二&quot;,    //试卷名称\n                &quot;questionCount&quot;: 5,  //题目总数\n                &quot;score&quot;: 180, //试卷分数\n                &quot;createTime&quot;: &quot;2021-01-21 11:49:31&quot;,  //创建时间\n                &quot;createUser&quot;: 2,  //创建人\n                &quot;subjectId&quot;: 1,  //学科\n                &quot;paperType&quot;: 6, //试卷类型\n                &quot;frameTextContentId&quot;: 13  //试卷内容\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_4-3-15-试卷查询" tabindex="-1"><a class="header-anchor" href="#_4-3-15-试卷查询" aria-hidden="true">#</a> 4.3.15 试卷查询</h3><ul><li>接口地址：/api/admin/exam/paper/select/9</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 9,   //试卷id\n        &quot;level&quot;: 1,  //年级\n        &quot;subjectId&quot;: 1,  //学科\n        &quot;paperType&quot;: 1,  //试卷类型\n        &quot;name&quot;: &quot;语文试卷&quot;, //试卷名称  \n        &quot;suggestTime&quot;: 20,  //考试时间\n        &quot;limitDateTime&quot;: null,  //限时考试\n        &quot;titleItems&quot;: [\n            {\n                &quot;name&quot;: &quot;一、选择题&quot;,  //试卷标题\n                &quot;questionItems&quot;: [\n                    {\n                        &quot;id&quot;: 5,   //题目id\n                        &quot;questionType&quot;: 5,  //题目类型\n                        &quot;subjectId&quot;: 1,  //学科\n                        &quot;title&quot;: &quot;默写咏鹅&quot;, //题干\n                        &quot;gradeLevel&quot;: 1, //年级\n                        &quot;items&quot;: [], //题目选项\n                        &quot;analyze&quot;: &quot;咏鹅可以带拼音&quot;,  //解析\n                        &quot;correctArray&quot;: null,  //标答数组\n                        &quot;correct&quot;: &quot;鹅鹅鹅， 曲项向天歌。 白毛浮绿水， 红掌拨清波。&quot;,  //标答\n                        &quot;score&quot;: &quot;10&quot;,  //题目分数\n                        &quot;difficult&quot;: 3,  //难度\n                        &quot;itemOrder&quot;: 1  //题序\n                    }\n                ]\n            }\n        ],\n        &quot;score&quot;: &quot;10&quot;  //试卷总分\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="_4-3-16-试卷编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-16-试卷编辑" aria-hidden="true">#</a> 4.3.16 试卷编辑</h3><ul><li>接口地址：/api/admin/exam/paper/edit</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;id&quot;: 8,  //试卷id\n    &quot;level&quot;: 1,  //年级\n    &quot;subjectId&quot;: 1,  //学科\n    &quot;paperType&quot;: 6,  //试卷类型\n    &quot;name&quot;: &quot;中级任务二&quot;,  //试卷名称\n    &quot;suggestTime&quot;: 20,  //考试时长\n    &quot;limitDateTime&quot;: null,  //限时\n    &quot;titleItems&quot;: [\n        {\n            &quot;name&quot;: &quot;一、选择题&quot;,  //标题\n            &quot;questionItems&quot;: [   //题目列表\n                {\n                    &quot;id&quot;: 2,   //题目id\n                    &quot;questionType&quot;: 2,  //题型\n                    &quot;subjectId&quot;: 1,  //学科\n                    &quot;title&quot;: &quot;以下哪些诗句是静夜思的？&quot;,  //题干\n                    &quot;gradeLevel&quot;: 1,  //年级\n                    &quot;items&quot;: [   //选项\n                        {\n                            &quot;prefix&quot;: &quot;A&quot;,   //选项标记\n                            &quot;content&quot;: &quot;床前明月光&quot;,  //选项内容\n                            &quot;score&quot;: null,  //选项分数\n                            &quot;itemUuid&quot;: null  //选项标识\n                        }\n                    ],\n                    &quot;analyze&quot;: &quot;床前明月光， 疑是地上霜。 举头望明月， 低头思故乡。&quot;,  //解析\n                    &quot;correctArray&quot;: [  //正确答案\n                        &quot;A&quot;,\n                        &quot;C&quot;\n                    ],\n                    &quot;correct&quot;: &quot;A,C&quot;, //正确答案\n                    &quot;score&quot;: &quot;0&quot;,  //题目分数\n                    &quot;difficult&quot;: 3,  //难度\n                    &quot;itemOrder&quot;: 1  //题序\n                }\n            ]\n        }\n    ],\n    &quot;score&quot;: &quot;18&quot;  //试卷总分\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 8,  //试卷id\n        &quot;level&quot;: 1,  //年级\n        &quot;subjectId&quot;: 1,   //学科\n        &quot;paperType&quot;: 6,   //试卷类型\n        &quot;name&quot;: &quot;中级任务二&quot;,   //试卷名称\n        &quot;suggestTime&quot;: 20,  //考试时长\n        &quot;limitDateTime&quot;: null,  //限时\n        &quot;titleItems&quot;: [\n            {\n                &quot;name&quot;: &quot;一、选择题&quot;,  //标题\n                &quot;questionItems&quot;: [\n                    {\n                        &quot;id&quot;: 2,   //题目id\n                        &quot;questionType&quot;: 2,    //题型\n                        &quot;subjectId&quot;: 1,   //学科\n                        &quot;title&quot;: &quot;以下哪些诗句是静夜思的？&quot;,   //题干\n                        &quot;gradeLevel&quot;: 1,    //年级\n                        &quot;items&quot;: [   //选项\n                            {\n                                &quot;prefix&quot;: &quot;A&quot;,   //选项标记\n                                &quot;content&quot;: &quot;床前明月光&quot;,     //选项内容\n                                &quot;score&quot;: null,   //选项分数\n                                &quot;itemUuid&quot;: null  //选项标识\n                            }\n                        ],\n                        &quot;analyze&quot;: &quot;床前明月光， 疑是地上霜。 举头望明月， 低头思故乡。&quot;,   //解析\n                        &quot;correctArray&quot;: [   //正确答案\n                            &quot;A&quot;,\n                            &quot;C&quot;\n                        ],\n                        &quot;correct&quot;: &quot;A,C&quot;,   //正确答案\n                        &quot;score&quot;: &quot;0&quot;,   //题目分数\n                        &quot;difficult&quot;: 3,   //难度\n                        &quot;itemOrder&quot;: 1   //题序\n                    }\n                ]\n            }\n        ],\n        &quot;score&quot;: &quot;18&quot;  //题序\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>',63),u={render:function(n,s){return a}}}}]);