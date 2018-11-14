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
    "text": "グラフを描画するのに、PyPlot パッケージを導入しよう。パッケージは、関連する関数、定数、変数などをまとめたものである。 using <<パッケージ名>> で導入できる。plot 関数は、PyPlot パッケージに含まれる関数である。plot(xs,ys) の形で用いて、 ベクトル xs, ys から一つづつ数を取り出して、 それらを各々 x座標, y座標とする点を打つことを命令する。# PyPlot パッケージの導入\nusing PyPlot\nclf() #hide\nxs = [1,2,2,1]\nys = [1,1,3,1]\n# プロット\nplot(xs,ys)\nsavefig(\"ch01-tri-plot.svg\"); nothing # hide(Image: )"
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
    "text": "plot関数に対して、二つのコレクション xs、ysを渡すと、  xs、ys から一つづつ要素を取り出し、 これらを x, y 座標とする点を結んで、図形が描かれるのであった。式のグラフを描くには、ysとして、 xs から計算した値を与えればよい。二つの直線 y=-x と y=2x-1 のグラフを描いてみよう。# PyPlot パッケージの導入\nusing PyPlot\nclf() #hide\nxs=-1:0.1:1\n# プロット\nplot(xs,-1*xs)\nplot(xs,2*xs-1)\nsavefig(\"ch01-graph-plot.svg\"); nothing # hide(Image: )"
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
    "text": "グラフの凡例(lengend)は、グラフに描かれた曲線を区別するための説明である。 PyPlotパッケージで書かれたグラフに凡例を追加するには、以下のようにする。まず、plot関数に label=文字列 の形式で、 その曲線に付与する文字列を指定する。 全ての曲線を描いた後に、legend関数を付与する。using PyPlot\nclf() #hide\nxs=-1:0.1:1\nplot(xs,-1*xs,  label=\"y=-x\")\nplot(xs,2*xs-1, label=\"y=2x-1\")\nlegend()\nsavefig(\"ch02-leg1-plot.svg\"); nothing # hide(Image: )比例関係 y = ax (a=12345)のグラフを描こう。using PyPlot\nclf() #hide\nxs=-1:0.1:1\nplot(xs,   xs, label=\"y= x\" )\nplot(xs, 2*xs, label=\"y=2x\" )\nplot(xs, 3*xs, label=\"y=3x\" )\nplot(xs, 4*xs, label=\"y=4x\" )\nplot(xs, 5*xs, label=\"y=5x\" )\nend\nlegend()\nsavefig(\"ch02-leg2a-plot.svg\"); nothing # hide(Image: )上のプログラムを、for文を用いて繰り返しで書き直してみよう。using PyPlot\nclf() #hide\nxs=-1:0.1:1\nfor a in 1:5\n  plot(xs, a*xs, label=\"y=\"*string(a)*\"x\" )\nend\nlegend()\nsavefig(\"ch02-leg2b-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch02.html#冪乗関数を描く-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ 冪乗関数を描く",
    "category": "section",
    "text": "Base.:^ - Methodx^y は、冪（べき, power）ないし冪乗（べきじょう）x^yを表す。 xを底 (base)、yを冪指数 (exponent)という。2^2\n2^3\n2^4冪指数が負の整数のとき、冪の計算は失敗する (DomainError : 定義域外の例外)。 代わりに、負の小数を指定する。2^-2 # DomainError\n2^-2.0ベクトルや等差級数の各要素に対して 冪乗を計算するには　演算子 ^の前にピリオド. を加える。2.^[2,3,4]\n(2:4).^2\n2:4.^2    # `^`は `:` よりも優先度が高い冪乗 y=x^a (a=2345) のグラフを描こう。plt[:axes]()[:set_aspect](\"equal\") は、 グラフの縦横比 (アスペクト比 aspect ratio) を等しくする命令である。using PyPlot\nclf() #hide\nxs=0:0.1:1\nplot(xs, xs.^2 )\nplot(xs, xs.^3 )\nplot(xs, xs.^4 )\nplot(xs, xs.^5 )\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-po1-plot.svg\"); nothing # hide(Image: )for文を使って、繰り返しの処理をまとめる。さらに、凡例を追加する。using PyPlot\nclf() #hide\n# 間隔を狭めた\nxs=0:0.05:2\nfor a in 2:5\n  plot(xs, xs.^a , label=\"y=x^\"*string(a) )\nend\nlegend()\n# 描画範囲を設定\nxlim(-0.05,2)\nylim(-0.05,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-po2-plot.svg\"); nothing # hide(Image: )plot命令は、全ての点を表示しようとする。 グラフの描画範囲を調整するには、関数 xlim と ylim を用いる。関数 xlim(a,b) は、x軸の描画を a から b の範囲に限定する命令である。関数 ylim(a,b) は、y軸の描画を a から b の範囲に限定する命令である。"
},

{
    "location": "ch02.html#ローレンツ関数を描く-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ ローレンツ関数を描く",
    "category": "section",
    "text": "Lorentzian Function以下の曲線を、 ローレンツ関数 (Lorentzian function)という。y = fracfracgamma2(x-x_0)^2+left(fracgamma2right)^2gamma  0パラメータを x_0 = 0 gamma = 2 のように選ぶと、 以下のように簡単な形となる。y = frac1x^2+1まず、この曲線を描いてみる。 各要素に対して除算を行うため、/の前にも、ピリオド.を付与する。xs=-3:0.5:3\n1 ./ (xs.^2+1)上のグラフを描こう。using PyPlot\nclf() #hide\nxs=-3:0.1:3\nplot(xs, 1 ./ (xs.^2+1) )\nsavefig(\"ch02-lo1-plot.svg\"); nothing # hide(Image: )以下のように、パラメータ gamma を導入する。y = fracfracgamma2x^2+left(fracgamma2right)^2三つのパラメータ gamma=0512 について、この曲線を描く。using PyPlot\nclf() #hide\nxs=-3:0.05:3\ngamma=0.5\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\ngamma=1.0\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\ngamma=2.0\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-lo2-plot.svg\"); nothing # hide(Image: )gammaの値が変わっても、それぞれの曲線を描く命令は変わらない。 for文を用いて、gammaの値を変えてみよう。（結果のグラフは同じである)using PyPlot\nclf() #hide\nxs=-3:0.05:3\nfor gamma in [0.5,1.0,2.0]\n  plot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\nend\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-lo3-plot.svg\"); nothing # hideローレンツ関数には、次の性質がある。点 x=0 で 最大値 y = frac2gamma\n点 x=pmfracgamma2 で、y = frac12frac2gamma となること。２つ目の性質を観察するため、最大値に対する比を描いてみる。PyPlotパッケージに用意された関数 axhline() は、 水平線(horizontal line)を描く。 引数 color=\"k\" は、黒色(black)で描くことを指定し、lw=0.5は線幅(linewidth)を指定する。using PyPlot\nclf() #hide\nxs=-3:0.05:3\nfor gamma in [0.5,1.0,2.0]\n  plot(xs,\n    (gamma/2) ./ (xs.^2+(gamma/2)^2) / (2/gamma),\n    label=gamma )\nend\nlegend()\naxhline(1/2, color=\"k\", lw=0.5)\nsavefig(\"ch02-lo4-plot.svg\"); nothing # hide(Image: )note: Note\nplot関数の文は、複数の行に渡って記述しているが、行が更に続くことを示す記法は、特に用意されていない。構文が行末で終わらなければ、次の行まで読みに行くことになっている。パラメータ gammaは、半値全幅 (Full Width of Half Maximum, FWHM)と呼ばれる。 gammaを非常に小さくすると、 Diracのデルタ関数 (Dirac delta function)の近似(の一つ)となる。"
},

