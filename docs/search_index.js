var documenterSearchIndex = {"docs": [

{
    "location": "LICENSE.html#",
    "page": "MIT License",
    "title": "MIT License",
    "category": "page",
    "text": ""
},

{
    "location": "LICENSE.html#MIT-License-1",
    "page": "MIT License",
    "title": "MIT License",
    "category": "section",
    "text": "Copyright (c) 2018 Hiroharu SugawaraPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
},

{
    "location": "LICENSEja.html#",
    "page": "MIT License 参考和訳",
    "title": "MIT License 参考和訳",
    "category": "page",
    "text": ""
},

{
    "location": "LICENSEja.html#MIT-License-参考和訳-1",
    "page": "MIT License 参考和訳",
    "title": "MIT License 参考和訳",
    "category": "section",
    "text": "Copyright (c) 2018  菅原 宏治 (Hiroharu Sugawara)以下に定める条件に従い、本ソフトウェアおよび関連文書のファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、ソフトウェアを無制限に扱うことを無償で許可します。これには、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および/または販売する権利、およびソフトウェアを提供する相手に同じことを許可する権利も無制限に含まれます。上記の著作権表示および本許諾表示を、ソフトウェアのすべての複製または重要な部分に記載するものとします。ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、何らの保証もなく提供されます。ここでいう保証とは、商品性、特定の目的への適合性、および権利非侵害についての保証も含みますが、それに限定されるものではありません。 作者または著作権者は、契約行為、不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、損害、その他の義務について何らの責任も負わないものとします。"
},

{
    "location": "ch00.html#",
    "page": "はじめに",
    "title": "はじめに",
    "category": "page",
    "text": ""
},

{
    "location": "ch00.html#はじめに-1",
    "page": "はじめに",
    "title": "はじめに",
    "category": "section",
    "text": "本文は、大学1年次学生のためのプログラミング演習の手引きである。Julia言語の v0.6.4 を採用した。 Julia言語は、開発効率と実行速度の両立を目指した言語である。 Juliaは、汎用である（どんな目的にも使える）が、 数値計算の扱いに特に優れている。本文では、プログラムと実行結果を、たくさん紹介する。 それらの多くは、大学初年級の数学や技術工学の分野で現れる 数値計算から選んでいる。プログラミングの演習が、単に言語の習得に留まらず、 STEM (Science, Technology, Engineering, and Mathematics) の理解の助けになることを希望する。実行結果を、そのまま取り込んでいる。"
},

{
    "location": "ch00.html#動作環境-1",
    "page": "はじめに",
    "title": "動作環境",
    "category": "section",
    "text": "設定（インストール）とは、アプリケーションやプログラムを利用できるように計算機を設定することをいう。本文では、利用するPCで、以下の設定がなされていることを前提とする。Julia 0.6.4 版が設定されていること\nPyPlot パッケージ (グラフ描画)が設定されていること\nJupyter notebookを用いる場合は IJulia パッケージが設定されていること"
},

{
    "location": "ch00.html#クラウドサービスでの利用-1",
    "page": "はじめに",
    "title": "クラウドサービスでの利用",
    "category": "section",
    "text": "クラウド上で、Julia と Jupyter notebook を無料で提供するサービスもある。Try Jupyter with Juliaブラウザから Jupyter notebook を利用できる (2018年8月1日現在 Julia 0.6.0 が設定されている)。"
},

{
    "location": "ch00.html#Julia言語のバージョンについて-1",
    "page": "はじめに",
    "title": "Julia言語のバージョンについて",
    "category": "section",
    "text": "Julia言語の 1.0 版は、2018年8月に公開された。しかし、周辺パッケージの整備が不十分であることから、 本文では、2018年6月に公開された 0.6.4 版を用いる。Old releases　のページから、インストール用のバイナリファイルを入手できる。"
},

{
    "location": "ch00.html#Julia言語の情報検索-1",
    "page": "はじめに",
    "title": "Julia言語の情報検索",
    "category": "section",
    "text": "Julia をキーワードに検索しても、人の名前によく使われる単語であるので、 Julia言語の内容にたどり着くのが難しい。Julialang で検索することを、強く勧める。"
},

{
    "location": "ch00.html#Julia言語の情報源・参考文献-1",
    "page": "はじめに",
    "title": "Julia言語の情報源・参考文献",
    "category": "section",
    "text": "(再掲) 2018年9月時点の最新版は Julia v1.0.0であるが、 本文では、Julia v0.6.4 を用いる。Julia Documentation v0.6.4, 本家のドキュメント, 英語\nThe Julia Express, 英語 Julia 1.0, 0.6, Bogumił Kami´nskiさん\nJulia高速チュートリアル, 日本語, Julia 0.7以上, @bicycle1885 (Kenta Sato)さん\nJulia Language Programming ~ お気楽 Julia プログラミング超入門 広井 誠さん, Julia 1.0\nThe First Track to (a quick and dirty overview of) Julia 1.0, 英語, Julia 1.0\nJulia & IJulia Cheat-Sheet , 英語 @stevenj (MIT), Julia 1.0\nVarious Julia plotting examples using PyPlot, @gizmaa (github)\nThink Julia: How to Think Like a Computer Scientist, Ben Lauwens, Allen Downey, 英語"
},

{
    "location": "ch00.html#数値計算プログラミングの参考書-1",
    "page": "はじめに",
    "title": "数値計算プログラミングの参考書",
    "category": "section",
    "text": "本文では、数値計算の話題を多く扱っている。以下の文献を参考にした。数値計算の常識, 伊理 正夫, 藤野 和建, 共立出版, 1985年, ISBN: 9784320013438, CiNiiBooksへのリンク  BN00729247\n数値計算講義, 金子 晃, サイエンス社, 2009年, ISBN: 9784781912257, CiNiiBooksへのリンク  BA89645032"
},

{
    "location": "ch00.html#節の記号-1",
    "page": "はじめに",
    "title": "節の記号",
    "category": "section",
    "text": "以下本文の各節表題には、冒頭に ■, ▶︎, ◀︎, ★ の記号が付いている。 各記号の意味は、以下の通りである。■  Julia 言語の解説\n▶︎  例題を用いた解説\n◀︎  練習・応用問題\n★  その回のまとめ以上の記号の前に、▼ の記号がついた節は、高度な内容を含んだり、 後の説明を先取りしたりしている。"
},

{
    "location": "ch00.html#免責事項など-1",
    "page": "はじめに",
    "title": "免責事項など",
    "category": "section",
    "text": "本文は、不定期に更新する。節の配置も変更する可能性がある。本文は、著者らの知見に基づく情報の公開を目的としている。 本文に書かれた内容およびその正誤によって生じた結果について、 著者らはいかなる責任を負わない。本文に掲載した内容は、著者らの環境でのみ動作の確認を行なっており、 いかなる環境においても再現できることを保証するものではない。実行環境MacOSX version 10.13.6\nJulia 0.6.4 (Julia公式ページから配布されたバイナリー)Copyright (c) 2018 Hiroharu Sugawara本文は、いわゆる MIT LICENSE で公開する。 LICENSEの本文は MIT License を、その参考和訳は MIT License 参考和訳 を参照せよ。\n# 扱わないこと\n\n* Interfaces\n* Modules\n* Metaprogramming\n* Networking and Streams\n* Parallel Computing\n* Parametric types\n* Profiling\n"
},

{
    "location": "ch01.html#",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "第1回：▶︎ 簡単なグラフを描く",
    "category": "page",
    "text": ""
},

{
    "location": "ch01.html#ch01-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "第1回：▶︎ 簡単なグラフを描く",
    "category": "section",
    "text": ""
},

{
    "location": "ch01.html#対話形式で使う-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ 対話形式で使う",
    "category": "section",
    "text": "本文では、対話形式で、Julia を利用する。Juliaをコマンドラインから利用している場合は、 プロンプト julia> が印字され、利用者の入力を待っている。命令を打ち込み、ENTERキーを押すと、 その命令を計算(評価)した結果が印字される。1上の例では、1 という文字の並びから、 1 という数を内部で作成し、 それを計算の結果として印字したのである。計算機側から見ると、 利用者の入力を読み込み(Read)、 入力された命令を評価し(Eval)、 その結果を印字する(Print)ことを、繰り返す(Loop)。 この４つの頭文字をとって、 対話型利用のことを REPL とも呼ぶ。Jupyter notebookを用いる場合には、 Code cellが表示されている。 ここに命令を打ち込み、SHIFT + ENTER キーを押すと、 その命令を評価した結果が出力される。"
},

{
    "location": "ch01.html#電卓として使う-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ 電卓として使う",
    "category": "section",
    "text": "数と数との四則演算をしてみよう。加算には + 、 減算には - の文字を使う。 乗算には * (アスタリスク astarisk と読む)、 除算には (% ではなくて) / (スラッシュ slash と読む)の文字を用いる。1 + 2\n3 * 4数式と同じように、乗算と除算は、加算・減算に優先する。 計算の順序を変えるには、括弧 ( と ) との組を用いる2 + 3 * 4\n(2 + 3) * 4除算の結果は、小数となる。2 / 2\n1 / 3\n5 / 2"
},

{
    "location": "ch01.html#変数に値を代入する-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ 変数に値を代入する",
    "category": "section",
    "text": "値には、名前（名札、ラベル）をつけることができる。 この名前を変数といい、名前をつける操作を「値を変数に代入する」という。 変数には、色々な種類の値を代入できる。変数を評価すると、変数の値となる。# 変数 x に 値 2 を代入する\nx = 2\n# 変数 x の値を用いる\nx + 1\n# 変数 x に 別の値 3 を再代入する\nx = 3# はコメントである。 # から行末までの文字は全て無視される。"
},

{
    "location": "ch01.html#変数名の規則-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ 変数名の規則",
    "category": "section",
    "text": "Allowed Variable Names変数の名前（変数名)は、以下のようにつける。変数名の最初の文字は、半角のアルファベット (aからzまで、AからZまで)、 または、下線（アンダースコア _)のいずれかでなければならない。 変数の2文字目以降は、さらに、半角の数字 (0から9)、 または、半角の感嘆符 ! を含めることができる。半角文字とは「かな漢字変換機能」を用いずに、 キーボードから打ち込める文字と考えてよい。変数名には、漢字やギリシャ文字などを使うことができるが、 ここでは説明を省略する (Allowed Variable Names を参照)。Stylistic Conventions今後出現する、定数、型、関数、マクロ、モジュール、パッケージの名前も、変数名の約束と同じである。 ただし、慣習として、以下のように使い分ける。変数名は小文字で始める。\n型、モジュール、パッケージの名前は大文字で始める。\n関数やマクロの名前は小文字で始める。下線（アンダースコア _)は用いない。"
},

{
    "location": "ch01.html#ベクトル-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ ベクトル",
    "category": "section",
    "text": "角括弧 [ と ] との間に、カンマ , で区切って 数を並べたものを、(数の)ベクトルという。ベクトルは、縦に印字される (列ベクトル, column vector)。[1,3,2]変数に、ベクトルを代入しよう。xs = [1,2,2,1]\nys = [1,1,3,1]note: Note\n本文筆者は、ベクトルなど複数の値を内部に含むデータの変数の名前を、複数形とすることが多い(末尾を sで終える)。そのデータの各要素を表す変数の名前を単数形とする。（大文字は定数などを表す約束だから）大文字と小文字で、ベクトルなどとその要素を区別することは避けた方がよい。ベクトルのスカラー倍は、各要素に一定の数を乗ずる。xs = [1,2,2,1]; nothing #hide\nys = [1,1,3,1]; nothing #hide\nxs * 2ベクトル同士の加減算には、演算子 .+ や .- を用いる。 +や-の前のピリオド . は「各要素に対する演算」を意味する。xs = [1,2,2,1]; nothing #hide\nys = [1,1,3,1]; nothing #hide\nxs .+ ys\nxs .- ys"
},

{
    "location": "ch01.html#三角形を描く-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "▶︎ 三角形を描く",
    "category": "section",
    "text": "グラフを描画するのに、PyPlot パッケージを導入しよう。パッケージは、関連する関数、定数、変数などをまとめたものである。 using <<パッケージ名>> で導入できる。plot 関数は、PyPlot パッケージに含まれる関数である。plot(xs,ys) の形で用いて、 ベクトル xs, ys から一つづつ数を取り出して、 それらを各々 x座標, y座標とする点を打つことを命令する。# PyPlot パッケージの導入\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs = [1,2,2,1]\nys = [1,1,3,1]\n# プロット\nplot(xs,ys)\nsavefig(\"ch01-tri-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch01.html#練習-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "xs, ys の値を変えて、別の図形を表示させてみよ。要素の数が等しくない場合は、どうなるか？"
},

{
    "location": "ch01.html#Range型-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ Range型",
    "category": "section",
    "text": "Base.colon — Function二つ、または、三つの数字をコロン(:) で区切ったデータは、 等差数列を表す (Range型)。「型」とは「データの種類」である。詳しくは、後の節で述べる。二つの数をコロン (:) で区切った量 a:b は、 aから 1づつ増やして、bを超えるまでの数からなる等差数列である。 三つの数をコロンで区切った量 a:b:c は、 aから b づつ増やして、cを超えるまでの数からなる等差数列である。1:5\nxs=0:0.1:1Range型の量から、各要素を取り出してベクトルに変換するには、 collect関数を用いる。xs=0:0.1:1; nothing #hide\ncollect(xs)note: Note\nRange型をベクトルに変換してしまうと、元が等差数列であるという情報が消えてしまう。どうしても、ベクトルでないと困る場合だけ、ベクトルに変換しよう。Range型を保ったまま、各要素をスカラー倍したり、 各要素に一斉に同じ数を加えたり引いたりできる。xs=0:0.1:1 #hide\n# 各要素を 2倍する\nxs * 2\n# 各要素に 1 を加える\nxs + 1\n# 各要素から 0.2 を引く\nxs - 0.2Range型に、ピリオド付きの演算子 .*, .+, .- を適用すると、 その結果は、Range型でなく、ベクトルになってしまう。ys=0:0.25:1\n# 各要素を 2倍する\nys .* 2\n# 各要素に 1 を加える\nys .+ 1\n# 各要素から 0.2 を引く\nys .- 0.2"
},

{
    "location": "ch01.html#式のグラフを描く-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "▶︎ 式のグラフを描く",
    "category": "section",
    "text": "plot関数に対して、二つのコレクション xs、ysを渡すと、  xs、ys から一つづつ要素を取り出し、 これらを x, y 座標とする点を結んで、図形が描かれるのであった。式のグラフを描くには、ysとして、 xs から計算した値を与えればよい。二つの直線 y=-x と y=2x-1 のグラフを描いてみよう。# PyPlot パッケージの導入\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-1:0.1:1\n# プロット\nplot(xs,-1*xs)\nplot(xs,2*xs-1)\nsavefig(\"ch01-graph-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch01.html#練習-2",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "別の直線を描いてみよ。"
},

{
    "location": "ch01.html#今回のまとめ-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "対話形式の使い方\n数の四則演算\nPyPlotパッケージを用いた図形とグラフの描画\nベクトルと等差数列"
},

{
    "location": "ch02.html#",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "第2回：▶︎ 複数のグラフを描く",
    "category": "page",
    "text": ""
},

{
    "location": "ch02.html#ch02-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "第2回：▶︎ 複数のグラフを描く",
    "category": "section",
    "text": ""
},

{
    "location": "ch02.html#リテラル-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "■ リテラル",
    "category": "section",
    "text": "リテラル (literal) とは、 「文字の並び」の通りに解釈される量をいう。1 や 1.1 はリテラルである。 それぞれ、整数 1,　小数1.1 という値として評価されるからである。"
},

{
    "location": "ch02.html#文字列-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "■ 文字列",
    "category": "section",
    "text": "「文字の並び」として表される量が、文字列である。 文字列のリテラルは、ダブルクォート \" で囲まれた文字の並びである。\"Hello world\"文字列を連結するには、演算子 * を用いる。h=\"Hello\"\nw=\"world\"\nh*w\nh*\" \"*w数字を表す文字列を作るには、string関数を用いる。string(0)\nstring(1)\nstring(1.1)"
},

{
    "location": "ch02.html#for文-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "■ for文",
    "category": "section",
    "text": "Repeated Evaluation: Loops一つずつ要素を取り出すことができる量を、コレクションという。 ベクトルやRangeは、コレクションである。for文を用いると、コレクションから要素を一つづつ取り出して、 end文が出現するまでの文を繰り返して、計算を行うことができる。 この繰り返される部分をブロック(block)という。 ブロックは、字下げ (indent) で表記される。 が、字下げは見やすさのためだけである。繰り返しをループ（loop）ともいう。note: Note\nブロックは、for文以外にも出現する (例えば、 ■ if文 )。 区別したいなら forブロックとも称する。次の例では、変数 iに、ベクトルの各要素を入れて、end文までの計算を繰り返す。 コレクションの各要素が入る変数をループ変数 (loop variable)という。for i in [1,3,2]\n  @show i   # 式 i の値を表示する\nend@show i は、式 i の値を表示するマクロである。Range型を用いた for文の例を示す。for i in 1:5\n  println( string(i) )\nendstring関数の結果を表示する。 println 関数は、印字してから、改行する命令である。\n## ■ リスト内包表記\n\n[Comprehensions](https://docs.julialang.org/en/v0.6.4/manual/arrays/#Comprehensions-1)\n\n\n[ 2x for x in [1:2] ]"
},

{
    "location": "ch02.html#グラフに凡例を加える-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ グラフに凡例を加える",
    "category": "section",
    "text": "グラフの凡例(lengend)は、グラフに描かれた曲線を区別するための説明である。 PyPlotパッケージで書かれたグラフに凡例を追加するには、以下のようにする。まず、plot関数に label=文字列 の形式で、 その曲線に付与する文字列を指定する。 全ての曲線を描いた後に、legend関数を付与する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-1:0.1:1\nplot(xs,-1*xs,  label=\"y=-x\")\nplot(xs,2*xs-1, label=\"y=2x-1\")\nlegend()\nsavefig(\"ch02-leg1-plot.svg\"); nothing # hide(Image: )比例関係 y = ax (a=12345)のグラフを描こう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-1:0.1:1\nplot(xs,   xs, label=\"y= x\" )\nplot(xs, 2*xs, label=\"y=2x\" )\nplot(xs, 3*xs, label=\"y=3x\" )\nplot(xs, 4*xs, label=\"y=4x\" )\nplot(xs, 5*xs, label=\"y=5x\" )\nend\nlegend()\nsavefig(\"ch02-leg2a-plot.svg\"); nothing # hide(Image: )上のプログラムを、for文を用いて繰り返しで書き直してみよう。using PyPlot\nclf() # hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-1:0.1:1\nfor a in 1:5\n  plot(xs, a*xs, label=\"y=\"*string(a)*\"x\" )\nend\nlegend()\nsavefig(\"ch02-leg2b-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch02.html#冪乗関数を描く-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ 冪乗関数を描く",
    "category": "section",
    "text": "Base.:^ - Methodx^y は、冪（べき, power）ないし冪乗（べきじょう）x^yを表す。 xを底 (base)、yを冪指数 (exponent)という。2^2\n2^3\n2^4冪指数が負の整数のとき、冪の計算は失敗する (DomainError : 定義域外の例外)。 代わりに、負の小数を指定する。2^-2 # DomainError\n2^-2.0ベクトルや等差級数の各要素に対して 冪乗を計算するには　演算子 ^の前にピリオド. を加える。2.^[2,3,4]\n(2:4).^2\n2:4.^2    # `^`は `:` よりも優先度が高い冪乗 y=x^a (a=2345) のグラフを描こう。plt[:axes]()[:set_aspect](\"equal\") は、 グラフの縦横比 (アスペクト比 aspect ratio) を等しくする命令である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.1:1\nplot(xs, xs.^2 )\nplot(xs, xs.^3 )\nplot(xs, xs.^4 )\nplot(xs, xs.^5 )\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-po1-plot.svg\"); nothing # hide(Image: )for文を使って、繰り返しの処理をまとめる。さらに、凡例を追加する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\n# 間隔を狭めた\nxs=0:0.05:2\nfor a in 2:5\n  plot(xs, xs.^a , label=\"y=x^\"*string(a) )\nend\nlegend()\n# 描画範囲を設定\nxlim(-0.05,2)\nylim(-0.05,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-po2-plot.svg\"); nothing # hide(Image: )plot命令は、全ての点を表示しようとする。 グラフの描画範囲を調整するには、関数 xlim と ylim を用いる。関数 xlim(a,b) は、x軸の描画を a から b の範囲に限定する命令である。関数 ylim(a,b) は、y軸の描画を a から b の範囲に限定する命令である。"
},

{
    "location": "ch02.html#ローレンツ関数を描く-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ ローレンツ関数を描く",
    "category": "section",
    "text": "Lorentzian Function以下の曲線を、 ローレンツ関数 (Lorentzian function)という。y = fracfracgamma2(x-x_0)^2+left(fracgamma2right)^2gamma  0パラメータを x_0 = 0 gamma = 2 のように選ぶと、 以下のように簡単な形となる。y = frac1x^2+1まず、この曲線を描いてみる。 各要素に対して除算を行うため、/の前にも、ピリオド.を付与する。xs=-3:0.5:3\n1 ./ (xs.^2+1)上のグラフを描こう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-3:0.1:3\nplot(xs, 1 ./ (xs.^2+1) )\nsavefig(\"ch02-lo1-plot.svg\"); nothing # hide(Image: )以下のように、パラメータ gamma を導入する。y = fracfracgamma2x^2+left(fracgamma2right)^2三つのパラメータ gamma=0512 について、この曲線を描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-3:0.05:3\ngamma=0.5\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\ngamma=1.0\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\ngamma=2.0\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-lo2-plot.svg\"); nothing # hide(Image: )gammaの値が変わっても、それぞれの曲線を描く命令は変わらない。 for文を用いて、gammaの値を変えてみよう。（結果のグラフは同じである)using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-3:0.05:3\nfor gamma in [0.5,1.0,2.0]\n  plot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\nend\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-lo3-plot.svg\"); nothing # hideローレンツ関数には、次の性質がある。点 x=0 で 最大値 y = frac2gamma\n点 x=pmfracgamma2 で、y = frac12frac2gamma となること。２つ目の性質を観察するため、最大値に対する比を描いてみる。PyPlotパッケージに用意された関数 axhline() は、 水平線(horizontal line)を描く。 引数 color=\"k\" は、黒色(black)で描くことを指定し、lw=0.5は線幅(linewidth)を指定する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-3:0.05:3\nfor gamma in [0.5,1.0,2.0]\n  plot(xs,\n    (gamma/2) ./ (xs.^2+(gamma/2)^2) / (2/gamma),\n    label=gamma )\nend\nlegend()\naxhline(1/2, color=\"k\", lw=0.5)\nsavefig(\"ch02-lo4-plot.svg\"); nothing # hide(Image: )note: Note\nplot関数の文は、複数の行に渡って記述しているが、行が更に続くことを示す記法は、特に用意されていない。構文が行末で終わらなければ、次の行まで読みに行くことになっている。パラメータ gammaは、半値全幅 (Full Width of Half Maximum, FWHM)と呼ばれる。 gammaを非常に小さくすると、 Diracのデルタ関数 (Dirac delta function)の近似(の一つ)となる。"
},

{
    "location": "ch02.html#更新演算子-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "■ 更新演算子",
    "category": "section",
    "text": "Updating operators変数に四則演算などを行って、元の変数に再代入する場合には、 更新演算子を用いるとよい。 演算子の直後に = の文字が入る。x=1\n# 再代入\nx=x+1\n# 更新演算子\nx+=1演算子 +, -, *, /, ^ に対して、 更新演算子 +=, -=,  *=, /=, ^= が用意されている。以下の例は、変数 gamma を 2 で繰り返し割り算する。gamma=2\nfor i=1:5\n  gamma /= 2\n  @show gamma\nend更新演算子 /= を利用して、ローレンツ関数のパラメータ gamma を変えてみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-3:0.05:3\ngamma=2\nfor i in 1:5\n  plot(xs,\n    (gamma/2) ./ (xs.^2+(gamma/2)^2) / (2/gamma),\n    label=gamma )\n  gamma /= 2\nend\nlegend()\naxhline(1/2, color=\"k\", lw=0.5)\nsavefig(\"ch02-lo5-plot.svg\"); nothing # hide(Image: )更新演算子は、ベクトルのスカラー倍や、定数の加減にも適用できる。xs = [1,2,2,1]\nxs +=1\nxs +=1\nxs *=1前節の三角形を描く例題で、更新演算子 +=を用いて、図形を繰り返し並行移動してみよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs = [1,2,2,1]\nys = [1,1,3,1]\nfor i=1:5\n  plot(xs,ys)\n  xs += 0.5\n  ys += 0.5\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch01-tri-shift-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch02.html#練習-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "ローレンツ関数において、パラメータ x_0 を変えたグラフを作成せよ。 for文を使う方法、更新演算子を使う方法の、二つで描いてみよ。"
},

{
    "location": "ch02.html#今回のまとめ-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "文字列\nfor文\nグラフに凡例を加える\n冪乗関数\nローレンツ関数\n更新演算子"
},

{
    "location": "ch03.html#",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "第3回：▶︎ 連続な曲線を描く",
    "category": "page",
    "text": ""
},

{
    "location": "ch03.html#ch03-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "第3回：▶︎ 連続な曲線を描く",
    "category": "section",
    "text": ""
},

{
    "location": "ch03.html#Jupyter-notebook-によるテキストの入力-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "■ Jupyter notebook によるテキストの入力",
    "category": "section",
    "text": "Jupyter notebook のセルには、複数の種類(Cell type)がある。既定のセルの Cell type は、Code である。 プログラム片を入力して、SHIFTキーとENTERキーを同時に押して実行すると、 出力セルに実行結果が表示される。Cell type を Markdown に変更すると、 Markdown 記式によるテキストを入力できる。Markdown 記式でテキストを入力し、 SHIFT+ENTERを押して実行すると、 Markdown記式で整形された文書が表示される。Markdown CellsMarkdown記法では、空行が段落の区切りである。 空行をはさまない行替えは、前の行に続けて、同じ段落に配置される。文字列の飾りは、たくさん使用しない方がよい。URLリンクを書くには、次のように記述する。 [ 表示名 ]( URL )例[Julia 0.6 Documentation](https://docs.julialang.org/en/v0.6/)Julia 0.6 DocumentationMarkdown記法では、数式を挿入することができる。 ダラー記号 $ 一つで囲まれた数式は行内数式 (inline math)、 ダラー記号 $ 二つで囲まれた数式は別行立て数式 (display math)である。 数式そのものは LaTeX 記法で記述する。 いくつか例を示す。数式内の文字は変数とみなされ、斜体で表される。 $x+1$ → x+1\n上付き $x^{2}$ → x^2\n下付き $x_{3}$ → x_3\n分数 $\\dfrac{a}{b}$ → dfracab\n関数 $f(x) = x^{2}+1$ → f(x) = x^2+1\n三角関数 $\\sin{x}, \\tan{x}$ → sinx tanx\n指数対数関数 $\\exp{x}, \\log{x}$ → expx logx\nテキスト内の立体 (roman style) $a\\;\\mathrm{over}\\;b$ → amathrmoverb\n総和 $\\sum_{i=0}^{m}i$ → sum_i=0^mi\n総和を「行立て」する $$\\sum_{i=0}^{m}i$$ →sum_i=0^mi積分 $\\int_{0}^{1}x dx$ → int_0^1x dx\n積分を「行立て」する $$\\int_{0}^{1}x dx$$ →int_0^1x dxカッコのペア $\\left[\\left\\{\\left( \\dfrac{1}{2} \\right)\\right\\}\\right]$ → leftleftleft( dfrac12 right)rightright"
},

{
    "location": "ch03.html#定義域・値域-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 定義域・値域",
    "category": "section",
    "text": "関数 y=f(x) の定義域(domain)とは、 独立変数 (independent variable) x の取りうる値からなる集合である。ちなみに、従属変数 (dependent variable) y が取りうる値からなる集合を、値域 (range)という本章では、 定義域が実数全体、あるいは、正の数の集合である関数について、 グラフを描いてみる。"
},

{
    "location": "ch03.html#正弦関数・余弦関数を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 正弦関数・余弦関数を描く",
    "category": "section",
    "text": "正弦 y = sinx\n余弦 y = cosx"
},

{
    "location": "ch03.html#ラジアン単位-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "ラジアン単位",
    "category": "section",
    "text": "Base.cos - Function\nBase.sin - Functionラジアン単位の正弦、余弦 sin, cosusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2pi:pi/360:2pi\nplot(xs, cos.(xs), label=\"cos\")\nplot(xs, sin.(xs), label=\"sin\")\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch03-sin1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#円周率単位-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "円周率単位",
    "category": "section",
    "text": "Base.Math.cospi - Function\nBase.Math.sinpi - Function円周率単位の正弦、余弦 sinpi, cospiusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2:1/360:2\nplot(xs, cospi.(xs), label=\"cospi\")\nplot(xs, sinpi.(xs), label=\"sinpi\")\nxlabel(\"pi\")\nlegend()\nsavefig(\"ch03-sin2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#角度単位-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "角度単位",
    "category": "section",
    "text": "Base.Math.cosd - Function\nBase.Math.sind - Function角度単位の正弦、余弦 sind, cosdusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-360:1:360\nplot(xs, cosd.(xs), label=\"cosd\")\nplot(xs, sind.(xs), label=\"sind\")\nxlabel(\"degree\")\nlegend()\nsavefig(\"ch03-sin3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#ラジアンと角度との相互変換-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "ラジアンと角度との相互変換",
    "category": "section",
    "text": "Base.Math.rad2deg - Function\nBase.Math.deg2rad - Function# rad2deg\nrad2deg(pi/4)\nrad2deg(pi/2)\nrad2deg(pi)\nrad2deg(-pi/4)\n# deg2rad\ndeg2rad(45)\ndeg2rad(90)\ndeg2rad(180)\ndeg2rad(-45)"
},

{
    "location": "ch03.html#楕円を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 楕円を描く",
    "category": "section",
    "text": "楕円を陰関数で表示するとleft(fracxaright)^2+left(fracybright)^2 = 1楕円を媒介変数表示(パラメータ曲線)するとbeginalign*x  = a cos theta y  = b sin theta endalign*媒介変数表示を用いて、楕円上の各点の座標を計算する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/18:2pi\nxs=2*cos.(ts)\nys=sin.(ts)\nplot(xs,ys)\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-ell1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#アルキメデスの渦を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ アルキメデスの渦を描く",
    "category": "section",
    "text": "平面座標上の点 xy)は、 極座標 (r theta) でも表示できる。 xyと r theta との対応はbeginalign*x  = r cos theta y  = r sin theta endalign*である。次の関係で結ばれた曲線を、アルキメデスの渦という。r = thetaこれを描いてみよう。using PyPlot\nclf() # hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/1800:2pi\nxs=ts .* cos.(ts)\nys=ts .* sin.(ts)\nplot(xs, ys)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-arch1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#練習-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "上では theta ge 0 の範囲で、曲線を描いた。 パラメータ theta  0 の範囲まで含めたら、どのような曲線になるか？ 予想した上で、プログラムを書き実行し、確かめてみよ。 予想と一致していたか？"
},

{
    "location": "ch03.html#花曲線を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 花曲線を描く",
    "category": "section",
    "text": "flower curver = cos(n theta)using PyPlot\nclf() # hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nn=3\nts=0:pi/1800:2pi\nrs=cos.(n*ts)\nxs=rs .* cos.(ts)\nys=rs .* sin.(ts)\nplot(xs, ys)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-flo1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#指数関数を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 指数関数を描く",
    "category": "section",
    "text": "正の数 a  0を底(exponent)とする指数関数(exponential function)y=a^x底 a=2の場合。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-10:0.01:10\nplot(xs, 2.^xs)\nsavefig(\"ch03-exp1-plot.svg\"); nothing # hide(Image: )底を 2345と変えてみる。x  0 の範囲のみ描く。clf() #hide\nplot(xs, 2.^xs)\nplot(xs, 3.^xs)\nplot(xs, 4.^xs)\nplot(xs, 5.^xs)\nxlim(0,3)\nylim(0,100)\nsavefig(\"ch03-exp2-plot.svg\"); nothing # hide(Image: )凡例(legend）を加える。clf() #hide\nplot(xs, 2.^xs, label=\"a=\"*string(2))\nplot(xs, 3.^xs, label=\"a=\"*string(3))\nplot(xs, 4.^xs, label=\"a=\"*string(4))\nplot(xs, 5.^xs, label=\"a=\"*string(5))\nplot(xs, 6.^xs, label=\"a=\"*string(6))\nlegend()\nxlim(0,3)\nylim(0,100)\nsavefig(\"ch03-exp3-plot.svg\"); nothing # hide(Image: )自然対数の底として、e と eu が定義済みである。e\neu底を変えて、繰り返してみる。a^0=1=10^0 で、曲線が交差している。以下は、片対数グラフで描いた。関数 xscale, yscale は、 それぞれ x軸、y軸のスケールを指定する。 何も指定しない場合（既定値）は、線形 linear である。 log を指定すると、10の対数で、その軸を描く。using PyPlot #hide\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor a in [2,e,3,4,5,6]\n  plot(xs, a.^xs, label=\"a=\"*string(a))\nend\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp4-plot.svg\"); nothing # hide(Image: )底 2 e 10 については、expで始まる関数が定義されている。exp2 : 底が 2 の指数関数\nexp : 自然対数 (底は、自然対数の底)\nexp10 : 底が 10 の指数関数clf() #hide\nplot(xs, exp2.(xs), label=\"exp2\")\nplot(xs, exp.(xs), label=\"exp\")\nplot(xs, exp10.(xs), label=\"exp10\")\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp7-plot.svg\"); nothing # hide(Image: )関数も名前であり、名前をつけること(=変数に代入すること）ができる。 関数のリストを作って for文で繰り返してみよう。 関数名を string関数に与えると、関数名の文字列を返す。clf() #hide\nfor f in [exp2,exp,exp10]\n  plot(xs, f.(xs), label=string(f))\nend\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp8-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#平方根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 平方根を描く",
    "category": "section",
    "text": "Base.sqrt - Function二乗するとxになる数を、xの平方根 (square root of x)という。 関数 sqrt(x)は xの平方根を求める関数である。sqrt(0)\nsqrt(2)\nsqrt(3)負の数 x  0を関数sqrtの引数（ひきすう)に与えると、 例外（exception)が発生する。 が、複素数を引数として与えると、複素数として計算できる（複素数は、もっと後の回で説明する）。sqrt(-1) # DomainError\nsqrt(complex(-1,0))  # 複素数を引数に与える平方と平方根を同じグラフに描いてみよう。 直線 y=x に対して、鏡の関係になっている。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.01:3\nplot(xs, xs.^2, label=\"square\")\nplot(xs, sqrt.(xs), label=\"square root\")\nplot(xs, xs, \"k\", lw=0.5, label=\"y=x\")\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-sr1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#立方根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 立方根を描く",
    "category": "section",
    "text": "Base.Math.cbrt - Function三乗するとxになる数を、xの立方根 (cube root of x)という。 関数 cbrt(x)は xの立方根を求める関数である。立方と立方根を同じグラフに描いてみよう。 直線 y=x に対して、鏡の関係になっている。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.01:3\nplot(xs, xs.^3, label=\"cubic\")\nplot(xs, cbrt.(xs), label=\"cube root\")\nplot(xs, xs, \"k\", lw=0.5, label=\"y=x\")\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-cr1-plot.svg\"); nothing # hide(Image: )平方と平方根、立方と立方根を、同じグラフに描こう。 点(11)で、曲線が交差している。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.01:3\nplot(xs, xs.^2, label=\"square\")\nplot(xs, sqrt.(xs), label=\"square root\")\nplot(xs, xs.^3, label=\"cube\")\nplot(xs, cbrt.(xs), label=\"cube root\")\nplot(xs, xs, \"k\", lw=0.5, label=\"y=x\")\nlegend()\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr1-plot.svg\"); nothing # hide(Image: )平方根と立方根の関数のリストを作って for文で繰り返してみよう。 （結果のグラフは、上と同じなので省略する）using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.01:3\nfor f in [ sqrt, cbrt]\n  plot(xs, f.(xs), label=string(f))\nend\nlegend()\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#冪乗根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 冪乗根を描く",
    "category": "section",
    "text": "一般に、正数 x  0 と 2以上の整数n に対して、y^n = x の解、 すなわち、y = sqrtnx = x^frac1nを、xのn乗根 (root of n-th power, n-th root)という。nを指定せずに、冪乗根（べきじょうこん）あるいは冪根（べきこん）と総称する。 「冪」の代わりに「巾」の略字を当てることもある。PyPlotパッケージに用意された関数 axvline()で垂直線 (vertical line)を描く。引数は、前回説明した関数 axhline (水平線を描く)と同じである。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.01:3\nplot(xs, xs.^(1/2), label=\"n=2\")\nplot(xs, xs.^(1/3), label=\"n=3\")\nplot(xs, xs.^(1/4), label=\"n=4\")\nplot(xs, xs.^(1/5), label=\"n=5\")\nlegend()\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\naxhline(1, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr3-plot.svg\"); nothing # hide(Image: )指数nで繰り返してみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:0.01:10\nfor n in 2:5\n  plot(xs, xs.^(1/n), label=\"y=x^(1/\" * string(n) *\")\" )\nend\nlegend()\nxlabel(\"x\")\nylabel(\"y\")\nxlim(0.1,10.)\nylim(0.1,10.)\nxscale(\"log\")\nyscale(\"log\")\naxhline(1, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nsavefig(\"ch03-pr4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#自然対数-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 自然対数",
    "category": "section",
    "text": "Base.log — Method正の数 x0に対して、x=e^y を満たす数 yを、xの自然対数 (natural logarithm of x、Napierian logarithm、あるいは単に、logarithm）といい、logx と書く。$e$は、自然対数の底、あるいはネピア(Napier)の数である。関数 log(x)は、自然対数を求める関数である。log(1)\nlog(e)\nlog(e^2)\nlog(-1) # DomainError線形グラフで描いてみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0.1:0.01:100\n0.1:0.01:100.0\nplot(xs, log.(xs))\nsavefig(\"ch03-log1-plot.svg\"); nothing # hide(Image: )片対数グラフで描いてみる。x軸を対数で表示すると、直線で表示される。plot(xs, log.(xs))\nxscale(\"log\")\nsavefig(\"ch03-log2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#対数関数-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 対数関数",
    "category": "section",
    "text": "Base.log — Method正の数 aに対して、x=a^y を満たす数yを、底aに対する xの対数 ( logarithm of a to base b; base a logarithm of x）といい、log_ayと書く。関数 log(a,y)のように、引数（ひきすう）二つを与えると、 底 aに対する xの対数が得られる。片対数グラフを描く。log_a1=0で曲線が交差する。clf() #hide\nplot(xs, log.(2,xs), label=string(2))\nplot(xs, log.(xs), label=string(e))\nplot(xs, log.(3,xs), label=string(3))\nplot(xs, log.(10,xs), label=string(10))\nxscale(\"log\")\naxhline(0, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nlegend()\nsavefig(\"ch03-log3-plot.svg\"); nothing # hide(Image: )底をfor文で変えてみる。clf() #hide\nfor a in [2, e, 3, 10]\n  plot(xs, log.(a,xs), label=string(a))\nend\nxscale(\"log\")\naxhline(0, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nlegend()\nsavefig(\"ch03-log4-plot.svg\"); nothing # hide(Image: )Base.log2 - Function\nBase.log10 - Function底 2と10 に対しては、関数 log2と log10 が用意されている。clf() #hide\nplot(xs, log2.(xs), label=\"log2\")\nplot(xs, log.(xs), label=\"log\")\nplot(xs, log10.(xs), label=\"log10\")\nxscale(\"log\")\nlegend()\naxhline(0, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nsavefig(\"ch03-log5-plot.svg\"); nothing # hide(Image: )関数名で繰り返してみる。clf() #hide\nfor f in [log2, log, log10]\n  plot(xs, f.(xs), label=string(f))\nend\nxscale(\"log\")\nlegend()\naxhline(0, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nsavefig(\"ch03-log6-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#ダブルYグラフを描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ ダブルYグラフを描く",
    "category": "section",
    "text": "ダブルYグラフは、 x軸を共通として、左と右に、二つの y軸を配置するグラフである。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2:0.1:2\nfig=plt[:figure]()\nax1=fig[:add_subplot](111)\nax1[:plot](xs, -xs, \"r\")\nax2=ax1[:twinx]()\nax2[:plot](xs, xs.^2, \"b\")\nsavefig(\"ch03-tw1-plot.svg\"); nothing #hide(Image: )これを描くには、次の手順をとる。 まず、以下のように、 元となる座標系(左y軸)のデータ（オブジェクト）ax1を取得する。fig=plt[:figure]()\nax1=fig[:add_subplot](111)次に、以下のように、 x軸が共通な、新しい座標系(右y軸)のデータ（オブジェクト）ax2を作成する。ax2=ax1[:twinx]()座標系 axに対して描画するには、ax[:plot](<<plot引数>>) の形式を用いる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2:0.1:2\nfig=plt[:figure]()\nax1=fig[:add_subplot](111)\nax1[:plot](xs, -xs, \"r\")\nax2=ax1[:twinx]()\nax2[:plot](xs, xs.^2, \"b\")\nsavefig(\"ch03-tw1-plot.svg\"); nothing # hide"
},

{
    "location": "ch03.html#自由落下運動を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 自由落下運動を描く",
    "category": "section",
    "text": "(力学の問題)鉛直上向きに投げられた球が、重力のみを感じて自由落下するとする。 時刻 t=0において、高さ y=0, 鉛直上向きの速度 v_0 とすると、 時刻 tにおける、高さ yと 鉛直上向きの速度 v は、以下のように表される。beginalign* v  = v_0 - gt  y  = v_0 t - dfrac12gt^2 endalign*各時刻の速度を描く。 長さの単位としてメートル m、 時間の単位として秒 s を、(組立て単位を含めて)一貫して用いる。重力加速度 g = 98mathrmms^2初速度を v0 = 10mathrmms としよう。各時刻の速度を描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nv0=10 # m/s\ng=9.8 # m/s^2\n\nts=0:0.1:3 # s\nvs=v0-g*ts\nplot(ts,vs)\nsavefig(\"ch03-gy1-plot.svg\"); nothing # hide(Image: )各時刻の高さを描く。ys=v0*ts-g*ts.^2/2\nplot(ts,ys)\nsavefig(\"ch03-gy2-plot.svg\"); nothing # hide(Image: )この二つのグラフを、時刻を、共通の横軸にとって描こう。clf() #hide\nax1=plt[:subplot]()\nax2=ax1[:twinx]()\nax1[:plot](ts,vs)\nax2[:plot](ts,ys)\nsavefig(\"ch03-gy3-plot.svg\"); nothing # hide(Image: )各軸に対して、描画範囲を指定する。 各軸オブジェクトに対して関数 set_xlim または set_ylim を用いる。 (関数 xlim または ylim は、軸オブジェクトに対して用いない)共通な下軸に対しては、元の軸オブジェクト ax1に対して指定する。 左軸、右軸は、各軸のオブジェクトに対して指定する。各軸にラベルをつけるには、 各軸オブジェクトに対して関数 set_xlabel または set_ylabel を用いる。 (関数 xlabel または ylabel は、軸オブジェクトに対して用いない)ax1[:set_xlabel](\"time / s\")\nax1[:set_xlim](-0.3,2.3)\nax1[:set_ylim](-12,12)\nax2[:set_ylim](-6,6)\nax1[:set_ylabel](\"velocity / m s^-1\")\nax2[:set_ylabel](\"height / m\")\n\nsavefig(\"ch03-gy4-plot.svg\"); nothing # hide(Image: )各軸に対して、水平線 axvline や垂直線 axvline を描く。時刻 dfracv0g で、速度が 0 となり、最大の高さを取る様子が見える。ax1[:axvline](v0/g, color=\"k\", lw=0.5)\nax1[:axvline](0, color=\"k\", lw=0.5)\nax1[:axhline](0, color=\"k\", lw=0.5)\nsavefig(\"ch03-gy5-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#練習-2",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "初速度 v0 を変えて描いてみよ。"
},

{
    "location": "ch03.html#ダブルYグラフに共通な凡例の作成-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▼▶︎ ダブルYグラフに共通な凡例の作成",
    "category": "section",
    "text": "複数軸に共通な凡例を描くには、技巧が少々必要である。まず、前節のプログラムをまとめて書こう。 二つの曲線に、色を指定しよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nax1=plt[:subplot]()\nax2=ax1[:twinx]()\nax1[:plot](ts,vs, \"b\", label=\"velocity\")\nax2[:plot](ts,ys, \"r\", label=\"height\")\nax1[:set_xlabel](\"time / s\")\nax1[:set_xlim](-0.3,2.3)\nax1[:set_ylim](-12,12)\nax2[:set_ylim](-6,6)\nax1[:set_ylabel](\"velocity / m s^-1\")\nax2[:set_ylabel](\"height / m\")\nax1[:axvline](10/9.8, color=\"k\", lw=0.5)\nax1[:axvline](0, color=\"k\", lw=0.5)\nax1[:axhline](0, color=\"k\", lw=0.5)\n; # hide各軸に含まれる曲線の形状と凡例を、 get_legend_handles_labels 関数を用いて、取り出す。二つの軸に含まれる形状と凡例を、それぞれ結合する。 片方の軸に対して、結合した形状と凡例を追加する。lns1, lbl1 = ax1[:get_legend_handles_labels]()\nlns2, lbl2 = ax2[:get_legend_handles_labels]()\nlns  = [ lns1; lns2 ]\nlbls = [ lbl1; lbl2 ]\n\nax2[:legend]( lns, lbls, loc=0)\nsavefig(\"ch03-gy6-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#練習-3",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "初速度 v0を、色々変えてプロットしてみよ。"
},

{
    "location": "ch03.html#複数のグラフを描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 複数のグラフを描く",
    "category": "section",
    "text": "花曲線の例で nを変えてみる。グラフのプロット領域を分割するには、以下の命令を用いる。ax=plt[:subplot](ijk)ijk は３桁の整数である。 百の位 iは、縦方向の分割数、 十の位 jは、横報告の分割数である。 一の位は、取得するプロット番号であり、 左から右、上から下に、1から順に振られる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/1800:2pi\nfor i=1:6\n  n=i+2\n  ax=plt[:subplot](330+i)\n  rs=cos.(n*ts)\n  xs=rs .* cos.(ts)\n  ys=rs .* sin.(ts)\n  ax[:plot](xs,ys)\n  ax[:set_xlim](-1,1)\n  ax[:set_ylim](-1,1)\n  ax[:set_aspect](\"equal\")\nend\nsavefig(\"ch03-flo2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#練習：斜めに飛ばした球の軌跡-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "◀︎ 練習：斜めに飛ばした球の軌跡",
    "category": "section",
    "text": "(力学の問題)鉛直上向きに対して 角度 bをつけて投げた球が、重力のみを感じて運動するとき、その球の軌跡を描け。最初は b = 15^circとして描け。次に、角度bを変えた場合を、一つのグラフに示せ。余裕があれば、Jupyter NotebookのMarkdownセルを用いて、解き方や式などの文飾を加えよ。"
},

{
    "location": "ch03.html#練習-4",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "ここまで紹介した関数を使って、色々な連続曲線を描いてみよ。 Jupyter notebookの Markdownセルを用いて、説明文も加えよ。"
},

{
    "location": "ch03.html#今回のまとめ-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "Jupyter Notebookを用いたテキスト入力 (Markdownセル)\n実数全域で定義された関数\n正弦・余弦関数\n楕円\n極座標で著された曲線\nアルキメデスの渦\n花曲線\n指数関数\n正数を定義域とする関数\n平方根・立方根・冪乗根\n対数関数\n複数のグラフを描く方法\nダブルYグラフ\nダブルYグラフに共通な凡例の作成\nプロットエリアの分割"
},

{
    "location": "ch04.html#",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "第4回：▶︎ 不連続な曲線を描く",
    "category": "page",
    "text": ""
},

{
    "location": "ch04.html#ch04-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "第4回：▶︎ 不連続な曲線を描く",
    "category": "section",
    "text": ""
},

{
    "location": "ch04.html#plot関数のフォーマット・パラメータ-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "■ plot関数のフォーマット・パラメータ",
    "category": "section",
    "text": "PyPlotパッケージに含まれる関数plotは、 複数回起動する毎に曲線の見た目を変える。見た目を個別に変えるには、plot関数のデータを指定した直後に、 文字列(fmtパラメータ) を指定する。fmtパラメータは、 色、マーカー種類、線の見た目を、1文字ないし2文字で指定する。 指定しなければ、規定値が選ばれる。色を変える例using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-10:0.1:10\nplot(xs, 9.^xs, \"b\", label=\"b\") # blue\nplot(xs, 8.^xs, \"g\", label=\"g\") # green\nplot(xs, 7.^xs, \"r\", label=\"r\") # red\nplot(xs, 6.^xs, \"c\", label=\"c\") # cyan\nplot(xs, 5.^xs, \"m\", label=\"m\") # magenda\nplot(xs, 4.^xs, \"y\", label=\"y\") # yellow\nplot(xs, 3.^xs, \"k\", label=\"k\") # black\nplot(xs, 2.^xs, \"w\", label=\"w\") # white (白背景では見えない)\nxlim(0,3)\nylim(0,100)\nlegend()\nsavefig(\"ch04-pyplot1-plot.svg\"); nothing # hide(Image: )マーカーの形を変える例。 マーカーの色は全て青としたusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2:0.2:2\nplot(xs, xs.^2,     \"b.\", label=\".\") # point\nplot(xs, xs.^2 -2,  \"b,\", label=\",\") # pixel\nplot(xs, xs.^2 -4,  \"bo\", label=\"o\") # circle\nplot(xs, xs.^2 -6,  \"bs\", label=\"s\") # square\nplot(xs, xs.^2 -8,  \"b*\", label=\"*\") # star\nplot(xs, xs.^2 -10, \"b+\", label=\"+\") # plus\nplot(xs, xs.^2 -12, \"bx\", label=\"x\") # x\nplot(xs, xs.^2 -14, \"bD\", label=\"D\") # diamond\nplot(xs, xs.^2 -16, \"bd\", label=\"d\") # thin diamond\nxlim(-3,3)\nlegend()\nsavefig(\"ch04-pyplot2-plot.svg\"); nothing # hide(Image: )線のスタイルを変える例using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2:0.2:2\nplot(xs, xs.^3-xs.^2,   \"r-\",  label=\"-\")  # solid line\nplot(xs, xs.^3-xs.^2-2, \"r--\", label=\"--\") # dashed line\nplot(xs, xs.^3-xs.^2-4, \"r-.\", label=\"-.\") # dash-dot line\nplot(xs, xs.^3-xs.^2-6, \"r:\",  label=\":\")  # dotted line xlim(-2.2,2.2)\nlegend()\nsavefig(\"ch04-pyplot3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#0による除算-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "■ 0による除算",
    "category": "section",
    "text": "筆算では 0による除算の結果は未定義である。Julia では、0による除算は、例外は発生せず、 「数でない数」 Inf, -Inf, NaN のどれかが得られる。Infは、無限大 Infinity に由来する。 NaNは、数でない Not a Number に由来する。1 / 0\n-1 / 0\n0 / 0"
},

{
    "location": "ch04.html#関数が連続とは-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 関数が連続とは",
    "category": "section",
    "text": "関数が連続であるとは、 関数のグラフがつながっている，ちぎれていないことをいう。「関数 f(x) は x=a で連続」とは、lim_x longrightarrow a f(x)が存在して、その値が f(a) に等しいと定義される。不連続とは、連続でないことである。 ただし、不連続な関数でも、連続な部分があることが多く、 それらを、枝 (branch) という。この章では、主に、連続ではない関数のグラフを描く。"
},

{
    "location": "ch04.html#逆数関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 逆数関数を描く",
    "category": "section",
    "text": "逆数関数 y=dfrac1x を描いてみよう。note: Note\n逆数関数 reciprocal function という。逆関数 inverse function と区別されたい。さて、dfrac10の値はInfであるが、 plot関数は「数でない数」をスキップして何も描かない。分母0の除算を特別扱いする必要はない。逆数関数は、x=0で不連続であり、xの正負に対応して二つの枝を持つ。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-3:0.1:3\nplot(xs,1./xs)\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-recipro1-plot.svg\"); nothing # hide(Image: )続けて、水平線、垂直線、y=x, y=-x を追加しよう。plot(xs,xs, color=\"k\", lw=0.5)\nplot(xs,-1*xs, color=\"k\", lw=0.5)\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-recipro2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#練習-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "(プログラミングでなく、数学の話題)数学では「何らかの操作を行った結果が、元と重なること」を、 その操作に対して対称である(symmetric)という。上のグラフを観察すると、逆数関数は、いくつかの操作に対して対称であることがわかる。どのような操作か？"
},

{
    "location": "ch04.html#不連続な有理式を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 不連続な有理式を描く",
    "category": "section",
    "text": "有理関数とは、多項式(分子)を多項式(分母)で割った関数である。以下の有理関数を描こう。y = dfracx^3+8x^3+3x^2-4x-12まず、分母を描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-10:0.1:10\nplot(xs, xs.^3+3xs.^2-4*xs-12)\nylim(-20,20)\nxlim(-4,4)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(-2, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch04-dis1-plot.svg\"); nothing # hide(Image: )分母は x=-3 -2 2で 0 となるから、 上の有理関数は、この三点で不連続となる「可能性」がある。では、上の有理関数を描いてみる。逆数関数の描画と同じように、分母0となる場合を特別扱いする必要はない。clf() #hide\nxs=-10:0.05:10\nplot(xs, (xs.^3+8)./(xs.^3+3xs.^2-4xs-12))\nylim(-10,10)\nxlim(-4,4)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch04-dis2-plot.svg\"); nothing # hide(Image: )実際には、x=-2では不連続ではない。 分子・分母は共通項 (x+2) で割れるからである。もう少し、横軸の範囲を狭めて描く。clf() #hide\nxs=-10:0.05:10\nplot(xs, (xs.^3+8)./(xs.^3+3xs.^2-4xs-12))\nylim(-10,10)\nxlim(-3,3)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(-2, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch04-dis3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#練習-2",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "上の有理関数で、x=-2 に対する値を求めよ。分子・分母は共通項 (x+2) で割った関数のグラフを描き、 上のグラフと重なることを確かめよ。二つの曲線を比較するための描き方は、下の ▶︎ 周期関数 を参考にせよ（本章を通読してから取り組め）。"
},

{
    "location": "ch04.html#正接関数・余接関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 正接関数・余接関数を描く",
    "category": "section",
    "text": "正接 y = tanx =dfracsinxcosx\n余接 y = cotx =dfraccosxsinx"
},

{
    "location": "ch04.html#ラジアン単位-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "ラジアン単位",
    "category": "section",
    "text": "Base.tan - Function\nBase.cot - Function正接 tanxは、pi の奇数倍で不連続である。余接 cotxは、pi の偶数倍で不連続である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2pi:pi/360:2pi\nplot(xs, tan.(xs), label=\"tan\")\nplot(xs, cot.(xs), label=\"cot\")\nylim(-1e1, 1e1)\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch04-tan1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#角度単位-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "角度単位",
    "category": "section",
    "text": "Base.Math.tand - Function\nBase.Math.cotd - Functionusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-360:1:360\nplot(xs, tand.(xs), label=\"tand\")\nplot(xs, cotd.(xs), label=\"cotd\")\nxlabel(\"degree\")\nylim(-1e1, 1e1)\nlegend()\nsavefig(\"ch04-tan2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#周期関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 周期関数",
    "category": "section",
    "text": "f(t+T) = f(t)上式のように、横軸をTだけ平行移動しても、 元の形に重なる関数を周期関数 (periodic function)という。 T は、周期 (period) と呼ばれる。"
},

{
    "location": "ch04.html#周期関数を確認する-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▼▶︎ 周期関数を確認する",
    "category": "section",
    "text": "ラジアン単位の正接関数 tan は、周期 2piである。 平行移動して重なることを、図示してみよう。比較の基準となる曲線は fmt=\"bo\" (blue, circle, 青い円) で描いた。比較される曲線は fmt=\"r.\" (red, point, 赤い点) で描いた。青い円の真ん中に、赤い点が描かれ、同じ位置にプロットされていることが分かる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2pi:pi/18:2pi\nplot(xs, tan.(xs),      \"bo\", label=\"tan\")\nplot(xs, tan.(xs+2*pi), \"r.\", label=\"tan, shifted by 2pi\")\nylim(-1e1, 1e1)\nxlim(-1.2*pi, 1.2*pi)\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch04-tan1t-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#符号関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 符号関数を描く",
    "category": "section",
    "text": "Base.sign - Function関数 sign(x)は、x  0なら1、x=1なら0、x  0なら -1 をそれぞれ返す。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-6.4:0.1:6.4\n-6.4:0.1:6.4\nplot(xs, sign.(xs), \".\")\nsavefig(\"ch04-sign1-plot.svg\"); nothing # hide(Image: )三角関数と関数 sign とを組み合わると、 不連続な周期関数を作ることができる。"
},

{
    "location": "ch04.html#方形波を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶ 方形波を描く",
    "category": "section",
    "text": "二つの一定値を交互にとる周期関数を方形波 (square wave)という。clf() #hide\nplot(xs, cos.(xs), \"r\", label=\"cos(x)\")\nplot(xs, sign.( cos.(xs)), \"b.\", label=\"sign(cos(x))\")\nlegend()\nsavefig(\"ch04-sign2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#練習-3",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "上の例の周期はいくつか？ 周期が 1 になるように、修正してみよ。"
},

{
    "location": "ch04.html#絶対値関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 絶対値関数",
    "category": "section",
    "text": "Base.abs - Function関数 abs(x)は、xの絶対値を返す。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-1:0.1:1\nplot(xs,abs.(xs))\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-abs1-plot.svg\"); nothing # hide(Image: )絶対値関数の符号を変えたり、平行移動すると、色々な山や谷の形を描くことができる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2pi:pi/18:2pi\n# 符号を変える。山の形\nplot(xs, -abs.(xs), label=\"-abs(x)\")\n# 縦軸の平行移動\nplot(xs, pi-abs.(xs), label=\"pi-abs(x)\")\n# さらに、横軸の平行移動\nplot(xs, pi-abs.(xs-pi), label=\"pi-abs(x-pi)\")\nlegend()\nxlabel(\"x\")\naxhline(0,color=\"k\",lw=0.5)\naxvline(0,color=\"k\",lw=0.5)\naxvline(pi,color=\"k\",lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-abs2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#クランプ関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ クランプ関数",
    "category": "section",
    "text": "Base.Math.clamp関数 clamp(x, lo, hi)は、上限と下限で制限する関数である。 すなわち、xの値が hi よりも大きければ hiを、lo よりも大きければ loを返す。 どちらでもなければ、そのままの値を返す。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-5:0.1:5\nplot(xs,clamp.(xs,-1,2))\nxlim(-5,5)\nylim(-5,5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-clamp1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#床関数・天井関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "■ 床関数・天井関数",
    "category": "section",
    "text": "Base.floor\nBase.ceil床関数 floor(x)は、xを超えない最大の整数を返す。天井関数 ceil(x)は、x以上の最小の整数を返す。下のグラフで、整数 x に対する関数の値を、よく観察せよ。これらの関数は、■ 浮動小数点数から整数への変換 で用いられる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-2.4:0.2:2.4\nplot(xs, ceil.(xs), \"o\", label=\"ceil\")\nplot(xs, floor.(xs), \".\", label=\"floor\")\nfor x in -2:2\n  axvline(x, color=\"k\", lw=0.5)\n  axhline(x, color=\"k\", lw=0.5)\nend\nxlim(-3.2,3.2)\nylim(-3.2,3.2)\n\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-floorceil1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#練習-4",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "床関数または天井関数を用いて、 正の数を 1の位で四捨五入するには、どうしたらよいか？1の位での四捨五入とは、その数の小数点第一桁目が 5以上であれば 元の数に 1を加え、5未満であれば何もしない操作である。プログラムを書いて、グラフを描き、確認してみよ。 特に、小数点以下が 0.5 に等しい時に、実行してみよ。note: Note\n数字のおおよその値を表すのに、四捨五入がよく用いられるが、科学技術分野で単純な四捨五入は適当ではない。「数字の丸め方」は、国際規格 ISO 31-0 : 1992 に相当する日本工業規格 JIS Z8401 : 1999 に定められている。JIS規格の全文は、例えば、ここで読める。→ kikakurui Z8401-1999-01"
},

{
    "location": "ch04.html#練習-5",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "ここまで紹介した関数を使って、色々な不連続曲線や周期関数を描いてみよ。 Jupyter notebookの Markdownセルを用いて、説明文も加えよ。"
},

{
    "location": "ch04.html#今回のまとめ-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "plot関数のフォーマットパラメータ\n0による除算\n逆数関数\n不連続な有理関数\n正接・余接関数\n周期関数\n符号関数\n絶対値関数\n床関数・天井関数"
},

{
    "location": "ch05.html#",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "第5回：■ 条件式・■ 条件分岐",
    "category": "page",
    "text": ""
},

{
    "location": "ch05.html#ch05-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "第5回：■ 条件式・■ 条件分岐",
    "category": "section",
    "text": ""
},

{
    "location": "ch05.html#数の大小比較-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 数の大小比較",
    "category": "section",
    "text": "Numeric Comparisons"
},

{
    "location": "ch05.html#値が等しい・異なる-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "値が等しい・異なる",
    "category": "section",
    "text": "Base.:== — Function\nBase.:!= — Function演算子 == は、a == b のように用いて、値が等しいか否か判定する。 演算子 != は、値が異なるか否か判定する。 成立すれば(真ならば) trueが、 成立しなければ(偽ならば) false が結果となる。1 == 1\n1 == 2\n1 != 1\n1 != 2"
},

{
    "location": "ch05.html#より大きい-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "より大きい",
    "category": "section",
    "text": "Base.:>= — Function\nBase.:> - Function演算子 > は、a > b のように用いて、aの値がbの値よりも大きいか否か。 演算子 >= は、a >= b のように用いて、aの値がbの値以上であるか否か判定する。2 > 1\n2 >= 1\n2 >= 2"
},

{
    "location": "ch05.html#より小さい-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "より小さい",
    "category": "section",
    "text": "Base.:< - Function\nBase.:<= - Function演算子 < は、a < b のように用いて、a の値が b の値よりも小さいか否か。 演算子 >= は、a <= b のように用いて、a の値が b の値以下であるか否か判定する。2 < 1\n2 <= 1\n2 <= 2"
},

{
    "location": "ch05.html#論理型-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 論理型",
    "category": "section",
    "text": "比較演算子の結果は true または false のどちらかである。 この二つの値からなるデータの種類を論理型 (logical type)という。"
},

{
    "location": "ch05.html#if文-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ if文",
    "category": "section",
    "text": "Conditional Evaluationif文は、直後に論理式をとる。 論理式の値が true なら、if文の次の文から、end, else, elseif が出現するまでの文を実行する。条件が成り立つときだけに実行される部分をifブロック(block)という。ブロックは、字下げ (indent) で表記される。が、字下げは見やすさのためだけである。x=1\ny=2\nif x < y\n  println(\"x は y より小さい\")\nendifブロックの後ろに、else文が続く場合がある。 論理式の値が false なら、else文の次の文から end が出現するまでの文 (elseブロック)を実行する。x=1\ny=2\nif x < y\n　println(\"x は y より小さい\")\nelse\n　println(\"x は y より小さくない\")\nendelse文の前に、elseif文が続く場合もある。 最初の if文の論理式が false なら、 elseif文の論理式を計算し、それが true なら、elseif 文の次の文から、elseifまたはend が出現するまでの文 (elseifブロック)を実行する。x=1\ny=2\nif x < y\n  println(\"x は y より小さい\")\nelseif x > y\n　println(\"x は y より大きい\")\nelse\n  println(\"x は y と等しい\")\nend"
},

{
    "location": "ch05.html#if式-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ if式",
    "category": "section",
    "text": "if式は、論理式が成立したブロックの最後の値を、式の値とする。x=40\nm=if x >= 100\n  \"x は 100 以上である\"\nelseif x >= 50\n  \"x は 50 以上である\"\nelseif x >= 20\n  \"x は 20 以上である\"\nelse\n  \"x は 20 よりも小さい\"\nend\n\n@show mif式を用いて ▶︎ 絶対値関数 を、以下のように書くこともできる。myabs1(x) = if x >= 0\n  x\n  else\n  -x\n  end\n\n@show myabs1(-1)"
},

{
    "location": "ch05.html#3項演算子-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 3項演算子",
    "category": "section",
    "text": "Operatorsa ? b : c条件 a が真(true)なら b を、偽なら c を値とする「マクロ」である。m= 2 > 1 ? \"yes\" : \"no\"\n@show mif式を用いて ▶︎ 絶対値関数 を、以下のように書くこともできる。myabs2(x) = x >= 0 ? x : -x\n\n@show myabs2(-1)"
},

{
    "location": "ch05.html#論理演算-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 論理演算",
    "category": "section",
    "text": ""
},

{
    "location": "ch05.html#論理否定-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "論理否定",
    "category": "section",
    "text": "Base.:! — Function論理否定 ! a は、aの論理値を反転する。! true\n! false"
},

{
    "location": "ch05.html#論理積-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "論理積",
    "category": "section",
    "text": "&& - Keyword論理積 acdot bは、aとbとの両方が true のときだけ true となる。 aとbとの、少なくとも一つが false なら、false　となる。true && true\ntrue && false\nfalse && false\nfalse && false"
},

{
    "location": "ch05.html#論理和-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "論理和",
    "category": "section",
    "text": "|| - Keyword論理和 論理積 a + bは、aとbとの少なくとも一つがtrue のとき true となる。 aとbとのどちらも false のときは、false　となる。true || true\ntrue || false\nfalse || false\nfalse || false## ■ 短絡評価\n\n[Short-Circuit Evaluation](https://docs.julialang.org/en/v0.6.4/manual/control-flow/#Short-Circuit-Evaluation-1)\n\n論理積 `a && b` を評価する場合、\n`a` が 偽 `false`なら、`b`を評価しない。\n`a` が 真 `false`なら、`b` も評価する。\n\n論理和 `a || b` を評価する場合、\n`a` が 真 `true` なら、`b`を評価しない。\n`a` が 偽 `true` なら、`b` も評価する。"
},

{
    "location": "ch05.html#数の大小比較の連続した記述-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 数の大小比較の連続した記述",
    "category": "section",
    "text": "数の比較演算子は、連続して記述できる。1 < 2 < 3\n1 < 2 && 2 < 3"
},

{
    "location": "ch05.html#総当たりによる不定方程式の解法-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ 総当たりによる不定方程式の解法",
    "category": "section",
    "text": "方程式の数よりも、未知数の数が少ない方程式を不定方程式という。 未知数の性質が決まっていれば、未知数の候補を、方程式に代入して、 成り立つ未知数の組合せを求めることができる (総当たり攻撃, brute-force attack)。問題　「負ではない三つの整数 x y z が、次の二つの等式を同時に満たすという。x + y + z = 24x+2y+4z = 51三つの数 x y z の組合せを全て求めよ。」ここで、 x y z は、0から24までの整数である。 x y z の全ての組み合わせに対して、二つの等式が成り立つ条件を、if文に渡す。for z=0:24\n  for y=0:24\n    for x=0:24\n      if x+y+z==24 && x+2*y+4*z==51\n        @show x,y,z\n      end\n    end\n  end\nend"
},

{
    "location": "ch05.html#格子点による平面領域の塗り分け-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ 格子点による平面領域の塗り分け",
    "category": "section",
    "text": "平面座標 の第一象限 0 le x le 1 0 le y le 1 の範囲に、 格子点を配置しよう。そのうち、x^2+y^2 lt 1 の範囲にある点を赤で、 それ以外を青で色分けして示そう。二重の繰り返し (二重ループ)を用いた。刻み幅は各軸 0.025 に選んだので、 格子点の総数は 40times40=1600 個である。赤色の範囲は、4分円となる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor y=0:0.025:1\n  for x=0:0.025:1\n    c = x*x + y*y < 1 ? \"r\" : \"b\"\n    plot(x,y,\".\", color=c)\n  end\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1-lattice-plot.svg\"); nothing # hide(Image: )今度は、二つの不等式 y  x と y  1-xの両方に囲まれる領域を、 赤で示そう。二重ループを一つの for文にまとめた。for文の右側に書かれたループ変数が内側のループに相当する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor y=0:0.025:1, x=0:0.025:1\n  if y < x && y < 1-x\n    c=\"r\"\n  else\n    c=\"b\"\n  end\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1s-lattice-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch05.html#練習-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "格子点の刻み幅を大きく、または、小さくして、 色分けの様子を観察してみよ。関数plotのfmtパラメータを . から o (circle)に変えてみよ。 さらに、markersizeパラメータを加えて、マーカーの大きさを調整できる。plot(x,y,\"o\", markersize=3)note: Note\n刻み幅を小さくすると、格子点の数は急激に増える (例えば、xy軸方向の刻みの数を2倍にすると、格子点の数は 4倍になる)ので、刻み幅を急激に小さくすべきではない。計算量が増えた場合、数分以内に計算が終わらない可能性もあるが、このような状況を経験するのも重要である。"
},

{
    "location": "ch05.html#練習-2",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "以下の領域を表す条件を、式で表せ。その領域を、格子点を用いて塗り分けてみよ。点 (0,0)と点(1,0)を一辺とし、第一象限に描かれた正三角形\n中心 left(dfrac12dfrac12right) , 半径 dfrac12 の円"
},

{
    "location": "ch05.html#擬似乱数-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 擬似乱数",
    "category": "section",
    "text": "計算機で発生する乱数を、擬似乱数 (pseudorandom numbers)という。note: Note\n本来の意味の「乱数」は、計算する方法がないはずである。 にもかかわらず、ある手順で乱数を発生しているので「擬似乱数」という。Random Numbers\nBase.Random.rand - Function関数 rand()は、0から1未満の擬似乱数を発生する。rand()\nrand()\nrand()Base.Random.srand - Function関数 srand(m)は、擬似乱数の種をリセットする。 種mには、0から2^32-1までの整数を指定する。 同じ種を指定すると、同じ系列で擬似乱数を発生する。srand(1234)\nrand()\nrand()\nrand()"
},

{
    "location": "ch05.html#乱数による平面領域の塗り分け-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ 乱数による平面領域の塗り分け",
    "category": "section",
    "text": "関数 rand() を2回用いて、座標点 (x,y) を発生しよう。 点の数を増やすと、これらの点は、平面の第一象限 0 le x lt 1 0 le y lt 0 の範囲を埋め尽くすはずである。そのうち、x^2+y^2 lt 1 の範囲にある点を赤で、 それ以外を青で色分けして示そう。点の個数は 2^10=1024 である。 格子点で図示した場合 ( ▶︎ 格子点による平面領域の塗り分け ) に比べて 点の数は少ないが、特徴を捉えている。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nn=2^10\nfor i=1:n\n  x=rand()\n  y=rand()\n  c = x*x + y*y < 1 ? \"r\" : \"b\"\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1-random-plot.svg\"); nothing # hide(Image: )今度は、 二つの不等式 y  x と y  1-x の両方に囲まれる領域だけ、赤で示そう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nn=2^10\nfor i=1:n\n  x=rand()\n  y=rand()\n  if y < x && y < 1-x\n    c=\"r\"\n  else\n    c=\"b\"\n  end\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1s-random-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch05.html#モンテカルロ法による平面図形の面積の推定-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ モンテカルロ法による平面図形の面積の推定",
    "category": "section",
    "text": "以上の例で、ランダムに落とした点の総数のうち、 図形の中に入った数を数えよう。 両者の割合から、図形の面積を推定できる。 これを、モンテカルロ (Monte Carlo)法による面積の算出法という。note: Note\nモンテカルロ (Monte Carlo)は、モナコ公国(Monaco)の地名の一つであり、公営カジノで有名である。モンテカルロ法 (Monte Carlo Method)は、擬似乱数を用いて、数値計算やシミュレーションを行う手法の総称である。(面積を推定する手法以外の「モンテカルロ法」もある)まず、4分円の面積を推定しよう。n=2^10\ns=0\nfor i=1:n\n  x=rand()\n  y=rand()\n  if x*x + y*y < 1\n    s += 1\n  end\nend\n@show s/n; #hide\n@show pi/4; #hide\n@show (s/n - pi/4)/(pi/4) #hide4分円の面積は dfracpi4である。 点数 1024個で、相対誤差 2% 程度の、面積推定値が得られた。今度は、点の総数に対して、面積の推定値を描いてみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor m in 1:16\n  n=2^m\n  s=0\n  for i=1:n\n    x=rand()\n    y=rand()\n    if x*x + y*y < 1\n      s += 1\n    end\n  end\n  plot(n, s/n, \".\")\n  @show n, s/n\nend\nylim(0.9*pi/4, 1.1*pi/4)\nxlabel(\"n\")\nxscale(\"log\")\naxhline(pi/4, color=\"k\", lw=0.5)\nsavefig(\"ch05-qc1-plot.svg\"); nothing # hide(Image: )正しい面積との相対誤差を、点の総数に対して描いてみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor m in 1:16\n  n=2^m\n  s=0\n  for i=1:n\n    x=rand()\n    y=rand()\n    if x*x + y*y < 1\n      s += 1\n    end\n  end\n  plot(n, abs(s/n-pi/4)/(pi/4), \".\")\nend\nxlabel(\"n\")\nylabel(\"relative errors\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch05-qc2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch05.html#練習-3",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "モンテカルロ法を用いて、以下の領域の面積を推定せよ。(これらの領域の、格子点を用いた塗り分けは、以前の例題・練習として行った)。余裕があれば、点数に対する相対誤差の変化も描いてみよ。二つの不等式 y  x と y  1-x の両方に囲まれる領域\n点 (0,0)と点(1,0)を一辺とし、第一象限に描かれた正三角形\n中心 left(dfrac12dfrac12right) ,　半径 dfrac12 の円"
},

{
    "location": "ch05.html#関数の定義-(代入文形式)-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 関数の定義 (代入文形式)",
    "category": "section",
    "text": "関数は、いくつかの値を受け取って、何らかの操作をして返す、まとまった処理である。1行によるユーザ定義関数の例を、以下に示す。f(x)=x*2-1(の前が、ユーザ定義関数の名前である。 関数名の規則は、■ 変数名の規則 と同じである。括弧 () の中に、変数名の並びを記述する。 この変数名を、仮引数(「かり・ひきすう」 parameter)という。=より右が、関数の定義である。 具体的な値（実引数「じつ・ひきすう」 argument)を入れて、 関数を評価する (evaluate)。 関数の定義の中に出現した仮引数は、実引数の値に置き換えられる。f(0)\nf(1)実引数にベクトルなどを与えて、各要素に対して評価する場合には、 関数名の直後にピリオド .を置く。f.([1,2,3])\nf.(0:5)仮引数は、2個以上でもよい。g(x,y)=x*y\ng(1,1)\ng(\"a \",\" b\")数同士の * 演算は、数の乗算である。 文字列同士の *演算は、文字列の連結である。引数の型にあわせて、正しい演算が得られていることに着目せよ。## ■ 関数の定義\n\n- 実引数（argument）\n- 仮引数（parameter）## ■ タプル\nタプル (tuple)"
},

{
    "location": "ch05.html#「はさみうち」法による、方程式の求解-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ 「はさみうち」法による、方程式の求解",
    "category": "section",
    "text": "条件判断を、繰り返し行うことで、求める答えに近づいて行く例を、 もう一つ紹介する。▶︎ 不連続な有理式を描く の例として挙げた分母の式 f(x)=x^3+3x^2-4x-12 について、方程式 f(x)=0 の解の近似値を求めてみる。まず、y=f(x)のグラフを描こう。f(x)=x^3+3x^2-4*x-12\nxs=-3.5:0.05:3\n#\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(xs, f.(xs))\naxhline(0, color=\"k\", lw=0.5)\nsavefig(\"ch05-secant1-plot.svg\"); nothing # hide(Image: )さて、 連続な関数 f(x) が、 区間 a lt x lt b で単調（単調増加または単調減少）であるとする。 ここで、f(a) と f(b) との符号が 異なるとき f(a)cdot f(b)lt 0 、 方程式 f(x)=0 の解は a lt x lt b の区間にある。ここで、a と b との中点 c=dfraca+b2 をとり、f(a) と f(c) が同じ符号であれば 左端aをcに更新する。 逆に、f(b) と f(c) が同じ符号であれば 右端bをcに更新する。この手順を繰り返すことで、 方程式 f(x)=0 の解が存在する区間 a lt x lt b を狭めていくことができる。 この手法を「はさみうち」法という。英語では、squeeze theorem, pinching theorem, sandwich theorem などと呼ばれる。上の関数 f(x) で a=-32  x  b=-26 の区間を選ぼう。この区間で f(x) が単調であることを、まず確かめよう。# f(x)=x^3+3*x^2-4*x-12\nxs=-3.2:0.01:-2.6\nclf() #hide\nplot(xs, f.(xs))\naxhline(0, color=\"k\", lw=0.5)\nsavefig(\"ch05-secant1b-plot.svg\"); nothing # hide(Image: )この区間で、「はさみうち」を数回繰り返してみる。# f(x)=x^3+3x^2-4*x-12\na=-3.2; b=-2.6\n@show a,b\n@show f(a),f(b)\nfor i=1:10\n  c=(a+b)/2\n  @show i, a, b, c, f(c)\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\nendこの範囲の解は x=-3である。@show f(-3)区間が狭まる様子を、グラフに描いてみよう。# f(x)=x^3+3x^2-4*x-12\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\na=-3.2; b=-2.6\nfor i=1:15\n  plot(b,i, \"ro\")\n  plot(a,i, \"b.\")\n\n  c=(a+b)/2\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\nend\nxlabel(\"x\")\nylabel(\"i\")\nsavefig(\"ch05-secant2-plot.svg\"); nothing # hide(Image: )今度は、区間の幅 b-aをプロットしよう。 区間の幅が、単調に減少する様子が観察された。# f(x)=x^3+3x^2-4*x-12\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\na=-3.2; b=-2.65\nfor i=1:30\n  plot(i, b-a, \"r.\")\n\n  c=(a+b)/2\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\nend\nyscale(\"log\")\nylabel(\"b-a\")\nxlabel(\"i\")\n\nsavefig(\"ch05-secant3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch05.html#練習-4",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "同じ関数で、異なる区間で、はさみうち法を試してみよ。\n別の関数に対して、単調な区間を選び、はさみうち法を試してみよ。"
},

{
    "location": "ch05.html#NLsolveパッケージの紹介-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▼◀︎ NLsolveパッケージの紹介",
    "category": "section",
    "text": "NLsolveパッケージは、連立非線形方程式を解くためのパッケージのひとつである。NLsolveパッケージを用いて、上の例題を解く例を示す。ただし、まだ説明していない文法(ベクトルの添字、関数の副作用)を用いているので、学習が進んでから、再度試してみよ。# Pkg.add(\"NLsolve\") # パッケージの導入。冒頭の`#`を外して１回だけ実行すればよい。\n\nusing NLsolve\n\n# 解くべき関数を定義する\nfunction g!(r, x)\n    r[1] =x[1]^3+3*x[1]^2-4*x[1]-12\nend\n\n# nlsolve関数を呼び出す\nnlsolve( g!, [-3.5], autodiff = :forward)"
},

{
    "location": "ch05.html#今回のまとめ-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "数の大小比較\nif文\nif式\n3項演算子\n論理演算\n格子点による平面領域の塗り分け\n擬似乱数\n乱数による平面領域の塗り分け\nモンテカルロ法による平面図形の面積の推定\nユーザ定義関数 (代入文の形式)\n「はさみうち」法による、方程式の求解"
},

{
    "location": "ch06.html#",
    "page": "第6回：■ 整数",
    "title": "第6回：■ 整数",
    "category": "page",
    "text": ""
},

{
    "location": "ch06.html#ch06-1",
    "page": "第6回：■ 整数",
    "title": "第6回：■ 整数",
    "category": "section",
    "text": ""
},

{
    "location": "ch06.html#型-1",
    "page": "第6回：■ 整数",
    "title": "■ 型",
    "category": "section",
    "text": "型(type)：データの種類のこと整数型 Int64\n浮動小数点型 Float64typeof(1)\ntypeof(1.0)論理型 Booltypeof(true)\ntypeof(false)Primitive Types 基本型\nComposite Types 複合型, 構成型"
},

{
    "location": "ch06.html#整数-1",
    "page": "第6回：■ 整数",
    "title": "■ 整数",
    "category": "section",
    "text": "Integers既定の整数型は、Int64 であり、 64桁 (64bit, binary digit)の2進数である。負の数 -n を 2^64-n で表す「2の補数」方式を用いて、 正負の数を表す「符号付整数」である。Int64 で表される最大の数は 2^63-1 である。 また、最小の数（絶対値が最大な負の数)は -2^63 である。 これらの値は、 関数 typemax(Int64),typemin(Int64) で、それぞれ求められる。2^63-1\ntypemax(Int64)\ntypemin(Int64)note: Note\n2の補数を求める方法が知られていれば、 減算は、引く数の「2の補数」を求め、加算すればよい。 実は、2の補数は簡単に求められる。2の補数では、2進数の最上位の桁が、符号に相当する。 すなわち、負の数では、 最上位の桁 (Most-Significant Bit, MSB)は 1、 正の数または0では、MSBは 0 になる。"
},

{
    "location": "ch06.html#整数同士の加減乗算-1",
    "page": "第6回：■ 整数",
    "title": "■ 整数同士の加減乗算",
    "category": "section",
    "text": "整数同士の加減算は、2の補数として行われる。 typemin(Int64)から typemin(Int64) までの範囲を超えても、 例外は発生しない。Overflow behaviortypemax(Int64)+1\ntypemax(Int64)+2\ntypemin(Int64)-1\ntypemin(Int64)-2\ntypemax(Int64)+typemax(Int64)\ntypemax(Int64)*2\ntypemax(Int64)*4"
},

{
    "location": "ch06.html#整数の2進数による表現。-1",
    "page": "第6回：■ 整数",
    "title": "▼▶︎ 整数の2進数による表現。",
    "category": "section",
    "text": "Base.bits — Function関数 bits(x) は、数 x の2進数表現を文字列として返す。bits(0)\nbits(1)\nbits(2)\nbits(-1)\nbits(-2)\nbits(typemax(Int64))\nbits(typemin(Int64))上の例で、以下の理由を説明できただろうか？typemax(Int64)+1 == typemin(Int64)typemax(Int64)+typemax(Int64) == -2typemax(Int64)*2 == -22進数に 2 を乗じることは、左に一つ分ずらすこと(左シフト 1bit)と同じである。"
},

{
    "location": "ch06.html#整数同士の除算-1",
    "page": "第6回：■ 整数",
    "title": "■ 整数同士の除算",
    "category": "section",
    "text": "整数同士の割り算（除算）の結果(商 quotient)は、小数(浮動小数点数)になる。1 / 2余り (剰余)を求めたい場合は、■ 残余 rem と整商 div を参照せよ。"
},

{
    "location": "ch06.html#整数と浮動小数点数との四則演算-1",
    "page": "第6回：■ 整数",
    "title": "■ 整数と浮動小数点数との四則演算",
    "category": "section",
    "text": "整数と小数を四則演算すると、小数になる。1 + 2\n1 + 2.0\n1 * 2\n1 * 2.0"
},

{
    "location": "ch06.html#浮動小数点数から整数への変換-1",
    "page": "第6回：■ 整数",
    "title": "■ 浮動小数点数から整数への変換",
    "category": "section",
    "text": "浮動小数点数を整数に変換するには、Int64(x)を用いる。 ただし、xが小数部を含むと例外がでる（エラーとなる）ので、 小数部を 0に変換する必要がある。この際、床関数が用いられる。　参考→ ■ 床関数・天井関数Int64(1.0)\nInt64(1.1)  # エラー\nInt64(floor(1.1))"
},

{
    "location": "ch06.html#残余-rem-と整商-div-1",
    "page": "第6回：■ 整数",
    "title": "■ 残余 rem と整商 div",
    "category": "section",
    "text": "正の整数 x  0 を、正の整数 d  0 で割った結果、 整数の商 q と余り r が得られたとき、x=qd+rが成り立つ。割られる数 x を被除数 (divdend)、割る数 d を除数 (divisor)という。整数の商 q を、整商(integral quotient)、 余り r を残余 (remainder)という。 残余は、d を超えない、すなわち、0 le r lt d である。Base.rem - Function\nBase.div - Function関数 rem(x,d) は、xをdで割ったときの残余を返す。 関数 rem の代わりに、% 演算子を用いて x % d と書いてもよい。rem(15,4)\n15 % 4関数 div(x,d) は、xをdで割ったときの整商を返す。div(15,4)整数 0から 7までを、3 で割った整商と残余 (divとremの計算結果) をプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=0:7\nd=3\nplot(xs,rem.(xs,d), \"ro\", label=\"rem(x,\"*string(d)*\")\")\nplot(xs,div.(xs,d), \"b.\", label=\"div(x,\"*string(d)*\")\")\n\nxlim(-0.2,6.2)\nylim(-0.2,3.2)\nxlabel(\"x\")\nlegend()\n\nfor x=0:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=0:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch06-divrem1-int-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#練習：硬貨への分割-1",
    "page": "第6回：■ 整数",
    "title": "◀︎ 練習：硬貨への分割",
    "category": "section",
    "text": "日本では、小額の取引に、500円\n100円\n50円\n10円\n5円\n1円の6種類の硬貨がよく用いられる。金額が与えられたときに、6種類の硬貨が各々何枚必要か計算せよ。 ただし、高額の硬貨を優先して用いるものとする。第一段階として、100円、10円、1円に分けるプログラムを書いて実行せよ。\n第二段階として、上の 6種類の硬貨に分けるプログラムを書いて実行せよ。同様な処理は、繰り返し (for文)を用いてみよ。\n第三段階として、1円刻みで551円までの金額に対して、6種類の硬貨の枚数を描くプログラムを書いて実行せよ。"
},

{
    "location": "ch06.html#ユークリッドの互除法-1",
    "page": "第6回：■ 整数",
    "title": "▶︎ ユークリッドの互除法",
    "category": "section",
    "text": "2 つの自然数 a, b (a ge b) について、 a の b による残差を r とすると、 a と b との最大公約数 (greatest common divisor, gcd)は b と r との最大公約数に等しいという性質が成り立つ。 この性質を利用して、b を r で割った残差、 除数 r をその剰余で割った残差、 と残差を求める計算を逐次繰り返すと、 残差が 0 になった時の除数が a と b との最大公約数となる。a=1071\nb=1029\n@show a,b\nwhile b != 0\n  t = a\n  b = rem(a, b)\n  a = t\n  @show a,b\nend\nprintln( \"gcd=\"*string(a))3355と2379の最大公約数を求めてみよう。a=3355\nb=2379\n@show a,b\nwhile b != 0\n  t = a\n  b = rem(a, b)\n  a = t\n  @show a,b\nend\nprintln( \"gcd=\"*string(a))"
},

{
    "location": "ch06.html#一般の残余-rem-と整商-div-1",
    "page": "第6回：■ 整数",
    "title": "■ 一般の残余 rem と整商 div",
    "category": "section",
    "text": "正の整数 xを 正の整数 dで割ったときの 「商」 q と「余り」 r の関係x=qd+rは、 被除数 x や除数 d が、小数や負の数の場合に拡張できる。 ここで、「商」q は整数であり、 「余り」r の絶対値は、除数 d の絶対値を超えないものとする。0 le leftvertrrightvert lt leftvertdrightvertさて、被除数 x や除数 d が負の数の場合、 「商」q と「余り」 r の取るべき値について、複数の考え方がある。残差 remは、被除数 x と同じ符号の「余り」を返す。 すなわち、被除数 x が負なら、残差r　は -d lt r le 0の範囲になる。 対応する「商」は 整商 div で求められる。以下では、-6 から6 までの数(被除数)を、3 (正の除数)で割ったときの 残余と整商をプロットする。 被除数が負のとき、3 lt r le 0 となることを観察せよ。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-6.8:0.2:6.8\nd=3\nplot(xs,rem.(xs,d), \"ro\", label=\"rem(x,\"*string(d)*\")\")\nplot(xs,div.(xs,d), \"b.\", label=\"div(x,\"*string(d)*\")\")\n\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-divrem2-plot.svg\"); nothing # hide(Image: )今度は、被除数の範囲は変えずに、-3 (負の除数)で割ったときの 残余と整商をプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-6.8:0.2:6.8\nd=-3\nplot(xs,rem.(xs,d), \"ro\", label=\"rem(x,\"*string(d)*\")\")\nplot(xs,div.(xs,d), \"b.\", label=\"div(x,\"*string(d)*\")\")\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\n\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-divrem3-plot.svg\"); nothing # hide(Image: )上の二つのグラフを比較すると、 残差 rem(x,3) と rem(x,-3)　が一致することが観察される。また、 整商 div(x,3) と div(x,-3)　は、互いに符号が逆である。"
},

{
    "location": "ch06.html#練習：切り捨て-1",
    "page": "第6回：■ 整数",
    "title": "◀︎ 練習：切り捨て",
    "category": "section",
    "text": "正の数 x を10の位で\n100の位で\n1000の位で\n0.1の位で\n一般に10^nの位で数を切り捨てるには、どうすればよいか？プログラムを書いて、実行してみよ。"
},

{
    "location": "ch06.html#練習：四捨五入-1",
    "page": "第6回：■ 整数",
    "title": "◀︎ 練習：四捨五入",
    "category": "section",
    "text": "正の数 x を10の位で\n100の位で\n1000の位で\n0.1の位で\n一般に10^nの位で数を四捨五入するには、どうしたらよいか？プログラムを書いて、実行してみよ。"
},

{
    "location": "ch06.html#剰余-mod-と、商の床-fld-1",
    "page": "第6回：■ 整数",
    "title": "■ 剰余 mod と、商の床 fld",
    "category": "section",
    "text": "Base.mod - Function\nBase.fld - Function「商」 q と「余り」 r の一般の関係begingather\nx=qd+r \n0 le leftvertrrightvert ltleftvertdrightvert\nendgatherについて、別の考え方を示す。剰余 (modulo)は、 除数 dと同じ符号の「余り」r である。 剰余関数 mod(x,d) は、この「余り」rを返す。 対応する「商」qは、関数 fld で求められる。被除数が非負： x ge 0、かつ、 除数が正: d gt 0　なら、 残差 rem と剰余 mod は一致する。被除数が負： x  0 の場合も、剰余は非負である。note: Note\n被除数と除数の両方とも正なら、残差 rem と剰余 mod は一致する。この場合、少し計算コストが小さい残差 rem が好まれる。では、-6 から 6 までの数(被除数)を、3 (正の除数)で割ったときの剰余と「商」をプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-6.8:0.2:6.8\nd=3\nplot(xs,mod.(xs,d), \"ro\", label=\"mod(x,\"*string(d)*\")\")\nplot(xs,fld.(xs,d), \"b.\", label=\"fld(x,\"*string(d)*\")\")\n\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-fldmod1-plot.svg\"); nothing # hide(Image: )実は、関数 fld(x,d) は、floor(x/d) と同じ値であり、「商の床」 floored division ともいう。 すなわち、dfracxd 以下の最大の整数である。 参照： ■ 床関数・天井関数上の例で、「商の床」をプロットしよう。 関数 fldと同じ結果が得られることが観測できる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-6.8:0.2:6.8\nd=3\nqs=floor.(xs/d)\nrs=xs-qs*d\nplot(xs, rs, \"ro\", label=\"remainder divided by \"*string(d))\nplot(xs, qs, \"b.\",  label=\"quotient divided by \"*string(d))\n\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor y=-3:3\n  axvline(y, color=\"k\", lw=0.5)\nend\n\nfor x=-7:7\n  axhline(x, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-fldmod2-plot.svg\"); nothing # hide(Image: )今度は、被除数の範囲は変えずに、-3 (負の除数)で割ったときの剰余と「商」をプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-6.8:0.2:6.8\nd=-3\nplot(xs,mod.(xs,d), \"ro\", label=\"mod(x,\"*string(d)*\")\")\nplot(xs,fld.(xs,d), \"b.\", label=\"fld(x,\"*string(d)*\")\")\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-fldmod3-plot.svg\"); nothing # hide(Image: )負の数 -3 で割ったとき、剰余 r の範囲は -3 lt r le 0 であることが観察できる。"
},

{
    "location": "ch06.html#練習：「商の床」-1",
    "page": "第6回：■ 整数",
    "title": "◀ 練習：「商の床」",
    "category": "section",
    "text": "上の例で、「商の床」floor( x/-3 )をプロットせよ、 関数 fld(x,-3) と結果が等しいことを確認せよ。"
},

{
    "location": "ch06.html#2piで割った剰余-1",
    "page": "第6回：■ 整数",
    "title": "▶ 2piで割った剰余",
    "category": "section",
    "text": "Base.Math.mod2pi — Function関数 mod2pi(x) は、mod(x,2*pi) と同じである。 すなわち、x を 2pi で割った剰余を返す。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nis=-24:24\nxs=is/3\nplot(xs,mod2pi.(xs), \".\")\nxlabel(\"x\")\nylabel(\"mod2pi(x)\")\naxhline(0, color=\"k\", lw=0.5)\naxhline(2*pi, color=\"k\",lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch06-mod2pi-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#整数-0による除算-1",
    "page": "第6回：■ 整数",
    "title": "■ 整数 0による除算",
    "category": "section",
    "text": "除数が0であっても、「余り」を計算しない除算では、例外は発生しない。→ ■ 0による除算しかし、「余り」を計算する rem, mod, div, mod などにおいて、除数が 0 であると例外(exception)を発生する。 例外が発生すると、プログラムの実行は、そこで中断する。除算例外 Division errosdiv(3,0)\nrem(3,0)note: Note\n例外が発生した場合、それを救済する手続きを書いて、プログラムを続行させることもできる。だが、この文書の範囲を超えるので、説明しない。 → Exception Handling"
},

{
    "location": "ch06.html#床関数・天井関数の型を整数型にする-1",
    "page": "第6回：■ 整数",
    "title": "▶ 床関数・天井関数の型を整数型にする",
    "category": "section",
    "text": "■ 床関数・天井関数 floor(x) および ceil の結果の型は、 引数(ひきすう) x の型に一致する。floor(2) # => 整数\nfloor(0.2) # => 小数（浮動小数点数)\n\nceil(2) # => 整数\nceil(0.2) # => 小数（浮動小数点数)結果の型を整数にするには、引数xの前に、型の名前 Int64をつける。floor(Int64, 2)\nfloor(Int64, 0.2)\n\nceil(Int64, 2)\nceil(Int64, 0.2)"
},

{
    "location": "ch06.html#今回のまとめ-1",
    "page": "第6回：■ 整数",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "型\n整数\n整数同士の加減乗算\n整数同士の除算\n整数と浮動小数点数との四則演算\n浮動小数点数から整数への変換\n残余 rem と整商 div\nユークリッドの互除法\n切り捨て、四捨五入 (練習)\n剰余 mod と商の床 fld\n整数 0 による除算：例外"
},

{
    "location": "ch07.html#",
    "page": "第7回：■ 浮動小数点数",
    "title": "第7回：■ 浮動小数点数",
    "category": "page",
    "text": ""
},

{
    "location": "ch07.html#ch07-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "第7回：■ 浮動小数点数",
    "category": "section",
    "text": ""
},

{
    "location": "ch07.html#浮動小数点数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 浮動小数点数",
    "category": "section",
    "text": ""
},

{
    "location": "ch07.html#正規化数、副正規化数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▼ 正規化数、副正規化数",
    "category": "section",
    "text": "浮動小数とは、012 の代わりに 12 times 10^-1 のように表示することである。10進数の浮動小数はpmleft(d_0d_1d_2cdots right)_10times 10^eのように表される。timesの前までのleft(d_0d_1d_2cdots right)_10 の部分は仮数部と呼ばれる。添字の10は10進数を意味し、d_0 d_1 cdots   01ldots9 までの数字である。times の後ろの 10^e は指数部と呼ばれる。2進数の浮動小数はpmleft(b_0b_1b_2cdots right)_2times 2^eのように表される。 ここで、timesの前までの left(b_0b_1b_2cdots right)_2 の部分は仮数部と呼ばれる。添字の2は2進数を意味し、b_0 b_1 cdots   0 または 1 の数字である。times の後ろの 2^e は指数部と呼ばれる。bit (binary digit)とは、2進数の一桁のことである。本文で用いる浮動小数点数は Float64 型である。typeof(1.0)note: Note\n以下で、浮動小数点数の2進数による表現を詳しく説明するが、 丸暗記する内容ではない。しかし、計算機内部の小数が 「有限桁」で行われることは、計算機による数値計算では常に意識すべきである。Float64 型は、「IEEE754標準倍精度浮動小数点数」に基づき、 符号部 1 bit、 指数部 11 bit 仮数部 53 bit から構成される。 ただし、以下のように先頭の 1 bitを固定し、 仮数部の 52 bit のみをデータとして採用するため、 2進数の並びは 1+11+52 = 64 bit である。Float64は、正規化数、副正規化数、数でない数の３種類からなりたっている。正規化数は、b_0 = 1として、 pmleft(1b_1b_2cdots b_52right)_2times 2^e のように表すものである。 ただし、指数は 1022 le e le 1023 の範囲である。 仮数 left(1b_1b_2cdots b_52right)_2 は 1以上で2を超えない範囲の小数となる。正規化数で表すことができない、絶対値が小さい浮動小数は副正規化数で表わされる。副正規化数は、b_0 = 0, e=1023 として、 pmleft(0b_1b_2cdots b_52right)_2times 2^e のように表すものである。 仮数部 left(1b_1b_2cdots b_52right)_2 は 0以上で1を超えない範囲の小数となる。「数でない数」は、■ 0による除算で、既に説明した。 Inf, -Inf, NaN の３つである。Float64で表すことができる、絶対値が最も大きい数は、 正規化数の 2^10241798times10^308 である。 絶対値が最も小さい数は、 副正規化数の 2^10222225times10^308 である。これらは、関数 realmax, realminでそれぞれ得られる。realmax(Float64)\nrealmin(Float64)"
},

{
    "location": "ch07.html#丸め-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "丸め",
    "category": "section",
    "text": "小数 02 は 02 = frac15 = frac1101_2 となるが、1 を 101_2 で割り切ることはできない。02 を2進数で表すと000110011001100cdots_2のようになる。すなわち、1100 の並びが無限に続く循環小数となる。また、小数 01 は 01 = frac15times 2 = frac1101_2 times 2^-1 であるから、$0.1$ を2進数で表すと（上を1桁ずらして）0000110011001100cdots_2のようになる。これも、1100 の並びが無限に続く循環小数となる。 「有限桁の小数」で表すことができない「循環小数」を、 Float64型で表現するとき、 その仮数の末尾に近いの桁を修正する操作を行う場合がある。 この操作を「丸める」という。「丸め」られた浮動小数の計算は、筆算とは違う結果となる場合がある。 例えば、0.1+0.2\n0.1+0.2 == 0.3筆算の結果は 03であるが、 計算結果は 0.30000000000000004 と異なってしまう。別の例として、01を 10回足した結果はs=0\nfor i in 1:10\n  s += 0.1\nend\n@show s\ns == 1.00.9999999999999999 となり、10 にはならない。このような、「丸め」を原因とする、 正しい値からの「ずれ」を「丸め誤差」と呼んでいる。"
},

{
    "location": "ch07.html#小数を2進数へ変換する-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 小数を2進数へ変換する",
    "category": "section",
    "text": "x=f_12^-1 + f_22^-2 + cdots(正の)小数を2進数に変換するには、 小数を2倍しその整数部分を取り出すことを、繰り返し行えばよい。小数 0.2を、2進数で表示すると循環小数になる。 1100 のパターンが繰り返し現れる。x=0.2\nfor i=1:50\n    q=floor(x/2)\n    print(Int64(q))\n    x -= q*2\n    x *= 2\nend00000110011001100110011001100110011001100110011001\n\n1100 循環小数上の結果の最初の桁は、2^1 の桁に相当する。 すなわち、小数点は、２つ目の数字の後ろに位置する。"
},

{
    "location": "ch07.html#練習：有限小数・循環小数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "◀︎ 練習：有限小数・循環小数",
    "category": "section",
    "text": "0.5以下の正の小数をいくつかを選び、 これらを2進数に直してみよ。有限小数か循環小数かを判定せよ。例: 0.1, 0.2, 0.25, 0.3, 0.5さらに、5つ程度の例を加えよ。"
},

{
    "location": "ch07.html#加減算における桁落ちと情報落ち-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 加減算における桁落ちと情報落ち",
    "category": "section",
    "text": "加算と減算は、小数点の位置を合わせて計算されるが、 桁数が有限であることから、正しい得られない場合がある。 その原因のうち「桁落ち」と「情報落ち」の二つの現象が知られている。"
},

{
    "location": "ch07.html#桁落ち-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 桁落ち",
    "category": "section",
    "text": "「桁落ち」は、互いに非常に近い二つの数 x y に対して、 減算 x-yを行うと、結果の有効桁数が大きく減少する現象である。例えば、有効桁数が4桁の二つの数の引き算の例を見よう。2.345 - 1.233\n1.234 - 1.232前者の結果は 4桁の有効桁数を保っているのに対して、 後者の結果は 1桁の有効桁数になってしまう。（末尾の 18 は丸め誤差である)。式を変形して、 互いに近い数同士を引くことを回避できる場合がある。 下の例を参考にせよ。 → ▶︎ 2次方程式"
},

{
    "location": "ch07.html#情報落ち-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 情報落ち",
    "category": "section",
    "text": "「情報落ち」は、絶対値が大きく異なる数を加減算すると、小さい桁の精度が失われる現象である。例えば、3つの数 x = 14times 10^-17, y = 24times 10^-16, z = 1 を、 この順番で加えた結果と、逆の順番で加えた結果を比較しよう。x=14e-17\ny=24e-16\nz=1\nxyz=(x+y)+z\nzyx=(z+y)+x筆算による正しい値は 1.00000000000000253 であるが、 後者の和よりも前者の和が、正しい値に近い。後者の和が誤差を大きく含んだのは、和 z+y の段階で、有効桁数をほぼ使い切ったからである。zy=z+y\nnextfloat(zy) # z+y の「隣りの」正しく表される数一般に、大きさの異なる数同士を加減算する場合には、絶対値が小さいものから計算を進めたほうがよい。ここで見たように、有限桁数の浮動小数点数の加減算は「結合則」を満たさない。(x+y)+z neq x+(y+x)"
},

{
    "location": "ch07.html#等差数列-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 等差数列",
    "category": "section",
    "text": "Base.linspace — Function関数 linspace(a,b,n) は、等差数列を作る別の方法である。 初項 a から始めて b で終わる等差数列 (要素はn個) を作る。 結果は ■ Range型 になる。linspace(0,10,11)最後の引数 n は省略できる。省略した場合は n=50 (既定値)とみなされる。既定値を示すために linspace(a,b,n=50) のようにマニュアルでは記載される。linspace(1,50)note: Note\nlinspace = linearly spaced vector"
},

{
    "location": "ch07.html#等比級数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 等比級数",
    "category": "section",
    "text": "Base.logspace — Function関数 logspace(a,b,n=50) は、等比級数を作る方法の一つである。 初項 10^a から始めて 10^b で終わる 等比級数 (要素はn個)となる ■ ベクトル を作る。以下は、初項 10^0=1 から始めて、10^3=1000 で終わる等比級数 (要素は 4 個 ) を作る。すなわち、1 10 100 1000 が作られる。logspace(0,3,4)以下は、初項 10^-3 から始めて、10^0=1 で終わる等比級数 (要素は 4 個 ) を作る。すなわち、0001 001 01 10 が作られる。logspace(-3,0,4)note: Note\nlogspace = logarithmically spaced numbers"
},

{
    "location": "ch07.html#2次方程式-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 2次方程式",
    "category": "section",
    "text": "2次方程式 x^2-bx+c=0 の解は、解の公式から、判別式 d=b^2-4cを用いて、 beginalignx_1=fracb+sqrtd2=fracb+sqrtb^2-4c2\nx_2=fracb-sqrtd2=fracb-sqrtb^2-4c2endalign であるが、b と sqrtdが同程度のとき x_2 は「桁落ち」しやすい。そこで、(b+sqrtb^2-4c) を分母分子に掛けてx_21 = frac2cb+sqrtb^2-4c=fraccx_1のように変形してから計算する。最後の項は、解と係数の関係 x_1x_2=c である。beginalign*\n(x-x_1)(x-x_2)=x^2-(x_1+x_2)x+x_1x_2 = x^2-bx+c\nb=x_1+x_2 \nc=x_1x_2\nendalign*"
},

{
    "location": "ch07.html#2次方程式：計算の例-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 2次方程式：計算の例",
    "category": "section",
    "text": "実例で見てみよう。小さい正の数 hを用いて、alpha = 100+h と beta = 1+h を解とする2次方程式を作る。 解と係数の関係から、上の方程式において b = alpha + beta, c=alphabeta と定めればよい。h=logspace(-12,-1);\nalpha=100+h\nbeta=1+h;\nc=alpha .* beta;\nb=alpha .+ beta;解の公式から、「大きい方の解」 x1を計算する。 x2sは解の公式から求めた「小さい方の解」、である x2vは解と係数の関係から求めた「小さい方の解」d=b.*b-4c;\nx1=(b+sqrt.(d))/2;\nx2s=(b-sqrt.(d))/2;\nx2v=c./x1;「大きい方の解」について、正しい解との差をプロットしてみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(h, x1-alpha, \".\")\nxlabel(\"h\")\nylabel(\"x1-alpha\")\nxscale(\"log\")\nsavefig(\"ch07-quad1-plot.svg\"); nothing # hide(Image: )「小さい方の解」について、正しい解との差をプロットしてみる。using PyPlot #hide\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(h, x2s-beta,\".\",label=\"x2s\")\nplot(h, x2v-beta, \"o\",label=\"x2v\")\nxlabel(\"h\")\nylabel(\"x2-beta\")\nxscale(\"log\")\nlegend()\nsavefig(\"ch07-quad2-plot.svg\"); nothing # hide(Image: )「小さい方の解」について、正しい解との差の絶対値(残差)をプロットしてみる。using PyPlot #hide\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(h, abs.(x2s-beta),\".\",label=\"x2s\")\nplot(h, abs.(x2v-beta), \"o\",label=\"x2v\")\nxlabel(\"h\")\nylabel(\"abs(x2-beta)\")\nxscale(\"log\")\nylim(1e-18,1e-13)\nyscale(\"log\")\nlegend()\nsavefig(\"ch07-quad3-plot.svg\"); nothing # hide(Image: )解の公式から求めた「小さい方の解」の残差が「あばれる」のに対して、 解と係数の関係から求めた小さい方の解」の残差が「一定」である様子が見れる。"
},

{
    "location": "ch07.html#数値微分-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 数値微分",
    "category": "section",
    "text": "fracdf(x_0)dx = lim_h longrightarrow 0fracf(x_0+h)-f(x_0)h関数 y=x^2 の x=1 における微分係数を、 上の定義により求めよう。 求まるべき値は 2 であるが、h を小さくすると 2 の上下に暴れてしまう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nh=logspace(-18,-8,100)\nd=( (1+h).^2 - 1) ./ h\nplot(h,d, \".\")\nylim(5e-1,3e0)\nyscale(\"log\")\nxscale(\"log\")\nsavefig(\"ch07-df1-plot.svg\"); nothing # hide(Image: )今度は、関数 y=x^n, (n=123) の x=1における微分係数を、 上の定義により求めよう。 求まるべき値は n であるが、h を小さくすると n の上下に暴れてしまう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nh=logspace(-18,-8,100)\nfor n=1:3\n    d=( (1+h).^n - 1) ./ h\n    plot(h,d, \".\", label=\"y=x^\"*string(n))\nend\nxlabel(\"h\")\nylabel(\"d\")\nyscale(\"log\")\nxscale(\"log\")\nlegend()\nsavefig(\"ch07-df2-plot.svg\"); nothing # hide(Image: )以上の誤差も、非常に近い二つの数字を減じたときに現れる「桁落ち」の現象である。 ▶︎ 2次方程式とは異なり、うまく回避する手段はない。hを小さく取りすぎないように注意する。"
},

{
    "location": "ch07.html#練習・数値微分-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 練習・数値微分",
    "category": "section",
    "text": "以下の関数の、指定された座標での微分係数を、上の例と同様に求めてみよ。指数関数 y = expx  x = 0\n対数関数 y = logx  x = 1\n対数関数 y = logleft(1+xright)  x = 0   ▶ 注: 関数 Base.log1p — Function を用いよ。\n三角関数 y = sinx  x = 1。▶ 正しい微分係数は 0.540302305868140 である。"
},

{
    "location": "ch07.html#近似比較演算子-isapprox-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 近似比較演算子 isapprox",
    "category": "section",
    "text": "条件式 x == 1 は、 数 x が 1 と完全に一致することを判定するので、 数 x が丸め誤差を含むような場合に用いるのに適さない。その代わりに、丸め誤差の基準を適当な数、 例えば、10^-6 をとって、 条件式 abs(x-1) < 1e-6 をもって、数 xが 1 に非常に近いことを判定するのが常套手段である。x=1+1e-8\nx == 0\nabs(x-1) < 1e-6Base.isapprox - FunctionJulia には、数 a と b がほぼ等しいことを判定する 近似比較演算子 isapprox(a,b) が用意されているので、 必要に応じて用いるとよい。a と b との丸め誤差の程度を考慮して、比較を行う便利な関数である。0.1+0.2 == 0.3\nisapprox(0.1+0.2, 0.3)"
},

{
    "location": "ch07.html#数でない数の判定-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 数でない数の判定",
    "category": "section",
    "text": "Numeric Comparisons■ 0による除算で社迂回したように、 IEEE754規格の浮動小数点数は、 「数でない数」NaN, Inf, -Inf の3つを含んでいる。 これらを判定する関数が用意されている。Base.isfinite - Function\nBase.isinf - Function\nBase.isnan - Functionfor x in [0,1,Inf,NaN,NaN]\n  println()\n  @show isfinite(x)\n  @show isinf(x)\n  @show isnan(x)\nend"
},

{
    "location": "ch07.html#今回のまとめ-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "★今回のまとめ",
    "category": "section",
    "text": "浮動小数点数\n有限小数・循環小数\n加減算における桁落ち・情報落ち\n近似比較演算子\n等差数列・等比数列\n数値微分\n数でない数"
},

{
    "location": "ch08.html#",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "第8回： ▶︎ 総和・数値積分",
    "category": "page",
    "text": ""
},

{
    "location": "ch08.html#ch08-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "第8回： ▶︎ 総和・数値積分",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#級数和の公式（繰り返しで加算)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 級数和の公式（繰り返しで加算)",
    "category": "section",
    "text": "自然数の級数和の結果がいくつか知られている。 これらのグラフを描いて、結果を確認しよう。sum_k=1^n k = 1 + 2 + cdots + k + cdots + n^2 = dfracn(n+1)2using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1)/2, label=\"sum i\", \"b\")\n\nns=0:nmax\nfor n in ns\n  s1=0.0\n  for i in 1:n\n    s1 += i\n  end\n  plot(n,s1, \"bo\")\nend\n\nxlabel(\"n\")\nylabel(\"sum i up to n\")\n\nsavefig(\"ch08-sum1-plot.svg\"); nothing # hide(Image: )sum_k=1^n k^2 = 1^2 + 2^2 + cdots + k^2 + cdots + n^2 = dfracn(n+1)(2n+1)6using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1).*(2*xs1+1)/6, \"b\")\n\nns=0:nmax\nfor n in ns\n  s=0.0\n  for i in 1:n\n    s += i^2\n  end\n  plot(n,s, \"bo\")\nend\nxlabel(\"n\")\nylabel(\"sum i^2 up to n\")\n\nsavefig(\"ch08-sum2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#ベクトルのインデックス-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ ベクトルのインデックス",
    "category": "section",
    "text": "Base.length — Method参考 → ■ ベクトルベクトル a の寸法は、関数 length(a) で得られる。v=[11,21,31,41,51]\nlength(v)Indexing (section)ベクトル a 、整数 i に対して a[i] と書くと、 ベクトル aの i番目の要素の値が得られる。 要素の番号 (インデックス, indexという) iは 1から数える。 end というインデックスは、ベクトルの最後の要素を指す。存在しないインデックスを指定すると、例外が発生する。v[1]\nv[2]\nv[end] # 末尾の要素\nv[end-1] # 末尾の一つ前の要素\nv[0] # => ERROR: BoundsErrorインデックスとして、整数 iの代わりに、Range(範囲)を指定すると、 その範囲のインデックスを持つベクトルが得られる。 (参考 ■ Range型 )v[2:3]\nv[1:end-1] # 最初から、末尾の一つ前の要素\nv[4:6] # => ERROR: BoundsError"
},

{
    "location": "ch08.html#ベクトルの生成-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ ベクトルの生成",
    "category": "section",
    "text": "ベクトルを作る方法は、いくつかある。これまでに、以下の方法を紹介した。要素を列挙する方法 (■ ベクトル )\nRangeを用いる方法 (■ Range型 )\n関数 linspaceを用いる方法。結果はRangeとなる。( ■ 等差数列 )"
},

{
    "location": "ch08.html#要素が-0のベクトルを作る-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 要素が 0のベクトルを作る",
    "category": "section",
    "text": "Base.zeros — Function関数 zerosは、要素が零 0 のベクトルを作る。関数 zeros(n) は、要素の型が浮動小数点で、寸法n のベクトルを作る。\n関数 zeros(T, n) は、要素の型が T で、寸法n のベクトルを作る。\nベクトル v に対して、関数 zeros(v) は、寸法がベクトル v と同じで、要素の型がベクトル v の要素と同じベクトルを作る。zeros(5) # 要素は浮動小数点\nzeros(Float64,5) # 上と同じ\nzeros(Int64,5) # 要素は整数\nzeros(v)"
},

{
    "location": "ch08.html#要素が-1-のベクトルを作る-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 要素が 1 のベクトルを作る",
    "category": "section",
    "text": "Base.ones — Function関数 onesは、要素が 1 のベクトルを作る。 呼び出し方は、関数 zeros() と同じである。ones(5) # 要素は浮動小数点\nones(Float64,5) # 上と同じ\nones(Int64,5) # 要素は整数\nones(v)"
},

{
    "location": "ch08.html#疑似乱数を要素とするベクトルを作る-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 疑似乱数を要素とするベクトルを作る",
    "category": "section",
    "text": "Base.Random.rand — Functionrand(10) # => 10-elements\nrand([1,2,3], 10) # [1,2,3]からランダムに10個選ぶヒストグラムを描く。分割数 10using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=rand(1000)\nplt[:hist](xs, bins=10)\nxlim(-0.2,1.2)\nsavefig(\"ch08_hist1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#正規乱数を要素とするベクトルを作る-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 正規乱数を要素とするベクトルを作る",
    "category": "section",
    "text": "Base.Random.randn — Function平均 0、標準偏差 1 の正規分布の疑似乱数を作るrandn(10) # => 10-elementsヒストグラムを描く。分割数 50using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=randn(1000)\nplt[:hist](xs, bins=50)\nxlim(-4,4)\nsavefig(\"ch08_hist2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#内包表記-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 内包表記",
    "category": "section",
    "text": "[ x^2 for x in 0:10 ]\n[ x^2 for x in [-3,0,2] ]\n[ x^2 for x in -10:2:10 if rem(x,3) != 2 ]"
},

{
    "location": "ch08.html#フーリエ級数の和（繰り返しで加算)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ フーリエ級数の和（繰り返しで加算)",
    "category": "section",
    "text": "周期波形 f(t+T) = f(t) は、 以下のように、三角関数の級数和として表される。 ここで、a_0 a_1 cdots, b_1 b_2 cdots は実数の定数である。 これを、実フーリエ級数和という。beginalign*\nf(t)  = a_0 \n + a_1 cos omegat  + b_1 sin omegat \n + a_2 cos 2omegat + b_2 sin 2omegat \n + a_3 cos 3omegat + b_3 sin 3omegat + cdots\nendalign*ここで omega は基本周波数である。omega=dfrac2piT以下の例では、既に知られているフーリエ級数和から、元の関数が近似される様子を観察するのに留める。"
},

{
    "location": "ch08.html#方形波：フーリエ級数の有限和-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 方形波：フーリエ級数の有限和",
    "category": "section",
    "text": "方形波は、 ▶ 方形波を描く で紹介した。基本周波数 omega=1、数 -1と1とを往復する方形波を描こう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=-3pi:pi/36:3pi\nplot(ts, sign.(sin.(ts)) )\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nsavefig(\"ch08_sq1-plot.svg\"); nothing # hide(Image: )この方形波のフーリエ級数和は、以下のように与えられる。f(t) = frac4pileftsint+fracsin3t3+fracsin5t5+cdotsrightこの式の sin t, sin 3t, sin 5t の３つを加えると、方形波に近くなることを観察する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=-3pi:pi/36:3pi\nys=sin.(ts)*4/pi\nplot(ts, ys, label=\"n=1\")\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nys += sin.(3ts)/3*4/pi\nplot(ts, ys, label=\"n=1,3\")\nys += sin.(5ts)/5*4/pi\nplot(ts, ys, label=\"n=1,3,5\")\nlegend()\n\nsavefig(\"ch08-fo-sq2-plot.svg\"); nothing # hide(Image: )今度は sin 13t まで加えた結果を観察しよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=-3pi:pi/36:3pi\nn=13\nys=zeros(ts)\nfor i in 1:2:n\n  ys += sin.(i*ts)/i*4/pi\nend\nplot(ts, ys)\nplot(ts, sign.(sin.(ts)), label=\"up to\"*string(n) )\n\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nsavefig(\"ch08-fo-sq4-plot.svg\"); nothing # hide(Image: )note: Note\n上のフーリエ級数和が方形波を近似すると説明したが、なめらかな三角関数の級数和をいくら加えていっても、なめらかでない方形波に一致することはない。級数和が元の関数に近づくのは「各点収束」ではなく「一様収束」に相当する。"
},

{
    "location": "ch08.html#三角波：フーリエ級数の有限和-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 三角波：フーリエ級数の有限和",
    "category": "section",
    "text": "一定の正の傾きで増加、一定の負の傾きで減少を繰り返す周期関数を、 三角波 (triangular wave)という。傾き 1 と -1で、周期 2pi の三角波を描こう。 この関数は、 絶対値関数 abs (参考: ▶︎ 絶対値関数 )と 関数 mod2pi (参考: ▶ 2piで割った剰余 ) とを組み合わせて定義できる。 参考→ ■ 関数の定義 (代入文形式)triangular(t)=pi-abs.(mod2pi.(t)-pi)\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=-3.5pi:pi/6:3.5pi\nplot(ts, triangular.(ts) )\nxlim(-pi*2.5,pi*2.5)\nylim(-pi*0.1,pi*1.1)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch08_fo_tri1-plot.svg\"); nothing # hide(Image: )上の三角波のフーリエ級数展開は、以下の通りである。f(t) = dfracpi2 - dfrac4pileft cos t + dfraccos 3t3^2 + dfraccos 5t5^2 + cdotsrightusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nys=ones(ts)*(pi/2)\nfor n=1:2:5\n  ys -= cos.(n*ts)*(4/pi/n^2)\nend\nplot(ts, ys, \"o\")\nplot(ts,triangular.(ts))\nylim(-pi*0.1,pi*1.1)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch08-fo-tri3-plot.svg\"); nothing # hide(Image: )勾配が不連続に変化する点(キンク, kink)を拡大して描画しよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor nmax=3:2:11\n  ys=ones(ts)*(pi/2)\n  for n=1:2:nmax\n    ys -= cos.(n*ts)*(4/n^2/pi)\n  end\n  plot(ts, ys, label=nmax)\nend\nxlim(-pi*0.1,pi*2.1)\nylim(-pi*0.1,pi*1.1)\nplt[:axes]()[:set_aspect](\"equal\")\nlegend()\nsavefig(\"ch08-fo-tri4-plot.svg\"); nothing # hide(Image: )using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor j=1:6\n  nmax=1+2*j\n  ys=ones(ts)*(pi/2)\n  for n=1:2:nmax\n    ys -= cos.(n*ts)*(4/n^2/pi)\n  end\n  ax=plt[:subplot](610+j)\n  ax[:plot](ts,triangular.(ts))\n  ax[:plot](ts, ys, \"o\")\n  ax[:set_ylim](-pi*0.1,pi*1.1)\nend\nsavefig(\"ch08-fo-tri5-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#練習：フーリエ級数の有限和-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "◀ 練習：フーリエ級数の有限和",
    "category": "section",
    "text": "次の級数和で表される曲線を描け。f(t) = dfrac4pileft sin t - dfracsin 3t3^2 + dfracsin 5t5^2 - cdotsright"
},

{
    "location": "ch08.html#数値積分-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 数値積分",
    "category": "section",
    "text": "定積分の近似値を、級数和として求めることができる(数値積分)。以下では、連続関数の、有限な区間に対する定積分の近似値を求めてみる。 参考→ ▶︎ 関数が連続とは例として、関数 g(x)g(x)=dfrac11+xを、x=0 から 1の範囲で積分しよう。関数 g(x)は、この範囲で単調減少である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxmin=0\nxmax=1\nm=6\nn=2^m\nxs=linspace(xmin,xmax,n+1)\ng(x)=1/(1+x)\nplot(xs, g.(xs), \"b\")\nylim(0,1.2)\nsavefig(\"ch08-rie0-plot.svg\"); nothing # hide(Image: )定積分の値は、int_0^1dfrac11+xdx = leftlogleftvert1+xrightvertright_x=0^x=1 = log2である。"
},

{
    "location": "ch08.html#Riemann和（繰り返しで加算)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ Riemann和（繰り返しで加算)",
    "category": "section",
    "text": "積分すべき関数を、等間隔の短冊に区切り、短冊の面積の総和をとろう。短冊の幅を dとすると、s_1 = sum_i=1^n g(x_i)cdotdという、総和 (Riemann和)をとることになる。以下のグラフは、8枚の短冊に分けた様子を示す。 ここで、短冊の高さは、各短冊の左端の関数の値をとった。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxmin=0\nxmax=1\nm=3\nn=2^m\nxs=linspace(xmin,xmax,n+1)  # n個の短冊に分割する\nd=(xmax-xmin)/n  # 短冊の刻み\ng(x)=1/(1+x)\nplot(xs, g.(xs), \"b\")\nylim(0,1.2)\n\nfor x in xs[1:end-1]\n  plot([x, x, x+d, x+d], [0, g(x), g(x), 0], \"k\", lw=0.5)\nend\nsavefig(\"ch08-rie1-plot.svg\"); nothing # hide(Image: )では、短冊を 2^4 = 16 枚に分けて、短冊の面積の総和をとろう。se=log(2)\nm=4\nn=2^m\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ns1=0\nfor i in 1:n\n  x=xs[i]\n  s1 += g(x)*d\nend\n@show s1\n@show se\n# 相対誤差\n@show (s1-se)/se;16分割でも、相対誤差 23 を達成した。分割数を増やせば、この和は、正しい定積分の値に近づいていくであろう。分割数を 2^m で増やして、絶対誤差を描こう。 横軸の分割数は、対数で示した。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  plot(n, abs(s1 - se) , \".\", color=\"b\")\nend\nxscale(\"log\")\nxlabel(\"n\")\nylabel(\"absolute error\")\nsavefig(\"ch08-rie2-plot.svg\"); nothing # hide(Image: )今度は、相対誤差を、両対数グラフで描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  plot(n, abs(s1 - se) / se, \".\", color=\"g\")\nend\nxlabel(\"n\")\nylabel(\"relative error (absolute value)\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch08-rie3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#総和関数-sum-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 総和関数 sum",
    "category": "section",
    "text": "Base.sum — Function関数 sum(xs) は、数のコレクション v　を引数にとり、v の全ての要素の総和を求める。sum([1,2,3,4,5])\nsum(1:5)"
},

{
    "location": "ch08.html#級数和の公式（関数-sumを用いる)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 級数和の公式（関数 sumを用いる)",
    "category": "section",
    "text": "sum_k=1^n k = 1 + 2 + cdots + k + cdots + n^2 = dfracn(n+1)2using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1)/2, label=\"sum i\", \"b\")\n\nns=0:nmax\nfor n in ns\n  xs=1:n\n  s1=sum(xs)\n  plot(n,s1, \"bo\")\nend\n\nxlabel(\"n\")\nylabel(\"sum i up to n\")\n\nsavefig(\"ch08-sum3-plot.svg\"); nothing # hide(Image: )sum_k=1^n k^2 = 1^2 + 2^2 + cdots + k^2 + cdots + n^2 = dfracn(n+1)(2n+1)6using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1).*(2*xs1+1)/6, \"b\")\n\nns=0:nmax\nfor n in ns\n  # 各要素を二乗\n  xs=(1:n).^2\n  s=sum(xs)\n  plot(n,s, \"bo\")\nend\nxlabel(\"n\")\nylabel(\"sum i^2 up to n\")\n\nsavefig(\"ch08-sum4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#Riemann和（関数-sumを用いる)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ Riemann和（関数 sumを用いる)",
    "category": "section",
    "text": "Riemann和において、 刻み幅 d は全ての短冊に共通であるから、d をくくりだしてs_1 = sum_i=1^n g(x_i)cdotd = dcdotsum_i=1^n g( x_i)のようにまとめることができる。すなわち、関数の値の和 sum_i=1^n g( x_i) をとってから d倍すればよい。関数の値の和を取るのに、関数 sum を使うことができる。下のプログラムで g.(xs[1:end-1]) は、ベクトル xs[1:end-1] の各要素に関数 g() を適用したベクトルである。ループで和を計算した場合と、関数 sum を用いる場合との両方で、 相対誤差をプロットする。 計算結果が一致していることが見える。 (参考: 結果が一致することを確かめるグラフの描画   → ▼▶︎ 周期関数を確認するusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n\n  # 和を取る\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  plot(n, abs(s1 - se)/se , \"ro\", color=\"b\")\n\n  # sum を使う\n  s2=sum( g.(xs[1:end-1]))*d\n  plot(n, abs(s2 - se)/se , \"b.\", color=\"r\")\nend\nxscale(\"log\")\nyscale(\"log\")\nxlabel(\"n\")\nylabel(\"absolute error\")\nsavefig(\"ch08-rie4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#台形則（関数-sumを用いる)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 台形則（関数 sumを用いる)",
    "category": "section",
    "text": "今度は、短冊を台形として計算してみる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nm=2\nn=2^m\nxmin=0\nxmax=1\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\n\ng(x)=1/(1+x)\nplot(xs, g.(xs), \"b\")\nylim(0,1.2)\n\nfor i in 1:n\n  x=xs[i]\n  plot([x, x, x+d, x+d], [0, g(x), g(x+d), 0], \"k\", lw=0.5)\nend\n\nsavefig(\"ch08-tra1-plot.svg\"); nothing # hide(Image: )総和をとるとき、隣り合う台形の面積をまとめることができることに注目しよう。s_t = sum_i=1^n dfracg(x_i)+g(x_i+1) 2cdotd = dcdotleft dfracg(x_1)2 + sum_i=2^n-1 g(x_i)  + dfracg(x_n)2 right先の Riemann和と台形則の値を両方計算してみよう。se=log(2)\n\n# Riemann和\ns1=0\nfor x in xs[1:end-1]\n  s1 += g(x)*d\nend\n\n# 台形則\nst=(g(xs[1])+g(xs[end]))/2\nfor i in 2:n\n  x=xs[i]\n  st += g(x)\nend\nst *= d\n@show s1\n@show st\n# 相対誤差\n@show (s1-se)/se;\n@show (st-se)/se;関数 sumを使って簡潔に書こう。se=log(2)\nm=4\nn=2^m\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ns1=sum( g.(xs[1:end-1]))*d\n\nst=(g(xs[1])+g(xs[end]))/2\nst += sum( g.(xs[2:end-1]))\nst *= d\n\n@show s1;\n@show st;\n# 相対誤差\n@show (s1-se)/se;\n@show (st-se)/se;相対誤差を描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n\n  s1=sum( g.(xs[1:end-1]))*d\n\n  st=(g(xs[1])+g(xs[end]))/2\n  st += sum( g.(xs[2:end-1]))\n  st *= d\n\n  plot(n, abs(s1 - se) / se, \".\", color=\"g\")\n  plot(n, abs(st - se) / se , \".\", color=\"r\")\nend\n\nxlabel(\"n\")\nylabel(\"relative error (absolute value)\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch08-tra3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#練習：Riemann和・台形則-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "◀ 練習：Riemann和・台形則",
    "category": "section",
    "text": "以下の定積分の近似値を、Riemann和と台形則でそれぞれ評価してみよ。 (注記されていない)定積分の理論値は各自計算せよ。begingather*\nint^1_0 3x^2dx \nint^1_0 3 left(x+1 right)^2dx \nint^1_0 expxdx \nint^2_0 dfrac1(1+x)^2dx=dfrac23 \nint^pi_0 sinxdx \nint^1_-1 frac21+x^2dx = pi\nendgather*"
},

{
    "location": "ch08.html#繰返し内部からの脱出-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 繰返し内部からの脱出",
    "category": "section",
    "text": "Repeated Evaluation: Loopsfor文の繰り返し (forブロック)の内部で、break 文を使うと、現在繰り返し中のループから直ちに抜けることができる。for i = 1:1000\n  println(i)\n  if i >= 5\n    break\n  end\nend乱数の値が 08 を超えるまで繰り返す。for i in 1:10\n  r=rand()\n  println(r)\n  if r > 0.8\n    break\n  end\nend二重ループ、内側のループからの脱出for j in 1:3\n  for i in 1:5\n    println(\"i=\"*string(i)*\" j=\"*string(j))\n    if i >= 3\n      break\n    end\n  end\nend一つのfor文に二つの繰り返しを書いた場合、breakで for文全体から抜けてしまう。for j in 1:3, i in 1:5\n  println(\"i=\"*string(i)*\" j=\"*string(j))\n  if i >= 3\n    break\n  end\nendforブロックの内部で、continue 文を使うと、次の繰り返しに直ちに移動できる。 以下で、i % 3 は rem(i,3) と同じである。 参考→ ■ 残余 rem と整商 divfor i = 1:10\n  if i % 3 != 0\n    continue\n  end\n  println(i)\nend"
},

{
    "location": "ch08.html#練習：-条件が成り立つまで繰り返す：数値積分-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "◀▼ 練習： 条件が成り立つまで繰り返す：数値積分",
    "category": "section",
    "text": "(少し難しいので、後回しにしてもよい)分割数 nを 2^20まで、2の冪乗で増やしていけ、 ただし、相対誤差が 10^-4 以下になったら、そこで終了せよ。▶︎ Riemann和（関数 sumを用いる) 、または、 ▶︎ 台形則（関数 sumを用いる) の、どちらを用いてもよい。"
},

{
    "location": "ch08.html#今回のまとめ-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "今回のまとめ",
    "category": "section",
    "text": "ベクトルのインデックス\n要素が 0または1のベクトルの生成\nベクトルの総和 sum\n級数和\nフーリエ級数の和\n数値積分：Riemann和\n数値積分：台形則\n繰返し内部からの脱出"
},

{
    "location": "ch09.html#",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "category": "page",
    "text": ""
},

{
    "location": "ch09.html#ch09-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#ベクトルを引数とする関数-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ ベクトルを引数とする関数",
    "category": "section",
    "text": "■ 総和関数 sum のように、ベクトルを引数とする関数がある。"
},

{
    "location": "ch09.html#積-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ 積",
    "category": "section",
    "text": "Base.prod — Functionv=[2,3,4];\nprod(v)\n\nr=1;\nfor i in 1:length(v)\n  r *= v[i]\nend\nr"
},

{
    "location": "ch09.html#ノルム-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ ノルム",
    "category": "section",
    "text": "Base.LinAlg.norm — Functionv=[1,2,3,4,5,6,7];\n\nnorm(v)\n@show sqrt(sum(v.^2))\n\nr=0;\nfor i in 1:length(v)\n  r += v[i]^2\nend\nsqrt(r)"
},

{
    "location": "ch09.html#平均値・標準偏差-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ 平均値・標準偏差",
    "category": "section",
    "text": "Base.mean — Function\nBase.stdm — Functionv=[1,2,3,4,5,6,7];\n# 平均値\nmean(v)\nsum(v)/length(v)\n# 標準分散、要素数 n-1 でスケール\nstd(v)\nsqrt( sum((v .- mean(v)).^2) /(length(v)-1))\n# 標準分散、要素数 n でスケール\nstd(v, corrected=false)\nsqrt( sum((v .- mean(v)).^2) /(length(v)))"
},

{
    "location": "ch09.html#複数の数を引数とする関数-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ 複数の数を引数とする関数",
    "category": "section",
    "text": "Base.min — Function\nBase.max — Functionmin(5,1,4,2,3)\nmax(5,1,4,2,3)"
},

{
    "location": "ch09.html#splatting演算子-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ splatting演算子",
    "category": "section",
    "text": "... splits one argument into many different arguments in function calls...演算子は、関数呼び出しにおいて、ベクトルを、複数の引数に分けてから呼び出す。min([5,1,4,2,3]) # => exception\nmin([5,1,4,2,3]...) # min(5,1,4,2,3) と同じ"
},

{
    "location": "ch09.html#ベクトル要素への代入-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ ベクトル要素への代入",
    "category": "section",
    "text": "v=collect(1:10)\n# インデックス：整数\nv[4]=0\nv\n\n# インデックス：Range\nv[3:2:10]=0\nv"
},

{
    "location": "ch09.html#素数の生成：エラトステネスの篩-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "■ 素数の生成：エラトステネスの篩",
    "category": "section",
    "text": "エラトステネスの篩(ふるい)は、素数を算出する方法の一つである。 以下の手順による。数2からnまでの整数を並べる\n生き残っている中で最も小さい数 p を素数として残す。\n素数p自身を除く pの倍数を全て消す\n以上の手順を、n まで調べたら終わり。以下のプログラムでは、配列 sieve を篩とする。 篩の初期値を 1:n とすると、数字 i の篩は sieve[i] である。 篩で消された数 i には sieve[i] に 0 を格納することにする。nmax=100\nsieve=collect(1:nmax);\nsieve[1]=0;\nfor i in 2:nmax\n  if sieve[i] > 0\n    println(i)\n    for j=i*2:i:nmax\n      sieve[j]=0\n    end\n  end\nend上のプログラムで、変数 j に関する繰り返しは、1行で書ける。nmax=100\nsieve=collect(1:nmax);\nsieve[1]=0;\nfor i in 2:nmax\n  if sieve[i] > 0\n    # println(i)\n    sieve[i*2:i:nmax]=0\n  end\nend\n\nfor i in 1:nmax\n  if sieve[i] > 0\n    println(i)\n  end\nendnote: Note\nJulia には、素数を高速に計算する関数を含むパッケージが用意されている。Primes.primes — Function  \n`Primes.isprime　 — Functionprimes(n) は、数 n までの素数を計算する。isprime(x)は、数 x が素数であるかどうかを判定する。# Pkg.add(\"Primes\") # コメントを外してパッケージを導入せよ。一度だけ行えばよい\nusing Primes\nisprime(2)\nisprime(3)\nisprime(4)\nisprime.([2,3,4])\nprimes(100)"
},

{
    "location": "ch09.html#常微分方程式の初期値問題:Euler法-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "▶ 常微分方程式の初期値問題:Euler法",
    "category": "section",
    "text": "問題beginalign*\ndfracdxdt  = 1-x^2 \nx(0)  = 0 \n 0 leq t leq 16\nendalign*Euler 法による数値解法。ただし、t_1 t_2 ldots は、一定間隔 h とする。beginalign*\ndfracdxdt  =f(xt) \nt  = t_1 t_2 ldots \ndfracx_n+1-x_nh  = f(x_nt_n) \nx_n+1  = x_n + h f(x_nt)\nendalign*"
},

{
    "location": "ch09.html#まずは解いてみる-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "まずは解いてみる",
    "category": "section",
    "text": "f(x,t)=1-x^2\n#\ntmin=0\ntmax=1.6\nh=0.4\nts=tmin:h:tmax\nn=length(ts)\n#\nx_now=0 # initial condition\nfor i in 1:n\n  t=ts[i]\n  x_next=x_now+h*f(x_now, t)\n  @show t, x_next\n  x_now=x_next\nend解析解は、x = tanhtである。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nx_now=0 # initial condition\nfor i in 1:n\n  t=ts[i]\n  plot(t, x_now, \"b.\")\n  x_next=x_now+h*f(x_now, t)\n  @show t, x_next\n  x_now=x_next\nend\nplot(ts, tanh.(ts), \"r\")\nxlabel(\"t\")\nylabel(\"x\")\nsavefig(\"ch09-euler1-plot.svg\"); nothing # hide(Image: )配列に計算結果を入れて、一気に描画する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\ntmin=0\ntmax=1.6\nh=0.4\nts=tmin:h:tmax\nxs=zeros(ts)\nxs[1]=0 # initial condition\n\nn=length(ts)\nfor i in 1:n-1\n  t=ts[i]\n  x_now=xs[i]\n  x_next=x_now+h*f(x_now, t)\n  xs[i+1]=x_next\nend\nplot(ts, xs, \".\")\nplot(ts, tanh.(ts), \"r\")\nxlabel(\"t\")\nylabel(\"x\")\nsavefig(\"ch09-euler2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#刻みを狭くする-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "刻みを狭くする",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\ntmin=0\ntmax=1.6\nh=0.4\nfor k in 1:4\n  ts=tmin:h:tmax\n  xs=zeros(ts)\n  xs[1]=0 #  initial condition\n\n  n=length(ts)\n  for i in 1:n-1\n    t=ts[i]\n    x_now=xs[i]\n    x_next=x_now+h*f(x_now, t)\n    xs[i+1]=x_next\n  end\n  plot(ts, xs, \".\", label=\"h=\"*string(h))\n\n  h /= 2\nend\nxlabel(\"t\")\nylabel(\"x\")\nplot(ts, tanh.(ts), \"b\",  label=\"tanh(t)\", lw=0.5)\nlegend()\nsavefig(\"ch09-euler3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#正確な解との誤差評価-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "正確な解との誤差評価",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\ntmin=0\ntmax=1.6\nh=0.4\nfor k in 1:5\n  ts=tmin:h:tmax\n  xs=zeros(ts)\n  xs[1]=0 #  initial condition\n\n  n=length(ts)\n  for i in 1:n-1\n    t=ts[i]\n    x_now=xs[i]\n    x_next=x_now+h*f(x_now, t)\n    xs[i+1]=x_next\n  end\n  xtrue=tanh.(ts)\n  e=norm(xs.-xtrue)/n\n  @show h, e\n  plot(h,e,\".\")\n  h /= 2\nend\nxlabel(\"h\")\nxscale(\"log\")\nyscale(\"log\")\nxlim(1e-2,1)\nylim(1e-4,1e-1)\nsavefig(\"ch09-euler4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#常微分方程式の初期値問題:修正Euler法-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "▶ 常微分方程式の初期値問題:修正Euler法",
    "category": "section",
    "text": "修正Euler 法beginalign*\ndfracdxdt  =f(xt) \nf_n  = f(x_n t_n) \noverlinex_n+1  = x_n + h f(x_nt) \noverlinef_n+1  = f(overlinex_n+1 t_n+1) \nx_n+1  = x_n + dfrach2 left(f_n + overlinef_n+1right)\nendalign*"
},

{
    "location": "ch09.html#解いてみる-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "解いてみる",
    "category": "section",
    "text": "#\ntmin=0\ntmax=1.6\nh=0.4\nts=tmin:h:tmax\nx_now=0 # initial condition\n\nn=length(ts)\nfor  i in 1:n-1\n  t=ts[i]\n  t_next=ts[i+1]\n  f_now=f(x_now,t)\n  x_mid=x_now+h*f_now\n  f_mid=f(x_mid,t_next)\n  x_next=x_now+(f_now+f_mid)*h/2\n  @show t, x_next\n  x_now=x_next\nend配列に計算結果を入れて、一気に描画する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=zeros(ts)\nn=length(ts)\n\nxs[1]=0 # initial condition\nfor  i in 1:n-1\n  t=ts[i]\n  x_now=xs[i]\n  t_next=ts[i+1]\n  f_now=f(x_now,t)\n  x_mid=x_now+h*f_now\n  f_mid=f(x_mid,t_next)\n  xs[i+1]=x_now+(f_now+f_mid)*h/2\nend\nplot(ts, xs, \".\")\nplot(ts, tanh.(ts))\nxlabel(\"t\")\nylabel(\"x\")\nsavefig(\"ch09-meuler1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#刻みを狭くする-2",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "刻みを狭くする",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nh=0.4\nfor k in 1:4\n  ts=tmin:h:tmax\n  xs=zeros(ts)\n  n=length(ts)\n  xs[1]=0 # initial condition\n  for  i in 1:n-1\n    t=ts[i]\n    x_now=xs[i]\n    t_next=ts[i+1]\n    f_now=f(x_now,t)\n    x_mid=x_now+h*f_now\n    f_mid=f(x_mid,t_next)\n    xs[i+1]=x_now+(f_now+f_mid)*h/2\n  end\n  xtrue=tanh.(ts)\n  e=norm(xs.-xtrue)\n  @show h, e\n  plot(ts, xs, \".\", label=\"h=\"*string(h))\n  h /= 2\nend\nxlabel(\"t\")\nylabel(\"x\")\nplot(ts, tanh.(ts), \"b\",  label=\"tanh(t)\", lw=0.5)\nlegend()\nsavefig(\"ch09-meuler2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#正確な解との誤差評価-2",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "正確な解との誤差評価",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nh=0.4\nfor k in 1:4\n  ts=tmin:h:tmax\n  xs=zeros(ts)\n  n=length(ts)\n  xs[1]=0 # initial condition\n  for  i in 1:n-1\n    t=ts[i]\n    x_now=xs[i]\n    t_next=ts[i+1]\n    f_now=f(x_now,t)\n    x_mid=x_now+h*f_now\n    f_mid=f(x_mid,t_next)\n    xs[i+1]=x_now+(f_now+f_mid)*h/2\n  end\n  xtrue=tanh.(ts)\n  e=norm(xs.-xtrue)/n\n  @show h, e\n  plot(h,e, \".\")\n  h /= 2\nend\nxlabel(\"h\")\nxscale(\"log\")\nyscale(\"log\")\nxlim(1e-2,1)\nylim(1e-5,1e-1)\nsavefig(\"ch09-meuler4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#練習：常微分方程式の数値解の誤差-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "◀▼ 練習：常微分方程式の数値解の誤差",
    "category": "section",
    "text": "上の常微分方程式の数値解法の例について、 Euler法による絶対誤差と、修正Euler法による絶対誤差を、 刻み幅 h に対する関数として、一つのグラフの上に表せ。結果は、例えば、以下のようになろう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nh=0.4\nkmax=8\nhs=zeros(kmax)\ne_euler=zeros(kmax)\ne_meuler=zeros(kmax)\n\nfor k in 1:kmax\n  hs[k]=h\n  ts=tmin:h:tmax\n  xs=zeros(ts)\n  xs[1]=0 #  initial condition\n  n=length(ts)\n\n  # Euler\n\n  n=length(ts)\n  for i in 1:n-1\n    t=ts[i]\n    x_now=xs[i]\n    x_next=x_now+h*f(x_now, t)\n    xs[i+1]=x_next\n  end\n  xtrue=tanh.(ts)\n  e_euler[k]=norm(xs.-xtrue)/n\n\n  # modified Euler\n\n  xs[1]=0 # initial condition\n  for  i in 1:n-1\n    t=ts[i]\n    x_now=xs[i]\n    t_next=ts[i+1]\n    f_now=f(x_now,t)\n    x_mid=x_now+h*f_now\n    f_mid=f(x_mid,t_next)\n    xs[i+1]=x_now+(f_now+f_mid)*h/2\n  end\n  xtrue=tanh.(ts)\n  e_meuler[k]=norm(xs.-xtrue)/n\n  h /= 2\nend\nplot(hs, e_euler, \".\", label=\"Euler\")\nplot(hs, e_meuler, \".\", label=\"modified Euler\")\nxlabel(\"h\")\nxscale(\"log\")\nyscale(\"log\")\nlegend()\nxlim(1e-3,1)\nylim(1e-6,1e-1)\nsavefig(\"ch09-meuler6-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#練習：-条件が成り立つまで繰り返す：微分方程式の初期値問題-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "◀▼ 練習： 条件が成り立つまで繰り返す：微分方程式の初期値問題",
    "category": "section",
    "text": "(少し難しいので、後回しにしてもよい)Euler法ないし修正Euler法による微分方程式の数値解法を、 刻み幅 h を半分にしながら 20回繰り返せ。 ただし、絶対誤差が 10^-4 以下になったら、そこで終了せよ。"
},

{
    "location": "ch09.html#練習：常微分方程式・素性の悪い問題-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "◀▼ 練習：常微分方程式・素性の悪い問題",
    "category": "section",
    "text": "beginalign*\ndfracdxdt  = x^2 \nx(0)  = dfrac12 \n 0 le t  2\nendalign*解析解は、x = dfrac12-tとなり、t longrightarrow 0 で無限大に発散する「素性の悪い」方程式である。"
},

{
    "location": "ch09.html#今回のまとめ-1",
    "page": "第9回： ■ 配列要素の操作・▶常微分方程式の数値解法",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "ベクトルを引数とする関数\n複数の数を引数とする関数\nsplatting演算子\nベクトル要素への代入\nエラトステネスの篩：素数を算出する\n微分方程式の初期値問題、Euler法、修正Euler法"
},

{
    "location": "ch10.html#",
    "page": "第10回：行列・線形代数",
    "title": "第10回：行列・線形代数",
    "category": "page",
    "text": ""
},

{
    "location": "ch10.html#ch10-1",
    "page": "第10回：行列・線形代数",
    "title": "第10回：行列・線形代数",
    "category": "section",
    "text": "## ■ ベクトルに対する演算\n\nベクトルの演算としては、これまでに、以下を説明した。\n\n- ベクトルのスカラー倍\n- ベクトル同士の和差\n- ベクトルを引数とする演算\n-- 絶対値\n-- 要素の和\n-- 要素の積\n-- 要素の平均値、標準偏差"
},

{
    "location": "ch10.html#ベクトルの線形結合からなる格子点-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ ベクトルの線形結合からなる格子点",
    "category": "section",
    "text": "複数のベクトルの線形結合とは、 それらのベクトルのスカラー倍を加え合わせたものを、それらのベクトルの線形結合という。二つのベクトル $ a_1=\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, a_2=\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$ の「整数」係数の線形結合による格子点を描く。 さらに、 $ b_1=\\begin{bmatrix} \\dfrac{1}{2} \\\\ \\dfrac{1}{2} \\end{bmatrix}, b_2=\\begin{bmatrix} \\dfrac{1}{2} \\\\ -\\dfrac{1}{2} \\end{bmatrix}$ の「整数」係数の線形結合からなる格子点を重ねる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\na1=[1,0]; a2=[0,1]\nfor m in -3:3, n in -3:3\n  r=m*a1+n*a2\n  plot(r[1], r[2], \"bo\")\nend\n\nb1=[ 1/2, 1/2]; b2=[ 1/2,-1/2]\nfor m in -3:3, n in -3:3\n  r=m*b1+n*b2\n  plot(r[1], r[2], \"r.\")\nend\n\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-lat1-plot.svg\"); nothing # hide(Image: )どちらも正方格子 (cubic lattice) であるが、座標系の取り方が異なる。 基底 b_1 b_2 で張られる格子点は、 基底 a_1 a_2 で張られる格子点の中央の点も含んでいることが観察できる。今度は、 c_1=beginbmatrix 1  0 endbmatrix c_2=beginbmatrix -dfrac12  dfracsqrt32 endbmatrix で張られる格子点を描いてみる。 これは、六方格子 (hexagonal lattice) と呼ばれる。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nc1=[ 1,0]; c2=[ -1/2, sqrt(3)/2]\nfor m in -3:3, n in -3:3\n  r=m*c1+n*c2\n  plot(r[1], r[2], \"g.\")\nend\n\nxlim(-3,3)\nylim(-3,3)\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-lat2-plot.svg\"); nothing # hide(Image: )### ▶︎ ベクトルのスカラー倍、和差\n- 絶対値\n- 随伴\n- 転置"
},

{
    "location": "ch10.html#平面ベクトルの内積-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 平面ベクトルの内積",
    "category": "section",
    "text": "関数 dot(a,b) は、ベクトル a と b との内積 (inner product)を返す。中置き演算子 ⋅ を用いて a⋅b と書くこともできる。 「⋅」は、バックスラッシュ \\ に cdots と入力してから、TABキーを押すことによって入力できる。 かな漢字変換システムで入力できる「・」(中黒=なかぐろ) とは、別の文字である。"
},

{
    "location": "ch10.html#平面ベクトル同士のなす角を求める-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 平面ベクトル同士のなす角を求める",
    "category": "section",
    "text": "ベクトル a と bの内積は、a と b のなす角theta を用いて、以下のように定義される。acdot b = leftvertarightvert leftvertbrightvert costhetaこれから、theta を求めるには、次の式を用いればよい。costheta = dfracacdot b leftvertarightvert leftvertbrightvert また、内積の定義から、自分自身の内積は、ノルムの二乗であることも分かる。 acdot a = leftvertarightvert^2"
},

{
    "location": "ch10.html#例：ベクトル同士のなす角度を求める-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 例：ベクトル同士のなす角度を求める",
    "category": "section",
    "text": "上で出てきたベクトルのうち、a1, a2, c1, c2 のノルムは 1 である。a1=[1,0]; a2=[0,1]\nb1=[ 1/2, 1/2]; b2=[ 1/2,-1/2]\nc1=[ 1,0]; c2=[ -1/2, sqrt(3)/2]\nnorm(a1)\nnorm(a2)\nnorm(c1)\nnorm(c2)b1 と b2 のノルムは dfrac1sqrt2 である。 自分自身の内積の値と比較しようb1⋅b1\nnorm(b1)\nnorm(b1)^2\nb1⋅b1\nnorm(b2)\nnorm(b2)^2内積から算出した costhetaから角度 theta を得るには、関数 acos() を用いる。 関数 acos(r) は cos theta = r となるtheta をラジアンで返す。 関数 acosd(r) は、theta をラジアンで返す。これらのベクトルのなす角度を算出しよう。 a1とa2、および、b1とb2は直交している。 a1とb1は、45° をなしている。 c1とc2は、120° をなしている、ことが計算できた。acosd(a1⋅a2)\nacosd(b1⋅b2 / norm(b1) / norm(b2) )\nacosd(a1⋅b1 / norm(a1) / norm(b1) )\nacosd(c1⋅c2)"
},

{
    "location": "ch10.html#タプル-1",
    "page": "第10回：行列・線形代数",
    "title": "■ タプル",
    "category": "section",
    "text": "タプル (tuple)は、複数の値をカンマ , で区切って並べ、括弧 () で囲んだものである。 ベクトルと似たように使えるが、要素を更新することはできない。# 要素 1つのタプル\n(1,)\n# 要素 2つのタプル\n(1,2)\n# 要素 3つのタプル\na=(1,2,3)\n# タプルの長さ\nlength(a)\n# タプルの要素\na[2]\n# 更新はできない\na[2]=3 # => MethodError関数には、複数の値を返すものがある。このとき、タプルが用いられる。例えば、divrem(x,d) は、div(x,d) と rem(x,d) の二つの値を返す。divrem(5,3)タプルを右辺において、複数の変数に同時に代入できる。x,y=(1,2,3)\nx\ny"
},

{
    "location": "ch10.html#行列-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 行列",
    "category": "section",
    "text": "要素を ; で区切って列挙したものを、 大かっこ [] で囲むと、行列を作ることができる。a=[11 12 13 14; 21 22 23 24; 31 32 33 34]3行 4列の行列■ ベクトルも、■ 行列も、配列 (array)として表されている。 ベクトルと同じ関数が用いられる。# 寸法 => タプル\nsize(a)\n# 第1軸 = 列の寸法\nsize(a,1)\n# 第2軸 = 行の寸法\nsize(a,2)\n# 全要素数\nlength(a)"
},

{
    "location": "ch10.html#行列のスカラー倍・スカラーの和差-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 行列のスカラー倍・スカラーの和差",
    "category": "section",
    "text": "以下、しばらく、2x2 の正方行列を例に説明する。a = [ 11 12; 21 22]\na * 2\na + 2\na - 2"
},

{
    "location": "ch10.html#行列に列ベクトルを加減-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 行列に列ベクトルを加減",
    "category": "section",
    "text": "以下、しばらく、2x2 の正方行列を例に説明する。a = [ 11 12; 21 22]\nv = [ 1, -1]\na .+ v\na .- v"
},

{
    "location": "ch10.html#行列同士の加減-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 行列同士の加減",
    "category": "section",
    "text": "a = [ 11 12; 21 22]\nb = a * 2\na + b\na - b"
},

{
    "location": "ch10.html#添字を用いた行列の要素の読み書き-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 添字を用いた行列の要素の読み書き",
    "category": "section",
    "text": "行列の添字は、 第1軸(列)と第2軸(行)の番号を、カンマ , で区切って並べ、大かっこ [] で囲んだものである。ベクトルと同じように、添字で示された要素の読み出し、 添字で示された要素の書き換えができる。# 添字による要素の読み出し\na[2,2]\n# 行列の要素の更新\na[1,2]=30\na"
},

{
    "location": "ch10.html#部分行列-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 部分行列",
    "category": "section",
    "text": "a=[11 12 13 14; 21 22 23 24; 31 32 33 34]\n# 列を取り出す\na[:,2]\n# 行を取り出す\na[2,:]\n# 部分行列\na[1:2,1:2]\na[2:3,2:3]"
},

{
    "location": "ch10.html#行列に入れた点座標で図形を描画する-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 行列に入れた点座標で図形を描画する",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxy = [ 1 2 2 1 ; 1 1 3 1 ]\n@show xy\nplot(xy[1,:], xy[2,:])\nxy = xy .+ [ 1/2, 1/2]\nplot(xy[1,:], xy[2,:])\nxlim(0,4)\nylim(0,4)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-fig1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch10.html#行列とベクトルの積-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 行列とベクトルの積",
    "category": "section",
    "text": "a = [ 11 12; 21 22]\nv = [ 1, -1]\na * v"
},

{
    "location": "ch10.html#回転行列とベクトルの積-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 回転行列とベクトルの積",
    "category": "section",
    "text": "以下の形の行列を回転行列という。R(theta) = beginbmatrix costheta  -sintheta \nsintheta  cos theta endbmatrix回転行列とベクトルの積は、 そのベクトルを、原点の周りに 反時計方向に角 theta だけ回転する写像に対応する。x^prime = R(theta) x# 回転行列\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\nxy=[1, 0]\nxy=r15*xy\nxy=r15*xyこれらをプロットしてみる。軌跡は円を描いた。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\nxy=[1, 0]\n\nfor i in 0:20\n  plot(xy[1], xy[2], \"o\")\n  xy = r15*xy\nend\n\nxlim(-1.2,1.2)\nylim(-1.2,1.2)\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot1-plot.svg\"); nothing # hide(Image: )原点以外の点 c の周りで回転させる場合は、回転の中心をずらして、beginalign*\n(x^prime-c)  = R(theta) (x-c)\nx^prime  = c + R(theta) (x-c) endalign*とすればよい。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\nxy=[1, 0]\nc= [1/2,1/2]\n\nfor i in 0:20\n  plot(xy[1], xy[2], \"o\")\n  xy = c + r15*(xy-c)    \nend\n\naxvline(c[1], color=\"k\", lw=0.5)\naxhline(c[2], color=\"k\", lw=0.5)\n\nxlim(-1,2)\nylim(-1,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch10.html#行列と行列の積-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 行列と行列の積",
    "category": "section",
    "text": "a = [ 1 2; 3 4]\nb = [ 5 6; 7 8]\na * b"
},

{
    "location": "ch10.html#座標を行列に格納した図形を回転する-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 座標を行列に格納した図形を回転する",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\nxy = [ 1 2 2 1 ; 1 1 3 1 ]\n\nfor i in 0:20\n  plot(xy[1,:], xy[2,:])\n  xy = r15*xy\nend\n\nxlim(-4,4)\nylim(-4,4)\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot3-plot.svg\"); nothing # hide(Image: )回転中心をずらしてみるusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\nxy = [ 1 2 2 1 ; 1 1 3 1 ]\nc= [1/2,1/2]\n\n\nfor i in 0:20\n  plot(xy[1,:], xy[2,:])\n  xy = c .+ r15*(xy.-c)    \nend\n\naxvline(c[1], color=\"k\", lw=0.5)\naxhline(c[2], color=\"k\", lw=0.5)\n\nxlim(-4,4)\nylim(-4,4)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch10.html#いろいろな行列の生成-1",
    "page": "第10回：行列・線形代数",
    "title": "■ いろいろな行列の生成",
    "category": "section",
    "text": ""
},

{
    "location": "ch10.html#要素が-0-の行列を作る-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 要素が 0 の行列を作る",
    "category": "section",
    "text": "Base.zeros — Function関数 zerosは、要素が零 0 の行列を作るのに使える。関数 zeros(n,m) は、要素の型が浮動小数点で、寸法 (n,m) の行列を作る。\n関数 zeros(T, n,m) は、要素の型が T で、寸法 (n,m) の行列を作る。\n行列 v に対して、関数 zeros(v) は、寸法が行列 v と同じで、要素の型が行列 v の要素と同じ行列を作る。zeros(3,4) # 要素は浮動小数点\nzeros(Float64,3,4) # 上と同じ\nzeros(Int64,3,4) # 要素は整数\n\na=[11 12 13 14; 21 22 23 24; 31 32 33 34]\nzeros(a)"
},

{
    "location": "ch10.html#要素が-1-の行列を作る-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 要素が 1 の行列を作る",
    "category": "section",
    "text": "Base.ones — Function関数 onesは、要素が零 1 の行列を作るのに使える。関数 ones(n,m) は、要素の型が浮動小数点で、寸法 (n,m) の行列を作る。\n関数 ones(T, n,m) は、要素の型が T で、寸法 (n,m) の行列を作る。\n行列 v に対して、関数 ones(v) は、寸法が行列 v と同じで、要素の型が行列 v の要素と同じ行列を作る。ones(3,4) # 要素は浮動小数点\nones(Float64,3,4) # 上と同じ\nones(Int64,3,4) # 要素は整数\n\na=[11 12 13 14; 21 22 23 24; 31 32 33 34]\nones(a)"
},

{
    "location": "ch10.html#対角要素を指定して、正方行列をつくる-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 対角要素を指定して、正方行列をつくる",
    "category": "section",
    "text": "diagm([1,2,3])"
},

{
    "location": "ch10.html#疑似乱数を要素とする行列を作る-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 疑似乱数を要素とする行列を作る",
    "category": "section",
    "text": "rand(3,3)"
},

{
    "location": "ch10.html#ベクトルをまとめて行列を作る-1",
    "page": "第10回：行列・線形代数",
    "title": "■ ベクトルをまとめて行列を作る",
    "category": "section",
    "text": "a=[1,2]\nb=[3,4]\nc=[5,6]\n[ a b c ]\nhcat(a,b,c)"
},

{
    "location": "ch10.html#内包表現を用いて行列を作る-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 内包表現を用いて行列を作る",
    "category": "section",
    "text": "[[t,t.^2] for t in [0,2,4]]\nhcat([[t,t.^2] for t in [0,2,4]]...)"
},

{
    "location": "ch10.html#楕円を描く・回転する-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 楕円を描く・回転する",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxy=hcat([ [2*cos.(t), sin(t)] for t=0:pi/18:2pi]...)\nplot(xy[1,:], xy[2,:])\n\nxlim(-2.2,2.2)\nylim(-2.2,2.2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot5-plot.svg\"); nothing # hide(Image: )回転させるusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\n\nxy=hcat([ [2*cos.(t), sin(t)] for t=0:pi/18:2pi]...)\n\nfor i in 0:5\n  plot(xy[1,:], xy[2,:])\n  xy = r15*xy    \nend\n\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot6-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch10.html#行列の商-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 行列の商",
    "category": "section",
    "text": "商を求めるだけなら、逆行列を計算しないa=[1 2; 2 3]\nv=[1, 1]\na\\v\nw=[3, 5]\na\\w\nb=[1 3; 1 5]\na\\b\n# 行列式\ndet(a)\n# 逆行列\ninv(a)\na^(-1)楕円を逆回転させるusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15=[ cosd(15) -sind(15); sind(15) cosd(15)]\n\nxy=hcat([ [2*cos.(t), sin(t)] for t=0:pi/18:2pi]...)\n\nfor i in 0:5\n  plot(xy[1,:], xy[2,:])\n  xy = r15\\xy    \nend\n\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch10-rot7-plot.svg\"); nothing # hide(Image: )行列式が 0 の行列は、正則ではないa=[1 2; 2 4]\ndet(a)\nv=[1, 1]\n# 例外を発生する\na\\v# 例外を発生する\ninv(a)"
},

{
    "location": "ch10.html#空間ベクトル：なす角を求める-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 空間ベクトル：なす角を求める",
    "category": "section",
    "text": "空間ベクトルとは、寸法 3 のベクトルである。 内積が 0 なら、それらのベクトルは直交である。例: 以下の３つのベクトルが、互いに直行することを示せ。a=[  1/2, 1/2+sqrt(2)/4, 1/2-sqrt(2)/4]\nb=[ -1/2, 1/2-sqrt(2)/4, 1/2+sqrt(2)/4]\nc=[  1/sqrt(2), -1/2, 1/2]\nnorm(a)\nnorm(b)\nnorm(c)\ndot(a,b)\na⋅b\nb⋅c\nc⋅a二つのベクトルのなす角を求めよ。a=[ -3,  1,  2 ]\nb=[  2, -3,  1 ]\nab=a⋅b\nna=norm(a)\nnb=norm(b)\nr=ab/na/nb\n# ラジアン単位\nacos(r)\n# 角度単位\nacosd(r)\n# 一行で書ける\nacosd( a⋅b / norm(a) / norm(b) )"
},

{
    "location": "ch10.html#空間ベクトルの外積-1",
    "page": "第10回：行列・線形代数",
    "title": "■ 空間ベクトルの外積",
    "category": "section",
    "text": "関数 cross(a,b) は、空間ベクトル a と b との外積またはベクトル積 (outer product)を返す。中置き演算子 × を用いて a×b と書くこともできる。 ×は、バックスラッシュ \\ に times と入力してから、TABキーを押すことによって入力できる。 かな漢字変換システムで入力できる「✕」 とは、別の文字である。外積 atimes b の向きは、a から b へ回転したとき、右ねじが進む方向である。外積 atimes b の大きさは、 a と b のなす角 theta を用いて、以下のように定義される。 これは、ベクトル a と b がなす平行四辺形の面積である。leftvert atimes brightvert = leftvertarightvert leftvertbrightvert sintheta"
},

{
    "location": "ch10.html#空間座標の基本単位ベクトル-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 空間座標の基本単位ベクトル",
    "category": "section",
    "text": "a=[1,0,0]\nb=[0,1,0]\nc=[0,0,1]\ncross(a,b)\n# a×b = c\na×b\n# b×c = a\nb×c\n# c×a = b\nc×a別の正規直交系の例a=[  1/2, 1/2+sqrt(2)/4, 1/2-sqrt(2)/4]\nb=[ -1/2, 1/2-sqrt(2)/4, 1/2+sqrt(2)/4]\nc=[  1/sqrt(2), -1/2, 1/2]\n# a×b = c\na×b\n# b×c = a\nb×c\n# c×a = b\nc×aベクトル３重積３つの空間ベクトルに対して、一般に、以下が成り立つ。atimes (b times c) = (acdotc)b - (acdot b)c例： 具体的なベクトルの例で、上式が成り立つことを示せ。a=[ -3,  1,  2 ]\nb=[  2, -3,  1 ]\nc=[  1,  2, -3 ]\n# 左辺\nlhs=a×(b×c)\n# 右辺\nrhs=(a⋅c)*b - (a⋅b)*c"
},

{
    "location": "ch10.html#行列の商（続き）-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 行列の商（続き）",
    "category": "section",
    "text": "行列 A と行列(またはベクトル) Yに対して、 商 A\\Y は、AX-Yの最小二乗ノルムが最小となる行列(または)ベクトル X を返す。 行列 Aが正則なら、Aの逆行列を左から Y に乗じた行列ないしベクトルと一致する。#\na=[ -3,  1,  2 ]\nb=[  2, -3,  1 ]\nw=[ a b ]\nc=[  1,  2, -3 ]\nv=w\\c\nw*v-c"
},

{
    "location": "ch10.html#行列の階数-(ランク)-1",
    "page": "第10回：行列・線形代数",
    "title": "▶ 行列の階数 (ランク)",
    "category": "section",
    "text": "関数 rank(a)は、行列 a の階数（ランク, rank）を返す。a=[  1/2, 1/2+sqrt(2)/4, 1/2-sqrt(2)/4]\nb=[ -1/2, 1/2-sqrt(2)/4, 1/2+sqrt(2)/4]\nc=[  1/sqrt(2), -1/2, 1/2]\nv = [a b c]\nrank(v)\n#\na=[ -3,  1,  2 ]\nb=[  2, -3,  1 ]\nc=[  1,  2, -3 ]\nv = [a b c]\nrank(v)"
},

{
    "location": "ch10.html#行列の固有値・固有ベクトル-1",
    "page": "第10回：行列・線形代数",
    "title": "▶︎ 行列の固有値・固有ベクトル",
    "category": "section",
    "text": "Ax = lambda xa=[4 1; 2 3]\nlam,v=eig(a)\na*v[:,1] - lam[1] * v[:,1]\na*v[:,2] - lam[2] * v[:,2]"
},

{
    "location": "ch10.html#今回のまとめ-1",
    "page": "第10回：行列・線形代数",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "ベクトルの内積\n行列の生成\n行列に対する関数\n行列とベクトルの演算\n行列と行列の演算\n部分行列\n2次元の回転行列"
},

{
    "location": "ch11.html#",
    "page": "第11回：ファイル入出力",
    "title": "第11回：ファイル入出力",
    "category": "page",
    "text": ""
},

{
    "location": "ch11.html#ch11-1",
    "page": "第11回：ファイル入出力",
    "title": "第11回：ファイル入出力",
    "category": "section",
    "text": ""
},

{
    "location": "ch11.html#画像と画像ファイル-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 画像と画像ファイル",
    "category": "section",
    "text": ""
},

{
    "location": "ch11.html#プロット寸法の調整-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ プロット寸法の調整",
    "category": "section",
    "text": "PyPlotパッケージで描くグラフの寸法を調整する方法を紹介する。描画範囲を指定するには、命令 plt[:figure](figsize=(x,y)) を用いる。 x と y には、横 x と 縦 y の寸法を、インチ単位で指定する。 1 inch = 25.4 mm である。以下の例では、描画範囲を、横と縦をどちらも 80 mm に変更する。using PyPlot\nclf() #hide\n# plt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplt[:figure](figsize=(80./25.4, 80./25.4))\nplot([0,1,2])\nplot([2,1,0])\nsavefig(\"ch11-plot1.svg\"); nothing # hide(Image: )軸の位置、あるいは、軸の周囲の余白(margin)の割合を指定するのは少し手間がいる。 まず、関数 plt[:figure]() を用いて fig オブジェクトを得てから、 fig オブジェクトに対して fig[:subplots_adjust]() を適用する。fig[:subplots_adjust]() では、キーワード引数 left, right, top, bottom を用いる。横方向では、left= で左軸の位置(割合)を、right=で、右軸の位置(割合)を指定する。 この指定では、描画範囲の左端を 0、右端を 1 とする。縦方向では、bottom= で下軸の位置(割合)を、top=で、上軸の位置(割合)を指定する。 この指定では、描画範囲の下端を 0、上端を 1 とする。下の例では left=0.2, right=0.9, bottom=0.2, top=0.9 としたので、 左と下の軸を各々の端から 20 % に、右と上の軸を各々の端から 10 % に配置する。using PyPlot\nclf() #hide\n; #hide\nfig=plt[:figure](figsize=(6.4,4.8))\nfig[:subplots_adjust](left=0.2, right=0.9, bottom=0.2, top=0.9)\nax=fig[:add_subplot](111)\nax[:plot]([0,1,2])\nax[:plot]([2,1,0])\nsavefig(\"ch11-plot2.svg\"); nothing # hide(Image: )プロット寸法の指定と、余白の指定を組み合わせると、左右または上下の軸の間隔を寸法で指定できる。下の例では、左右および上下の軸の間隔を 80 mm と指定する。using PyPlot\nclf() #hide\n# plt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nm_left=0.2; m_right=0.9; m_bottom=0.2; m_top=0.9\nfx=80.0/(m_right-m_left)\nfy=80.0/(m_top-m_bottom)\nfig=plt[:figure](figsize=(fx/25.4, fy/25.4))\nfig[:subplots_adjust](left=m_left, right=m_right, bottom=m_bottom, top=m_top)\nax=fig[:add_subplot](111)\nax[:plot]([0,1,2])\nax[:plot]([2,1,0])\nax[:set_xlim](0,2)\nax[:set_ylim](0,2)\nsavefig(\"ch11-plot3.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch11.html#ファイル名・パス名・拡張子-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ ファイル名・パス名・拡張子",
    "category": "section",
    "text": "Windows, MacOS, Linux など、多くのオペレーティング・システム (OS; Operating System) では、 フォルダ(folder)あるいはディレクトリ(directory)と呼ばれる階層構造の中に、ファイルを格納する。ファイルが格納されたフォルダーは、「ファイルの属性」で調べることができる。Windows10 のデスクトップ・アプリケーション「ペイント」で適当な絵を描いて、PNG形式で image1.png という名前でデスクトップに保存しよう。ファイル image1.png をデスクトップ上で選んで右クリック、「プロパティ」メニューを選ぶと、そのファイルの属性（プロパティ, property）が表示される。「場所」という属性に、このファイルが格納されたフォルダが表示される。 Windows 10では　c:¥Users¥hs¥Desktop というフォルダ名は、ユーザ名 hs のデスクトップである。 このファイルの完全な名前 (絶対パス absolute path; あるいはフルパス full path)は  c:¥Users¥hs¥Desktop¥image1.png である。このファイルの名前は、.png で終わっている。この部分は、ファイルの種類を示しており、拡張子と呼ばれる。(Image: )note: Note\nデスクトップやエクスプローラでは、いくつかの拡張子が表示されない設定になっている場合がある。 拡張子を表示するには、次のようにする。「コントローラ・パネル」から「エクスプローラ・オプション」を開く\n「表示」タブを選択\n「登録されている拡張子は表示しない」のチェックを外す\n下の「OK」ボタンを押すと、この設定が適用される(Image: )"
},

{
    "location": "ch11.html#画像ファイルの保存-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 画像ファイルの保存",
    "category": "section",
    "text": "関数 savefig(fn) は、PyPlotパッケージで描いた直近のグラフをファイル名 fn として保存する命令である。以下では、ch11-image1.png という名前でファイルが作成・保存する。 拡張子 .png の指定で、 PNG画像ファイルが作成される。同じ名前のファイル名が存在しても警告されず、上書きされる。using PyPlot\nclf() #hide\n# plt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplt[:figure](figsize=(80./25.4, 80./25.4))\nplot([0,1,2])\nplot([2,1,0])\nsavefig(\"ch11-image1.png\")(Image: )note: Note\n「相対パスと絶対パス」フォルダあるいはディレクトリの区切りに使われる文字は OS毎に異なるが、 Julia言語では、OSに依らずスラッシュ文字 / で区切ることになっている。上の例のように、フォルダを指定せずに、ファイル名のみ指定する場合を相対パス (relative path)による指定という。相対パスでは、現在の作業フォルダ（working folder、あるいは、カレント・フォルダ, current folder)の下に、ファイルが保存される。現在の作業フォルダは、関数 Base.pwd() で得られる。(print working directory)Base.pwd()  # 各自異なる場合があるカレント・フォルダを変更するには、関数 Base.cd() を用いる。(change working directory)ユーザ名 hs のデスクトップは、Windows 10 や MacOS のどちらでも /Users/hs/Desktop というフォルダ名であるので、 ユーザ名 hsのユーザが、作業フォルダーをデスクトップに変更するには、Base.cd(\"/Users/hs/Desktop\")  # 各自の環境に応じて書き換えることとする。これに対して、savefig( \"/Users/hs/Desktop/ch11-image1.png\" ) のように、 絶対パス (absolute path)でファイル名を指定してもよい。note: Note\n「保守的なファイル名を使おう」ファイル名やフォルダー名（ディレクトリ名）に用いられる文字の種類は、 OS やネットワーク・システムにより異なる。 ファイル名の「文字化け」を避けるために、ファイル名は、以下のように選んでおくことを勧める。ファイル名を、半角の英数字およびマイナス記号 - のみで構成する。拡張子の直前の文字として ピリオド . を用いる。\n拡張子の前に半角のピリオド . を用いてもよい。\n半角の英大文字と英小文字は区別されないとする。"
},

{
    "location": "ch11.html#画像ファイルの種類-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 画像ファイルの種類",
    "category": "section",
    "text": "画像ファイルの形式は、大きく分けてビットマップ画像とベクトル(またはベクタ)画像に大別できる。ビットマップ画像 (bitmap image) は、画素 (pixel) の集合として画像を格納するファイル形式である。JPEGファイル (拡張子 JPG) は、写真画像によく用いられる。圧縮率は高いが、元の画像を復元しない場合がある。\nGIFファイル。256色までの画像を表現できる。複数の画像を格納でき、アニメーションを表示できる。\nPNGファイル。より多数の色を表現できる。元の画像に劣化がなく復元できる。ベクトル画像 (vector image) は、直線や円などの図形の組合せとして画像を格納するファイル形式である。EPS (Encapsulated PostScript)\nPDF (Portable Document Format)\nSVG (Scalable Vector Graphics)\nWMF (Windows Metafile)"
},

{
    "location": "ch11.html#画像ファイルの保存オプション-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 画像ファイルの保存オプション",
    "category": "section",
    "text": "関数 savefig(fn) には、いくつかのキーワード引数がある。format=\"...\" : 画像ファイル形式を指定する (ファイル拡張子よりも、こちらの引数が優先される)\ndpi=数字 : 画像の解像度を、数字で指定する\ntransparent=true : 白背景を透明にするusing PyPlot\nclf() #hide\n# plt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplt[:figure](figsize=(80./25.4, 80./25.4))\n; #hide\nplot([0,1,2])\nplot([2,1,0])\nsavefig(\"ch11-image2.png\", format=\"png\", dpi=300, transparent=true)(Image: )note: Note\n上の画像ファイル ch11-image2.png は、一つ上の画像ファイル ch11-image2.png  と同じ内容であるが、Webブラウザ上では、前者の方が大きく見える。これは、Webブラウザ上では、画素 (ピクセル, pixel)の単位でしか、画像の寸法を指定できないためである。note: Note\ndpi (dots per inch) は、画像の解像度であり、1インチ内の画素数を示す。粗い Webページの画像は 100 dpi 程度である。\n低品位・中品位の印刷物の画像は 150 dpi 程度である。\nオフィス向けプリンタの解像度は 300 から 600 dpi 程度である。\n高品位な出版物では、最低 600 dpi を求められる。"
},

{
    "location": "ch11.html#テキストファイルの作成・書き込み-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ テキストファイルの作成・書き込み",
    "category": "section",
    "text": "この節では、テキストファイルを作成し、テキストを書き込む方法を説明する。 一般のテキストファイルの拡張子は、txt である。テキストファイルを作成するには、関数 open と close を組で用いる。関数 open( fn, \"w\") は、ファイル名 fn のファイルを作成し、 テキストを書き込む準備を行う。ファイル fn は、既に存在していてもよい。その場合は、既に書き込まれた内容は廃棄される。ファイルが作成できない場合には例外が発生する。関数 open は、ファイル記述子 f を返す。 関数 print(f, s) は、ファイル記述子 f で指定されたファイルに文字列 s を書き込む。 関数 println(f, s) は、ファイル記述子 f で指定されたファイルに文字列 s を書き込んだ後に開業する。書き込みが終わったら、関数 close(f) を呼び出し、書き込みを終了する。f = open( \"hello1.txt\", \"w\")\nprint(f,\"Hello\")\nprintln(f,\" again.\")\nclose(f)上のプログラムを実行したら、Windows10のエクスプローラを用いて、 ファイル hello1.txtが作成されたことを確かめよ。 更に、「メモ帳」アプリを起動し、テキストが正しく書き込まれていることを確認せよ。 (※ MacOSの場合は、「ファインダー」アプリと、「テキスト・エディット」アプリに読み替えよ)上と同じ処理は、do...end 構文を用いて書くこともできる。endが終わると関数 close(f) が暗黙的に呼ばれる。open( \"hello1.txt\", \"w\") do f\n  print(f,\"Hello\")\n  println(f,\" again.\")\nend"
},

{
    "location": "ch11.html#書式付き出力-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 書式付き出力",
    "category": "section",
    "text": "関数 @print(fmt, x) は、x を 書式 fmt に従って印字する。 書式文字列 fmt は、C言語の printf関数で用いられる書式と、ほぼ同じである。なお、Jupyter notebookでは、結果が右寄せされて表示されない場合がある。書式文字列 %i は、整数を印字する。i の前に整数(フィールドサイズ)を付けると、その整数の幅で右寄せされて印字される。指定されたフィールドサイズで収まらない場合には、幅を増やして印字される。\nフィールドサイズを 0 で始めると、空白が 0 で埋められる。\nフィールドサイズの前に + を付けると、非負の数の前に + 符号がつく。@printf( \"%5i\\n\", -41 )\n@printf( \"%05i\\n\", 413 )\n@printf( \"%+5i\\n\", 413 )\n@printf( \"%+5i\\n\", -413 )\n@printf( \"%+05i\\n\", -413 )\n@printf( \"%+5i\\n\", -41131 )書式文字列 %f は、小数を印字する。f の前に整数(フィールドサイズ)を付けると、その整数の幅で右寄せされて印字される。指定されたフィールドサイズで収まらない場合には、幅を増やして印字される。\nフォールドサイズに続けて、ピリオド . と整数を付けると、小数点以下の桁数を指定する。指定された小数点以下桁数で表されない場合には、丸められる。\nフィールドサイズを 0 で始めると、頭の空白が 0 で埋められる。\nフィールドサイズの前に + を付けると、非負の数の前に + 符号がつく。\nInf と NaN は、その通り印字される。@printf( \"%8.3f\\n\", -2e-2 )\n@printf( \"%08.0f\\n\", -0.252 )\n@printf( \"%8.1f\\n\", -0.252 )\n@printf( \"%08.2f\\n\", -0.252 )\n@printf( \"%8.3f\\n\", -0.252 )書式文字列 %e は、指数形式で印字する。e の前に整数(フィールドサイズ)を付けると、その整数の幅で右寄せされて印字される。フィールドサイズで収まらない場合には、幅を増やして印字される。\nフォールドサイズに続けて、ピリオド . と整数を付けると、小数点以下の桁数を指定する。指定された小数点以下桁数で表されない場合には、丸められる。\nフィールドサイズを 0 で始めると、頭の空白が 0 で埋められる。\nフィールドサイズの前に + を付けると、非負の数の前に + 符号がつく。\nInf と NaN は、その通り印字される。@printf( \"%11.5e\\n\", -0.0078125 )\n@printf( \"%12.4e\\n\", -0.0078125 )\n@printf( \"%13.3e\\n\", -0.0078125 )\n@printf( \"%13.2e\\n\", -0.0078125 )\n@printf( \"%13.1e\\n\", -0.0078125 )書式文字列 %s は、文字列形式で印字する。s の前に整数(フィールドサイズ)を付けると、その整数の幅で右寄せされて印字される。フィールドサイズで収まらない場合には、幅を増やして印字される。@printf(\"%8s\\n\", \"Hello\")\n@printf(\"%8s\\n\", \"Hello world\")書式は復数使用してもよい。書式があるのに、印字すべき値がないと例外が発生する。\n書式を指定しない文字は、そのまま印字される。\n\\n は改行文字を表す。\n\\t はタブ(TAB)文字を表す。@printf( \"%.1f %15.7e\\n\", 0.025,-0.0078125 )\n@printf( \"x=%.1f        y=%15.7e\\n\", 0.025,-0.0078125 )\n# 引数が足りない例\n@printf( \"%.1f %15.7e\\n\", 0.025 )"
},

{
    "location": "ch11.html#書式を指定して、テキストファイルに書き込む。-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 書式を指定して、テキストファイルに書き込む。",
    "category": "section",
    "text": "正規乱数 10 個からなるCSVファイルを書き出そう。 関数 @printf の第一引数に、ファイル記述子 f を入れると、f で示されたファイルに印字される。open( \"test1.txt\", \"w\")　 do f\n  for i in 1:10\n    @printf(f, \"%15.7f\\n\", randn())\n  end\nend上のプログラムを実行したら、「メモ帳」アプリを起動し、数字が指定された書式で正しく書き込まれたことを確認せよ。 更に、「Excel」アプリを起動し、このファイルを1列のデータとして読み込んでみよ。"
},

{
    "location": "ch11.html#CSVファイルへの書き込み-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ CSVファイルへの書き込み",
    "category": "section",
    "text": "カンマ , で区切られた値が並ぶ行から構成されるテキストファイルを CSV (Comma Separated Value) ファイルという。 表計算ソフトウエアとのデータの輸入輸出によく用いられる。 拡張子は csv である。関数 @printf を用いて、整数と浮動小数点数をカンマで区切った行を書き出そう。なお、CSVファイルの1行目に、カンマ , で区切られた文字列を、各列の表題として書くことが多い。open( \"test2.csv\", \"w\")　 do f\n  println(f, \"i,x\")\n  for i in 1:10\n    @printf(f, \"%i,%15.7f\\n\", i, randn())\n  end\nend上のプログラムを実行したら、「メモ帳」アプリを起動し、CSVファイルが正しく書き込まれていることを確認せよ。 更に、「Excel」アプリを起動し、2列のデータとして読み込んでみよ。"
},

{
    "location": "ch11.html#テキストファイルからの読み込み-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ テキストファイルからの読み込み",
    "category": "section",
    "text": ""
},

{
    "location": "ch11.html#テキストファイルからの行単位の読み込み-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ テキストファイルからの行単位の読み込み",
    "category": "section",
    "text": "関数 open( fn ) は、ファイル名 fn のファイルをテキストとして、読み込む準備を行う。 ファイル fn が読み込めない場合には例外が発生する。テキストファイルを読み込むためにも、関数 open と close を組で用いる。以下のプログラムは、テキストファイルから、１行ずつ読み込み、それを印字する。関数 eachline(f) は、ファイル記述子 f からテキストを読み込み、行に分割する。このとき、行末の改行文字は取り除かれる。f=open(\"hello1.txt\")\nfor line in eachline(f)\n  print(line)\nend\nclose(f)書き込みの場合と同様、do...end 構文を用いて書くこともできる。endが終わると関数 close(f) が暗黙的に呼ばれる。open( \"hello1.txt\" ) do f\n  for line in eachline(f)\n    print(line)\n  end\nend"
},

{
    "location": "ch11.html#文字列から数に変換する-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 文字列から数に変換する",
    "category": "section",
    "text": "文字列を数に変換するには、関数 parse(t, s)を用いる。 第一引数には変換先の型を、第二引数には、変換したい文字列を書く。文字列の前後の空白は無視される。parse(Float64, \" 12.3\")\nparse(Float64, \" 12.3e-2 \")\nparse(Int64, \" 123 \")\n# 変換できない例\nparse(Int64, \" 12.3 \")上のプログラムで作成したファイル test1.txt から 1行ずつ読み込み、浮動小数点数に変換して印字してみよう。open( \"test1.txt\" ) do f\n  for line in eachline(f)\n    x=parse(Float64, line)\n    @printf(\"%15.7f\\n\", x)\n  end\nend"
},

{
    "location": "ch11.html#文字列を分割する-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 文字列を分割する",
    "category": "section",
    "text": "関数 split(s, c)　は、文字列を分割する。 第一引数の文字列 s を、第二引数の文字列のどれか一つの文字が出現したら分割する。結果として、文字列を要素とする配列が返される。英文テキストを、空白で区切る。split(\"one cup of brown suger\", \" \")行をカンマで区切って、それぞれ整数と浮動小数点数に変換する。line=\"   15  , 0.2401863\"\ns=split( line, \",\" )\nparse( Int64, s[1])\nparse( Float64, s[2])上のプログラムで作成した test2.csv を読み込み、各行を整数と浮動小数点数に変換し、印字する。 ただし、1行目は読み飛ばす。open( \"test2.csv\" ) do f\n  i=0\n  for line in eachline(f)\n    i += 1\n    i == 1 && continue\n    s=split(line, \",\")\n    x=parse(Int64, s[1])\n    y=parse(Float64, s[2])\n    @printf(\"%5i %15.7f\\n\", x, y)\n  end\nend"
},

{
    "location": "ch11.html#配列に要素を加える-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ 配列に要素を加える",
    "category": "section",
    "text": "関数 push!(a,x) は、配列 a に、値 x を付け加える。配列 a は書き換えられる。# Int64 を要素とする配列\nxs=[1,2]\npush!(xs, 3)\nxs\npush!(xs, 4)\nxs要素がない配列を作るには 関数 zeros(t, 0) を使えばよい。 第一引数 t は、作成する配列の要素である。以下では、Float64型の配列 (要素数 0)を最初に作成した。xs=zeros(Float64,0)\npush!(xs, 1.0)\nxs\npush!(xs, 2.0)\nxs"
},

{
    "location": "ch11.html#CSVファイルから配列を作る-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ CSVファイルから配列を作る",
    "category": "section",
    "text": "以上を組合せて、CSVファイルを読み込み、値を配列としてまとめることができる。xs=zeros(Int64,0)\nys=zeros(Float64,0)\n\nopen( \"test2.csv\" ) do f\n  i=0\n  for line in eachline(f)\n    i += 1\n    i == 1 && continue\n    s=split(line, \",\")\n    x=parse(Int64, s[1])\n    push!(xs, x)\n    y=parse(Float64, s[2])\n    push!(ys, y)\n  end\nend\n@show xs\n@show ys続けて、データをプロットすると、using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(ys, \".\")\nsavefig(\"ch11-csv1.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch11.html#CSVパッケージ-1",
    "page": "第11回：ファイル入出力",
    "title": "▶ CSVパッケージ",
    "category": "section",
    "text": "CSVパッケージを用いると、CSVファイルを容易に扱うことができる。CSVパッケージを導入していない場合は導入する。Pkg.update()\nPkg.add(\"CSV\")CSVパッケージに定義されている関数 CSV.read(fn) を用いると、CSVファイル fn を読み込むことができる。 結果として、拡張された配列 (DataFrame型)が返される。# CSV\nusing CSV\ndf=CSV.read(\"test2.csv\")\n# 1番目のデータ配列\n@show df[1]\n# 2番目のデータ配列\n@show df[2]\n#\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot( df[2], \".\")データをプロットした結果は、上と同じである。"
},

{
    "location": "ch11.html#今回のまとめ-1",
    "page": "第11回：ファイル入出力",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "PyPlotパッケージで描いた画像\n画像寸法の調整\n画像のファイルへの保存\n文字列の扱い\n書式付き出力\n文字列の分割\n文字列から数への変換\n配列に要素を加える\nテキストファイル\n書き込み\n読み込み\nCSVファイル"
},

{
    "location": "ch12.html#",
    "page": "第12回：関数の定義と呼び出し",
    "title": "第12回：関数の定義と呼び出し",
    "category": "page",
    "text": ""
},

{
    "location": "ch12.html#ch12-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "第12回：関数の定義と呼び出し",
    "category": "section",
    "text": ""
},

{
    "location": "ch12.html#関数の定義と呼び出し-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 関数の定義と呼び出し",
    "category": "section",
    "text": "■ 関数の定義 (代入文形式) の節で、代入文形式のユーザ関数の定義を紹介した。 この節では、より一般的な扱いを説明する。より広い意味では、一連のプログラム片に名前を付けたものが、関数 (function) である。"
},

{
    "location": "ch12.html#関数の定義と呼び出し：引数がない場合-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 関数の定義と呼び出し：引数がない場合",
    "category": "section",
    "text": "以下は、Hello という文字を印字する関数の定義を示す。関数定義は、キーワード function で始まり、その後に関数名を書く。 呼び出す際に、渡すべき値がなければ、関数名の後に、括弧・閉じ括弧 () を書くだけである。処理を記述した後、キーワード end で終わる。function hello()\n  println(\"Hello\")\nendこの関数を呼び出すには、関数名に続けて () を書けばよい。hello()\nhello()"
},

{
    "location": "ch12.html#関数の定義と呼び出し：引数がある場合-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 関数の定義と呼び出し：引数がある場合",
    "category": "section",
    "text": "関数を呼び出す際に、渡す値がある場合は、関数名の後に、 括弧 () で囲んで、変数名 (仮引数(「かり・ひきすう」 parameter )の並びを書く。function hello(name)\n  print( \"Hello \")\n  println( string(name))\nendこの関数を呼び出すには、関数名に続けて () に囲んで、具体的な値（実引数「じつ・ひきすう」argument)を書く。 関数の定義の中に出現した仮引数は、実引数の値に置き換えられる。hello( \"world\")\nhello( \"the Earth\")\nhello()\n# 例外: 実引数 2つ\nhello( \"world\", \"the Earth\" )関数 hello に対して、引数が 0個の場合の定義と、引数が 1個の場合の定義の２つが紐(ひも)ついている。 関数呼び出しにおける引数の数に応じて、対応する関数が実行される。 上の最後の例のように、対応する関数定義が見つからなければ、例外が発生する。"
},

{
    "location": "ch12.html#円を描く関数を作る-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶ 円を描く関数を作る",
    "category": "section",
    "text": "PyPlotパッケージを読み込んだ状況で、円を描く関数を作成する。引数は、円の中心座標 cx, cy、円の半径 r、線の色 col とする。function draw_circle(cx,cy,c,r)\n  t=0:pi/18:2pi\n  xs=cx+r*cos.(t)\n  ys=cy+r*sin.(t)\n  plot(xs,ys, color=c)\nend５つの円を描いてみよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr=1\ns=1.1\ndraw_circle(   0,  s, \"k\", r)\ndraw_circle(  -s,  0, \"y\", r)\ndraw_circle( -2s,  s, \"b\", r)\ndraw_circle(   s,  0, \"g\", r)\ndraw_circle(  2s,  s, \"r\", r)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch12-mark1-plot.svg\"); nothing # hide(Image: )全ての軸を描画しないようにするには、上に続けて plt[:axis](\"off\") を実行すればよい。plt[:axis](\"off\")\nsavefig(\"ch12-mark2-plot.svg\"); nothing # hide(Image: )note: Note\nオリンピックのシンボルマークは、知的財産権が厳しく保護されていることに留意されたい。"
},

{
    "location": "ch12.html#仮引数の既定値-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 仮引数の既定値",
    "category": "section",
    "text": "仮引数に続けて =値 を書くことで、既定の値を設定できる。 関数呼び出しで、該当する引数を省略して関数を呼び出した場合には、既定の値が用いられる。関数 draw_circle で、最後の引数 rの既定値を 1に設定した。function draw_circle(cx,cy,c,r=1)\n  t=0:pi/18:2pi\n  xs=cx+r*cos.(t)\n  ys=cy+r*sin.(t)\n  plot(xs,ys, color=c)\nend関数 draw_circle を３つの引数で呼び出した場合には、r=1 として呼び出したとみなされる。r=1\ns=1.1\ndraw_circle(   0,  s, \"k\" )\ndraw_circle(  -s,  0, \"y\" )\ndraw_circle( -2s,  s, \"b\" )\ndraw_circle(   s,  0, \"g\" )\ndraw_circle(  2s,  s, \"r\" )"
},

{
    "location": "ch12.html#関数の戻り値-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 関数の戻り値",
    "category": "section",
    "text": "関数を実行した結果の値を、呼び出し側で使いたい場合は、しばしばある。関数定義において、最後に評価した値が、関数の戻り値 (return-value)となる。■ 関数の定義 (代入文形式) を用いても、数 x を 3倍する関数を定義すると、以下のようになる。triple(x)=3*xこれをより一般の形式で書くと、以下のようになる。最後に評価した 3*x が関数の戻り値となる。function triple(x)\n  3*x\nendtriple(-1)"
},

{
    "location": "ch12.html#return-キーワード-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ return キーワード",
    "category": "section",
    "text": "キーワード return 式　は関数内で用いられると、直ちに関数から抜ける（戻る）ことを指示する。 この際、式の結果が関数の戻り値となる。上の関数は、以下のようにも書ける (が、冗長である)。function triple(x)\n  return 3*x\nendまた、数 x の絶対値を求める関数を自前で書いてみると、以下のようになる。function myabs(x)\n  if x < 0\n    return -x\n  else\n    return x\n  end\nendmyabs(-1)note: Note\n上の myabsは■ 3項演算子を用いて、以下のように書いてもよい。myabs(x)= x<0 ? -x : x"
},

{
    "location": "ch12.html#局所変数-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 局所変数",
    "category": "section",
    "text": "関数内部で代入した変数 (局所変数, local variables)は、その関数内部でのみ生きている。下の例で、関数 triple 内部で代入した tは、関数 triple のみで生きている。 コマンドラインで定義した変数 t は、関数 triple の局所変数 t とは別物であり、関数呼び出し後も値は変わっていない。 コマンドラインで定義した変数 t の方を、全域変数 (global variables)ともいう。t=4\n\nfunction triple(x)\n  t=3\n  t*x\nend\n\ntriple(2)\n@show t;"
},

{
    "location": "ch12.html#ヘロンの公式を関数にする-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶ ヘロンの公式を関数にする",
    "category": "section",
    "text": "ヘロンの公式 (Heron\'s formula) によれば、 3辺の長さが a b c である三角形の面積はbeginalign*  sqrts(s-a)(s-b)(s-c) s  =fraca+b+c2endalign*で与えられる。ヘロンの公式を用いて、三角形の面積を返す関数を定義してみる。function heron(a,b,c)\n  s=(a+b+c)/2\n  r=s*(s-a)*(s-b)*(s-c)\n  if r < 0\n    return 0.0\n  end\n  sqrt(r)\nend三辺 a b cから三角形を作ることができない場合には、平方根の中身が負になる。 このときは、面積として 0 を返すことにする。実行してみよう。heron(3,4,5)\n# 三角形ができない場合\nheron(3,3,7)"
},

{
    "location": "ch12.html#方形波のフーリエ級数和を関数にする-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶︎ 方形波のフーリエ級数和を関数にする",
    "category": "section",
    "text": "方形波をフーリエ級数の和として計算する方法を、▶︎ 方形波：フーリエ級数の有限和 の節で、紹介した。 時刻の配列 ts における方形波を、奇数 n までのフーリエ級数和として計算する関数を書いてみる。function square(ts,n)\n  ys=zeros(ts)\n  for i in 1:2:n\n    ys += sin.(i*ts)/i*4/pi\n  end\n  ys\nend実行してみよう。@show square( (0:6)*pi/4 , 13);級数和の上限 n を変えて、グラフをプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=-74*pi/36:pi/36:74*pi/36\nplot(ts, sign.(sin.(ts)), label=\"square wave\" )\n\nfor n in [ 5, 9, 13]\n  plot(ts, square(ts, n), label=\"up to \"*string(n) )\nend\nlegend(loc=\"center right\")\n\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-2pi,-pi,0, pi, 2pi ],\n        [L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\" ])\n\nsavefig(\"ch12-sqwave-plot1.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch12.html#練習-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀ 練習",
    "category": "section",
    "text": "上の関数 square を以下のように改良せよ。n が偶数の場合でも、適切な解釈に基づき動作するようにせよ。\nn が 3よりも小さい場合は n=13 とせよ。"
},

{
    "location": "ch12.html#Riemann和の計算を関数にする-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶︎ Riemann和の計算を関数にする",
    "category": "section",
    "text": "関数の定積分の近似値を、短冊の面積の和として計算する方法を ▶︎ Riemann和（繰り返しで加算)の節で、紹介した。 関数 f、定積分の範囲 a, b、分割数 n を引数として、Rienmann和を計算する関数を書いてみる。function riemann_sum(f,a,b,n)\n  xs=linspace(a,b,n+1)\n  d=(b-a)/n\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  s1\nend実行してみよう。g(x)=1/(1+x)\na=0; b=1\n@show riemann_sum(g,a,b,2^10);分割数を変えてみる。for m=8:13\n  @show m, riemann_sum(g,a,b,2^m);\nend\n@show log(2);"
},

{
    "location": "ch12.html#練習-2",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀ 練習",
    "category": "section",
    "text": "上の例で、相対誤差をプロットせよ。"
},

{
    "location": "ch12.html#練習-3",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀▶︎ 練習",
    "category": "section",
    "text": "上の関数 riemann_sum を、以下のように改良せよ。n  1 の場合には、ただちに 0 を返すようにせよ。\nn  1 の場合には、n=4 として、計算せよ。\na  b の場合には、上限と下限を交換してから計算せよ。ヒント：変数 a b の値を交換するには、同時代入 ba=ab を用いよ。"
},

{
    "location": "ch12.html#モンテカルロ法による平面図形の面積の近似値を関数にする-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶︎ モンテカルロ法による平面図形の面積の近似値を関数にする",
    "category": "section",
    "text": "平面内のある領域の面積の近似値をモンテカルロ法で求める方法を、▶︎ モンテカルロ法による平面図形の面積の推定 で紹介した。範囲を表す関数 f、点の数 n を引数として、モンテカルロ法で面積の近似値を計算する関数を書いてみる。 関数 f は、平面座標 x,yを引数にして、(x,y) が図形の内部なら真 trueを、内部でなければ偽 false を返すものとする。 なお、図形の範囲は、x座標、y座標とも、0から1までの範囲とする。function montecarlo(f,n)\n  s=0\n  for i=1:n\n    x=rand()\n    y=rand()\n    if f(x,y)\n      s += 1\n    end\n  end\n  s/n\nend四分円に対して、実行してみよう。quadrant(x,y)= x*x+y*y < 1\nn=2^8\n@show n, montecarlo(quadrant, n), pi/4点の数を変えてみる。for m=1:10\n  n=2^m\n  @show n, montecarlo(quadrant, n);\nend今度は、二つの不等式 y<x と y<1−x の両方に囲まれる領域の面積を推定しよう。tri1(x,y)= y < x && y < 1-x\nn=2^8\n@show n, montecarlo(tri1, n)点の数を変えてみる。for m=4:12\n  n=2^m\n  @show n, montecarlo(tri1, n);\nend\n@show 1/4"
},

{
    "location": "ch12.html#練習-4",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀ 練習",
    "category": "section",
    "text": "上の２つの例で、相対誤差をプロットせよ。"
},

{
    "location": "ch12.html#練習-5",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀▶︎ 練習",
    "category": "section",
    "text": "上の関数 montecarlo を、以下のように改良せよ。n le 1 の場合には、n=2^8 として、計算せよ。"
},

{
    "location": "ch12.html#関数から複数の値を返す-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 関数から複数の値を返す",
    "category": "section",
    "text": "■ タプル の小節で、関数 divrem のように、複数の値を返す関数があることを紹介した。Multiple Return Valuesユーザ関数から複数の値を返すには、関数定義の最後に評価する式において、カンマ , で区切って復数の式を書けばよい。 この関数の戻り値は、■ タプル となる。function one_two()\n  1,2\nend\n\n@show one_two()x,y=one_two()\n@show x,y"
},

{
    "location": "ch12.html#「はさみうち」法による、方程式の求解を関数にする-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶︎ 「はさみうち」法による、方程式の求解を関数にする",
    "category": "section",
    "text": "「はさみうち」法を用いて、方程式の解の存在範囲を狭めていく方法を、▶︎ 「はさみうち」法による、方程式の求解 で紹介した。求めるべき方程式 f、解の存在範囲の下限 a、および 上限 b を引数として、より狭い解の存在範囲の下限と上限を返す関数を書いてみる。function bisect(f,a,b)\n  c=(a+b)/2\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\n  a,b\nendg(x)=x^3+3x^2-4*x-12\na=-3.2; b=-2.6\n\nfor i=1:10\n  @show a, b, b-a, g(a), g(b)\n  a,b=bisect(g,a,b)\nend"
},

{
    "location": "ch12.html#練習-6",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀ 練習",
    "category": "section",
    "text": "上の例で、解の存在範囲が狭くなる様子をプロットせよ。\n異なる解の存在範囲に対して、「はさみうち」法を実行せよ。"
},

{
    "location": "ch12.html#引数の型の指定-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 引数の型の指定",
    "category": "section",
    "text": "関数定義の仮引数には ::型 という形式で、仮引数の型を指定できる。 関数呼出しの際、実引数の型と仮引数の型が一致する関数が呼び出される。 この仕組を、多重ディスパッチ (multiple dispatch)という。型が指定されていない仮引数は、Any型とみなされ、あらゆる実引数の型と一致する。個別の仮引数に対応する関数は、メソッドと呼ばれる。例で説明する。関数 mytest を、Int64型の引数に対してだけ定義しよう。function mytest(x::Int64)\n  println(string(x)*\" is of Int64 type\")\nendこの段階で、mytest(1) は上の関数が呼び出されるが、mytest(1.0) は呼び出されるべき関数が見つからず、例外が発生する。# 関数が呼び出される\nmytest(1)\n# 関数が呼び出されない\nmytest(1.0)関数 mytest を、Float64型の引数に対しても定義する。function mytest(x::Float64)\n  println(string(x)*\" is of Float64 type\")\nend\n\n# 今度は、上の関数が呼び出される\nmytest(1.0)しかし、mytest(\"a\") や mytest(\"[1]\") は呼び出されるべき関数が見つからず、例外が発生する。# 関数が呼び出されない\nmytest(\"a\")\n# 関数が呼び出されない\nmytest([1])更に、仮引数に型を指定しない関数を定義すれば、そちらが呼び出される。function mytest(x)\n  println(string(x)*\" is neither of Int64 type nor of Float64 type\")\nend\n\n# 今度は、上の関数が呼び出される\nmytest(\"a\")\n# 今度は、上の関数が呼び出される\nmytest([1])"
},

{
    "location": "ch12.html#階乗関数を定義する-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶ 階乗関数を定義する",
    "category": "section",
    "text": "1 から整数 n までの連続する整数の積を、階乗 (factorial)といい、n のように書く。$ 6 ! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$さらに、0 = 1 と定義する。階乗を計算する関数を定義しよう。 階乗関数は整数に対してのみ定義されるから、引数を整数型に限定しよう。 0よりも小さい整数に対して、階乗は定義されないが、1を返すことにする。function myfact1(n::Int64)\n  n <= 1 && return 1\n  r=1\n  for i=2:n\n    r *= i\n  end\n  r\nend正しく計算されることを確かめてみる。for n in 6:-1:-1\n  @show n, myfact1(n)\nend浮動小数点数や整数ベクトルに対して、関数 myfact1は未定義である。# 関数は未定義\nmyfact1(2.2)\n# 関数は未定義\nmyfact1([6,3])整数を要素とするベクトルに対して dot記法を用いて myfact1 を呼び出せば、 各要素に対して関数 myfact1 を呼び出した値のベクトルが得られる。myfact1.([6,5,4])note: Note\nJulia には、階乗関数 factorial(n) が組み込まれている。factorial(1)\nfactorial(2)\nfactorial(3)"
},

{
    "location": "ch12.html#再帰-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "▶ 再帰",
    "category": "section",
    "text": "階乗には n = n times (n-1) という性質がある。 すなわち、n は (n-1) を用いて定義される。これをプログラムで書く場合には、関数定義の中で自分自身を呼ぶ、これを再帰 (recursion) という。再帰を用いて、階乗を定義してみよう。function myfact2(n::Int64)\n  n <= 1 && return 1\n  n * myfact2(n-1)\nend正しく計算されることを確かめてみる。for n in 6:-1:-1\n  @show n, myfact2(n)\nend再帰呼出しを用いる場合には、計算が正しく終了する条件を設定する必要がある。"
},

{
    "location": "ch12.html#練習-7",
    "page": "第12回：関数の定義と呼び出し",
    "title": "◀ 練習",
    "category": "section",
    "text": "フィボナッチ(Fibonacci)数とは、以下の漸化式で定義される数列である。beginalign*F_0 = 0 F_1 = 1 F_n+2 = F_n+1+F_n endalign*整数 nに対してフィボナッチ数を計算する関数を再帰を用いて定義し、その動作を確かめよ。フィボナッチ数の最初の20個は、以下の通りである。0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946また、フィボナッチ数の一般項は、以下の式で与えられることが知られている。合わせて、計算してみよ。F_n = frac1sqrt5 left left(frac1+sqrt52right)^n - left(frac1-sqrt52right)^n rightnote: Note\n上で示した階乗やフィボナッチ数の例では、関数が呼ばれる毎に計算を行っており「もったいない」。 計算結果が一意 (一通り, unique) であるなら、計算した結果を記録しておき、同じ引数で再び呼び出されたときには、 記録から取り出してくれば計算資源が節約できる。このような考え方を「メモ化」という。この本文で説明した範囲でも、 ベクトルなどを用いて「メモ化」を実装できるであろう。"
},

{
    "location": "ch12.html#今回のまとめ-1",
    "page": "第12回：関数の定義と呼び出し",
    "title": "■ 今回のまとめ",
    "category": "section",
    "text": "関数\n定義\n呼出し\n戻り値\n仮引数の型\n再帰呼出し\n例題\nヘロンの公式\nフーリエ級数和の関数化\nモンテカルロ法の関数化\nはさみうち法の関数化\n階乗\nフィボナッチ数"
},

{
    "location": "ch13.html#",
    "page": "第13回：複素数",
    "title": "第13回：複素数",
    "category": "page",
    "text": ""
},

{
    "location": "ch13.html#ch13-1",
    "page": "第13回：複素数",
    "title": "第13回：複素数",
    "category": "section",
    "text": ""
},

{
    "location": "ch13.html#複素数を作る-1",
    "page": "第13回：複素数",
    "title": "■ 複素数を作る",
    "category": "section",
    "text": "以下では、x, y は Int64 型または Float64 型の数とする。関数 complex(x) は、実部が x の複素数を作る。\n関数 complex(x,y) は、実数部(実部)が x、虚数部(虚部) が y の複素数を作る。\n複素数の型は、実部と虚部の方に合わせて Complex{Int64} または Complex{Float64} となる。x y で Int64 と Float64 型が混在した場合には。後者になる。complex(1)\ncomplex(1.0)\ncomplex(1.0, -1.0)定数 im は虚数単位である。これは、complex(0,1) または complex(0.0,1.0) と同じ意味である。 複素数 x+iy を作るのに、以下のように書いてもよい （が、乗算と加算の演算を含むので、関数 complexを使うほうが好ましい )。1 - 1im\n1.0 - 1.0im"
},

{
    "location": "ch13.html#複素数と整数・浮動小数点数との四則演算-1",
    "page": "第13回：複素数",
    "title": "▶ 複素数と整数・浮動小数点数との四則演算",
    "category": "section",
    "text": "複素数と整数または浮動小数点数との四則演算は、演算子 +, -, *, / を用いる。z = complex(1,-1)\nz + 2\nz - 2\nz * 2\nz / 2零 0 による除算は、実部と虚部の各々で行われ、Inf ないし NaN の値となる。complex(1,0) / 0"
},

{
    "location": "ch13.html#複素数同士の四則演算-1",
    "page": "第13回：複素数",
    "title": "▶ 複素数同士の四則演算",
    "category": "section",
    "text": "複素数同士の四則演算にも、演算子 +, -, *, / を用いる。z = complex(1,-1)\nw = complex(2,-2)\nz + w\nz - w\nz * w\nz / w複素数を値とする変数に対して、更新演算子 +=, -=, *=, /= も使える。z *= w"
},

{
    "location": "ch13.html#複素数のベクトル-1",
    "page": "第13回：複素数",
    "title": "▶ 複素数のベクトル",
    "category": "section",
    "text": "整数または浮動小数点数のベクトルを作るのと同様な方法で、複素数のベクトルを作ることができる。[ complex(0,0), complex(1,0), complex(1,1) ]\n[ complex(i,2i) for i in -2:2 ]複素数の零 complex(0.0,0.0) を 5個含むベクトルを作るには、以下のように書けばよい。zeros( Complex{Float64}, 5)"
},

{
    "location": "ch13.html#複素数の実部・虚部・共役複素数-1",
    "page": "第13回：複素数",
    "title": "▶ 複素数の実部・虚部・共役複素数",
    "category": "section",
    "text": "関数 real(z) は複素数z の実数部(実部)を返す。\n関数 imag(z) は複素数z の虚数部(虚部)を返す。z = complex(1,-1)\nreal(z)\nimag(z)複素数ベクトルの各要素の実部ないし虚部を計算するには、dot記法を用いる。zs = [ complex(0,0), complex(1,0), complex(1,1), complex(0,1), complex(0,0)]\nreal.(zs)\nimag.(zs)関数 conj(z) は複素数 z の共役(きょうえき)複素数 (conjugate complex number) を返す。z = complex(1,-1)\nconj(z)"
},

{
    "location": "ch13.html#負の数に対する平方根-1",
    "page": "第13回：複素数",
    "title": "▶ 負の数に対する平方根",
    "category": "section",
    "text": "平方根 sqrt(x)は、負の実数 x に対して例外を出すが、引数を複素数の引数を与えれば計算できる。# 例外を出す\nsqrt(-1)\n# 計算できる\nsqrt(complex(-1))正負の実数に対して、平方根の実部と虚部をプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=-1:0.05:1\nzs=complex.(xs)\nsqzs=sqrt.(zs)\nplot(xs, real.(sqzs),　label=\"real part\")\nplot(xs, imag.(sqzs), label=\"imaginary part\")\nxlabel(\"x\")\nylabel(\"sqrt of x\")\nlegend()\nxlim(-1.5,1.5)\nylim(-1.5,1.5)\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-sqrt1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#2次方程式の解：一般の場合-1",
    "page": "第13回：複素数",
    "title": "◀　2次方程式の解：一般の場合",
    "category": "section",
    "text": "2次方程式 x^2-bx+c=0 の解を求める方法について、▶︎ 2次方程式 で紹介したが、実数解のみに留めていた。 以下では、複素数解を含めて求めてみる。係数 b=1 を一定とし、係数 c を -1 から 1の範囲で動かす。 一方の x_1 は、2次方程式の解の公式で求め、 他方の解は、係数と解の関係により求めよう。beginalign*x_1  =fracb+sqrtb^2-4c2  x_2  = fraccx_1endalign*using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nb=1\ncs=linspace(-2,2)\nds=complex(b.*b-4cs)\nx1s=(b+sqrt.(ds))/2;\nx2v=cs./x1s;\nplot(cs, real.(x1s), \"b-\", label=\"x1, real part\")\nplot(cs, imag.(x1s), \"b:\", label=\"x1, imag part\")\nplot(cs, real.(x2v), \"g-\", label=\"x2, real part\")\nplot(cs, imag.(x2v), \"g:\", label=\"x2, imag part\")\nlegend()\nxlabel(\"c\")\nxlim(-2.5,2.5)\nylim(-2.5,2.5)\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-sqrt2-plot.svg\"); nothing # hide(Image: )実部を実線で、虚部を点線で表した。定数 c の値により、解の形が異なる様子が観察できる。すなわち、範囲 c lt dfrac14 では実数解 (虚数部は零)\n範囲 c = dfrac14 では重解 dfrac12\n範囲 c gt dfrac14 では複素解 (共役複素数)"
},

{
    "location": "ch13.html#ガウス平面-1",
    "page": "第13回：複素数",
    "title": "▶ ガウス平面",
    "category": "section",
    "text": "複素数 x + i y は、平面上の点 (xy) と一対一に対応する。複素数を平面に表したものをガウス平面という。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nz = complex(1,1)\nw = complex(-2,1)\n\nplot( real(z), imag(z), \"b.\", label=\"z\")\nplot( real(w), imag(w), \"r.\", label=\"w\")\nlegend()\nxlabel(\"real part\")\nylabel(\"imag part\")\nxlim(-3,3)\nylim(-3,3)\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-gauss1-plot.svg\"); nothing # hide(Image: )複素数を要素とするベクトルをガウス平面にプロットして、図形を描こう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nzs = [ complex(0,0), complex(1,0), complex(1,1), complex(0,1), complex(0,0)]\n\nplot( real.(zs), imag.(zs), \".-\")\nxlabel(\"real part\")\nylabel(\"imag part\")\nxlim(-2,2)\nylim(-2,2)\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-gauss2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#複素数の絶対値と偏角-1",
    "page": "第13回：複素数",
    "title": "▶ 複素数の絶対値と偏角",
    "category": "section",
    "text": "関数 abs(z) は、複素数 z の絶対値 leftvertzrightvert を返す。\n関数 abs2(z) は、複素数 z の絶対値の2乗 leftvertzrightvert^2 を返す。\n関数 angle(z) は、複素数 z の偏角 anglez をラジアンで返す。結果(値域)は -pi から piである。これは、ガウス平面上で、複素数を極座標で表示したものに対応している。次の ▶ オイラーの公式 も参照。for z in [ 0, complex(1,1), 1im, complex(-1,1), -1, complex(-1,-1), -im,　complex(1,-1), ]\n  @show z, abs(z), angle(z)\nend"
},

{
    "location": "ch13.html#オイラーの公式-1",
    "page": "第13回：複素数",
    "title": "▶ オイラーの公式",
    "category": "section",
    "text": "実数 theta に対して、指数関数 expitheta　は、以下のように書き表される。これをオイラーの公式という。expitheta = costheta+ i sintheta指数関数は、複素数を引数とするように拡張されている。 expitheta をガウス平面上にプロットしよう。これは、単位円 (半径1)の円を描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nzs = [ exp(im*t) for t in 0:pi/18:2pi ]\n\nplot( real.(zs), imag.(zs), \".\")\nxlabel(\"real part\")\nylabel(\"imag part\")\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-cis1-plot.svg\"); nothing # hide(Image: )関数 cis(x) は、数 xに対して expi x を計算する。同じ結果が得られることを確認しよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nzs = [ cis(t) for t in 0:pi/18:2pi ]\nplot( real.(zs), imag.(zs), \"o\")\n\nzs = [ exp(im*t) for t in 0:pi/18:2pi ]\nplot( real.(zs), imag.(zs), \".\")\n\nxlabel(\"real part\")\nylabel(\"imag part\")\n\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-cis2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#ガウス平面内で回転させる-1",
    "page": "第13回：複素数",
    "title": "◀ ガウス平面内で回転させる",
    "category": "section",
    "text": "複素数に exp(i theta) を乗ずることは、ガウス平面上で、原点に対して、反時計方向に角度 theta だけ回転することに相当する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15 = cis(pi*15/180)\nzs = complex(1,1)\n\nfor i in 1:10\n  plot( [0, real.(zs)], [0, imag.(zs)], \".-\")\n  zs *= r15\nend\n\nxlabel(\"real part\")\nylabel(\"imag part\")\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\n\nxlim(-2,2)\nylim(-2,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-cis0-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#アルキメデスの渦を描く（複素数版）-1",
    "page": "第13回：複素数",
    "title": "◀ アルキメデスの渦を描く（複素数版）",
    "category": "section",
    "text": "実数 t に対して、複素数 z=t exp(i t) の軌跡を、ガウス平面上に描いてみよう。 これは、アルキメデスの渦である。参考 →  ▶︎ アルキメデスの渦を描くusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=linspace(0,4pi, 200)\nzs=ts.*exp.(im*ts)\nplot(real.(zs), imag.(zs) )\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-cis4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#複素数同士の乗算の意味-1",
    "page": "第13回：複素数",
    "title": "◀ 複素数同士の乗算の意味",
    "category": "section",
    "text": "複素数同士の乗算は、極座標で表示すると、その意味が明らかになる。オイラーの公式を使うと、複素数 z w は、その絶対値と偏角を用いて、以下のように書いて、beginalign*z = leftvertzrightvert exp(i anglez)  w = leftvertwrightvert exp(i anglew)endalign*複素数 z と w の積を求めると、次のようになる。zw = leftvertzrightvert leftvertwrightvert expleft( i left(anglez+anglewright)right)つまり、積 zw の絶対値は、2つの複素数の絶対値の積である。 また、積 zw の偏角は、2つの複素数の偏角の和である。まとめると、複素数同士の積は、ガウス平面上で拡大縮小と回転を同時に行う演算である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nz = 1*cis(pi/3)\nw = 2*cis(pi/4)\nzw=z*w\n\nplot( [0, real(z)], [0, imag(z)], \"r.-\", label=\"z\")\nplot( [0, real(w)], [0, imag(w)], \"b.-\", label=\"w\")\nplot( [0,real(zw)], [0,imag(zw)], \"g.-\", label=\"z*w\")\n\nzs = [ cis(t) for t in 0:pi/18:2pi ]\nplot( real.(zs),  imag.(zs), \"r\", lw=0.5)\nplot( real.(2zs), imag.(2zs), \"g\", lw=0.5)\n\nlegend()\nxlabel(\"real part\")\nylabel(\"imag part\")\n\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-gauss3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#複素数の平方根とは-1",
    "page": "第13回：複素数",
    "title": "◀ 複素数の平方根とは",
    "category": "section",
    "text": "上の特別な場合として、z の二乗を検討する。 w=z として、以下を得る。z^2 = leftvertzrightvert^2 expleft( i 2 anglez right)これから、zの平方根は、以下のように求められる。z = sqrtleftvertzrightvert expleft( i dfracanglez2 right)数値例。beginalign*\nz  = -1 + i sqrt3 = 2 left( -dfrac12 + i dfracsqrt32 right) = 2 expleft(i dfracpi3right)  sqrtz  = sqrt2 expleft(i dfracpi6 right) =  sqrt2 left( dfracsqrt32 + i dfrac12 right)endalign*z = complex(-1, sqrt(3));\n@show z, abs(z), angle(z);\nw= sqrt(z);\n@show w, abs(w), angle(w);using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nz = complex(-1, sqrt(3))\nw = sqrt(z)\n\nplot( [0, real(z)], [0, imag(z)], \"r.-\", label=\"z\")\nplot( [0, real(w)], [0, imag(w)], \"b.-\", label=\"sqrt(z)\")\n\nzs = [ cis(t) for t in 0:pi/18:2pi ]\nplot( real.(zs)*2,       imag.(zs)*2,       \"r\", lw=0.5)\nplot( real.(zs)*sqrt(2), imag.(zs)*sqrt(2), \"b\", lw=0.5)\n\nlegend()\nxlabel(\"real part\")\nylabel(\"imag part\")\n\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-gauss4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#図形を回転する-1",
    "page": "第13回：複素数",
    "title": "◀ 図形を回転する",
    "category": "section",
    "text": "複素数に exp(i theta) を乗ずることは、 ガウス平面上で、原点に対して、反時計方向に角度 theta だけ回転することに相当する。 平面図形を複素数ベクトルとして表して、図形を回転しよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nr15 = cis(pi*15/180)\nzs = [ complex(0,0), complex(1,0), complex(1,2), complex(0,0)]\n\nfor i in 1:10\n  plot( real.(zs), imag.(zs), \".-\")\n  zs *= r15\nend\n\nxlabel(\"real part\")\nylabel(\"imag part\")\n\nxlim(-3,3)\nylim(-3,3)\naxhline(0, lw=0.5, color=\"k\")\naxvline(0, lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-cis3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#伝達関数-1",
    "page": "第13回：複素数",
    "title": "◀ 伝達関数",
    "category": "section",
    "text": "制御工学や電気電子回路では「線形システム」に着目する。 これは、入力と出力が、時刻 t に対する定数係数の微積分方程式で表されるようなものである。 線形システムでは、角振動数 omega=2pif の正弦波 x(t) = x_0 cos left(omegat+phi right) を入力に与えると、\n同じ角振動数の正弦波 y(t) = y_0 cos left(omegat+psi right) が出力として得られることが知られている。そこで、複素数 X(omega) = x_0 exp(iphi) を入力の正弦波 x(t) と同一視し(=同じものと考え)、\n複素数 Y(omega) = y_0 exp(ipsi) を出力の正弦波 y(t) と同一視すると、入力と出力との比は、複素数 H(omega) になる。Y(omega) = H(omega) X(omega)この複素数 H(omega) を、伝達関数 (transfer function)という。これを、極座標で見ると、伝達関数の絶対値は、入力と出力の振幅の比 (振幅比)を与える。\n伝達関数の偏角は、入力の位相と出力の位相の「ズレ」 (位相差) を与える。beginalign*leftvertH(omega)rightvert  = dfracleftvertY(omega)rightvertleftvertX(omega)rightvert = dfracy_0x_0  angleH(omega)  = angleY(omega) - angleX(omega) = psi - phi endalign*線形システムの振る舞いを観察するために、角振動数 omega または 周波数 f の関数として 伝達関数の振幅と位相をプロットすることが行われる。これを周波数応答という。"
},

{
    "location": "ch13.html#共振回路-1",
    "page": "第13回：複素数",
    "title": "◀ 共振回路",
    "category": "section",
    "text": "(Image: )自己インダクタンス L, 電気容量 C, 電気抵抗 R を直列に接続した LCR 直列回路の電源に正弦波電圧 e(t) を加える。 抵抗 R の両端子間の電圧 v(t) は、同じ角振動数を持つ正弦波 v(t) となる。 正弦波 e(t) と v(t) を複素数 E(omega) と V(omega) で表したとき、 両者の比は、以下の複素数 H(omega) で表される。H(omega) = fracV(omega)E(omega) = dfrac11 + i Q left(dfracomegaomega_0 - dfracomega_0omegaright)ここで、omega_0 = 2pif_0 と Q は、回路素子 L C Rの値から 決まる正の定数である。f_0 は周波数の次元、omega_0 は角振動数の次元を持ち、Q は無次元である。まず、f_0= 1mathrmkHz Q = 1 として、H(omega) の振幅 leftvertH(omega)rightvert を、プロットする。横軸 周波数は対数で表示する。f0=1e3\nw0=2pi*f0\n\nfs=logspace(1,5,200)\nws=2pi*fs\n\nq=1\nh1=1 ./ (1 + im * q * (ws/w0-w0./ws))\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(fs, abs.(h1))\nxscale(\"log\")\nylabel(\"Amplitude\")\nxlabel(\"f / Hz\")\naxvline(f0, lw=0.5, color=\"k\")\nsavefig(\"ch13-lcr1-plot.svg\"); nothing # hide(Image: )振幅は、単峰性の極大値 1 をとる。極大となる周波数 f_0 を共振周波数 (resonance frequency)、 これに対応する角振動数 omega_0=2pif_0 を共振角振動数 (resonance angular frequency)という。今度は、振幅の二乗 leftvertH(omega)rightvert^2 と位相 angleH(omega) を同時に描こう。f0=1e3\nw0=2pi*f0\n\nfs=logspace(1,5,200)\nws=2pi*fs\n\nq=1\nh1=1 ./ (1 + im * q * (ws/w0-w0./ws))\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfig=plt[:figure]()\nax1=fig[:add_subplot](211)\nax1[:plot](fs, abs2.(h1))\nax1[:set_ylabel](\"Amplitude\")\nax1[:set_xscale](\"log\")\nax1[:axvline](f0, lw=0.5, color=\"k\")\nax1[:axhline](1/2, lw=0.5, color=\"k\")\n\nax2=fig[:add_subplot](212)\nax2[:plot](fs, angle.(h1)*180/pi)\n\nax2[:set_xscale](\"log\")\nax2[:set_xlabel](\"f / Hz\")\nax2[:set_ylabel](\"Phase\")\nax2[:set_ylim](-100,100)\nytics = [-90,-45,0,45,90]\nax2[:set_yticks]( ytics )\nfor y in ytics\n  ax2[:axhline](y, lw=0.5, color=\"k\")\nend\nax2[:axvline]( f0, lw=0.5, color=\"k\")\nsavefig(\"ch13-lcr2-plot.svg\"); nothing # hide(Image: )位相は 90^circ から始まり -90^circ に単調減少する。 振幅が極大となる周波数 f_0 で位相は 0 となる。さらに、leftvertH(omega)rightvert^2 = dfrac12 となる周波数 (２つある)で、位相は pm 45^circ をとる。次に、f_0 omega_0 を変えずに、Q の値を変えて、振幅の二乗 leftvertH(omega)rightvert^2 を描く。f0=1e3\nw0=2pi*f0\n\nfs=logspace(1,5,200)\nws=2pi*fs\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfor q in [ 0.5, 1, 2 ]\n  h1=1 ./ (1 + im * q * (ws/w0-w0./ws))\n  plot(fs, abs2.(h1), label=\"Q=\"*string(q) )\nend\nlegend()\nxscale(\"log\")\nxlabel(\"f / Hz\")\n\nax1[:axhline](1/sqrt(2), lw=0.5, color=\"k\")\naxhline(1/2, lw=0.5, color=\"k\")\naxvline(f0, lw=0.5, color=\"k\")\nsavefig(\"ch13-lcr3-plot.svg\"); nothing # hide(Image: )定数 Q が小さくなると、峰が鋭くなる (幅が狭くなる) 様子が観察される。更に、位相のグラフを加えよう。f0=1e3\nw0=2pi*f0\n\nfs=logspace(1,5,200)\nws=2pi*fs\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfig=plt[:figure]()\nax1=fig[:add_subplot](211)\nax2=fig[:add_subplot](212)\n\nfor q in [0.5,1,2]\n  h1=1 ./ (1 + im * q * (ws/w0-w0./ws))\n  ax1[:plot](fs, abs.(h1), label=\"Q=\"*string(q))\n  ax2[:plot](fs, angle.(h1)*180/pi)\nend\nax1[:legend]()\nax1[:set_xscale](\"log\")\nax1[:set_ylabel](\"Amplitude\")\nax1[:axvline](f0, lw=0.5, color=\"k\")\nax1[:axhline](1/2, lw=0.5, color=\"k\")\n\nax2[:set_xscale](\"log\")\nax2[:set_ylabel](\"Phase\")\nax2[:set_xlabel](\"f / Hz\")\nax2[:set_ylim](-100,100)\nytics = [-90,-45,0,45,90]\nax2[:set_yticks]( ytics )\nfor y in ytics\n  ax2[:axhline](y, lw=0.5, color=\"k\")\nend\nax2[:axvline]( f0, lw=0.5, color=\"k\")\nsavefig(\"ch13-lcr4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#練習-1",
    "page": "第13回：複素数",
    "title": "◀ 練習",
    "category": "section",
    "text": "複素数 H(omega) の分母の虚数部分 Q left( dfracomegaomega_0 - dfracomega_0omega right) を、角振動数 omega の関数としてプロットせよ。振幅の二乗が最大値の半分 leftvertH(omega)rightvert^2 = dfrac12 になる角振動数は2つある。その周波数 omega_1 omega_2 を数値的に求めてみよ。　参考 → ▶︎ 「はさみうち」法による、方程式の求解２つの角振動数の差 Deltaomega = omega_2 - omega_1 を、 角振動数の半値全幅 (FWHM; full width of half maximum) という。定数 Q は、半値全幅 Deltaomega と共振角振動数 omega_0 の比に、ほぼ等しい。Q simeq dfracomega_0Deltaomega = dfracf_0Deltafこれを、数値的に確かめてみよ。ヒント： 半値全幅を与える角振動数 omega_1 omega_2 では、以下が成り立つ。複号 pm が、omega_1 omega_2 のどちらかに対応するかを考えよ。H(omega_12 ) = dfrac11 pm i"
},

{
    "location": "ch13.html#低域通過フィルタ-1",
    "page": "第13回：複素数",
    "title": "◀ 低域通過フィルタ",
    "category": "section",
    "text": "(Image: )自己インダクタンス L と電気抵抗 R を直列に接続したLR直列回路の電源に正弦波電圧 e(t) を加える。 抵抗 R の両端子間の電圧 v(t) は、同じ角振動数を持つ正弦波 v(t) となる。 正弦波 e(t) と v(t) を複素数 E(omega) と V(omega) で表したとき、 両者の比は、以下の複素数 H(omega) で表される。H(omega) = dfracV(omega)E(omega) = frac11+idfracomegaomega_0ここで、omega_0 = 2pif_0 は、回路素子 L Rの値から 決まる正の定数である。f_0 は周波数の次元、omega_0 は角振動数の次元を持つ。まず、f_0= 1mathrmkHz として、H(omega) の振幅 leftvertH(omega)rightvert を、プロットする。横軸 周波数は対数で表示する。f0=1e3\nw0=2pi*f0\n\nfs=logspace(1,5)\nws=2pi*fs\nh1=1 ./ (1 + im * ws/w0)\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nplot(fs, abs.(h1))\nxscale(\"log\")\nxlabel(\"f / Hz\")\nylabel(\"Amplitude\")\n\n\naxhline(1, lw=0.5, color=\"k\")\naxhline(1/sqrt(2), lw=0.5, color=\"k\")\naxvline(f0, lw=0.5, color=\"k\")\nsavefig(\"ch13-lpf1-plot.svg\"); nothing # hide(Image: )振幅は、周波数が低いとき 1 にほぼ等しく、周波数の増加に伴い、単調減少する。 周波数が低い正弦波をそのまま通し、周波数の高い正弦波を減衰させるので、低域通過フィルタ (Low Pass Filter; LPF) と呼ばれる。周波数 f_0 における振幅は dfrac1sqrt2 である。 周波数 f_0 は、振幅が減衰する周波数の目安であり、遮断(しゃだん)周波数 (cut-off frequecy) と呼ばれる。振幅 A の常用対数 (底が 10 の対数)をとり、20 倍したものを利得 (gain) という。利得の「単位」をデシベル (dB) という。G = 20 log_10 A上のグラフを、縦軸を利得に変換し、位相を加えて描く。f0=1e3\nw0=2pi*f0\n\nfs=logspace(1,5)\nws=2pi*fs\nh1=1 ./ (1 + im * ws/w0)\n\nusing PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nfig=plt[:figure]()\nax1=fig[:add_subplot](211)\nax1[:plot](fs, 20*log10.(abs.(h1)))\nax1[:set_xscale](\"log\")\nax1[:set_ylabel](\"Gain / dB\")\nax1[:axhline](0, lw=0.5, color=\"k\")\nax1[:axhline](-3, lw=0.5, color=\"k\")\nax1[:axvline](f0, lw=0.5, color=\"k\")\n\nax2=fig[:add_subplot](212)\nax2[:plot](fs, angle.(h1)*180/pi)\n\nax2[:set_xscale](\"log\")\nax2[:set_xlabel](\"f / Hz\")\nax2[:set_ylabel](\"Phase\")\nax2[:set_ylim](-100,10)\nytics = [-90,-45,0 ]\nax2[:set_yticks]( ytics )\nax2[:axvline](f0, lw=0.5, color=\"k\")\nfor y in ytics\n  ax2[:axhline](y, lw=0.5, color=\"k\")\nend\n\nsavefig(\"ch13-lpf2-plot.svg\"); nothing # hide(Image: )振幅 1 は 利得 0mathrmdB である。減衰動作の周波数領域では、周波数が 10 倍になると利得は -20mathrmdB 減少する。 この傾きを -20mathrmdBmathrmdecade と称する (decade は 10 倍の意味)。位相は 周波数の増加に伴い単調減少する。 低い周波数では 0^circ に、高い周波数では -90^circ にそれぞれ漸近する。遮断周波数 f_0 では伝達関数は H(omega_0) = frac11+i である。 したがって、遮断周波数 f_0 での利得は -3mathrmdB、位相は -45^circ である (註: log_10 2 simeq 03 を覚えておくとよい)。"
},

{
    "location": "ch13.html#練習-2",
    "page": "第13回：複素数",
    "title": "◀ 練習",
    "category": "section",
    "text": "伝達関数が、以下のように表されたときの周波数応答をプロットせよ。H(omega) = frac-A1+idfracomegaomega_0まず、A = 1 を保ったまま f_0 = 100 1000 10000mathrmHz と変えてみよ。次に、A = 1 10 100 と変えてみよ。それぞれ、どのように変化するか、言葉で記述してみよ。"
},

{
    "location": "ch13.html#複素数に拡張された関数-1",
    "page": "第13回：複素数",
    "title": "■ 複素数に拡張された関数",
    "category": "section",
    "text": "平方根や指数関数以外でも、実数を引数とする関数の多くが、複素数を引数とするように拡張されている。"
},

{
    "location": "ch13.html#対数関数-1",
    "page": "第13回：複素数",
    "title": "▶ 対数関数",
    "category": "section",
    "text": "複素数 z = rexp(itheta) と極座標表示したとき、その自然対数は、以下のように計算できる。 すなわち、実数部は絶対値の自然対数、虚数部は偏角である。logz = log rexp(itheta) = logr + i theta複素数 z = 1 + i y の自然対数 logz の実部と虚部をプロットしよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nys=linspace(-2pi,2pi,101)\nzs=complex.(1,ys)\ncs=log.(zs)\nplot(ys, real.(cs), label=\"real log (1+i*y)\" )\nplot(ys, imag.(cs), label=\"imag log (1+i*y)\" )\nlegend()\n\nxlabel(\"y\")\nlegend(loc=4)\nylim(-3,3)\nxlim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\n\naxhline(0,lw=0.5, color=\"k\")\naxvline(0,lw=0.5, color=\"k\")\naxhline( pi/2, lw=0.5, color=\"c\")\naxhline(-pi/2, lw=0.5, color=\"c\")\n#\naxhline(log(sqrt(2)), lw=0.5, color=\"m\")\naxhline( pi/4, 0.6, 1, lw=0.5, color=\"m\")\naxhline(-pi/4, 0, 0.4, lw=0.5, color=\"m\")\naxvline( 1, lw=0.5, color=\"m\")\naxvline(-1, lw=0.5, color=\"m\")\n\nsavefig(\"ch13-log1-plot.svg\"); nothing # hide(Image: )変数 y の増加に伴い、logz の虚数部は -dfracpi2 から dfracpi2 へ単調に増加する (シアン色の補助線)。 実数部は下に凸で、y=0 で極小値 log1 = 0 をとる。特に、y = pm1 において、虚数部は pmdfracpi4、実数部は logsqrt2 をとる (マゼンダ色の補助線)。上のグラフは、ガウス平面上の z = 1 + i y の軌跡から理解できるであろう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxlim(-3,3)\nylim(-3,3)\nxlabel(\"real part\")\nylabel(\"imag part\")\naxhline(0, lw=0.5, c=\"k\")\naxvline(0, lw=0.5, c=\"k\")\naxvline(1, lw=0.5, c=\"k\")\nfor y in [-2, -1, 1,2]\n  plot([0,1], [0,y], \"b.-\")\n  text(1.1, y, \"1+i \"*string(y))\nend\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch13-log2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch13.html#練習-3",
    "page": "第13回：複素数",
    "title": "◀ 練習",
    "category": "section",
    "text": "複素数 z = x + i の自然対数 logz の実部と虚部をプロットせよ。 その結果を、ガウス平面上の z の軌跡を描いて、考察せよ。"
},

{
    "location": "ch13.html#三角関数と双曲線関数-1",
    "page": "第13回：複素数",
    "title": "▶ 三角関数と双曲線関数",
    "category": "section",
    "text": "双曲線関数 cosht sinht や三角関数 cost sint は、指数関数 exp(z) を用いて、定義されることもある。beginalign*\ncosh x  = dfracexp(x)+exp(-x)2  sinh x  = dfracexp(x)-exp(-x)2  cos x  = dfracexp(ix)+exp(-ix)2  sin x  = dfracexp(ix)-exp(-ix)2i\nendalign*したがって、三角関数に純虚数を与えると、双曲線関数となる。beginalign*cos ix  = cosh x   sin ix  = i sinh x endalign*上の等式がなりたつことを、グラフで観察しよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nxs=linspace(-1,1,21)\ncz=cos.( im*xs )\nplot(xs, real.(cz), \"r-\", label=\"real cos(ix)\")\nplot(xs, cosh.(xs), \"ro\", label=\"cosh(x)\")\n#\nsz=sin.( im*xs )\nplot(xs, imag.(sz), \"b-\", label=\"imag sin(ix)\")\nplot(xs, sinh.(xs), \"bo\", label=\"sinh(x)\")\n#\nxlabel(\"x\")\nxlim(-1.8,1.8)\nylim(-1.8,1.8)\nlegend()\naxhline(0,lw=0.5, color=\"k\")\naxvline(0,lw=0.5, color=\"k\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch13-tri1-plot.svg\"); nothing # hide(Image: )## ■ 複素数を定義域とする関数（案）微分方程式の境界値問題\n\n## ★ 今回のまとめ（案）微分方程式の初期値問題"
},

{
    "location": "ch13.html#今回のまとめ-1",
    "page": "第13回：複素数",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "複素数\n複素数のベクトル・行列\n複素数の加減乗除\nガウス平面\nオイラーの公式\n極座標表示\n複素数に拡張された関数\n応用：伝達関数"
},

{
    "location": "ch14.html#",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "第14回：定期レポートへのコメント（その1）",
    "category": "page",
    "text": ""
},

{
    "location": "ch14.html#ch14-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "第14回：定期レポートへのコメント（その1）",
    "category": "section",
    "text": "極座標 (r theta) で記述される曲線を描き、その類似点を考察せよ、という課題であった。ただし、動径 r は、以下の式で与えられるものとする。beginalign*\nr_1  = sin theta + cos theta \nr_2  = 2 + 2sin theta = 2 left(1 + sintheta right) \nr_3  = dfrac32 + sin theta \nr_4  = 1 + cos theta \nr_5  = dfrac12 + cos theta \nr_6  = cos dfractheta2 quad left( 0 le theta le 4pi right) \nr_7  = sin dfractheta2 quad left( 0 le theta le 6pi right) \nr_8  = sin^2theta = left(sin thetaright)^2 \nr_9  = 1 + 3 cos^2 (2theta) = 1 + 3 left(cos 2theta right)^2 \nr_10  = sin^2 (3theta) = left( sin 3theta right)^2 \nr_11  = tan theta \nr_12  = cot 2theta \nr_13  = dfrac11+cos theta \nr_14  = dfrac11+dfrac12cos theta \nr_15  = dfrac11+2cos theta \nr_15  = dfrac11-cos theta \nr_16  = dfrac11+sin theta endalign*"
},

{
    "location": "ch14.html#分類-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "分類",
    "category": "section",
    "text": "引数 theta に対する周期性から、以下のように分類できるであろう。周期 2pi を持つもの\n単純な余弦・正弦 cos theta sin theta を含む曲線\n曲線 r_1r_2r_3r_4r_5\n周期 4pi を持つもの\n半角の余弦、正弦 cos dfractheta2 sin dfractheta2 を含む曲線\n曲線 r_6r_7\n周期 pi を持つもの\n余弦・正弦の二乗 cos^2 theta sin^2 theta を含む\n三角関数の加法定理から cos 2theta sin 2theta に変形できる\n曲線 r_8r_9\n周期 dfrac4pi3\n余弦・正弦の二乗 sin^2 (3theta) を含む\n曲線 r_10\n直角 dfracpi2 の整数倍で不連続 (正負の無限大に発散する)\n正接tan, 余接 cot を含む\n曲線 r_11r_12\n同式の形\n同じ式 r = dfrac11+ a cos theta の形である\n曲線 r_13 r_14 r_15\n分母が 0 になりうる\n曲線 r_15 r_16"
},

{
    "location": "ch14.html#曲線-r_{1}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_1",
    "category": "section",
    "text": "以下、何も工夫せずに、曲線を描いてみる。 ただし、描画範囲は適宜調整した。曲線 r_1 を曲線 r_0 = sin theta と一緒に描く。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/72:2pi\n#\nr0 = sin.(ts)\nx0 = r0 .* cos.(ts)\ny0 = r0 .* sin.(ts)\nplot(x0,y0, label=\"r0\")\n#\nr1 = sin.(ts) + cos.(ts)\nx1 = r1 .* cos.(ts)\ny1 = r1 .* sin.(ts)\nplot(x1,y1, label=\"r1\")\n#\nlegend()\nxlim(-1,2)\nylim(-1,2)\naxhline(0, c=\"k\", lw=0.5)\naxvline(0, c=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot1.svg\"); nothing # hide(Image: )三角関数の合成の公式を用いると、r_1 は、以下のように変形できる。beginalign*\nr_1 =  sin theta + cos theta\n=  sqrt2 left sin theta dfrac1sqrt2 + cos theta dfrac1sqrt2 right \n=  sqrt2 sin left( theta + dfracpi4 right) endalign*すなわち、曲線 r_0 を、時計方向に dfracpi4 だけ回転し、 原点を中心に sqrt2 だけ拡大したものが、曲線 r_1 である。"
},

{
    "location": "ch14.html#曲線-r_{2},r_{3}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_2r_3",
    "category": "section",
    "text": "曲線 r_2r_3 は、y軸に対して対称である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/72:2pi\n#\nr2 = 2 * (1+sin.(ts))\nx2 = r2 .* cos.(ts)\ny2 = r2 .* sin.(ts)\nplot(x2,y2, label=\"r2\")\n#\nr3 = 3/2 + sin.(ts)\nx3 = r3 .* cos.(ts)\ny3 = r3 .* sin.(ts)\nplot(x3,y3, label=\"r3\")\n#\nlegend()\nxlim(-3,3)\nylim(-2,5)\naxhline(0, c=\"k\", lw=0.5)\naxvline(0, c=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot1b.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch14.html#曲線-r_{4},r_{5}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_4r_5",
    "category": "section",
    "text": "曲線 r_2 を時計方向にdfracpi2 だけ回転したものが、曲線 r_4 である。曲線 r_4r_5 は、x軸に対して対称である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/72:2pi\n#\nr4 = 1 + cos.(ts)\nx4 = r4 .* cos.(ts)\ny4 = r4 .* sin.(ts)\nplot(x4,y4, label=\"r4\")\n#\nr5 = 1/2 + cos.(ts)\nx5 = r5 .* cos.(ts)\ny5 = r5 .* sin.(ts)\nplot(x5,y5, label=\"r5\")\n#\nlegend()\nxlim(-1,3)\nylim(-2,2)\naxhline(0, c=\"k\", lw=0.5)\naxvline(0, c=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot1c.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch14.html#曲線-r_{6},r_{7}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_6r_7",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\n#\nts4=0:pi/18:4pi\nr6 = cos.(ts4./2)\nx6 = r6 .* cos.(ts4)\ny6 = r6 .* sin.(ts4)\nplot(x6,y6, label=\"r6\")\n#\nts6=0:pi/18:6pi\nr7 = sin.(ts6./2)\nx7 = r7 .* cos.(ts6)\ny7 = r7 .* sin.(ts6)\nplot(x7,y7, \".\", label=\"r7\")\n#\nlegend()\nxlim(-3/2,3/2)\nylim(-3/2,3/2)\naxhline(0, c=\"k\", lw=0.5)\naxvline(0, c=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot2.svg\"); nothing # hide(Image: )曲線 r_6 と r_7 は一致した。ちなみに、theta の定義域を狭めて描いてみよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\n#\nts4=0:pi/18:pi        # <--\nr6 = cos.(ts4./2)\nx6 = r6 .* cos.(ts4)\ny6 = r6 .* sin.(ts4)\nplot(x6,y6, label=\"r6\")\n#\nts6=0:pi/18:pi        # <--\nr7 = sin.(ts6./2)\nx7 = r7 .* cos.(ts6)\ny7 = r7 .* sin.(ts6)\nplot(x7,y7, \".\", label=\"r7\")\n#\nlegend()\nxlim(-3/2,3/2)\nylim(-3/2,3/2)\naxhline(0, c=\"k\", lw=0.5)\naxvline(0, c=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot2b.svg\"); nothing # hide(Image: )これをよく観察すると、 曲線 r_6 上の点と、曲線 r_7 上の点の対応関係が見えてくるであろう。"
},

{
    "location": "ch14.html#曲線-r_{8},r_{9}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_8r_9",
    "category": "section",
    "text": "曲線 r_8r_9 の動径は、正である。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\n#\nts=0:pi/72:2pi\n#\nr8 = (sin.(ts)).^2\nx8 = r8 .* cos.(ts)\ny8 = r8 .* sin.(ts)\nplot(x8,y8, label=\"r8\")\n#\nr9 = 1 + 3* (cos.(2*ts)).^2\nx9 = r9 .* cos.(ts)\ny9 = r9 .* sin.(ts)\nplot(x9,y9, label=\"r9\")\nlegend()\nxlim(-5,5)\nylim(-5,5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot3.svg\"); nothing # hide(Image: )ちなみに、t の定義域を狭めて描いてみよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\n#\nts=0:pi/72:2pi *3/8 # <--\n#\nr8 = (sin.(ts)).^2\nx8 = r8 .* cos.(ts)\ny8 = r8 .* sin.(ts)\nplot(x8,y8, label=\"r8\")\n#\nr9 = 1 + 3* (cos.(2*ts)).^2\nx9 = r9 .* cos.(ts)\ny9 = r9 .* sin.(ts)\nplot(x9,y9, label=\"r9\")\nlegend()\nxlim(-5,5)\nylim(-5,5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot3b.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch14.html#曲線-r_{10}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_10",
    "category": "section",
    "text": "花曲線 r_10b = sin (3theta) とともに描いてみよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/72:2pi\n#\nr10 = (sin.(3ts)).^2\nx10 = r10 .* cos.(ts)\ny10 = r10 .* sin.(ts)\nplot(x10,y10, label=\"r10\")\n#\nr10b = sin.(3ts)\nx10b = r10b .* cos.(ts)\ny10b = r10b .* sin.(ts)\nplot(x10b,y10b, label=\"r10b\")\n#\nlegend()\nxlim(-5/4,5/4)\nylim(-5/4,5/4)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot4.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch14.html#曲線-r_{11},-r_{12}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_11, r_12",
    "category": "section",
    "text": "正接 tan theta は dfracpi2 の奇数倍で、正負の無限大に発散する。 余接 cot theta は dfracpi2 の偶数倍で、正負の無限大に発散する。これら発散する theta においては、曲線は x軸や y軸に平行な直線に漸近することになる。曲線 r_11 は、x = pm 1 に漸近する。曲線 r_12 は、x = pmdfrac12 または y = pmdfrac12 に漸近する。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/72:2pi\n#\nr11 = tan.(ts)\nx11 = r11 .* cos.(ts)\ny11 = r11 .* sin.(ts)\nplot(x11,y11, \".\", label=\"r11\")\n#\nr12 = cot.(2ts)\nx12 = r12 .* cos.(ts)\ny12 = r12 .* sin.(ts)\nplot(x12,y12, \".\", label=\"r12\")\n#\nlegend()\nxlim(-4,4)\nylim(-4,4)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot5.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch14.html#曲線-r_{13},-r_{14},-r_{15}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_13, r_14, r_15",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/144:2pi\n#\na=1\nr13 = 1 ./ (1+a*cos.(ts))\nx13 = r13 .* cos.(ts)\ny13 = r13 .* sin.(ts)\nplot(x13,y13, \".\", label=\"r13, a=\"*string(a))\n#\na=1/2\nr14 = 1 ./ (1+a*cos.(ts))\nx14 = r14 .* cos.(ts)\ny14 = r14 .* sin.(ts)\nplot(x14,y14, \".\", label=\"r14. a=\"*string(a))\n#\na=2\nr15 = 1 ./ (1+a*cos.(ts))\nx15 = r15 .* cos.(ts)\ny15 = r15 .* sin.(ts)\nplot(x15,y15, \".\", label=\"r15, a=\"*string(a))\n#\nlegend()\nxlim(-4,4)\nylim(-4,4)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot6.svg\"); nothing # hide(Image: )(再掲) これらの曲線は、以下の形である。 r = dfrac11+a cos thetaパラメータ a の範囲により、見かけが異なる範囲 0  a  1 : 楕円\n範囲 a = 1 : 放物線\n範囲 a  1 : 双曲線"
},

{
    "location": "ch14.html#曲線-r_{13},-r_{16}-1",
    "page": "第14回：定期レポートへのコメント（その1）",
    "title": "曲線 r_13, r_16",
    "category": "section",
    "text": "曲線 r_13 と r_16 は、sin と cos を入れ替えたものである。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n; #hide\nts=0:pi/144:2pi\n#\nr13 = 1 ./ (1+cos.(ts))\nx13 = r13 .* cos.(ts)\ny13 = r13 .* sin.(ts)\nplot(x13,y13, \".\", label=\"r13\")\n#\na=1/2\nr16 = 1 ./ (1+sin.(ts))\nx16 = r16 .* cos.(ts)\ny16 = r16 .* sin.(ts)\nplot(x16,y16, \".\", label=\"r16\")\n#\nlegend()\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nxlim(-4,4)\nylim(-4,4)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch14-plot7.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch15.html#",
    "page": "第15回：定期レポートへのコメント（その２）",
    "title": "第15回：定期レポートへのコメント（その２）",
    "category": "page",
    "text": ""
},

{
    "location": "ch15.html#ch15-1",
    "page": "第15回：定期レポートへのコメント（その２）",
    "title": "第15回：定期レポートへのコメント（その２）",
    "category": "section",
    "text": ""
},

{
    "location": "ch15.html#ネタもと-1",
    "page": "第15回：定期レポートへのコメント（その２）",
    "title": "ネタもと",
    "category": "section",
    "text": "2018年12月、および、2019年1月の月間レポートでは、題材自由のレポートを課した。 うち、後者は、関数を定義することを必須の条件とした。提出された学生レポートを少し改変して、以下に示す。次の関数 dora1() は、何かを描く関数の定義である。function dora1()\n  ts=0:pi/18:2pi\n  xs=6cos.(ts)\n  ys=6sin.(ts)\n  plot(xs,ys)\n\n  ts=0:pi/18:2pi\n  xs=1.2+1.2*cos.(ts)\n  ys=2.5+1.5*sin.(ts)\n  plot(xs,ys,\"k\")\n\n  ts=0:pi/18:2pi\n  xs=-1.2+1.2cos.(ts)\n  ys= 2.5+1.5sin.(ts)\n  plot(xs,ys,\"k\")\n\n  ts=0:pi/18:2pi\n  xs=    0.5cos.(ts)\n  ys=1.1+0.5sin.(ts)\n  plot(xs,ys,\"r\")\n\n  ts=0:pi/18:2pi\n  xs=5*cos.(ts)\n  ys=-1.5+4.5sin.(ts)\n  plot(xs,ys,\"k\")\n\n  ts=0:pi/18:2pi\n  xs=0.5+0.5cos.(ts)\n  ys=2.4+0.5sin.(ts)\n  plot(xs,ys,\"k\")\n\n  ts=0:pi/18:2pi\n  xs=-0.5+0.5cos.(ts)\n  ys= 2.4+0.5sin.(ts)\n  plot(xs,ys,\"k\")\n\n  xs=-2.3:0.5:2.3\n  plot(xs, 1/2.5*xs.^2 .-4 ,  \"k\", label=\"s\")\n\n  xs=-2:0.1:1\n  plot(-4+xs,-0.3*xs,\"k\")\n  plot( 5+xs, 0.3*xs,\"k\")\n\n  xs=-2:0.1:1\n  plot(-4+xs,-2 .+0*xs,\"k\")\n  plot( 5+xs,-2 .+0*xs,\"k\")\n\n  xs=-2:0.1:1\n  plot(-4+xs,-1.2 .+-0.2*xs,\"k\")\n  plot( 5+xs,-1.2 .+ 0.2*xs,\"k\")\n\n  xs=-28:0.1:-5\n  plot(0*xs,-5 .+ -0.2*xs,\"k\")\nendこの関数を呼出して、実行結果を示す。 何かのキャラクターの顔が描かれた。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n\ndora1()\nxlim(-7,7)\nylim(-7,7)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch15-dora1.svg\"); nothing # hide(Image: )この関数では、平面図形を描く曲線を各々設計した苦労の跡が偲ばれる。 作者の意図通りに動作し、大変結構である。しかし、この関数を後から振り返ったときに、 各行の意図をすぐに汲み取るのは難しいだろう。 一部の数値だけ異なるが、同じようなプログラム片が並ぶのも、読みにくくしている。"
},

{
    "location": "ch15.html#下請け関数を定義する-1",
    "page": "第15回：定期レポートへのコメント（その２）",
    "title": "下請け関数を定義する",
    "category": "section",
    "text": "さて、この顔は、楕円、直線、放物線の３つの図形から成り立っている。 これら３つの図形を描く関数を定義してみよう。まず、left(x_c y_cright) を中心とし、x 軸方向の広がりが 2a、 y 軸方向の広がりが 2b であるような楕円を描く関数を定義する。式で書くと left(dfracx-x_caright)^2 + left(dfracy-y_cbright)^2 = 1 である。関数の引数は、xc, yc, a, b と 色(またはスタイル)を示す文字列 c である。 最後の引数 c を省略したときは c=\"k\" (黒色) を既定値とする。function draw_ellipse(xc,yc,a,b,c=\"k\")\n  ts=0:pi/36:2pi\n  xs=xc+a*cos.(ts)\n  ys=yc+b*sin.(ts)\n  plot(xs,ys,c)\nend上の関数の動作を確認しよう。using PyPlot #hide\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n\ndraw_ellipse(1,1,2,1,\"g\")\ndraw_ellipse(1,1,1,2,\"r\")\nxlim(-2,4)\nylim(-2,4)\naxhline(1, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch15-dora-ellipse.svg\"); nothing # hide(Image: )次に、２つの点 (x_1 y_1) と (x_2 y_2) とを結ぶ直線を描く関数を定義しよう。function draw_line(x1,y1,x2,y2,c=\"k\")\n  xs=[x1,x2]\n  ys=[y1,y2]\n  plot(xs,ys,c)\nend上の関数の動作を確認しよう。using PyPlot #hide\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n\ndraw_line(-1,-1,3,2, \"b\")\ndraw_line(-1, 3,3,0, \"g\")\nxlim(-2,4)\nylim(-2,4)\naxhline(1, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch15-dora-line.svg\"); nothing # hide(Image: )最後に、 放物線 (2次関数) y=ax^2+bx+c を、区間 leftx_1 x_2right の範囲で描く関数を定義しよう。function draw_para(a,b,c, x1,x2, color=\"k\")\n  xs=linspace(x1,x2,50)\n  ys=a*xs.^2 + b*xs + c\n  plot(xs, ys, color)\nend上の関数の動作を確認しよう。using PyPlot #hide\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n\ndraw_para( 1, 0,-1, -2,2, \"b\")\ndraw_para(-1, 0, 1, -2,2, \"g\")\nxlim(-3,3)\nylim(-3,3)\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch15-dora-para.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch15.html#元の関数を書き換える-1",
    "page": "第15回：定期レポートへのコメント（その２）",
    "title": "元の関数を書き換える",
    "category": "section",
    "text": "これらの「下請け」関数を呼び出す形で、元の関数 dora1() を書き直そう。 隣接する部分がまとまるように、行の順番を少し入れ替えて、コメントをつけた ( 元の描画順に意図があるなら、ご容赦願いたい )。function dora2()\n  # face\n  draw_ellipse(0,0,6,6,\"b\")\n\n  # nose\n  draw_ellipse(0,1.1, 0.5, 0.5, \"r\" )\n\n  # gray line\n  draw_ellipse(0,-1.5, 5, 4.5 )\n\n  # eyes\n  draw_ellipse( 1.2,2.5, 1.2, 1.5 )\n  draw_ellipse(-1.2,2.5, 1.2, 1.5 )\n\n  draw_ellipse( 0.5,2.4, 0.5, 0.5 )\n  draw_ellipse(-0.5,2.4, 0.5, 0.5 )\n\n  # beard\n  draw_line(-6, 0.6, -3,-0.3 )\n  draw_line( 6, 0.3,  3,-0.6 )\n\n  draw_line(-6,-2,-3, -2 )\n  draw_line( 6,-2, 3, -2 )\n\n  draw_line(-6, -0.8, -3, -1.4 )\n  draw_line( 6, -1.0,  3, -1.6 )\n\n  # mouth\n  draw_line( 0, 0.6, 0, -4 )\n  draw_para(1/2.5, 0, -4, -2.3, 2.3 )\n\nend実行してみよう。using PyPlot\nclf() #hide\nplt[:figure](figsize=(6.4,4.8)) #hide\n\ndora2()\nxlim(-7,7)\nylim(-7,7)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch15-dora2.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch15.html#リファクタリング-1",
    "page": "第15回：定期レポートへのコメント（その２）",
    "title": "リファクタリング",
    "category": "section",
    "text": "関数 dora1() を dora2() に書き直したように、 プログラムの内容を保ったまま、見通しをよくしたり、実行速度を改善する作業を、 リファクタリング (refactoring) という。(プログラムも含めて)複数の要素 (component )が協力して働いて、 ある目的を達成するものを、システム (system)という。システムを実装する (implement) 手法として、 ボトム・アップ的な手法 (bottom-up approach) 、 トップ・ダウン的な手法 (top-down approach) が知られている。ボトム・アップ的な手法は、 下位の要素を作成してから (上の例では、関数 draw_ellipse や draw_line　などを定義してから)、 それらの組合せで上位の要素 (システム)を作成する (上の例では関数 dora2() を定義する) 手法である。トップ・ダウン的な手法は、 先に、上位の要素 (システム) を作成してから (関数 dora2() を定義してから)、 その下位の要素 (部品) を作成する (関数 draw_ellipse などを定義する) 手法である。プログラミングの初級段階では、ボトム・アップ的な手法が分かりやすいだろうが、 システムの成り立ちに習熟するにつれて、 トップ・ダウン的な手法が取れるようになるであろう。システムの考え方では、 システムを構成する「要素」を、入力と出力の対応関係だけが決まっていて、 その中身は関知しない「ブラック・ボックス black box」とみなす。 しかしながら、現実のシステムでは、「要素」の「中身」を無視することができず、 上位のシステムの性能にも影響が及ぶ。そのような「要素」と「要素」の界面 (interface) を上手に扱うことができる人こそ、 優れた工学者 (engineer) といえる。諸君が優れた工学者になることを願って、この文の著者は対応しているつもりである。## ★ 今回のまとめ"
},

{
    "location": "index.html#",
    "page": "toc",
    "title": "toc",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#toc-1",
    "page": "toc",
    "title": "toc",
    "category": "section",
    "text": "Pages= [\n  \"ch00.md\",\n  \"ch01.md\",\n  \"ch02.md\",\n  \"ch03.md\",\n  \"ch04.md\",\n  \"ch05.md\",\n  \"ch06.md\",\n  \"ch07.md\",\n  \"ch08.md\",\n  \"ch09.md\",\n  \"ch10.md\",\n  \"ch11.md\",\n  \"ch12.md\",\n  \"ch13.md\",\n  \"ch14.md\",\n  \"ch15.md\"\n]\n## Index@index"
},

]}
