# XPin
本脚本修改自 [Pin+](https://github.com/coo11/pin)，以适配自己需求，主要修改如下：

1. 动作备份与恢复
2. 加速 Widget 加载
3. 多行文本增加颜色提示
4. 提高 Widget 自动获取剪贴板成功率
5. 剪贴板图片查看器，长按 Widget 剪贴板内容显示，显示 `🌁 ‣ Long-Press to Show` 时即可进入
6. Widget 自动获取剪贴板排除 oncealedType 类型（密码管理器复制类型），可下拉刷新强制获取
7. 剪贴板文本编辑器（入口：长按 Widget 剪贴板内容，主应用“+”，App/Widget/Keyboard 列表项左滑“编辑”，剪贴板有内容则编辑，无内容则创建）支持`undo/redo/转换二维码/打开链接/正则检索&替换/查看图片/分享/删除行/复制行/取消/保存`
8. 键盘增加剪贴板历史记录查看器（点击列表项右侧或左滑“编辑”进入，支持`发送/粘贴/二维码/复制`选中文字或全部文字）
9. 主应用剪贴板历史记录正则检索，非正则转为普通字符串检索
10. 优化键盘主视图 UI，可展示更多内容，建议作为固定脚本使用
11. 去除 text-items.json，改为自动生成，避免同步时丢失记录
12. 修复剪贴板预览多行文本
13. 修复键盘翻译、词典预览动作
14. 修复图片检索、图片上传、链接转换、网页快照、编码转换动作
15. 新增动作及增加长按操作，如下所示

| 名称 | 动作 | 长按动作
| --- | --- | --- |
| 图片删除/多删 | 删除最后图片 | 多选删除图片 |
| 图片检索/上传 | 检索图片 | 上传图片 |
| iCab下载/Thunder | 调用 iCab 下载 | 调用迅雷下载 |
| Opener/Auto | 使用 Opener 选择打开 | 使用 Opener 自动打开 |
| Pushbullet/Pushmore | 发送到 Pushbullet | 发送到 PushmoreBot on TG |
| 淘宝/京东 | 检索淘宝 | 检索京东 |
| 编码解码/数据转换 | 编码解码 | 数据转换 |
| 链接转换/网页快照 | 长短链转换 | 查看网页快照 |
| 百度/XSearch | 百度检索 | Pin 高级搜索 |
| 欧路词典/百度翻译 | 调用欧路词典翻译 | 百度翻译 |



# Pin+
本脚本是 Pin 在 JSBox 上的延伸，推荐效率应用爱好者和追求简洁的用户使用。

**版本：2.93**
[**更新日志**](http://t.cn/AiKE6qFn)
[**下载地址**](http://t.cn/Aiun6Q3B)

## 模块使用说明
> 本脚本也是为了解决自己的需求而写，因此内置了其它脚本模块，功能丰富，下面进行详细说明。

#### 1. 内置了通知中心键盘的脚本
> 由于 iOS 13 对于键盘的支持很差，所以推出了这类键盘脚本方便使用。包括**汇率查询，数据转换**。

![示意图](http://tva1.sinaimg.cn/large/007X8olVly1g7rtqb3qb1j30u015baix.jpg)

- 汇率查询接口说明

    其中，汇率查询可不进行配置使用，亦可根据以下提示，配置接口，查询超过 160 种货币汇率:

    进入 `./scripts/plugins/exchange-rate.js`;
    
    第一行引号内为空或不合法时，使用无需注册的免费 API，数据以 EUROPEAN CENTRAL BANK 每个工作日 CET 时间 16:00 公布的数据为准；
    
    若需要更多、更及时的数据，请前往 https://fixer.io/product 根据个人需求注册并将 Access Key 填入第一行引号内即可使用。免费套餐拥有 1000 次/月的配额，可查询包括比特币、新台币、盎司金等 168 种货币汇率，每小时更新。
    
- 数据转换包括人民币大小写、进制转换、颜色转换

#### 2. 配合剪贴板文本使用的模块
> 此类脚本无交互界面，通过获取剪贴板文本进行处理。包括以下内容：

- 花式字体：转换文本中的数字、英文字母为特殊符号样式
- 长短链接转换：
    t.cn、u.nu、tinyurl
- 编码解码:
    URL、HTML、Base 64、MD5、SHA1、SHA256、大小写字母、拼音编码解码
- 查看剪贴板链接的网页快照
- 通过链接获取 B 站直播、视频封面图片
- weib(c)o
    1. 微博国际版微博链接和原微博链接的互相转换;
    2. 通过微博图片链接查找上传者；
    3. 移动版微博链接转桌面版链接;
    4. 搜索微博并打开客户端;

#### 3.其它
- 10010余量余额查询
- ✈️场签到、查询
- 掷骰子
- App Store 区域切换

## 基本使用说明
#### 1. 通知中心
> 本着复刻 Pin 的理念，在 Pin.box 的基础上进行了修改和调整。
- 最上方输入框可以展示剪贴板文本内容，输入内容保存到记录列表或者点击右侧或底栏的按钮对输入框的内容进行操作。~~也可以双击进入多行编辑模式。该模式下，输入法工具栏上的按钮,除了撤销、重做、取消、保存四个按钮外都有有点击和长按两种动作。可以通过尝试了解。~~(已于 2.8 版本移除)
- 输入框右侧的四(五)个按钮，响应的点击事件依次是网页预览，谷歌翻译，(iCloud 云同步设置), 分享剪贴板内容，清空剪贴板；响应的长按事件依次是打开 Safari 搜索剪贴板输入框内容，英汉词典，(无), 分享记录列表所有条目，清空记录列表。

![ ](http://tva1.sinaimg.cn/large/007X8olVly1g7rtprkjzxj30u01cn7m5.jpg)

- 通知中心的下方是记录列表，是核心功能的关键，每个条目都可以点击复制(点击右侧四分之一处即可预览)，长按排序，滑动分词、上传、下载或删除；通过复制、在上方输入框输入内容增加列表条目。其中，分词加入了剔除模式，功能既字面意思。

![ ](http://tva1.sinaimg.cn/large/007X8olVly1g7rtps1wkdj30u00x912n.jpg)

- 底栏包含了可以设置各种快捷功能的按钮，包括脚本、动作列表、分享扩展和自定义 URL Scheme，具体内容可以在 APP 中设置。

#### 2. 主应用
通过最下方的控件切换记录列表,小组件底栏动作列表或者设置，右上方的加号可以新建记录或添加动作。

#### 3. ~~键盘~~(因 iOS 13 下 BUG 过多，暂时搁置键盘更新)
- 上方右侧四个按钮和通知中心小组件的对应功能基本相同，区别在于在键盘环境中，搜索、翻译或词典、分享的优先级依次为选中内容，剪贴板，输入框内的所有文本。
- 双击上方空白即可刷新剪贴板列表。
- 点击剪贴板列表项目，即可输入点击内容，点击右侧四分之一处可进行复制。
- 长按回车键强制插入换行符。

#### 4. 其他
- 如果有什么好的想法或者建议可以通过本文下方的联系方式向作者反馈。对于第三方脚本，综合考虑用户使用频率和原作者本人意愿进行内置。
- 该脚本不会以任何方式主动获取用户的任何数据，可以放心使用。保存的数据请做好备份(记录内容储存在 `./assets/text-items.json` 这个文件中)，如有丢失概不负责。(2.8 版本已更新，从下次升级开始，无需特意去备份列表记录。)

## 注意
- 请在放入通知中心小组件使用时打开极限模式以保证完整体验。建议小组件高度 180，实际情况请自行测试。
- ~~作为键盘使用时请设置高度为 268。~~
- 鉴于该脚本的特性，在更新前，请备份好自己的数据（如自用脚本）。各项设置和自定义动作列表一般不会被覆盖。

## 声明
本脚本部分直接取钟大自发布在论坛的脚本 [Pin.box](http://t.cn/EX09jmG) 并二次修改,对此表示感谢。此外，鉴于该脚本的特性，会将一些第三方脚本的片段进行内置并适配界面。对此向第三方脚本的作者表示感谢。若有不妥之处，请联系我移除相关内容。

> Modified By coo11
> Contact with Me Via [Telegram](https://t.me/coo11)