{
    "location": "ch02.html#更新演算子-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "■ 更新演算子",
    "category": "section",
    "text": "Updating operators変数に四則演算などを行って、元の変数に再代入する場合には、 更新演算子を用いるとよい。 演算子の直後に = の文字が入る。x=1\n# 再代入\nx=x+1\n# 更新演算子\nx+=1演算子 +, -, *, /, ^ に対して、 更新演算子 +=, -=,  *=, /=, ^= が用意されている。以下の例は、変数 gamma を 2 で繰り返し割り算する。gamma=2\nfor i=1:5\n  gamma /= 2\n  @show gamma\nend更新演算子 /= を利用して、ローレンツ関数のパラメータ gamma を変えてみる。using PyPlot\nclf() #hide\nxs=-3:0.05:3\ngamma=2\nfor i in 1:5\n  plot(xs,\n    (gamma/2) ./ (xs.^2+(gamma/2)^2) / (2/gamma),\n    label=gamma )\n  gamma /= 2\nend\nlegend()\naxhline(1/2, color=\"k\", lw=0.5)\nsavefig(\"ch02-lo5-plot.svg\"); nothing # hide(Image: )更新演算子は、ベクトルのスカラー倍や、定数の加減にも適用できる。xs = [1,2,2,1]\nxs +=1\nxs +=1\nxs *=1前節の三角形を描く例題で、更新演算子 +=を用いて、図形を繰り返し並行移動してみよう。using PyPlot\nclf() #hide\nxs = [1,2,2,1]\nys = [1,1,3,1]\nfor i=1:5\n  plot(xs,ys)\n  xs += 0.5\n  ys += 0.5\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch01-tri-shift-plot.svg\"); nothing # hide(Image: )"
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
    "text": "Base.cos - Function\nBase.sin - Functionラジアン単位の正弦、余弦 sin, cosusing PyPlot\nclf() #hide\nxs=-2pi:pi/360:2pi\nplot(xs, cos.(xs), label=\"cos\")\nplot(xs, sin.(xs), label=\"sin\")\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch03-sin1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#円周率単位-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "円周率単位",
    "category": "section",
    "text": "Base.Math.cospi - Function\nBase.Math.sinpi - Function円周率単位の正弦、余弦 sinpi, cospiusing PyPlot\nclf() #hide\nxs=-2:1/360:2\nplot(xs, cospi.(xs), label=\"cospi\")\nplot(xs, sinpi.(xs), label=\"sinpi\")\nxlabel(\"pi\")\nlegend()\nsavefig(\"ch03-sin2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#角度単位-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "角度単位",
    "category": "section",
    "text": "Base.Math.cosd - Function\nBase.Math.sind - Function角度単位の正弦、余弦 sind, cosdusing PyPlot\nclf() #hide\nxs=-360:1:360\nplot(xs, cosd.(xs), label=\"cosd\")\nplot(xs, sind.(xs), label=\"sind\")\nxlabel(\"degree\")\nlegend()\nsavefig(\"ch03-sin3-plot.svg\"); nothing # hide(Image: )"
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
    "text": "楕円を陰関数で表示するとleft(fracxaright)^2+left(fracybright)^2 = 1楕円を媒介変数表示(パラメータ曲線)するとbeginalign*x  = a cos theta y  = b sin theta endalign*媒介変数表示を用いて、楕円上の各点の座標を計算する。using PyPlot\nclf() #hide\nts=0:pi/18:2pi\nxs=2*cos.(ts)\nys=sin.(ts)\nplot(xs,ys)\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-ell1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#アルキメデスの渦を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ アルキメデスの渦を描く",
    "category": "section",
    "text": "平面座標上の点 xy)は、 極座標 (r theta) でも表示できる。 xyと r theta との対応はbeginalign*x  = r cos theta y  = r sin theta endalign*である。次の関係で結ばれた曲線を、アルキメデスの渦という。r = thetaこれを描いてみよう。using PyPlot\nclf() # hide\nts=0:pi/1800:2pi\nxs=ts .* cos.(ts)\nys=ts .* sin.(ts)\nplot(xs, ys)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-arch1-plot.svg\"); nothing # hide(Image: )"
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
    "text": "flower curver = cos(n theta)using PyPlot\nclf() # hide\nn=3\nts=0:pi/1800:2pi\nrs=cos.(n*ts)\nxs=rs .* cos.(ts)\nys=rs .* sin.(ts)\nplot(xs, ys)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-flo1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#指数関数を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 指数関数を描く",
    "category": "section",
    "text": "正の数 a  0を底(exponent)とする指数関数(exponential function)y=a^x底 a=2の場合。using PyPlot\nclf() #hide\nxs=-10:0.01:10\nplot(xs, 2.^xs)\nsavefig(\"ch03-exp1-plot.svg\"); nothing # hide(Image: )底を 2345と変えてみる。x  0 の範囲のみ描く。clf() #hide\nplot(xs, 2.^xs)\nplot(xs, 3.^xs)\nplot(xs, 4.^xs)\nplot(xs, 5.^xs)\nxlim(0,3)\nylim(0,100)\nsavefig(\"ch03-exp2-plot.svg\"); nothing # hide(Image: )凡例(legend）を加える。clf() #hide\nplot(xs, 2.^xs, label=\"a=\"*string(2))\nplot(xs, 3.^xs, label=\"a=\"*string(3))\nplot(xs, 4.^xs, label=\"a=\"*string(4))\nplot(xs, 5.^xs, label=\"a=\"*string(5))\nplot(xs, 6.^xs, label=\"a=\"*string(6))\nlegend()\nxlim(0,3)\nylim(0,100)\nsavefig(\"ch03-exp3-plot.svg\"); nothing # hide(Image: )自然対数の底として、e と eu が定義済みである。e\neu底を変えて、繰り返してみる。a^0=1=10^0 で、曲線が交差している。以下は、片対数グラフで描いた。関数 xscale, yscale は、 それぞれ x軸、y軸のスケールを指定する。 何も指定しない場合（既定値）は、線形 linear である。 log を指定すると、10の対数で、その軸を描く。using PyPlot #hide\nclf() #hide\nfor a in [2,e,3,4,5,6]\n  plot(xs, a.^xs, label=\"a=\"*string(a))\nend\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp4-plot.svg\"); nothing # hide(Image: )底 2 e 10 については、expで始まる関数が定義されている。exp2 : 底が 2 の指数関数\nexp : 自然対数 (底は、自然対数の底)\nexp10 : 底が 10 の指数関数clf() #hide\nplot(xs, exp2.(xs), label=\"exp2\")\nplot(xs, exp.(xs), label=\"exp\")\nplot(xs, exp10.(xs), label=\"exp10\")\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp7-plot.svg\"); nothing # hide(Image: )関数も名前であり、名前をつけること(=変数に代入すること）ができる。 関数のリストを作って for文で繰り返してみよう。 関数名を string関数に与えると、関数名の文字列を返す。clf() #hide\nfor f in [exp2,exp,exp10]\n  plot(xs, f.(xs), label=string(f))\nend\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp8-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#平方根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 平方根を描く",
    "category": "section",
    "text": "Base.sqrt - Function二乗するとxになる数を、xの平方根 (square root of x)という。 関数 sqrt(x)は xの平方根を求める関数である。sqrt(0)\nsqrt(2)\nsqrt(3)負の数 x  0を関数sqrtの引数（ひきすう)に与えると、 例外（exception)が発生する。 が、複素数を引数として与えると、複素数として計算できる（複素数は、もっと後の回で説明する）。sqrt(-1) # DomainError\nsqrt(complex(-1,0))  # 複素数を引数に与える平方と平方根を同じグラフに描いてみよう。 直線 y=x に対して、鏡の関係になっている。using PyPlot\nclf() #hide\nxs=0:0.01:3\nplot(xs, xs.^2, label=\"square\")\nplot(xs, sqrt.(xs), label=\"square root\")\nplot(xs, xs, \"k\", lw=0.5, label=\"y=x\")\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-sr1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#立方根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 立方根を描く",
    "category": "section",
    "text": "Base.Math.cbrt - Function三乗するとxになる数を、xの立方根 (cube root of x)という。 関数 cbrt(x)は xの立方根を求める関数である。立方と立方根を同じグラフに描いてみよう。 直線 y=x に対して、鏡の関係になっている。using PyPlot\nclf() #hide\nxs=0:0.01:3\nplot(xs, xs.^3, label=\"cubic\")\nplot(xs, cbrt.(xs), label=\"cube root\")\nplot(xs, xs, \"k\", lw=0.5, label=\"y=x\")\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-cr1-plot.svg\"); nothing # hide(Image: )平方と平方根、立方と立方根を、同じグラフに描こう。 点(11)で、曲線が交差している。using PyPlot\nclf() #hide\nxs=0:0.01:3\nplot(xs, xs.^2, label=\"square\")\nplot(xs, sqrt.(xs), label=\"square root\")\nplot(xs, xs.^3, label=\"cube\")\nplot(xs, cbrt.(xs), label=\"cube root\")\nplot(xs, xs, \"k\", lw=0.5, label=\"y=x\")\nlegend()\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr1-plot.svg\"); nothing # hide(Image: )平方根と立方根の関数のリストを作って for文で繰り返してみよう。 （結果のグラフは、上と同じなので省略する）using PyPlot\nclf() #hide\nxs=0:0.01:3\nfor f in [ sqrt, cbrt]\n  plot(xs, f.(xs), label=string(f))\nend\nlegend()\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\nxlabel(\"x\")\nylabel(\"y\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#冪乗根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 冪乗根を描く",
    "category": "section",
    "text": "一般に、正数 x  0 と 2以上の整数n に対して、y^n = x の解、 すなわち、y = sqrtnx = x^frac1nを、xのn乗根 (root of n-th power, n-th root)という。nを指定せずに、冪乗根（べきじょうこん）あるいは冪根（べきこん）と総称する。 「冪」の代わりに「巾」の略字を当てることもある。PyPlotパッケージに用意された関数 axvline()で垂直線 (vertical line)を描く。引数は、前回説明した関数 axhline (水平線を描く)と同じである。using PyPlot\nclf() #hide\nxs=0:0.01:3\nplot(xs, xs.^(1/2), label=\"n=2\")\nplot(xs, xs.^(1/3), label=\"n=3\")\nplot(xs, xs.^(1/4), label=\"n=4\")\nplot(xs, xs.^(1/5), label=\"n=5\")\nlegend()\nxlim(-0.2,2.2)\nylim(-0.2,2.2)\naxhline(1, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr3-plot.svg\"); nothing # hide(Image: )指数nで繰り返してみる。using PyPlot\nclf() #hide\nxs=0:0.01:10\nfor n in 2:5\n  plot(xs, xs.^(1/n), label=\"y=x^(1/\" * string(n) *\")\" )\nend\nlegend()\nxlabel(\"x\")\nylabel(\"y\")\nxlim(0.1,10.)\nylim(0.1,10.)\nxscale(\"log\")\nyscale(\"log\")\naxhline(1, color=\"k\", lw=0.5)\naxvline(1, color=\"k\", lw=0.5)\nsavefig(\"ch03-pr4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#自然対数-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 自然対数",
    "category": "section",
    "text": "Base.log — Method正の数 x0に対して、x=e^y を満たす数 yを、xの自然対数 (natural logarithm of x、Napierian logarithm、あるいは単に、logarithm）といい、logx と書く。$e$は、自然対数の底、あるいはネピア(Napier)の数である。関数 log(x)は、自然対数を求める関数である。log(1)\nlog(e)\nlog(e^2)\nlog(-1) # DomainError線形グラフで描いてみる。using PyPlot\nclf() #hide\nusing PyPlot\nxs=0.1:0.01:100\n0.1:0.01:100.0\nplot(xs, log.(xs))\nsavefig(\"ch03-log1-plot.svg\"); nothing # hide(Image: )片対数グラフで描いてみる。x軸を対数で表示すると、直線で表示される。plot(xs, log.(xs))\nxscale(\"log\")\nsavefig(\"ch03-log2-plot.svg\"); nothing # hide(Image: )"
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
    "text": "ダブルYグラフは、 x軸を共通として、左と右に、二つの y軸を配置するグラフである。using PyPlot\nxs=-2:0.1:2\nfig=plt[:figure]()\nax1=fig[:add_subplot](111)\nax1[:plot](xs, -xs, \"r\")\nax2=ax1[:twinx]()\nax2[:plot](xs, xs.^2, \"b\")\nsavefig(\"ch04-tw1-plot.svg\"); nothing #hide(Image: )これを描くには、次の手順をとる。 まず、以下のように、 元となる座標系(左y軸)のデータ（オブジェクト）ax1を取得する。fig=plt[:figure]()\nax1=fig[:add_subplot](111)次に、以下のように、 x軸が共通な、新しい座標系(右y軸)のデータ（オブジェクト）ax2を作成する。ax2=ax1[:twinx]()座標系 axに対して描画するには、ax[:plot](<<plot引数>>) の形式を用いる。using PyPlot\nxs=-2:0.1:2\nfig=plt[:figure]()\nax1=fig[:add_subplot](111)\nax1[:plot](xs, -xs, \"r\")\nax2=ax1[:twinx]()\nax2[:plot](xs, xs.^2, \"b\")\nsavefig(\"ch04-tw1-plot.svg\"); nothing # hide"
},

