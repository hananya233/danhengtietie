var storyContent = ﻿{"inkVersion":20,"root":[["^星穹铁道乙女向；第二人称；内含丹恒一只。","\n","^请自主避雷。","\n",{"#":"有任何建议与问题反馈请联系lof@后厨；qq@395553765。"},"ev","str","^我已理解","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^不，我不能接受","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":[{"->":"INTRO"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["end","\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"INTRO":[["^你来到一扇门前，冰冷且不会呼吸的门，它的背后藏着另一个冰冷且会呼吸的生物，你不知道他此刻是否欢迎你的到来，但你心意已决，在门前站定了脚步。","\n","ev","str","^敲门","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^没有回应。","\n","^也许是因为平时你总是推开门闯进去，所以敲门反而没有引起对方的注意，或者没让他想到来人是你。","\n",{"->":"INTRO.knock1"},{"#f":5}]}],{"knock1":[["ev","str","^敲门","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^出声喊他","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^门被你敲出几下咚咚的闷响，但门里的人还是没有回应。","\n",{"->":"INTRO.knock2"},{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^“丹恒？”","\n","^你等了一会儿，门后传来轻微的脚步，然后那个你渴望见到的冰冷且会呼吸的生物打开了门，出现在你的面前。","\n","^他的头发有些乱，像被猫咪折腾过的毛线球，你不由得出神盯了会儿，直到他退后一步让你进屋，“找我什么事？”声音也发着哑。","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":[{"->":"INSIDE"},{"#f":5}]}],{"#f":1}],"knock2":[["ev","str","^敲门","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^出声喊他","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^不知道你在和谁赌气，又或者是出于礼貌，你宁愿敲第三次门也不愿意开口喊他的名字。好在门后传来了轻微的脚步，阻止你的第四次。","\n","^那个你渴望见到的冰冷且会呼吸的生物打开了门，出现在你的面前。你和他四目相对，双双沉默。","\n","^也许是丹恒意识到你不想说话时，谁都不能让你开口，他缓慢地眨了眨眼睛，退后一步让你进屋：“找我什么事？”","\n","^他的头发有些乱，像被猫咪折腾过的毛线球，声音也发着哑。","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^“丹恒？”","\n","^你等了一会儿，门后传来轻微的脚步，然后那个你渴望见到的冰冷且会呼吸的生物打开了门，出现在你的面前。","\n","^他的头发有些乱，像被猫咪折腾过的毛线球，你不由得出神盯了会儿，直到他退后一步让你进屋，“找我什么事？”声音也发着哑。","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":[{"->":"INSIDE"},{"#f":5}]}],{"#f":1}],"#f":1}],"INSIDE":[["^你钻进资料室，这里还是整齐码着许多他收藏来的实体书或是信件，书架设在两侧，对窗开的地方是他的工作点，而桌下铺着他的床。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^陈列一如既往，丹恒将它们安排得整洁而井井有条，和你的临时房间完全不同。但不知为何，你总觉得有点陌生，还不如你那小垃圾堆亲切温暖。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":"INSIDE.0.g-3"},{"#f":5}],"#f":5,"#n":"g-2"}],{"#f":5}],"g-3":["^丹恒在床铺坐下，两手随意搭在膝盖上，一声不吭地看着你打量他的房间。","\n","^你也和他看了两眼，然后突然明白，这里并不是一如既往，有个最关键的地方变了。","\n",{"->":"INSIDE.doubt"},{"#f":5}]}],{"doubt":[[["ev",{"^->":"INSIDE.doubt.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“我来借本书。”",{"->":"$r","var":true},null]}],["ev",{"^->":"INSIDE.doubt.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“你刚刚在干嘛？”",{"->":"$r","var":true},null]}],["ev",{"^->":"INSIDE.doubt.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^“你能再表演一下那个吗？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"INSIDE.doubt.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"BOOKBORROW"},{"#f":5}],"c-1":["ev",{"^->":"INSIDE.doubt.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"DIG"},{"#f":5}],"c-2":["ev",{"^->":"INSIDE.doubt.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"SKINSHIP"},{"#f":5}]}],{"#f":1}],"#f":1}],"BOOKBORROW":[["^“什么书？”丹恒打开了智库的目录查询。","\n",["ev",{"^->":"BOOKBORROW.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“想看哲学。”",{"->":"$r","var":true},null]}],["ev",{"^->":"BOOKBORROW.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“有没有这种，”用食指穿过另一个手食指和拇指形成的圈，“这种书。”",{"->":"$r","var":true},null]}],["ev",{"^->":"BOOKBORROW.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^“如何交友的书。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"BOOKBORROW.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^丹恒点击查询的手略有迟疑，“你知道什么是哲学吗？”","\n","^“杨叔说我的疑惑可以看看哲学书来解决。”","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"BOOKBORROW.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^丹恒以极其可怕的速度变换了神色，声音也低了下来：“谁让你找的。”","\n","^你几乎在瞬间摇摇头，向他撒谎：“……没人，我在茶馆听到的。”","\n","^危险感知的本能让你意识到，不论这个名字是什么，丹恒应该都不会轻易放过，为了保住一条人命还是不说为好。","\n","^“听到什么了？”","\n","^“嗯……感觉能解决我疑惑的东西。”","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"BOOKBORROW.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^丹恒从目录中搜出一长串书名，但没有立刻去拿，“在罗浮交到新朋友了吗？”","\n","^他的问句不轻不重，仿佛并不关心你；但丹恒鲜少主动提问，若是不关心，又何必开口。","\n","^“不是，是有些疑惑。”","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev","str","^...","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":".^.^.^.^.g-2"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5}],"g-2":[{"->":".^.^.^.TRUTH"},{"#f":5}]}],{"TRUTH":[["^“……什么疑惑？”","\n",["ev",{"^->":"BOOKBORROW.TRUTH.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“……”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"BOOKBORROW.TRUTH.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^你不说话。","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^“……”","\n","^丹恒眉头捏紧些许，等你组织语言。","\n",["ev",{"^->":"BOOKBORROW.TRUTH.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“……”",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"BOOKBORROW.TRUTH.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^其实你的话就在嘴边，只是难以启齿。","\n","^“……”","\n","^丹恒摇身一变，生出了一对角与一条尾巴。","\n","^“你的疑惑和这个有关吧。”","\n",["ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.^.g-3"},{"#f":5}],"#f":5,"#n":"g-2"}],{"#f":5}],"g-3":[{"->":".^.^.^.^.ED2"},{"#f":5}]}],{"#f":1}],"ED2":[[["ev",{"^->":"BOOKBORROW.ED2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“星核的心脏，可以理解血肉之心吗。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"BOOKBORROW.ED2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev",{"^->":"BOOKBORROW.ED2.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“血肉之心，会怎么感受星核载体的情绪。”",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"BOOKBORROW.ED2.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^即使是丹恒老师，对这两个疑惑也束手无策。他沉默良久，最后只跟你说了一句“对不起”。","\n","^你不懂他道歉的理由，但觉得抛出如此难题的自己也该回他一句“对不起”。","\n","^丹恒一脸愕然，问你为什么要道歉。","\n",["ev",{"^->":"BOOKBORROW.ED2.0.g-2.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^“因为那个时候，我什么也没说。”",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"BOOKBORROW.ED2.0.g-2.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^“……你本就不必说什么。”","\n",["ev",{"^->":"BOOKBORROW.ED2.0.g-3.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^“可是杨叔和三月都——”",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"BOOKBORROW.ED2.0.g-3.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^“你是你。”丹恒有些急躁地打断。","\n","ev","str","^...","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^“……不必模仿他人。”","\n","^“是我没有早点说出一切。”","\n","ev","str","^...","/str","/ev",{"*":".^.c-6","flg":20},{"c-6":["\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":["^又陷入与那日相似的沉默。","\n","^一轮明月仿佛从你们之间升起，映亮了双眼却看不透对方的心思。","\n","^这个屋里最陌生的不再是拥有百万藏书的智库，而是你眼前这位持明龙尊的转世之人。","\n","^但你凝望着他满怀歉意的脸，突然觉得事情也并不尽是如此。","\n",["ev",{"^->":"BOOKBORROW.ED2.0.g-6.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^“没什么好对不起的。”",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"BOOKBORROW.ED2.0.g-6.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","^你出声，将青年越埋越低的头唤了起来。","\n",{"->":".^.^.^.g-7"},{"#f":5}],"#f":5}],"g-7":[["ev",{"^->":"BOOKBORROW.ED2.0.g-7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^“丹恒也还是丹恒。”",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"BOOKBORROW.ED2.0.g-7.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^“虽然换了套衣服，长了角和尾巴，但还是很好看……嗯，不如说更好看了。”","\n","^丹恒似乎被你逗笑了，但又笑不出来，蹙着眉头很是别扭。","\n","^……还会有这种表情啊。你赶紧掏出手机拍了一张当做重要的本金。","\n",{"->":".^.^.^.g-8"},{"#f":5}],"#f":5}],"g-8":["ev","str","^...","/str","/ev",{"*":".^.c-9","flg":20},{"c-9":["\n",{"->":".^.^.^.g-9"},{"#f":5}],"#f":5}],"g-9":["^而后，这间资料室又变回了曾经你熟悉的模样。丹恒整理智库，你或坐或躺在他的床上翻漫画打游戏，玩得累了直接不省人事地睡过去。","\n","^今天的丹恒为你盖被子时望着你的睡颜不由得神游了许久，他俯下身，几乎快贴到你的脸，缓缓低头，便能亲到你毫无防备的唇。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-10","flg":20},{"c-10":["\n",{"->":".^.^.^.^.g-11"},{"#f":5}],"#f":5,"#n":"g-10"}],{"#f":5}],"g-11":["^“……谢谢。”","\n","^但他最终停在了你的唇边，留下了祝你好梦的轻轻一印。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-11","flg":20},{"c-11":["\n",{"->":".^.^.^.^.g-13"},{"#f":5}],"#f":5,"#n":"g-12"}],{"#f":5}],"g-13":["^你迷迷糊糊醒来时，丹恒的脸就枕在你的极近处，没有任何神情的宁静的睡颜。","\n","ev","str","^（亲亲他）","/str","/ev",{"*":".^.c-12","flg":20},{"c-12":["\n","^你看得呆了，凑上去亲了他一下。","\n","^退开时，那双比阳光更明亮的眼睛正望着你。","\n","^…………………………","\n",{"->":".^.^.^.g-14"},{"#f":5}],"#f":5}],"g-14":[["ev",{"^->":"BOOKBORROW.ED2.0.g-14.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-13","flg":18},{"s":["^“我可以解释……………………”",{"->":"$r","var":true},null]}],{"c-13":["ev",{"^->":"BOOKBORROW.ED2.0.g-14.c-13.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^丹恒却不等你下文，抬手盖住你的眼睛，“还早，继续睡吧。”","\n","^耳边传来一声几不可闻的无奈叹息。","\n",{"#":"END2【好朋友，但是可以亲亲】"},"^“哦……晚安。”","\n",{"->":".^.^.^.g-15"},{"#f":5}],"#f":5}],"g-15":["ev","str","^点我查看结局列表","/str","/ev",{"*":".^.c-14","flg":20},{"c-14":["\n",{"->":"tips"},{"#f":5}],"#f":5}]}],{"#f":1}],"#f":1}],"DIG":[["^“睡觉。”丹恒简洁道。","\n","^但他的眼睛没有离开你，或许是在等你的下文。他已经习惯应对你那些一个接一个，有如宇宙中的星球般繁多且千奇百怪的问题。","\n",["ev",{"^->":"DIG.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“大白天睡觉？”",{"->":"$r","var":true},null]}],["ev",{"^->":"DIG.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^（放弃追问）","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^“哦。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"DIG.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"DIG.REVIVE"},{"#f":5}],"c-1":["ev",{"^->":"DIG.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^丹恒略一蹙眉，似乎想说什么，但最终没有开口。","\n",{"->":"INSIDE.doubt"},{"#f":5}]}],{"REVIVE":[["^“有些累。”他说，缓慢眨动着眼睛，就像在邀请你一起入睡般深邃的青铜色眼睛。","\n",["ev",{"^->":"DIG.REVIVE.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“是因为……龙尊的力量吗？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"DIG.REVIVE.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^他点点头，索性不再说话。","\n","^你想起在鳞渊境，汹涌海潮如同盘上的一只果冻被人切开般分到两边，年轻的龙尊于岸上背身而立，两袖不沾滴水，有如神明。","\n","^此刻丹恒努力撑着头等待你抛出难题来折磨他的疲倦神色，让那副完美的画卷多了一丝亲切的气息。","\n","ev","str","^（拉着他一起睡会儿）","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^（有其他重要事情找他）","/str","/ev",{"*":".^.c-2","flg":20},{"c-1":[{"->":"DIG.HAVENAP"},"\n",{"#f":5}],"c-2":[{"->":"INSIDE.doubt"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"HAVENAP":[["^你两下脱掉鞋，一骨碌滚到床的另一边，丹恒没来得及阻止你，你已经占据了枕头的一半。","\n","ev","str","^（拍拍枕头的另一半）","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^显然你忘记了今天来找他的真正目的，又或者你已经悄然地达成了目的，总之你邀请丹恒一起睡觉。因为他看起来真的很疲倦，仿佛睁着眼也能睡着。","\n","^但丹恒坐在床边一动不动。","\n",["ev",{"^->":"DIG.HAVENAP.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“你不是很困吗？”",{"->":"$r","var":true},null]}],"ev","str","^（使劲拍拍枕头）","/str","/ev",{"*":".^.c-2","flg":20},{"c-1":["ev",{"^->":"DIG.HAVENAP.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^丹恒的目光落在地板上，你不知道他盯着那块空地干嘛，但片刻后，他把被子都拉到你身上，他自己睡在外面，形成了一个天然的隔离层。","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-2":["\n","^你把枕头拍得砰砰响，脸也气鼓鼓的，丹恒从鼻腔里发出一声克制的笑，引来你更加用力地拍枕头抗议——快、来、睡、觉！","\n","^他把被子都拉到你身上，形成一个天然的隔离层，这才在另一边躺下。","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["ev","str","^...","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":[{"->":"DIG.nap"},{"#f":5}]}],{"#f":1}],"nap":[["ev","str","^踹掉被子","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^把被子拉开给他也盖上","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"DIG.KICK"},"\n",{"#f":5}],"c-1":[{"->":"DIG.SHARE"},"\n",{"#f":5}]}],{"#f":1}],"SHARE":[["^你猛地掀起被子将丹恒罩了进来，他像只误踩陷阱的动物般下意识想挣开，却在与你对上目光时，停了下来。","\n","^“有福同享！”","\n","^你对他竖起大拇指，笑容灿烂得能照亮被窝里你和他的脸。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^他愣愣地盯着你，半晌没说话，随后捂了把脸，神色恢复如常，才赶忙把你俩头上的被子拉下去，免得等会儿憋得脸红头晕。","\n","^你听见丹恒叹了好长好长一口气。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.^.g-3"},{"#f":5}],"#f":5,"#n":"g-2"}],{"#f":5}],"g-3":["^干嘛，以前又不是没睡过这个床，你也跟着纳闷儿起来。","\n","^有时玩累了也不想回自己房间，丹恒这一进车厢就能倒头睡的地方成为了你的第一备选。","\n","^他也未曾抱怨，只是在你醒来时叫你开空调记得盖被子别贪凉，你表面上嗯嗯好好，其实多数时候还是他来扯开被子给你搭在肚子上。","\n","^难道说……","\n",["ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.^.g-5"},{"#f":5}],"#f":5,"#n":"g-4"}],{"#f":5}],"g-5":[{"->":"DIG.shimian"},{"#f":5}]}],{"#f":1}],"KICK":[["^你手脚并用把阻碍你和丹恒联络“列车组情谊”的被子踹开了。","\n","^丹恒刚松开的眉头又皱了回去。但你也学着他皱巴脸，义正言辞道：“这个天气盖被子，四舍五入就是谋杀了。”","\n","^他欲言又止，最终只是叹了口气。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^干嘛，以前又不是没睡过这个床，你也跟着纳闷儿起来。","\n","^有时玩累了也不想回自己房间，丹恒这一进车厢就能倒头睡的地方成为了你的第一备选。","\n","^他也未曾抱怨，只是在你醒来时叫你开空调记得盖被子别贪凉，你表面上嗯嗯好好，其实多数时候还是他来扯开被子给你搭在肚子上。","\n","^难道说……","\n",{"->":"DIG.shimian"},{"#f":5}]}],{"#f":1}],"shimian":[[["ev",{"^->":"DIG.shimian.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“你失眠了？”",{"->":"$r","var":true},null]}],["ev",{"^->":"DIG.shimian.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“要不我走？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"DIG.shimian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"DIG.HONGSHUI"},{"#f":5}],"c-1":["ev",{"^->":"DIG.shimian.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^你从床上爬了起来，但衣袖被人拽住没办法离开。","\n","^“……不用。”丹恒的目光躲闪地转了几下，手上的力气却丝毫不含糊，你除了重新躺下，别无选择。","\n","^“你是失眠了吗？”","\n",{"->":"DIG.HONGSHUI"},{"#f":5}]}],{"#f":1}],"HONGSHUI":[["^所谓中医看病讲究望闻问切，为了更好地关心你的伙伴，你也侧过身凑近了些。丹恒却身体一绷，往床边不动声色地挪了一点。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^“别跑啊。”","\n","^你伸手抓他的衣领，刚挪出去的一点距离被你大力一抓，直接倒贴十几厘米。","\n","^丹恒微怔的脸在你眼前极速放大，浮起淡淡红晕，连一呼一吸都能落在你的鼻尖上。但他很快就克制地放缓了节奏。","\n",{"->":"DIG.hongshuiC"},{"#f":5}]}],{"#f":1}],"hongshuiC":[["ev","str","^（趁机亲亲他）","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^（看看他的症状）（如果你会的话）","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^（乖乖睡下）","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":[{"->":"DIG.KISS1"},"\n",{"#f":5}],"c-1":["\n","^你聚精会神地盯着丹恒的脸，然后看出了一件事。","\n","^他真好看。 ",{"->":".^.^.^"},"\n",{"#f":5}],"c-2":["\n",{"->":"DIG.NE"},{"#f":5}]}],{"#f":1}],"KISS1":[["^真好看啊。","\n","^仿佛本能一般，你揪着他的衣领借力，将唇轻轻地贴在他的唇上。极其柔软而无味，如同平静湖面上的一点波澜，一下，便分开了。但水面上的波纹却荡漾开，久久不能平息。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^丹恒似是感叹般，极长而压抑地深呼吸了一口气。","\n","^“睡吧。”","\n","^你还意犹未尽，丹恒却将你翻了个身，用胸膛抵着你的背，手臂更是卡在你腰间，你不得动弹。","\n",{"->":"DIG.trick"},{"#f":5}]}],{"#f":1}],"trick":[["ev","str","^（抓住他的手）","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^（询问他在干嘛）","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"DIG.ED1"},"\n",{"#f":5}],"c-1":["\n","^“……”丹恒半晌闷出了一句话，“你又是来干嘛的。”","\n","^扰了他清梦，闹了他半天。","\n","^你努努嘴，发现自己早忘了来干嘛的。","\n","^但丹恒也不追问，他想让你安静的目的显然已经达成了。","\n",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"ED1":[["^你把这一切当做是他兴起的恶作剧，于是不示弱地抓起了他搁在你腰上的手。","\n","^丹恒没有戴手套，所以可以直接和他肌肤相亲，十指相扣，零落的几个武器茧有些咯，但你却当玩具般不厌其烦地来回摩挲，确认它们的存在。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^“睡觉。”","\n","^他反手将你攥在掌心里捏得死紧，这两个字也咬得铿锵有力。","\n","^到底是有点脾气的龙尊，随你玩了一阵子但不能随你一直玩。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.^.g-3"},{"#f":5}],"#f":5,"#n":"g-2"}],{"#f":5}],"g-3":["^你嘟嘟囔囔不爽了一会儿，但丹恒的床和身体都散发着不可抗拒的暖意，很快你就忘了仇。","\n",{"#":"END1【再大的问题睡一觉就行，不行就再睡一觉】"},"^他捏你的手何时松了力也不知，他又是何时睡着的也不知，你只晓得像藤蔓缠着架子般勾着他的手指，一夜无梦。","\n",["ev","str","^点我查看结局列表","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.^.g-5"},{"#f":5}],"#f":5,"#n":"g-4"}],{"#f":5}],"g-5":[{"->":"tips"},{"#f":5}]}],{"#f":1}],"NE":[["^闹剧到此为止，丹恒已经应付得筋疲力竭，而你也暂时得到了满足，一张小床上承载了你们的梦，不论什么问题在此刻都没有那么重要，宇宙会摇着整个星穹列车一同安眠。","\n",{"#":"NormalEnd【梦安眠于星海】"},"^晚安。","\n","ev","str","^点我查看结局列表","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"tips1"},{"#f":5}]}],{"#f":1}],"#f":1}],"SKINSHIP":[["^丹恒戒备地看了你两眼，骤然一变，一对角自额间生出，一条长尾从他背后盘至身前。","\n","^“就是这个！”你惊喜地扑上去，被他轻松躲开。","\n","^“让我摸摸嘛。”你锲而不舍地伸手，“好漂亮，想摸。”","\n","^你眨也不眨地望着他，满眼期待，终于丹恒移开了视线，同意你摸一下。","\n","ev","str","^（摸摸角）","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^（摸摸耳朵）","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^（摸摸尾巴）","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^你伏在他身前，一双手不安分地向龙角伸去。","\n","^丹恒下意识往后一仰，本就不够的距离被拉得更远，你的指尖只能刚好触到他的角根。","\n","^深翠如一块碧玉，和指腹嫩肉一样光滑细腻的触感，你的手指自然而然滑到镶金环的部位，摩挲了两下。","\n","^“……丹恒？你在抖吗？”","\n","^龙角上传来微弱的颤动，似是不安似是躁动，仿佛即将活过来的一对翡翠色珊瑚。","\n","^“丹恒，你这里——”","\n","^“够了。”","\n","^他拽着你的手腕拉开，阻止你的探索。但是他的掌心也好烫，和一点点升温的龙角一样，熨着你们肌肤相贴的地方。","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^你伏在他身前，一双手不安分地向尖耳伸去。丹恒下意识往后一仰，你扑了个空。","\n","^“反悔？”你不满地瞪着他，“说话不算话的人明天要去帮劳伦斯拍照交友！”","\n","^丹恒的脸色更臭了，但他同意让你摸摸耳朵，只是你得让他握着小臂，不能为非作歹。","\n","^你嗯嗯嗯连声答应，迫不及待地捏上了丹恒的耳朵。","\n","^好软。","\n","^和他冷冰冰的表情不一样，柔软又带着暖意，你用食指勾着金莲耳坠晃动，跃出几点光，你顿时瞪大了眼：“发光的。”","\n","^你的注意力被精致的耳饰完全牵走，丝毫没意识到从你肩头垂下的发尾会有意无意地扫过丹恒胸口的肌肤，只觉得他的耳朵好像越来越红。","\n","^“已经够了吧。”","\n","^在你说出察觉的异常前，丹恒已经喊停了。","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^你抱住那根又长又漂亮的尾巴，还没来得及仔细感受就被龙尾不轻不重地抽了一下手掌，一道浅浅的红痕留在掌心。","\n","^“？”","\n","^不让摸就算了，怎么还打人啊丹恒老师。","\n","^你用眼神默默控诉，但还是没放开那条尾巴。","\n","^“……抱歉。”丹恒不知道该怎么解释，尾巴的条件反射有时他自己也难以控制。","\n","^尾毛油光水滑，显然被护理得很好，在他道歉之后便缓慢地在你手心里摇晃着，蹭过刚才打红的地方。","\n","^沿着尾尖向上是龙鳞，如一潮潮翠色的海浪，被精细地雕刻在上面。","\n","^你感觉怀里抱的不是丹恒的尾巴，而是活着的艺术品。","\n","^这么想着，不知不觉将整个人都枕了上去，用脸蹭着尾巴柔软与冰凉细腻的地方尽情感受。","\n","^“……够了。”","\n","^丹恒却无情地喊停，你的艺术品抱枕被瞬间没收。","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","str","^...","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":[{"->":".^.^.^.CURIOUS"},{"#f":5}]}],{"CURIOUS":[["^你根本没摸过瘾，唧唧哇哇喊着不够不够，丹恒小气鬼，求求你啦，丹恒你最好了之类的话。","\n","^他不为所动，一路上已经听过太多你的这种话了，每次心软都没有好下场。","\n","^“你来就是为这个？”","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^“是的！如果不能摸到饮月君的角、饮月君的尾巴还有饮月君的耳朵，那么我的一些美好的品质——”","\n",["ev","str","^...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.^.g-2"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5}],"g-2":["^“别叫那个名讳。”","\n","^“诶？”","\n",["ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.^.g-4"},{"#f":5}],"#f":5,"#n":"g-3"}],{"#f":5}],"g-4":["^丹恒面色不佳，和刚才被你触碰时有些躲闪的神色不同，此刻他的不悦掺着不容拒绝的威严。","\n","^“……哦，不叫就是了。”","\n",["ev","str","^...","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":".^.^.^.^.g-6"},{"#f":5}],"#f":5,"#n":"g-5"}],{"#f":5}],"g-6":["^不让叫饮月的名讳，可他现在生怒的模样却颇有几分龙尊的冰冷。","\n","^你老实巴交地闭了嘴，去翻动身去罗浮前没看完的漫画，坐在床尾，不再主动跟他讲话。","\n",["ev","str","^...","/str","/ev",{"*":".^.c-4","flg":20},{"c-4":["\n",{"->":".^.^.^.^.g-8"},{"#f":5}],"#f":5,"#n":"g-7"}],{"#f":5}],"g-8":["^但你坐了一阵子觉得腰也累，背也痛，自然而然就摸着温暖的床铺趴下去了。","\n","^坐在床头的丹恒在翻动几本厚且泛黄的纸质书，背对着你盘腿而坐。","\n","ev","str","^（拽他垂在背后的腰带）","/str","/ev",{"*":".^.c-5","flg":20},["ev",{"^->":"SKINSHIP.CURIOUS.0.g-8.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^“丹——恒——”",{"->":"$r","var":true},null]}],{"c-5":["\n","^你一把抓住那条细长的腰带，还没拉扯就被丹恒反手制住另一头。","\n","^“什么事？”","\n","^“看着像尾巴，想拉一下。”","\n",{"->":".^.^.^.g-9"},{"#f":5}],"c-6":["ev",{"^->":"SKINSHIP.CURIOUS.0.g-8.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","^你拉长声音喊他的名字，没被立刻回应，于是你变本加厉地喊第二次，“丹——恒——老——师——”","\n","^“什么事？”","\n","^“没事不可以喊吗？”","\n",{"->":".^.^.^.g-9"},{"#f":5}],"#f":5}],"g-9":["ev","str","^...","/str","/ev",{"*":".^.c-7","flg":20},{"c-7":["\n",{"->":".^.^.^.g-10"},{"#f":5}],"#f":5}],"g-10":[{"->":"SKINSHIP.ED3"},{"#f":5}]}],{"#f":1}],"ED3":[["^此后他又开始翻那些书，没再同你讲话，你的小骚扰也被他一一略过。","\n","^你怀疑丹恒不是龙尊转世，是那尊雕像转世，真能定。","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^你悄悄瞥了眼他手里的书，那些文字看着眼熟，和仙舟人用的很像，但你努力了很久也没解读出多少有效信息，干脆看漫画去了。","\n","ev","str","^...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^被书本环绕着总是更容易感到安心和松弛，你迷迷糊糊睁开眼，看着熟悉的资料室天花板时，才意识到自己睡着了。","\n","ev","str","^...","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^手里空空，漫画和手机都被人放到了床外，耳边传来均匀的呼吸声。","\n","^你侧过头，正是丹恒半趴在被子外面睡着了。龙角与尾巴都还没收回，脸下枕着一本厚厚的书。","\n","ev","str","^...","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^……是丹恒啊。","\n","^你在此刻无比清晰地意识到。","\n","^哪怕置气斗嘴了，还是会帮你整理睡姿，和你共享床铺的人，即使身份、模样变换，也还是丹恒。","\n","ev","str","^...","/str","/ev",{"*":".^.c-4","flg":20},{"c-4":["\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^进入资料室时异样的陌生感终于烟消云散了。","\n","ev","str","^（趁机……亲亲他？）","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^鬼使神差之下，你轻轻地吻了他一下，就像小说里写的那种情难自已，你也觉得这么好看的人不亲可惜了。","\n","ev","str","^...","/str","/ev",{"*":".^.c-6","flg":20},{"c-6":["\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":["^但你突然被毛茸茸的东西缠住了，你抬手看到那条碧绿的龙尾，此刻正旋在你腕间，不着痕迹地将你拽向它的主人。","\n",{"#":"END3【这是什么？丹恒？摸一下！丹恒？再摸一下！】"},"^“……该我摸了。”","\n",["ev","str","^点我查看结局列表","/str","/ev",{"*":".^.c-7","flg":20},{"c-7":["\n",{"->":".^.^.^.^.g-8"},{"#f":5}],"#f":5,"#n":"g-7"}],{"#f":5}],"g-8":[{"->":"tips"},{"#f":5}]}],{"#f":1}],"#f":1}],"tips1":["^本结局为普通结局，如果想体验特殊结局，分支点在于是否亲吻丹恒。","\n",{"->":"tips"},{"#f":1}],"tips":["^感谢体验！","\n","^一共四个结局；","\n","^分支在借书1个特殊结局；","\n","^询问你在干嘛1个特殊结局1个普通结局；","\n","^你能表演一下那个吗1个特殊结局。","\n","^三条线的差异不算很大，如果有时间可以重复体验！再次感谢！","\n","^有任何建议或问题反馈请联系lof@后厨；qq@395553765。","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};