{
    "location": "ch03.html#自由落下運動を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 自由落下運動を描く",
    "category": "section",
    "text": "(力学の問題)鉛直上向きに投げられた球が、重力のみを感じて自由落下するとする。 時刻 t=0において、高さ y=0, 鉛直上向きの速度 v_0 とすると、 時刻 tにおける、高さ yと 鉛直上向きの速度 v は、以下のように表される。beginalign* v  = v_0 - gt  y  = v_0 t - dfrac12gt^2 endalign*各時刻の速度を描く。 長さの単位としてメートル m、 時間の単位として秒 s を、(組立て単位を含めて)一貫して用いる。重力加速度 g = 98mathrmms^2初速度を v0 = 10mathrmms としよう。各時刻の速度を描く。using PyPlot\nclf() #hide\nv0=10 # m/s\ng=9.8 # m/s^2\n\nts=0:0.1:3 # s\nvs=v0-g*ts\nplot(ts,vs)\nsavefig(\"ch04-gy1-plot.svg\"); nothing # hide(Image: )各時刻の高さを描く。ys=v0*ts-g*ts.^2/2\nplot(ts,ys)\nsavefig(\"ch04-gy2-plot.svg\"); nothing # hide(Image: )この二つのグラフを、時刻を、共通の横軸にとって描こう。clf() #hide\nax1=plt[:subplot]()\nax2=ax1[:twinx]()\nax1[:plot](ts,vs)\nax2[:plot](ts,ys)\nsavefig(\"ch04-gy3-plot.svg\"); nothing # hide(Image: )各軸に対して、描画範囲を指定する。 各軸オブジェクトに対して関数 set_xlim または set_ylim を用いる。 (関数 xlim または ylim は、軸オブジェクトに対して用いない)共通な下軸に対しては、元の軸オブジェクト ax1に対して指定する。 左軸、右軸は、各軸のオブジェクトに対して指定する。各軸にラベルをつけるには、 各軸オブジェクトに対して関数 set_xlabel または set_ylabel を用いる。 (関数 xlabel または ylabel は、軸オブジェクトに対して用いない)ax1[:set_xlabel](\"time / s\")\nax1[:set_xlim](-0.3,2.3)\nax1[:set_ylim](-12,12)\nax2[:set_ylim](-6,6)\nax1[:set_ylabel](\"velocity / m s^-1\")\nax2[:set_ylabel](\"height / m\")\n\nsavefig(\"ch04-gy4-plot.svg\"); nothing # hide(Image: )各軸に対して、水平線 axvline や垂直線 axvline を描く。時刻 dfracv0g で、速度が 0 となり、最大の高さを取る様子が見える。ax1[:axvline](v0/g, color=\"k\", lw=0.5)\nax1[:axvline](0, color=\"k\", lw=0.5)\nax1[:axhline](0, color=\"k\", lw=0.5)\nsavefig(\"ch04-gy5-plot.svg\"); nothing # hide(Image: )"
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
    "text": "複数軸に共通な凡例を描くには、技巧が少々必要である。まず、前節のプログラムをまとめて書こう。 二つの曲線に、色を指定しよう。using PyPlot\nclf() #hide\nax1=plt[:subplot]()\nax2=ax1[:twinx]()\nax1[:plot](ts,vs, \"b\", label=\"velocity\")\nax2[:plot](ts,ys, \"r\", label=\"height\")\nax1[:set_xlabel](\"time / s\")\nax1[:set_xlim](-0.3,2.3)\nax1[:set_ylim](-12,12)\nax2[:set_ylim](-6,6)\nax1[:set_ylabel](\"velocity / m s^-1\")\nax2[:set_ylabel](\"height / m\")\nax1[:axvline](10/9.8, color=\"k\", lw=0.5)\nax1[:axvline](0, color=\"k\", lw=0.5)\nax1[:axhline](0, color=\"k\", lw=0.5)\n; # hide各軸に含まれる曲線の形状と凡例を、 get_legend_handles_labels 関数を用いて、取り出す。二つの軸に含まれる形状と凡例を、それぞれ結合する。 片方の軸に対して、結合した形状と凡例を追加する。lns1, lbl1 = ax1[:get_legend_handles_labels]()\nlns2, lbl2 = ax2[:get_legend_handles_labels]()\nlns  = [ lns1; lns2 ]\nlbls = [ lbl1; lbl2 ]\n\nax2[:legend]( lns, lbls, loc=0)\nsavefig(\"ch04-gy6-plot.svg\"); nothing # hide(Image: )"
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
    "text": "花曲線の例で nを変えてみる。グラフのプロット領域を分割するには、以下の命令を用いる。ax=plt[:subplot](ijk)ijk は３桁の整数である。 百の位 iは、縦方向の分割数、 十の位 jは、横報告の分割数である。 一の位は、取得するプロット番号であり、 左から右、上から下に、1から順に振られる。using PyPlot\nclf() #hide\nts=0:pi/1800:2pi\nfor i=1:6\n  n=i+2\n  ax=plt[:subplot](330+i)\n  rs=cos.(n*ts)\n  xs=rs .* cos.(ts)\n  ys=rs .* sin.(ts)\n  ax[:plot](xs,ys)\n  ax[:set_xlim](-1,1)\n  ax[:set_ylim](-1,1)\n  ax[:set_aspect](\"equal\")\nend\nsavefig(\"ch03-flo2-plot.svg\"); nothing # hide(Image: )"
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
    "text": "PyPlotパッケージに含まれる関数plotは、 複数回起動する毎に曲線の見た目を変える。見た目を個別に変えるには、plot関数のデータを指定した直後に、 文字列(fmtパラメータ) を指定する。fmtパラメータは、 色、マーカー種類、線の見た目を、1文字ないし2文字で指定する。 指定しなければ、規定値が選ばれる。色を変える例using PyPlot\nclf() #hide\nxs=-10:0.1:10\nplot(xs, 9.^xs, \"b\", label=\"b\") # blue\nplot(xs, 8.^xs, \"g\", label=\"g\") # green\nplot(xs, 7.^xs, \"r\", label=\"r\") # red\nplot(xs, 6.^xs, \"c\", label=\"c\") # cyan\nplot(xs, 5.^xs, \"m\", label=\"m\") # magenda\nplot(xs, 4.^xs, \"y\", label=\"y\") # yellow\nplot(xs, 3.^xs, \"k\", label=\"k\") # black\nplot(xs, 2.^xs, \"w\", label=\"w\") # white (白背景では見えない)\nxlim(0,3)\nylim(0,100)\nlegend()\nsavefig(\"ch03-pyplot1-plot.svg\"); nothing # hide(Image: )マーカーの形を変える例。 マーカーの色は全て青としたusing PyPlot\nclf() #hide\nxs=-2:0.2:2\nplot(xs, xs.^2,     \"b.\", label=\".\") # point\nplot(xs, xs.^2 -2,  \"b,\", label=\",\") # pixel\nplot(xs, xs.^2 -4,  \"bo\", label=\"o\") # circle\nplot(xs, xs.^2 -6,  \"bs\", label=\"s\") # square\nplot(xs, xs.^2 -8,  \"b*\", label=\"*\") # star\nplot(xs, xs.^2 -10, \"b+\", label=\"+\") # plus\nplot(xs, xs.^2 -12, \"bx\", label=\"x\") # x\nplot(xs, xs.^2 -14, \"bD\", label=\"D\") # diamond\nplot(xs, xs.^2 -16, \"bd\", label=\"d\") # thin diamond\nxlim(-3,3)\nlegend()\nsavefig(\"ch03-pyplot2-plot.svg\"); nothing # hide(Image: )線のスタイルを変える例using PyPlot\nclf() #hide\nxs=-2:0.2:2\nplot(xs, xs.^3-xs.^2,   \"r-\",  label=\"-\")  # solid line\nplot(xs, xs.^3-xs.^2-2, \"r--\", label=\"--\") # dashed line\nplot(xs, xs.^3-xs.^2-4, \"r-.\", label=\"-.\") # dash-dot line\nplot(xs, xs.^3-xs.^2-6, \"r:\",  label=\":\")  # dotted line xlim(-2.2,2.2)\nlegend()\nsavefig(\"ch03-pyplot3-plot.svg\"); nothing # hide(Image: )"
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
    "text": "逆数関数 y=dfrac1x を描いてみよう。note: Note\n逆数関数 reciprocal function という。逆関数 inverse function と区別されたい。さて、dfrac10の値はInfであるが、 plot関数は「数でない数」をスキップして何も描かない。分母0の除算を特別扱いする必要はない。逆数関数は、x=0で不連続であり、xの正負に対応して二つの枝を持つ。using PyPlot\nclf() #hide\nxs=-3:0.1:3\nplot(xs,1./xs)\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-recipro1-plot.svg\"); nothing # hide(Image: )続けて、水平線、垂直線、y=x, y=-x を追加しよう。plot(xs,xs, color=\"k\", lw=0.5)\nplot(xs,-1*xs, color=\"k\", lw=0.5)\naxhline(0, color=\"k\", lw=0.5)\naxvline(0, color=\"k\", lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-recipro2-plot.svg\"); nothing # hide(Image: )"
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
    "text": "有理関数とは、多項式(分子)を多項式(分母)で割った関数である。以下の有理関数を描こう。y = dfracx^3+8x^3+3x^2-4x-12まず、分母を描く。using PyPlot\nclf() #hide\nxs=-10:0.1:10\nplot(xs, xs.^3+3xs.^2-4*xs-12)\nylim(-20,20)\nxlim(-4,4)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(-2, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch03-dis1-plot.svg\"); nothing # hide(Image: )分母は x=-3 -2 2で 0 となるから、 上の有理関数は、この三点で不連続となる「可能性」がある。では、上の有理関数を描いてみる。逆数関数の描画と同じように、分母0となる場合を特別扱いする必要はない。clf() #hide\nxs=-10:0.05:10\nplot(xs, (xs.^3+8)./(xs.^3+3xs.^2-4xs-12))\nylim(-10,10)\nxlim(-4,4)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch03-dis2-plot.svg\"); nothing # hide(Image: )実際には、x=-2では不連続ではない。 分子・分母は共通項 (x+2) で割れるからである。もう少し、横軸の範囲を狭めて描く。clf() #hide\nxs=-10:0.05:10\nplot(xs, (xs.^3+8)./(xs.^3+3xs.^2-4xs-12))\nylim(-10,10)\nxlim(-3,3)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(-2, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch03-dis3-plot.svg\"); nothing # hide(Image: )"
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
    "text": "Base.tan - Function\nBase.cot - Function正接 tanxは、pi の奇数倍で不連続である。余接 cotxは、pi の偶数倍で不連続である。using PyPlot\nclf() #hide\nxs=-2pi:pi/360:2pi\nplot(xs, tan.(xs), label=\"tan\")\nplot(xs, cot.(xs), label=\"cot\")\nylim(-1e1, 1e1)\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch03-tan1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#角度単位-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "角度単位",
    "category": "section",
    "text": "Base.Math.tand - Function\nBase.Math.cotd - Functionusing PyPlot\nclf() #hide\nxs=-360:1:360\nplot(xs, tand.(xs), label=\"tand\")\nplot(xs, cotd.(xs), label=\"cotd\")\nxlabel(\"degree\")\nylim(-1e1, 1e1)\nlegend()\nsavefig(\"ch03-tan2-plot.svg\"); nothing # hide(Image: )"
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
    "text": "ラジアン単位の正接関数 tan は、周期 2piである。 平行移動して重なることを、図示してみよう。比較の基準となる曲線は fmt=\"bo\" (blue, circle, 青い円) で描いた。比較される曲線は fmt=\"r.\" (red, point, 赤い点) で描いた。青い円の真ん中に、赤い点が描かれ、同じ位置にプロットされていることが分かる。using PyPlot\nclf() #hide\nxs=-2pi:pi/18:2pi\nplot(xs, tan.(xs),      \"bo\", label=\"tan\")\nplot(xs, tan.(xs+2*pi), \"r.\", label=\"tan, shifted by 2pi\")\nylim(-1e1, 1e1)\nxlim(-1.2*pi, 1.2*pi)\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch03-tan1t-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#符号関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 符号関数を描く",
    "category": "section",
    "text": "Base.sign - Function関数 sign(x)は、x  0なら1、x=1なら0、x  0なら -1 をそれぞれ返す。using PyPlot\nclf() #hide\nusing PyPlot\nxs=-6.4:0.1:6.4\n-6.4:0.1:6.4\nplot(xs, sign.(xs), \".\")\nsavefig(\"ch04-sign1-plot.svg\"); nothing # hide(Image: )三角関数と関数 sign とを組み合わると、 不連続な周期関数を作ることができる。"
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
    "text": "Base.abs - Function関数 abs(x)は、xの絶対値を返す。using PyPlot\nclf() #hide\nxs=-1:0.1:1\nplot(xs,abs.(xs))\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-abs1-plot.svg\"); nothing # hide(Image: )絶対値関数の符号を変えたり、平行移動すると、色々な山や谷の形を描くことができる。using PyPlot\nclf() #hide\nxs=-2pi:pi/18:2pi\n# 符号を変える。山の形\nplot(xs, -abs.(xs), label=\"-abs(x)\")\n# 縦軸の平行移動\nplot(xs, pi-abs.(xs), label=\"pi-abs(x)\")\n# さらに、横軸の平行移動\nplot(xs, pi-abs.(xs-pi), label=\"pi-abs(x-pi)\")\nlegend()\nxlabel(\"x\")\naxhline(0,color=\"k\",lw=0.5)\naxvline(0,color=\"k\",lw=0.5)\naxvline(pi,color=\"k\",lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-abs2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#クランプ関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ クランプ関数",
    "category": "section",
    "text": "Base.Math.clamp関数 clamp(x, lo, hi)は、上限と下限で制限する関数である。 すなわち、xの値が hi よりも大きければ hiを、lo よりも大きければ loを返す。 どちらでもなければ、そのままの値を返す。using PyPlot\nclf() #hide\nxs=-5:0.1:5\nplot(xs,clamp.(xs,-1,2))\nxlim(-5,5)\nylim(-5,5)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-clamp1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#床関数・天井関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "■ 床関数・天井関数",
    "category": "section",
    "text": "Base.floor\nBase.ceil床関数 floor(x)は、xを超えない最大の整数を返す。天井関数 ceil(x)は、x以上の最小の整数を返す。下のグラフで、整数 x に対する関数の値を、よく観察せよ。これらの関数は、■ 浮動小数点数から整数への変換 で用いられる。using PyPlot\nclf() #hide\nxs=-2.4:0.2:2.4\nplot(xs, ceil.(xs), \"o\", label=\"ceil\")\nplot(xs, floor.(xs), \".\", label=\"floor\")\nfor x in -2:2\n  axvline(x, color=\"k\", lw=0.5)\n  axhline(x, color=\"k\", lw=0.5)\nend\nxlim(-3.2,3.2)\nylim(-3.2,3.2)\n\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch04-floorceil1-plot.svg\"); nothing # hide(Image: )"
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
    "text": "Base.:< - Function\nBase.:<= - Function演算子<は、a < b のように用いて、aの値がbの値よりも小さいか否か。 演算子>=は、a <= b のように用いて、aの値がbの値以下であるか否か判定する。2 < 1\n2 <= 1\n2 <= 2"
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
    "text": "Operatorsa ? b : c条件aが真(true)なら bを、偽なら c を値とする「マクロ」である。m= 2 > 1 ? \"yes\" : \"no\"\n@show mif式を用いて ▶︎ 絶対値関数 を、以下のように書くこともできる。myabs2(x) = x >= 0 ? x : -x\n\n@show myabs2(-1)"
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
    "text": "Base.:! — Function論理否定 ! aは、aの論理値を反転する。! true\n! false"
},

{
    "location": "ch05.html#論理積-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "論理積",
    "category": "section",
    "text": "&& - Keyword論理積 acdot bは、aとbとの両方がtrueのときだけ trueとなる。 aとbとの、少なくとも一つが false なら、false　となる。true && true\ntrue && false\nfalse && false\nfalse && false"
},

{
    "location": "ch05.html#論理和-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "論理和",
    "category": "section",
    "text": "|| - Keyword論理和 論理積 a + bは、aとbとの少なくとも一つがtrueのとき trueとなる。 aとbとのどちらも false のときは、false　となる。true || true\ntrue || false\nfalse || false\nfalse || false## ■ 短絡評価\n\n[Short-Circuit Evaluation](https://docs.julialang.org/en/v0.6.4/manual/control-flow/#Short-Circuit-Evaluation-1)\n\n論理積 `a && b` を評価する場合、\n`a` が 偽 `false`なら、`b`を評価しない。\n`a` が 真 `false`なら、`b` も評価する。\n\n論理和 `a || b` を評価する場合、\n`a` が 真 `true` なら、`b`を評価しない。\n`a` が 偽 `true` なら、`b` も評価する。"
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
    "text": "方程式の数よりも、未知数の数が少ない方程式を不定方程式という。 未知数の性質が決まっていれば、未知数の候補を、方程式に代入して、 成り立つ未知数の組合せを求めることができる (総当たり攻撃, brute-force attack)。問題　「負ではない三つの整数 x y z が、次の二つの等式を同時に満たすという。x + y + z = 24x+2y+4z = 51三つの数 x y zの組合せを全て求めよ。」ここで、 x y z は、0から24までの整数である。 x y z の全ての組み合わせに対して、二つの等式が成り立つ条件を、if文に渡す。for z=0:24\n  for y=0:24\n    for x=0:24\n      if x+y+z==24 && x+2*y+4*z==51\n        @show x,y,z\n      end\n    end\n  end\nend"
},

{
    "location": "ch05.html#格子点による平面領域の塗り分け-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ 格子点による平面領域の塗り分け",
    "category": "section",
    "text": "平面座標 の第一象限 0 le x le 1 0 le y le 1 の範囲に、 格子点を配置しよう。そのうち、x^2+y^2 lt 1 の範囲にある点を赤で、 それ以外を青で色分けして示そう。二重の繰り返し (二重ループ)を用いた。刻み幅は各軸 0.025 に選んだので、 格子点の総数は 40times40=1600 個である。赤色の範囲は、4分円となる。using PyPlot\nclf() #hide\nfor y=0:0.025:1\n  for x=0:0.025:1\n    c = x*x + y*y < 1 ? \"r\" : \"b\"\n    plot(x,y,\".\", color=c)\n  end\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1-lattice-plot.svg\"); nothing # hide(Image: )今度は、二つの不等式 y  x と y  1-xの両方に囲まれる領域を、 赤で示そう。二重ループを一つの for文にまとめた。for文の右側に書かれたループ変数が内側のループに相当する。using PyPlot\nclf() #hide\nfor y=0:0.025:1, x=0:0.025:1\n  if y < x && y < 1-x\n    c=\"r\"\n  else\n    c=\"b\"\n  end\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1s-lattice-plot.svg\"); nothing # hide(Image: )"
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
    "text": "関数 rand() を2回用いて、座標点 (x,y) を発生しよう。 点の数を増やすと、これらの点は、平面の第一象限 0 le x lt 1 0 le y lt 0 の範囲を埋め尽くすはずである。そのうち、x^2+y^2 lt 1 の範囲にある点を赤で、 それ以外を青で色分けして示そう。点の個数は 2^10=1024 である。 格子点で図示した場合 ( ▶︎ 格子点による平面領域の塗り分け ) に比べて 点の数は少ないが、特徴を捉えている。using PyPlot\nclf() #hide\nn=2^10\nfor i=1:n\n  x=rand()\n  y=rand()\n  c = x*x + y*y < 1 ? \"r\" : \"b\"\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1-random-plot.svg\"); nothing # hide(Image: )今度は、 二つの不等式 y  x と y  1-x の両方に囲まれる領域だけ、赤で示そう。using PyPlot\nclf() #hide\nn=2^10\nfor i=1:n\n  x=rand()\n  y=rand()\n  if y < x && y < 1-x\n    c=\"r\"\n  else\n    c=\"b\"\n  end\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1s-random-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch05.html#モンテカルロ法による平面図形の面積の推定-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ モンテカルロ法による平面図形の面積の推定",
    "category": "section",
    "text": "以上の例で、ランダムに落とした点の総数のうち、 図形の中に入った数を数えよう。 両者の割合から、図形の面積を推定できる。 これを、モンテカルロ (Monte Carlo)法による面積の算出法という。note: Note\nモンテカルロ (Monte Carlo)は、モナコ公国(Monaco)の地名の一つであり、公営カジノで有名である。モンテカルロ法 (Monte Carlo Method)は、擬似乱数を用いて、数値計算やシミュレーションを行う手法の総称である。(面積を推定する手法以外の「モンテカルロ法」もある)まず、4分円の面積を推定しよう。n=2^10\ns=0\nfor i=1:n\n  x=rand()\n  y=rand()\n  if x*x + y*y < 1\n    s += 1\n  end\nend\n@show s/n; #hide\n@show pi/4; #hide\n@show (s/n - pi/4)/(pi/4) #hide4分円の面積は dfracpi4である。 点数 1024個で、相対誤差 2% 程度の、面積推定値が得られた。今度は、点の総数に対して、面積の推定値を描いてみる。using PyPlot\nclf() #hide\nfor m in 1:16\n  n=2^m\n  s=0\n  for i=1:n\n    x=rand()\n    y=rand()\n    if x*x + y*y < 1\n      s += 1\n    end\n  end\n  plot(n, s/n, \".\")\n  @show n, s/n\nend\nylim(0.9*pi/4, 1.1*pi/4)\nxlabel(\"n\")\nxscale(\"log\")\naxhline(pi/4, color=\"k\", lw=0.5)\nsavefig(\"ch05-qc1-plot.svg\"); nothing # hide(Image: )正しい面積との相対誤差を、点の総数に対して描いてみる。using PyPlot\nclf() #hide\nfor m in 1:16\n  n=2^m\n  s=0\n  for i=1:n\n    x=rand()\n    y=rand()\n    if x*x + y*y < 1\n      s += 1\n    end\n  end\n  plot(n, abs(s/n-pi/4)/(pi/4), \".\")\nend\nxlabel(\"n\")\nylabel(\"relative errors\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch05-qc2-plot.svg\"); nothing # hide(Image: )"
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
    "text": "条件判断を、繰り返し行うことで、求める答えに近づいて行く例を、 もう一つ紹介する。▶︎ 不連続な有理式を描く の例として挙げた分母の式 f(x)=x^3+3x^2-4x-12 について、方程式 f(x)=0 の解の近似値を求めてみる。まず、y=f(x)のグラフを描こう。f(x)=x^3+3x^2-4*x-12\nxs=-3.5:0.05:3\n\nusing PyPlot\nclf() #hide\nplot(xs, f.(xs))\naxhline(0, color=\"k\", lw=0.5)\nsavefig(\"ch05-secant1-plot.svg\"); nothing # hide(Image: )さて、 連続な関数 f(x) が、 区間 a lt x lt b で単調（単調増加または単調減少）であるとする。 ここで、f(a) と f(b) との符号が 異なるとき f(a)cdot f(b)lt 0 、 方程式 f(x)=0 の解は a lt x lt b の区間にある。ここで、a と b との中点 c=dfraca+b2 をとり、f(a) と f(c) が同じ符号であれば 左端aをcに更新する。 逆に、f(b) と f(c) が同じ符号であれば 右端bをcに更新する。この手順を繰り返すことで、 方程式 f(x)=0 の解が存在する区間 a lt x lt b を狭めていくことができる。 この手法を「はさみうち」法という。英語では、squeeze theorem, pinching theorem, sandwich theorem などと呼ばれる。上の関数 f(x) で a=-32  x  b=-26 の区間を選ぼう。この区間で f(x) が単調であることを、まず確かめよう。# f(x)=x^3+3*x^2-4*x-12\nxs=-3.2:0.01:-2.6\nclf() #hide\nplot(xs, f.(xs))\naxhline(0, color=\"k\", lw=0.5)\nsavefig(\"ch05-secant1b-plot.svg\"); nothing # hide(Image: )この区間で、「はさみうち」を数回繰り返してみる。# f(x)=x^3+3x^2-4*x-12\na=-3.2; b=-2.6\n@show a,b\n@show f(a),f(b)\nfor i=1:10\n  c=(a+b)/2\n  @show i, a, b, c, f(c)\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\nendこの範囲の解は x=-3である。@show f(-3)区間が狭まる様子を、グラフに描いてみよう。# f(x)=x^3+3x^2-4*x-12\nusing PyPlot\nclf() #hide\na=-3.2; b=-2.6\nfor i=1:15\n  plot(b,i, \"ro\")\n  plot(a,i, \"b.\")\n\n  c=(a+b)/2\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\nend\nxlabel(\"x\")\nylabel(\"i\")\nsavefig(\"ch05-secant2-plot.svg\"); nothing # hide(Image: )今度は、区間の幅 b-aをプロットしよう。 区間の幅が、単調に減少する様子が観察された。# f(x)=x^3+3x^2-4*x-12\nusing PyPlot\nclf() #hide\na=-3.2; b=-2.65\nfor i=1:30\n  plot(i, b-a, \"r.\")\n\n  c=(a+b)/2\n  if f(a)*f(c) > 0\n    a = c\n  else\n    b = c\n  end\nend\nyscale(\"log\")\nylabel(\"b-a\")\nxlabel(\"i\")\n\nsavefig(\"ch05-secant3-plot.svg\"); nothing # hide(Image: )"
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
    "text": "整数同士の割り算（除算）の結果(商 quotient)は、小数(浮動小数点数)になる。1 / 2余り (剰余)を求めたい場合は、■ 整商・剰余 を参照せよ。"
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
    "location": "ch06.html#整商・剰余-1",
    "page": "第6回：■ 整数",
    "title": "■ 整商・剰余",
    "category": "section",
    "text": "余りを算出する割り算（除算）に対する商を、 整商(せいしょう、integral quotient)という。正の整数 x を正の整数 dで割った結果、 整商(integral quotient)が q、剰余(余り)が r であるとき x=qd+r が成り立つ。ここで、被除数(割られる数、dividend) x と 除数 (割る数、divisor) d の両方が正の数の場合、 剰余 r は 0 le r lt d の範囲になる。整商と剰余を計算する関数が、二組用意されている。整商 div と剰余 rem\n整商 fld と剰余 mod"
},

{
    "location": "ch06.html#整商-div-と剰余-rem-1",
    "page": "第6回：■ 整数",
    "title": "整商 div と剰余 rem",
    "category": "section",
    "text": "Base.rem - Function\nBase.div - Function被除数 x と除数 dの両方が正の整数のとき、 二つの関数の組は、同じ整商 q と剰余 r を返す。 どちらを用いてもよいが、計算コストが若干低い、関数の組 div と rem が好まれる。なお、関数 rem は、演算子 % という別名がある。rem(15,4)\n15 % 4整数 0から 7までを、3 で割った整商と剰余 (divとremの結果) をプロットしよう。using PyPlot\nclf() #hide\nxs=0:7\nd=3\nplot(xs,rem.(xs,d), \"ro\", label=\"rem(x,\"*string(d)*\")\")\nplot(xs,div.(xs,d), \"b.\", label=\"div(x,\"*string(d)*\")\")\n\nxlim(-0.2,6.2)\nylim(-0.2,3.2)\nxlabel(\"x\")\nlegend()\n\nfor x=0:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=0:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch06-divrem1-int-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#練習-1",
    "page": "第6回：■ 整数",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "日本では、小額の取引に、500円\n100円\n50円\n10円\n5円\n1円の6種類の硬貨がよく用いられる。金額が与えられたときに、6種類の硬貨が各々何枚必要か計算せよ。 ただし、高額の硬貨を優先して用いるものとする。第一段階として、100円、10円、1円に分けるプログラムを書いて実行せよ。\n第二段階として、上の 6種類の硬貨に分けるプログラムを書いて実行せよ。同様な処理は、繰り返し (for文)を用いてみよ。\n第三段階として、1円刻みで551円までの金額に対して、6種類の硬貨の枚数を描くプログラムを書いて実行せよ。"
},

{
    "location": "ch06.html#ユークリッドの互除法-1",
    "page": "第6回：■ 整数",
    "title": "▶︎ ユークリッドの互除法",
    "category": "section",
    "text": "2 つの自然数 a, b (a ge b) について、 a の b による剰余を r とすると、 a と b との最大公約数は b と r との最大公約数に等しいという性質が成り立つ。 この性質を利用して、b を r で割った剰余、 除数 r をその剰余で割った剰余、 と剰余を求める計算を逐次繰り返すと、 剰余が 0 になった時の除数が a と b との最大公約数となる。a=1071\nb=1029\n@show a,b\nwhile b != 0\n  t = a\n  b = rem(a, b)\n  a = t\n  @show a,b\nend\n@show a,b3355と2379の最大公約数を求めてみよう。a=3355\nb=2379\n@show a,b\nwhile b != 0\n  t = a\n  b = rem(a, b)\n  a = t\n  @show a,b\nend\n@show a,b"
},

{
    "location": "ch06.html#整商・剰余：被除数が負の場合-1",
    "page": "第6回：■ 整数",
    "title": "■ 整商・剰余：被除数が負の場合",
    "category": "section",
    "text": "正の整数 xを 正の整数 dで割ったときの 整商 q と剰余 r の関係 x=qd+r は、 負の数や、小数に拡張できる。被除数 x や除数 d が負の数の場合、 整商 qと 剰余 r の取るべき値について、複数の考え方がある。まず、除数が正で、被除数 d が負である場合を考える。剰余 remは、被除数 x と同じ符号を選ぶ。 被除数 x が負なら、-d lt r le 0の範囲である。 対応する整商は 関数 div で求められる。using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=3\nplot(xs,rem.(xs,d), \"ro\", label=\"rem(x,\"*string(d)*\")\")\nplot(xs,div.(xs,d), \"b.\", label=\"div(x,\"*string(d)*\")\")\n\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-divrem2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#整商-fld-と剰余-mod-1",
    "page": "第6回：■ 整数",
    "title": "整商 fld と剰余 mod",
    "category": "section",
    "text": "Base.mod - Function\nBase.fld - Functionこれに対して、除数 d が正の場合、 剰余 mod は、被除数xの符号によらず、0 le r lt d の範囲の剰余 r を返す。 対応する整商は 関数 fld で求められる。using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=3\nplot(xs,mod.(xs,d), \"ro\", label=\"mod(x,\"*string(d)*\")\")\nplot(xs,fld.(xs,d), \"b.\", label=\"fld(x,\"*string(d)*\")\")\n\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-fldmod1-plot.svg\"); nothing # hide(Image: )実は、関数 fld(x,d) は、floor(x/d) と同じである。 すなわち、dfracxd 以下の最大の整数を返す。 参照： ■ 床関数・天井関数using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=3\nqs=floor.(xs/d)\nrs=xs-qs*d\nplot(xs, rs, \"ro\", label=\"remainder divided by \"*string(d))\nplot(xs, qs, \"b.\",  label=\"quotient divided by \"*string(d))\n\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor y=-3:3\n  axvline(y, color=\"k\", lw=0.5)\nend\n\nfor x=-7:7\n  axhline(x, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-fldmod2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#練習-2",
    "page": "第6回：■ 整数",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "正の数 x を10の位で\n100の位で\n1000の位で\n0.1の位で\n一般に10^nの位で数を切り捨てるには、どうすればよいか？プログラムを書いて、実行してみよ。"
},

{
    "location": "ch06.html#練習-3",
    "page": "第6回：■ 整数",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "正の数 x を10の位で\n100の位で\n1000の位で\n0.1の位で\n一般に10^nの位で数を四捨五入するには、どうしたらよいか？プログラムを書いて、実行してみよ。"
},

{
    "location": "ch06.html#整商・剰余：除数が負の場合-1",
    "page": "第6回：■ 整数",
    "title": "■ 整商・剰余：除数が負の場合",
    "category": "section",
    "text": "次に、除数 q が負の場合の整商・剰余を紹介する。除数 dが負の場合も、 剰余関数 remは、被除数 x と同じ符号を選ぶ。using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=-3\nplot(xs,rem.(xs,d), \"ro\", label=\"rem(x,\"*string(d)*\")\")\nplot(xs,div.(xs,d), \"b.\", label=\"div(x,\"*string(d)*\")\")\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\n\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-divrem3-plot.svg\"); nothing # hide(Image: )Base.modこれに対して、剰余関数modは、 除数 dが負の場合は、d lt r le 0 の範囲の剰余 rを返す。using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=-3\nplot(xs,mod.(xs,d), \"ro\", label=\"mod(x,\"*string(d)*\")\")\nplot(xs,fld.(xs,d), \"b.\", label=\"fld(x,\"*string(d)*\")\")\nxlim(-6.2,6.2)\nylim(-3.2,3.2)\nxlabel(\"x\")\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\n\nfor x=-7:7\n  axvline(x, color=\"k\", lw=0.5)\nend\n\nfor y=-3:3\n  axhline(y, color=\"k\", lw=0.5)\nend\n\nsavefig(\"ch06-fldmod3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#2piで割った剰余-1",
    "page": "第6回：■ 整数",
    "title": "▶ 2piで割った剰余",
    "category": "section",
    "text": "Base.Math.mod2pi — Function関数 mod2pi(x) は、mod(x,2*pi) と同じである。 すなわち、x を 2pi で割った余りを返す。using PyPlot\nclf() #hide\nis=-24:24\nxs=is/3\nplot(xs,mod2pi.(xs), \".\")\nxlabel(\"x\")\nylabel(\"mod2pi(x)\")\naxhline(0, color=\"k\", lw=0.5)\naxhline(2*pi, color=\"k\",lw=0.5)\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch06-mod2pi-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#整商・剰余・除数が-0-の場合-1",
    "page": "第6回：■ 整数",
    "title": "■ 整商・剰余・除数が 0 の場合",
    "category": "section",
    "text": "除数が 0 であると例外(exception)を発生する。 例外が発生すると、プログラムの実行は、そこで中断する。除算例外 Division errosdiv(3,0)\nrem(3,0)note: Note\n例外が発生した場合、それを救済する手続きを書いて、プログラムを続行させることもできる。だが、この文書の範囲を超えるので、説明しない。 → Exception Handling"
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
    "text": "型\n整数\n整数同士の加減乗算\n整数同士の除算\n整数と浮動小数点数との四則演算\n浮動小数点数から整数への変換\n整商・剰余\nユークリッドの互除法\n切り捨て、四捨五入 (練習)"
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
    "text": "小数 02 は 02 = frac15 = frac1101_2 となるが、1 を 101_2 で割り切ることはできない。02 を2進数で表すと000110011001100cdots_2のようになる。すなわち、1100 の並びが無限に続く循環小数となる。また、小数 01 は 01 = frac15times 2 = frac1101_2 times 2^-1 であるから、$0.1$ を2進数で表すと（上を1桁ずらして）0000110011001100cdots_2のようになる。これも、1100 の並びが無限に続く循環小数となる。 「有限桁の小数」で表すことができない「循環小数」を、 Float64型で表現するとき、 その仮数の末尾に近いの桁を修正する操作を行う場合がある。 この操作を「丸める」という。「丸め」られた浮動小数の計算は、筆算とは違う結果となる場合がある。 例えば、0.1+0.2\n0.1+0.2 == 0.3筆算の結果は 03であるが、 計算結果は 0.30000000000000004 と異なってしまう。別の例として、01を 10回足した結果はs=0\nfor i in 1:10\n  s+= 0.1\nend\n@show s\ns == 1.00.9999999999999999 となり、10 にはならない。このような、「丸め」を原因とする、 正しい値からの「ずれ」を「丸め誤差」と呼んでいる。"
},

{
    "location": "ch07.html#小数を2進数へ変換する-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 小数を2進数へ変換する",
    "category": "section",
    "text": "x=f_12^-1 + f_22^-2 + cdots(正の)小数を2進数に変換するには、 小数を2倍しその整数部分を取り出すことを、繰り返し行えばよい。小数 0.2を、2進数で表示すると循環小数になる。 1100 のパターンが繰り返し現れる。x=0.2\nfor i=1:50\n    q=floor(x/2)\n    print(Int64(q))\n    x -= q*2\n    x *= 2\nend00000110011001100110011001100110011001100110011001\n\n1100 循環小数"
},

{
    "location": "ch07.html#有限小数・循環小数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "◀︎ 有限小数・循環小数",
    "category": "section",
    "text": "0.5以下の正の小数をいくつかを選び、 これらを2進数に直してみよ。有限小数か循環小数かを判定せよ。例: 0.1, 0.2, 0.25, 0.3, 0.5さらに、5つ程度の例を加えよ。"
},

{
    "location": "ch07.html#加減算における桁落ちと情報落ち-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "■ 加減算における桁落ちと情報落ち",
    "category": "section",
    "text": "桁落ち、情報落ち加算結合則を満たさないx= 1e20\ny=-1e20\nz= 1.0\n(x + y) + z\nx + (y + z)0.0 丸め誤差"
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
    "text": "2次方程式 x^2-bx+c=0 の解は、解の公式から、判別式 d=b^2-4cを用いて、 beginalignx_1=fracb+sqrtd2=fracb+sqrtb^2-4c2\nx_2=fracb-sqrtd2=fracb-sqrtb^2-4c2endalign であるが、b と sqrtdが同程度のとき x_2 は桁落ちしやすい。 そこで、(b-sqrtb^2-4c) を分母分子に掛けてx_21 = frac2cb+sqrtb^2-4c=fraccx_1により計算する。最後の項は、解と係数の関係 x_1x_2=c である。"
},

{
    "location": "ch07.html#2次方程式：計算の例-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 2次方程式：計算の例",
    "category": "section",
    "text": "実例で見てみよう。小さい正の数 hを用いて、alpha = 100+h と beta = 1+h を解とする2次方程式を作る。解と係数の関係から、上の方程式において b = alpha + beta, c=alphabeta と定めればよい。h=logspace(-12,-1);\nalpha=100+h\nbeta=1+h;\nc=alpha .* beta;\nb=-alpha -beta;解の公式から、「大きい方の解」 x1を計算する。 x2sは解の公式から求めた「小さい方の解」、である x2vは解と係数の関係から求めた「小さい方の解」d=b.*b-4c;\nx1=(-b+sqrt.(d))/2;\nx2s=(-b-sqrt.(d))/2;\nx2v=c./x1;「大きい方の解」について、正しい解との差をプロットしてみる。using PyPlot\nclf() #hide\nplot(h, x1-alpha, \".\")\nxlabel(\"h\")\nylabel(\"x1-alpha\")\nxscale(\"log\")\nsavefig(\"ch07-quad1-plot.svg\"); nothing # hide(Image: )「小さい方の解」について、正しい解との差をプロットしてみる。using PyPlot #hide\nclf() #hide\nplot(h, x2s-beta,\".\",label=\"x2s\")\nplot(h, x2v-beta, \"o\",label=\"x2v\")\nxlabel(\"h\")\nylabel(\"x2-beta\")\nxscale(\"log\")\nlegend()\nsavefig(\"ch07-quad2-plot.svg\"); nothing # hide(Image: )「小さい方の解」について、正しい解との差の絶対値(残差)をプロットしてみる。using PyPlot #hide\nclf() #hide\nplot(h, abs.(x2s-beta),\".\",label=\"x2s\")\nplot(h, abs.(x2v-beta), \"o\",label=\"x2v\")\nxlabel(\"h\")\nylabel(\"abs(x2-beta)\")\nxscale(\"log\")\nylim(1e-18,1e-13)\nyscale(\"log\")\nlegend()\nsavefig(\"ch07-quad3-plot.svg\"); nothing # hide(Image: )解の公式から求めた「小さい方の解」の残差が「あばれる」のに対して、 解と係数の関係から求めた小さい方の解」の残差が「一定」である様子が見れる。"
},

{
    "location": "ch07.html#近似比較演算子-isapprox-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "近似比較演算子 isapprox",
    "category": "section",
    "text": "Base.isapprox - Function0.1+0.2 == 0.3\nisapprox(0.1+0.2, 0.3)"
},

{
    "location": "ch07.html#数でない数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "数でない数",
    "category": "section",
    "text": "Numeric Comparisons「数でない数か」を確かめる。Base.isfinite - Function\nBase.isinf - Function\nBase.isnan - Functionfor x in [0,1,Inf,NaN,NaN]\n  println()\n  @show isfinite(x)\n  @show isinf(x)\n  @show isnan(x)\nend"
},

{
    "location": "ch07.html#数値微分-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 数値微分",
    "category": "section",
    "text": "fracdf(x_0)dx = lim_h longrightarrow 0fracf(x_0+h)-f(x_0)h関数 y=x の x=1における微分係数を、 上の定義により求めよう。 求まるべき値は 1 であるが、h を小さくすると 1 の上下に暴れてしまう。using PyPlot\nclf() #hide\nh=logspace(-18,-8,100)\nd=( (1+h).^2 - 1) ./ h\nplot(h,d, \".\")\nylim(5e-1,3e0)\nyscale(\"log\")\nxscale(\"log\")\nsavefig(\"ch07-df1-plot.svg\"); nothing # hide(Image: )関数 y=x^n, (n=123) の x=1における微分係数を、 上の定義により求めよう。 求まるべき値は n であるが、h を小さくすると n の上下に暴れてしまう。using PyPlot\nclf() #hide\nh=logspace(-18,-8,100)\nfor n=1:3\n    d=( (1+h).^n - 1) ./ h\n    plot(h,d, \".\", label=\"y=x^\"*string(n))\nend\nxlabel(\"h\")\nylabel(\"d\")\nyscale(\"log\")\nxscale(\"log\")\nlegend()\nsavefig(\"ch07-df2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch07.html#今回のまとめ-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "★今回のまとめ",
    "category": "section",
    "text": "浮動小数点数\n有限小数・循環小数\n加減算における桁落ち・情報落ち\n等差数列・等比数列\n数値微分"
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
    "text": "自然数の級数和の結果がいくつか知られている。 これらのグラフを描いて、結果を確認しよう。sum_k=1^n k = 1 + 2 + cdots + k + cdots + n^2 = dfracn(n+1)2using PyPlot\nclf() #hide\n\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1)/2, label=\"sum i\", \"b\")\n\nns=0:nmax\nfor n in ns\n  s1=0.0\n  for i in 1:n\n    s1 += i\n  end\n  plot(n,s1, \"bo\")\nend\n\nxlabel(\"n\")\nylabel(\"sum i up to n\")\n\nsavefig(\"ch08-sum1-plot.svg\"); nothing # hide(Image: )sum_k=1^n k^2 = 1^2 + 2^2 + cdots + k^2 + cdots + n^2 = dfracn(n+1)(2n+1)6using PyPlot\nclf() #hide\n\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1).*(2*xs1+1)/6, \"b\")\n\nns=0:nmax\nfor n in ns\n  s=0.0\n  for i in 1:n\n    s += i^2\n  end\n  plot(n,s, \"bo\")\nend\nxlabel(\"n\")\nylabel(\"sum i^2 up to n\")\n\nsavefig(\"ch08-sum2-plot.svg\"); nothing # hide(Image: )"
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
    "location": "ch08.html#要素が-0のベクトルを作る。-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 要素が 0のベクトルを作る。",
    "category": "section",
    "text": "Base.zeros — Function関数 zerosは、要素が零のベクトルを作る。関数 zeros(n) は、要素の型が浮動小数点で、寸法nのベクトルを作る。\n関数 zeros(T, n) は、要素の型が T で、寸法nのベクトルを作る。\nベクトル　v に対して、関数 zeros(v) は、寸法がベクトル v と同じで、要素の型がベクトル vの要素と同じベクトルを作る。zeros(5) # 要素は浮動小数点\nzeros(Float64,5) # 上と同じ\nzeros(Int64,5) # 要素は整数\nzeros(v)"
},

{
    "location": "ch08.html#要素が-1-のベクトルを作る。-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "■ 要素が 1 のベクトルを作る。",
    "category": "section",
    "text": "Base.ones — Function関数 onesは、要素が 1 のベクトルを作る。 呼び出し方は、関数 zeros() と同じである。ones(5) # 要素は浮動小数点\nones(Float64,5) # 上と同じ\nones(Int64,5) # 要素は整数\nones(v)"
},

{
    "location": "ch08.html#フーリエ級数の和（繰り返しで加算)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ フーリエ級数の和（繰り返しで加算)",
    "category": "section",
    "text": "周期波形 f(t+T) = f(t) は、 以下のように、三角関数の級数和として表される。 ここで、a_0 a_1 cdots, b_1 b_2 cdots は実数の定数である。 これを、実フーリエ級数和という。f(t) = a_0 + a_1 cos omegat  + b_1 sin omegat + a_2 cos 2omegat + b_2 sin 2omegat + a_3 cos 3omegat + b_3 sin 3omegat + cdotsここで omega は基本周波数である。 omega=dfrac2piT"
},

{
    "location": "ch08.html#方形波：フーリエ級数の有限和-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 方形波：フーリエ級数の有限和",
    "category": "section",
    "text": "方形波は、 ▶ 方形波を描く で紹介した。基本周波数 omega=1、数 -1と1とを往復する方形波を描こう。using PyPlot\nclf() #hide\nts=-3pi:pi/36:3pi\nplot(ts, sign.(sin.(ts)) )\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nsavefig(\"ch08_sq1-plot.svg\"); nothing # hide(Image: )この方形波のフーリエ級数和は、以下のように与えられる。f(t) = frac4pileftsint+fracsin3t3+fracsin5t5+cdotsrightこの式の sin t, sin 3t, sin 5t の３つを加えると、方形波に近くなることを観察する。using PyPlot\nclf() #hide\nts=-3pi:pi/36:3pi\nys=sin.(ts)*4/pi\nplot(ts, ys, label=\"n=1\")\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nys += sin.(3ts)/3*4/pi\nplot(ts, ys, label=\"n=1,3\")\nys += sin.(5ts)/5*4/pi\nplot(ts, ys, label=\"n=1,3,5\")\nlegend()\n\nsavefig(\"ch08-fo-sq2-plot.svg\"); nothing # hide(Image: )今度は sin 13t まで加えた結果を観察しよう。using PyPlot\nclf() #hide\nts=-3pi:pi/36:3pi\nn=13\nys=zeros(ts)\nfor i in 1:2:n\n  ys += sin.(i*ts)/i*4/pi\nend\nplot(ts, ys)\nplot(ts, sign.(sin.(ts)), label=\"up to\"*string(n) )\n\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nsavefig(\"ch08-fo-sq4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#三角波：フーリエ級数の有限和-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 三角波：フーリエ級数の有限和",
    "category": "section",
    "text": "一定の正の傾きで増加、一定の負の傾きで減少を繰り返す周期関数を、 三角波 (triangular wave)という。傾き 1 と -1で、周期 2pi の三角波を描こう。 この関数は、 絶対値関数 abs (参考: ▶︎ 絶対値関数 )と 関数 mod2pi (参考: ▶ 2piで割った剰余 ) とを組み合わせて定義できる。 参考→ ■ 関数の定義 (代入文形式)triangular(t)=pi-abs.(mod2pi.(t)-pi)\n\nusing PyPlot\nclf() #hide\nts=-3.5pi:pi/6:3.5pi\nplot(ts, triangular.(ts) )\nxlim(-pi*2.5,pi*2.5)\nylim(-pi*0.1,pi*1.1)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch08_fo_tri1-plot.svg\"); nothing # hide(Image: )上の三角波のフーリエ級数展開は、以下の通りである。f(t) = dfracpi2 - dfrac4pileft cos t + dfraccos 3t3^2 + dfraccos 5t5^2 + cdotsrightusing PyPlot\nclf() #hide\nys=ones(ts)*(pi/2)\nfor n=1:2:5\n  ys -= cos.(n*ts)*(4/pi/n^2)\nend\nplot(ts, ys, \"o\")\nplot(ts,triangular.(ts))\nylim(-pi*0.1,pi*1.1)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch08-fo-tri3-plot.svg\"); nothing # hide(Image: )勾配が不連続に変化する点(キンク, kink)を拡大して描画しよう。using PyPlot\nclf() #hide\nfor nmax=3:2:11\n  ys=ones(ts)*(pi/2)\n  for n=1:2:nmax\n    ys -= cos.(n*ts)*(4/n^2/pi)\n  end\n  plot(ts, ys, label=nmax)\nend\nxlim(-pi*0.1,pi*2.1)\nylim(-pi*0.1,pi*1.1)\nplt[:axes]()[:set_aspect](\"equal\")\nlegend()\nsavefig(\"ch08-fo-tri4-plot.svg\"); nothing # hide(Image: )using PyPlot\nclf() #hide\nfor j=1:6\n  nmax=1+2*j\n  ys=ones(ts)*(pi/2)\n  for n=1:2:nmax\n    ys -= cos.(n*ts)*(4/n^2/pi)\n  end\n  ax=plt[:subplot](610+j)\n  ax[:plot](ts,triangular.(ts))\n  ax[:plot](ts, ys, \"o\")\n  ax[:set_ylim](-pi*0.1,pi*1.1)\nend\nsavefig(\"ch08-fo-tri5-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#数値積分-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 数値積分",
    "category": "section",
    "text": "定積分の近似値を、級数和として求めることができる(数値積分)。例として、関数 g(x)g(x)=dfrac11+xを、x=0 から 1の範囲で積分しよう。関数 g(x)は、この範囲で単調減少である。using PyPlot\nclf() #hide\nxmin=0\nxmax=1\nm=6\nn=2^m\nxs=linspace(xmin,xmax,n+1)\ng(x)=1/(1+x)\nplot(xs, g.(xs), \"b\")\nylim(0,1.2)\nsavefig(\"ch08-rie0-plot.svg\"); nothing # hide(Image: )定積分の値は、int_0^1dfrac11+xdx = leftlogleftvert1+xrightvertright_x=0^x=1 = log2である。"
},

{
    "location": "ch08.html#Riemann和（繰り返しで加算)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ Riemann和（繰り返しで加算)",
    "category": "section",
    "text": "積分すべき関数を、等間隔の短冊に区切り、短冊の面積の総和をとろう。短冊の幅を dとすると、s_1 = sum_i=1^n g(x_i)cdotdという、総和 (Riemann和)をとることになる。以下のグラフは、8枚の短冊に分けた様子を示す。 ここで、短冊の高さは、各短冊の左端の関数の値をとった。using PyPlot\nclf() #hide\nxmin=0\nxmax=1\nm=3\nn=2^m\nxs=linspace(xmin,xmax,n+1)  # n個の短冊に分割する\nd=(xmax-xmin)/n  # 短冊の刻み\ng(x)=1/(1+x)\nplot(xs, g.(xs), \"b\")\nylim(0,1.2)\n\nfor x in xs[1:end-1]\n  plot([x, x, x+d, x+d], [0, g(x), g(x), 0], \"k\", lw=0.5)\nend\nsavefig(\"ch08-rie1-plot.svg\"); nothing # hide(Image: )では、短冊を 2^4 = 16 枚に分けて、短冊の面積の総和をとろう。se=log(2)\nm=4\nn=2^m\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ns1=0\nfor i in 1:n\n  x=xs[i]\n  s1 += g(x)*d\nend\n@show s1\n@show se\n# 相対誤差\n@show (s1-se)/se;16分割でも、相対誤差 23 を達成した。分割数を増やせば、この和は、正しい定積分の値に近づいていくであろう。分割数を 2^m で増やして、絶対誤差を描こう。 横軸の分割数は、対数で示した。using PyPlot\nclf() #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  plot(n, abs(s1 - se) , \".\", color=\"b\")\nend\nxscale(\"log\")\nxlabel(\"n\")\nylabel(\"absolute error\")\nsavefig(\"ch08-rie2-plot.svg\"); nothing # hide(Image: )今度は、相対誤差を、両対数グラフで描く。using PyPlot\nclf() #hide\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  plot(n, abs(s1 - se) / se, \".\", color=\"g\")\nend\nxlabel(\"n\")\nylabel(\"relative error (absolute value)\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch08-rie3-plot.svg\"); nothing # hide(Image: )"
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
    "text": "sum_k=1^n k = 1 + 2 + cdots + k + cdots + n^2 = dfracn(n+1)2using PyPlot\nclf() #hide\n\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1)/2, label=\"sum i\", \"b\")\n\nns=0:nmax\nfor n in ns\n  xs=1:n\n  s1=sum(xs)\n  plot(n,s1, \"bo\")\nend\n\nxlabel(\"n\")\nylabel(\"sum i up to n\")\n\nsavefig(\"ch08-sum3-plot.svg\"); nothing # hide(Image: )sum_k=1^n k^2 = 1^2 + 2^2 + cdots + k^2 + cdots + n^2 = dfracn(n+1)(2n+1)6using PyPlot\nclf() #hide\n\nnmax=25\nxs1=0:0.2:nmax\nplot(xs1, xs1.*(xs1+1).*(2*xs1+1)/6, \"b\")\n\nns=0:nmax\nfor n in ns\n  # 各要素を二乗\n  xs=(1:n).^2\n  s=sum(xs)\n  plot(n,s, \"bo\")\nend\nxlabel(\"n\")\nylabel(\"sum i^2 up to n\")\n\nsavefig(\"ch08-sum4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#Riemann和（関数-sumを用いる)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ Riemann和（関数 sumを用いる)",
    "category": "section",
    "text": "Riemann和において、 刻み幅 d は全ての短冊に共通であるから、d をくくりだしてs_1 = sum_i=1^n g(x_i)cdotd = dcdotsum_i=1^n g( x_i)のようにまとめることができる。すなわち、関数の値の和 sum_i=1^n g( x_i) をとってから d倍すればよい。関数の値の和を取るのに、関数 sum を使うことができる。下のプログラムで g.(xs[1:end-1]) は、ベクトル xs[1:end-1] の各要素に関数 g() を適用したベクトルである。ループで和を計算した場合と、関数 sum を用いる場合との両方で、 相対誤差をプロットする。 計算結果が一致していることが見える。 (参考: 結果が一致することを確かめるグラフの描画   → ▼▶︎ 周期関数を確認するusing PyPlot\nclf() #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n\n  # 和を取る\n  s1=0\n  for i in 1:n\n    x=xs[i]\n    s1 += g(x)*d\n  end\n  plot(n, abs(s1 - se)/se , \"ro\", color=\"b\")\n\n  # sum を使う\n  s2=sum( g.(xs[1:end-1]))*d\n  plot(n, abs(s2 - se)/se , \"b.\", color=\"r\")\nend\nxscale(\"log\")\nyscale(\"log\")\nxlabel(\"n\")\nylabel(\"absolute error\")\nsavefig(\"ch08-rie4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#台形則（関数-sumを用いる)-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "▶︎ 台形則（関数 sumを用いる)",
    "category": "section",
    "text": "今度は、短冊を台形として計算してみる。using PyPlot\nclf() #hide\nm=2\nn=2^m\nxmin=0\nxmax=1\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\n\ng(x)=1/(1+x)\nplot(xs, g.(xs), \"b\")\nylim(0,1.2)\n\nfor i in 1:n\n  x=xs[i]\n  plot([x, x, x+d, x+d], [0, g(x), g(x+d), 0], \"k\", lw=0.5)\nend\n\nsavefig(\"ch08-tra1-plot.svg\"); nothing # hide(Image: )総和をとるとき、隣り合う台形の面積をまとめることができることに注目しよう。s_t = sum_i=1^n dfracg(x_i)+g(x_i+1) 2cdotd = dcdotleft dfracg(x_1)2 + sum_i=2^n-1 g(x_i)  + dfracg(x_n)2 right先の Riemann和と台形則の値を両方計算してみよう。se=log(2)\n\n# Riemann和\ns1=0\nfor x in xs[1:end-1]\n  s1 += g(x)*d\nend\n\n# 台形則\nst=(g(xs[1])+g(xs[end]))/2\nfor i in 2:n\n  x=xs[i]\n  st += g(x)\nend\nst *= d\n@show s1\n@show st\n# 相対誤差\n@show (s1-se)/se;\n@show (st-se)/se;関数 sumを使って簡潔に書こう。se=log(2)\nm=4\nn=2^m\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ns1=sum( g.(xs[1:end-1]))*d\n\nst=(g(xs[1])+g(xs[end]))/2\nst += sum( g.(xs[2:end-1]))\nst *= d\n\n@show s1;\n@show st;\n# 相対誤差\n@show (s1-se)/se;\n@show (st-se)/se;相対誤差を描く。using PyPlot\nclf() #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n\n  s1=sum( g.(xs[1:end-1]))*d\n\n  st=(g(xs[1])+g(xs[end]))/2\n  st += sum( g.(xs[2:end-1]))\n  st *= d\n\n  plot(n, abs(s1 - se) / se, \".\", color=\"g\")\n  plot(n, abs(st - se) / se , \".\", color=\"r\")\nend\n\nxlabel(\"n\")\nylabel(\"relative error (absolute value)\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch08-tra3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch08.html#今回のまとめ-1",
    "page": "第8回： ▶︎ 総和・数値積分",
    "title": "今回のまとめ",
    "category": "section",
    "text": "ベクトルのインデックス\n要素が 0または1のベクトルの生成\nベクトルの総和 sum\n級数和\nフーリエ級数の和\n数値積分：Riemann和\n数値積分：台形則"
},

{
    "location": "ch09.html#",
    "page": "第9回： ■ 配列要素の操作",
    "title": "第9回： ■ 配列要素の操作",
    "category": "page",
    "text": ""
},

{
    "location": "ch09.html#ch09-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "第9回： ■ 配列要素の操作",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#ベクトル要素への代入-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ ベクトル要素への代入",
    "category": "section",
    "text": "v=collect(1:10)\n# インデックス：整数\nv[4]=0\nv\n\n# インデックス：Range\nv[3:2:10]=0\nv"
},

{
    "location": "ch09.html#エラトステネスの篩-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ エラトステネスの篩",
    "category": "section",
    "text": "nmax=100\nsieve=collect(1:nmax);\nsieve[1]=0;\nfor i in 2:nmax\n    if sieve[i] > 0\n        println(i)\n        sieve[i*2:i:nmax]=0\n    end\nend"
},

{
    "location": "ch09.html#関数の定義-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ 関数の定義",
    "category": "section",
    "text": "■ 関数の定義 (代入文形式)"
},

{
    "location": "ch09.html#タプル-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ タプル",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#関数から複数の値を返す-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ 関数から複数の値を返す",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#メソッド-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ メソッド",
    "category": "section",
    "text": "多重ディスパッチ"
},

{
    "location": "ch09.html#今回のまとめ-1",
    "page": "第9回： ■ 配列要素の操作",
    "title": "■ 今回のまとめ",
    "category": "section",
    "text": ""
},

{
    "location": "ch10.html#",
    "page": "第10回：線形代数",
    "title": "第10回：線形代数",
    "category": "page",
    "text": ""
},

{
    "location": "ch10.html#ch10-1",
    "page": "第10回：線形代数",
    "title": "第10回：線形代数",
    "category": "section",
    "text": ""
},

{
    "location": "ch10.html#ベクトルのスカラー倍、和差-1",
    "page": "第10回：線形代数",
    "title": "▶︎ ベクトルのスカラー倍、和差",
    "category": "section",
    "text": "v=[1,2,3]\nv * 2\nv + 2"
},

{
    "location": "ch10.html#ベクトル関数-1",
    "page": "第10回：線形代数",
    "title": "▶︎ ベクトル関数",
    "category": "section",
    "text": "絶対値\n内積\n随伴\n転置\n空間ベクトルの外積a=[1,1,0]\nb=[1,0,1]\nc=[0,1,1]\ndot(a,b)\ncross(a,b)"
},

{
    "location": "ch10.html#ベクトル関数-2",
    "page": "第10回：線形代数",
    "title": "▶︎ ベクトル関数",
    "category": "section",
    "text": ""
},

{
    "location": "ch10.html#多次元配列-1",
    "page": "第10回：線形代数",
    "title": "■ 多次元配列",
    "category": "section",
    "text": "■ ベクトルも、■ 行列も、多次元配列として表されている。"
},

{
    "location": "ch10.html#行列-1",
    "page": "第10回：線形代数",
    "title": "■ 行列",
    "category": "section",
    "text": "次元\n寸法\n軸\n添字a=[11 12; 21 22]\nsize(a)\na[1,1]\na[1,2]=30\na"
},

{
    "location": "ch10.html#行列のスカラー倍、和差-1",
    "page": "第10回：線形代数",
    "title": "■ 行列のスカラー倍、和差",
    "category": "section",
    "text": "a * 2\na + 2"
},

{
    "location": "ch10.html#行列関数-1",
    "page": "第10回：線形代数",
    "title": "■ 行列関数",
    "category": "section",
    "text": "随伴\n転置\n階数\n行列式a\'\na.\'\nrank(a)\ndet(a)"
},

{
    "location": "ch10.html#回転行列-1",
    "page": "第10回：線形代数",
    "title": "▶︎ 回転行列",
    "category": "section",
    "text": "楕円を回すxy=hcat([ [2*cos.(t); sin(t)] for t=0:pi/18:2pi]...)using PyPlot\nclf() #hide\nplot(xy[1,:], xy[2,:])\n\nsavefig(\"ch10-rot-ellp1-plot.svg\"); nothing # hide(Image: )R(theta) = beginbmatrix costheta  -sintheta  sintheta  costheta endbmatrixr15=[ cosd(15) -sind(15); sind(15) cosd(15)]using PyPlot\nclf() #hide\nplot(xy[1,:], xy[2,:])\nxy = r15 * xy\nplot(xy[1,:], xy[2,:])\nplt[:axes]()[:set_aspect](\"equal\")\n\nsavefig(\"ch10-rot-ellp2-plot.svg\"); nothing # hide(Image: )for i=1:6\n  plot(xy[1,:], xy[2,:])\n  xy = r15 * xy\nend\n\nsavefig(\"ch10-rot-ellp3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch10.html#行列の商-1",
    "page": "第10回：線形代数",
    "title": "▶︎ 行列の商",
    "category": "section",
    "text": "行列の商b=[5, 13]\na=[1 2; 3 4]\nv = a \\ b\na * v"
},

{
    "location": "ch10.html#行列の固有値・固有ベクトル-1",
    "page": "第10回：線形代数",
    "title": "▶︎ 行列の固有値・固有ベクトル",
    "category": "section",
    "text": ""
},

{
    "location": "ch10.html#今回のまとめ-1",
    "page": "第10回：線形代数",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": ""
},

{
    "location": "ch11.html#",
    "page": "第11回：複素数",
    "title": "第11回：複素数",
    "category": "page",
    "text": ""
},

{
    "location": "ch11.html#ch11-1",
    "page": "第11回：複素数",
    "title": "第11回：複素数",
    "category": "section",
    "text": "## ★ 今回のまとめ"
},

{
    "location": "ch12.html#",
    "page": "第12回：ファイル入出力",
    "title": "第12回：ファイル入出力",
    "category": "page",
    "text": ""
},

{
    "location": "ch12.html#ch12-1",
    "page": "第12回：ファイル入出力",
    "title": "第12回：ファイル入出力",
    "category": "section",
    "text": "## ★ 今回のまとめ"
},

{
    "location": "ch13.html#",
    "page": "第13回：検討中",
    "title": "第13回：検討中",
    "category": "page",
    "text": ""
},

{
    "location": "ch13.html#ch13-1",
    "page": "第13回：検討中",
    "title": "第13回：検討中",
    "category": "section",
    "text": "（案）微分方程式の初期値問題\n\n## ★ 今回のまとめ"
},

{
    "location": "ch14.html#",
    "page": "第14回：検討中",
    "title": "第14回：検討中",
    "category": "page",
    "text": ""
},

{
    "location": "ch14.html#ch14-1",
    "page": "第14回：検討中",
    "title": "第14回：検討中",
    "category": "section",
    "text": "（案）微分方程式の境界値問題\n\n## ★ 今回のまとめ"
},

{
    "location": "ch15.html#",
    "page": "第15回：落ち葉拾い",
    "title": "第15回：落ち葉拾い",
    "category": "page",
    "text": ""
},

{
    "location": "ch15.html#ch15-1",
    "page": "第15回：落ち葉拾い",
    "title": "第15回：落ち葉拾い",
    "category": "section",
    "text": "## ★ 今回のまとめ"
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
