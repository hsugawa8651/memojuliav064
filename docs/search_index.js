var documenterSearchIndex = {"docs": [

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
    "text": "クラウド上で無料で、Julia と Jupyter notebook を提供するサービスもある。Try Jupyter with Juliaブラウザから Jupyter notebook を利用できる (2018年8月1日現在 Julia 0.6.0 が設定されている)。"
},

{
    "location": "ch00.html#Julia言語のバージョンについて-1",
    "page": "はじめに",
    "title": "Julia言語のバージョンについて",
    "category": "section",
    "text": "Julia言語の 1.0 版は、2018年8月に公開された。しかし、周辺パッケージの整備が不十分であることから、 本文では、2018年6月に公開された 0.6.4 版を用いる。以下のページからバイナリ版を入手できる。https://julialang.org/downloads/oldreleases.html"
},

{
    "location": "ch00.html#Julia言語の情報検索-1",
    "page": "はじめに",
    "title": "Julia言語の情報検索",
    "category": "section",
    "text": "Julia をキーワードに検索しても、人の名前によく使われる単語であるので、 Julia言語の内容にたどり着くのが難しい。Julialang で検索することを、強く勧める。"
},

{
    "location": "ch00.html#Julia言語の情報源-1",
    "page": "はじめに",
    "title": "Julia言語の情報源",
    "category": "section",
    "text": "本家のドキュメント Julia Documentation v0.6.4"
},

{
    "location": "ch00.html#節の記号-1",
    "page": "はじめに",
    "title": "節の記号",
    "category": "section",
    "text": "以下本文の各節表題には、冒頭に ■, ▶︎, ◀︎, ★ の記号が付いている。 各記号の意味は、以下の通りである。■  Julia 言語の解説\n▶︎  例題を用いた解説\n◀︎  練習・応用問題\n★  その回のまとめ"
},

{
    "location": "ch00.html#免責事項など-1",
    "page": "はじめに",
    "title": "免責事項など",
    "category": "section",
    "text": "本文は、不定期に更新する。本文は、著者らの知見に基づく情報の公開を目的としている。 本文に書かれた内容およびその正誤によって生じた結果について、 著者らはいかなる責任を負わない。本文に掲載した内容は、著者らの環境でののみ動作の確認を行なっており、 いかなる環境においても再現できることを保証するものではない。実行環境MacOS version 10.13.6\nJulia 0.6.4 (Julia公式ページから配布されたバイナリー)著者： 菅原 宏治Copyright (c) 2018, Hiroharu Sugawara\n# 扱わないこと\n\n* Interfaces\n* Modules\n* Metaprogramming\n* Networking and Streams\n* Parallel Computing\n* Parametric types\n* Profiling\n"
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
    "text": "Allowed Variable Names変数の名前（変数名)は、以下のようにつける。変数名の最初の文字は、半角のアルファベット (aからzまで、AからZまで)、 または、下線（アンダースコア _)のいずれかでなければならない。 変数の2文字目以降は、さらに、半角の数字 (0から9)、 または、半角の感嘆符 ! を含めることができる。半角文字とは「かな漢字変換機能」を用いずに、 キーボードから打ち込める文字と考えて良い。変数名には、漢字やギリシャ文字などを使うことができるが、 ここでは説明を省略する (上のURLを参照)。Stylistic Conventions定数、型、関数、マクロ、モジュール、パッケージの名前も、変数名の約束と同じである。 ただし、慣習として、以下のように使い分ける。変数名は小文字で始める。\n型、モジュール、パッケージの名前は大文字で始める。\n関数やマクロの名前は小文字で始める。下線（アンダースコア _)は用いない。"
},

{
    "location": "ch01.html#ベクトル-1",
    "page": "第1回：▶︎ 簡単なグラフを描く",
    "title": "■ ベクトル",
    "category": "section",
    "text": "角括弧 [ と ] との間に、カンマ , で区切って 数を並べたものを、(数の)ベクトルという。ベクトルは、縦に印字される (列ベクトル, column vector)。[1,3,2]変数に、ベクトルを代入しよう。本文筆者は、ベクトルなど複数の値を内部に含むデータの変数の名前を 複数形とすることが多い。そのデータの各要素を表す変数の名前を単数形とする。 （大文字は定数などを表す約束だから）大文字と小文字で、ベクトルとその要素を区別することは避けた方がよい。xs = [1,2,2,1]\nys = [1,1,3,1]ベクトルのスカラー倍は、各要素に一定の数を乗ずる。xs = [1,2,2,1]; nothing #hide\nys = [1,1,3,1]; nothing #hide\nxs * 2ベクトル同士の和差には、演算子 .+ や .- を用いる。 これらの最初のピリオド . は、各要素に対する演算を意味する。xs = [1,2,2,1]; nothing #hide\nys = [1,1,3,1]; nothing #hide\nxs .+ ys\nxs .- ys"
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
    "text": "Base.colon二つ、または、三つの数字をコロン(:) で区切ったデータは、 等差数列を表す (Range型)。二つの数をコロン (:) で区切った量 a:b は、 aから 1づつ増やして、bを超えるまでの数からなる等差数列である。 三つの数をコロンで区切った量 a:b:c は、 aから b づつ増やして、cを超えるまでの数からなる等差数列である。1:5\nxs=0:0.1:1Range型を保ったまま、各要素のスカラー倍、各要素の和差を一斉に適用できる。xs=0:0.1:1 #hide\n# 各要素を 2倍する\nxs * 2\n# 各要素に 1 を加える\nxs + 1\n# 各要素から 0.2 を引く\nxs - 0.2Range型の量から、各要素を取り出してベクトルに変換するには、 collect関数を用いる。xs=0:0.1:1; nothing #hide\ncollect(xs)Range型に、ピリオド付きの演算子 .*, .+, .- を適用すると、 その結果は、Range型でなく、ベクトルになってしまう。ys=0:0.25:1\n# 各要素を 2倍する\nys .* 2\n# 各要素に 1 を加える\nys .+ 1\n# 各要素から 0.2 を引く\nys .- 0.2"
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
    "text": "リテラル (literal) とは、 「文字の並び」の通りに解釈される量をいう。1や1.1はリテラルである。 それぞれ、整数 1,　小数1.1 という値として評価されるからである。"
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
    "text": "Repeated Evaluation: Loops一つずつ要素を取り出すことができる量を、コレクションという。 ベクトルやRangeは、コレクションである。for文を用いると、コレクションから要素を一つづつ取り出して、 end文が出現するまでの文を繰り返して、計算を行うことができる。繰り返しをループ（loop）ともいう。次の例では、変数 iに、ベクトルの各要素を入れて、end文までの計算を繰り返す。 コレクションの各要素が入る変数をループ変数 (loop variable)という。for i in [1,3,2]\n  @show i   # 式 i の値を表示する\nend@show i は、式 i の値を表示するマクロである。Range型を用いた for文の例を示す。for i in 1:5\n  println( string(i) )\nendstring関数の結果を表示する。 println 関数は、印字してから、改行する命令である。\n## ■ リスト内包表記\n\n[Comprehensions](https://docs.julialang.org/en/v0.6.4/manual/arrays/#Comprehensions-1)\n\n\n[ 2x for x in [1:2] ]"
},

{
    "location": "ch02.html#グラフに凡例を加える-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ グラフに凡例を加える",
    "category": "section",
    "text": "グラフの凡例(lengend)は、グラフに描かれた曲線を区別するための説明である。 PyPlotパッケージで書かれたグラフに凡例を追加するには、以下のようにする。まず、plot関数に label=文字列 の形式で、 その曲線に付与する文字列を指定する。 全ての曲線を描いた後に、legend関数を付与する。using PyPlot\nclf() #hide\nxs=-1:0.1:1\nplot(xs,-1*xs,  label=\"y=-x\")\nplot(xs,2*xs-1, label=\"y=2x-1\")\nlegend()\nsavefig(\"ch02-leg1-plot.svg\"); nothing # hide(Image: )for文を用いて、直線群 y=ax のグラフに凡例を加えてみる。using PyPlot\nclf() #hide\nxs=-1:0.1:1\nfor a in 1:5\n  plot(xs, a*xs, label=\"y=\"*string(a)*\"x\" )\nend\nlegend()\nsavefig(\"ch02-leg2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch02.html#冪乗関数を描く-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ 冪乗関数を描く",
    "category": "section",
    "text": "Base.:^x^y は、冪（べき, power）ないし冪乗（べきじょう）x^yを表す。 xを底 (base)、yを冪指数 (exponent)という。2^2\n2^3\n2^4冪指数が負の整数のとき、冪の計算は失敗する (DomainError : 定義域外の例外)。 代わりに、負の小数を指定する。2^-2 # DomainError\n2^-2.0ベクトルや等差級数の各要素に対して 冪乗を計算するには　演算子 ^の前にピリオド. を加える。2.^[2,3,4]\n(2:4).^2\n2:4.^2    # `^`は `:` よりも優先度が高い冪乗 y=x^a (a=2345) のグラフを描こう。plt[:axes]()[:set_aspect](\"equal\") は、 グラフの縦横比 (アスペクト比 aspect ratio) を等しくする命令である。using PyPlot\nclf() #hide\nxs=0:0.1:1\nplot(xs, xs.^2 )\nplot(xs, xs.^3 )\nplot(xs, xs.^4 )\nplot(xs, xs.^5 )\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-po1-plot.svg\"); nothing # hide(Image: )for文を使って、繰り返しの処理をまとめる。さらに、凡例を追加する。using PyPlot\nclf() #hide\n# 間隔を狭めた\nxs=0:0.05:2\nfor a in 2:5\n  plot(xs, xs.^a , label=\"y=x^\"*string(a) )\nend\nlegend()\n# 描画範囲を設定\nxlim(-0.05,2)\nylim(-0.05,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-po2-plot.svg\"); nothing # hide(Image: )plot命令は、全ての点を表示しようとする。 グラフの描画範囲を調整するには、関数 xlim と ylim を用いる。関数 xlim(a,b) は、x軸の描画を a から b の範囲に限定する命令である。関数 ylim(a,b) は、y軸の描画を a から b の範囲に限定する命令である。"
},

{
    "location": "ch02.html#ローレンツ関数を描く-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "▶︎ ローレンツ関数を描く",
    "category": "section",
    "text": "Lorentzian Function以下の曲線を、 ローレンツ関数 (Lorentzian function)という。y = fracfracgamma2(x-x_0)^2+left(fracgamma2right)^2gamma  0パラメータを x_0 = 0 gamma = 2 のように選ぶと、 以下のように簡単な形となる。y = frac1x^2+1まず、この曲線を描いてみる。 各要素に対して除算を行うため、/の前にも、ピリオド.を付与する。xs=-3:0.5:3\n1 ./ (xs.^2+1)上のグラフを描こう。using PyPlot\nclf() #hide\nxs=-3:0.1:3\nplot(xs, 1 ./ (xs.^2+1) )\nsavefig(\"ch02-lo1-plot.svg\"); nothing # hide(Image: )以下のように、パラメータ gamma を導入する。y = fracfracgamma2x^2+left(fracgamma2right)^2三つのパラメータ gamma=0512 について、この曲線を描く。using PyPlot\nclf() #hide\nxs=-3:0.05:3\ngamma=0.5\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\ngamma=1.0\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\ngamma=2.0\nplot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-lo2-plot.svg\"); nothing # hide(Image: )gammaの値が変わっても、それぞれの曲線を描く命令は変わらない。 for文を用いて、gammaの値を変えてみよう。（結果のグラフは同じである)using PyPlot\nclf() #hide\nxs=-3:0.05:3\nfor gamma in [0.5,1.0,2.0]\n  plot(xs, (gamma/2) ./ (xs.^2+(gamma/2)^2), label=gamma )\nend\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch02-lo3-plot.svg\"); nothing # hide次の性質がある。点 x=0 で 最大値 y = frac2gamma\n点 x=pmfrac2gamma で、y = frac12frac2gamma となること。２つ目の性質を観察するため、最大値に対する比を描いてみる。using PyPlot\nclf() #hide\nxs=-3:0.05:3\nfor gamma in [0.5,1.0,2.0]\n  plot(xs,\n    (gamma/2) ./ (xs.^2+(gamma/2)^2) / (2/gamma),\n    label=gamma )\nend\nlegend()\naxhline(0, color=\"k\", lw=0.5)\nsavefig(\"ch02-lo4-plot.svg\"); nothing # hide(Image: )plot関数の文は、複数の行に渡って記述しているが、 行が更に続くことを示す記号や構文は、特に用意されていない。 構文が行末で終わらなければ、次の行まで読みに行くことになっている。gammaを非常に小さくすると、 Diracのデルタ関数 (Dirac delta function)の近似となる。"
},

{
    "location": "ch02.html#更新演算子-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "■ 更新演算子",
    "category": "section",
    "text": "Updating operators変数に四則演算などを行って、元の変数に再代入する場合には、 更新演算子を用いるとよい。x=1\n# 再代入\nx=x+1\n# 更新演算子\nx+=1演算子 +, -, *, /, ^ に対して、 更新演算子 +=, -=,  *=, /=, ^= が用意されている。以下の例は、変数 gamma を 2 で繰り返し割り算する。gamma=2\nfor i=1:5\n  gamma /= 2\n  @show gamma\nendこれを利用して、ローレンツ関数のパラメータ gamma を変えてみる。using PyPlot\nclf() #hide\nxs=-3:0.05:3\ngamma=2\nfor i in 1:5\n  plot(xs,\n    (gamma/2) ./ (xs.^2+(gamma/2)^2) / (2/gamma),\n    label=gamma )\n  gamma /= 2\nend\nlegend()\naxhline(0, color=\"k\", lw=0.5)\nsavefig(\"ch02-lo5-plot.svg\"); nothing # hide(Image: )更新演算子は、ベクトルのスカラー倍や、定数の加減にも適用できる。xs = [1,2,2,1]\nxs +=1\nxs +=1前節の三角形を描く例題で、図形を繰り返し並行移動してみよう。using PyPlot\nclf() #hide\nxs = [1,2,2,1]\nys = [1,1,3,1]\nfor i=1:5\n  plot(xs,ys)\n  xs += 0.5\n  ys += 0.5\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch01-tri-shift-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch02.html#練習-1",
    "page": "第2回：▶︎ 複数のグラフを描く",
    "title": "◀︎ 練習",
    "category": "section",
    "text": "ローレンツ関数において、パラメータ x_0 を変えたグラフを作成せよ。"
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
    "location": "ch03.html#関数が連続とは-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 関数が連続とは",
    "category": "section",
    "text": "lim_x longrightarrow a f(x)が存在して、その値が f(a) に等しいとき、 「関数 f(x) は x=a で連続という」"
},

{
    "location": "ch03.html#正弦関数・余弦関数を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 正弦関数・余弦関数を描く",
    "category": "section",
    "text": "正弦 y = sinx\n余弦 y = cosxラジアン単位の正弦、余弦 sin, cosusing PyPlot\nclf() #hide\nxs=-2pi:pi/360:2pi\nplot(xs, cos.(xs), label=\"cos\")\nplot(xs, sin.(xs), label=\"sin\")\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch03-sin1-plot.svg\"); nothing # hide(Image: )円周率単位の正弦、余弦 sinpi, cospiusing PyPlot\nclf() #hide\nxs=-2:1/360:2\nplot(xs, cospi.(xs), label=\"cospi\")\nplot(xs, sinpi.(xs), label=\"sinpi\")\nxlabel(\"pi\")\nlegend()\nsavefig(\"ch03-sin2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#角度単位-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "角度単位",
    "category": "section",
    "text": "角度単位の正弦、余弦 sind, cosdusing PyPlot\nclf() #hide\nxs=-360:1:360\nplot(xs, cosd.(xs), label=\"cosd\")\nplot(xs, sind.(xs), label=\"sind\")\nxlabel(\"degree\")\nlegend()\nsavefig(\"ch03-sin3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#楕円を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 楕円を描く",
    "category": "section",
    "text": "楕円を陰関数で表示すると、left(fracxaright)^2+left(fracxbright)^2 = 1楕円を媒介変数表示(パラメータ曲線)するとbeginalign*x  = a cos theta y  = b sin theta endalign*媒介変数表示を用いて、楕円上の各点を計算しよう。using PyPlot\nclf() #hide\nts=0:pi/18:2pi\nxs=2*cos.(ts)\nys=sin.(ts)\nplot(xs,ys)\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-ell1-plot.svg\"); nothing # hide(Image: )"
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
    "text": "y=a^x quad a  0using PyPlot\nclf() #hide\nxs=-10:0.01:10\nplot(xs, 2.^xs)\nsavefig(\"ch03-exp1-plot.svg\"); nothing # hide(Image: )clf() #hide\nplot(xs, 2.^xs)\nplot(xs, 3.^xs)\nplot(xs, 4.^xs)\nplot(xs, 5.^xs)\nxlim(0,3)\nylim(0,100)\nsavefig(\"ch03-exp2-plot.svg\"); nothing # hide(Image: )clf() #hide\nplot(xs, 2.^xs, label=\"a=\"*string(2))\nplot(xs, 3.^xs, label=\"a=\"*string(3))\nplot(xs, 4.^xs, label=\"a=\"*string(4))\nplot(xs, 5.^xs, label=\"a=\"*string(5))\nplot(xs, 6.^xs, label=\"a=\"*string(6))\nlegend()\nxlim(0,3)\nylim(0,100)\nsavefig(\"ch03-exp3-plot.svg\"); nothing # hide(Image: )定数 eは、自然対数の底である。e関数 xscale, yscale は、 それぞれ x軸、y軸のスケールを指定する関数である。 何も指定しない場合（既定値）は 線形 linear である。 log を指定すると、10の対数で、その軸を描く。using PyPlot #hide\nclf() #hide\nfor a in [2,e,3,4,5,6]\n  plot(xs, a.^xs, label=\"a=\"*string(a))\nend\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp4-plot.svg\"); nothing # hide(Image: )exp2 : 底が 2 の指数関数\nexp : 自然対数 (底は、自然対数の底)\nexp10 : 底が 10 の指数関数clf() #hide\nplot(xs, exp2.(xs), label=\"exp2\")\nplot(xs, exp.(xs), label=\"exp\")\nplot(xs, exp10.(xs), label=\"exp10\")\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp7-plot.svg\"); nothing # hide(Image: )関数も名前である。clf() #hide\nfor f in [exp2,exp,exp10]\n  plot(xs, f.(xs), label=string(f))\nend\nyscale(\"log\")\nxlim(-1,3)\nylim(1e-1,1e3)\nlegend()\nsavefig(\"ch03-exp8-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#冪乗根を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 冪乗根を描く",
    "category": "section",
    "text": "y = sqrtnx = x^frac1nntextrm(x ge 0 : 非負数を定義域とする関数)Base.sqrt : ２乗根Base.Math.cbrt : ３乗根sqrt(2)\nsqrt(3)\nsqrt(-1) # DomainError\nsqrt(complex(-1,0))  # 複素数を引数に与えるusing PyPlot\nclf() #hide\nxs=0:0.01:3\nplot(xs, sqrt.(xs), label=\"sqrt\")\nplot(xs, cbrt.(xs), label=\"cbrt\")\nlegend()\nxscale(\"log\")\nyscale(\"log\")\nxlim(1/2,2)\nylim(1/2,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr1-plot.svg\"); nothing # hide(Image: )using PyPlot\nclf() #hide\nxs=0:0.01:3\nfor f in [sqrt,cbrt]\n  plot(xs, f.(xs), label=string(f))\nend\nlegend()\nxscale(\"log\")\nyscale(\"log\")\nxlim(1/2,2)\nylim(1/2,2)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr1L-plot.svg\"); nothing # hide(Image: )using PyPlot\nclf() #hide\nxs=0:0.1:3\nplot(xs, xs.^(1/2), label=2)\nplot(xs, xs.^(1/3), label=3)\nplot(xs, xs.^(1/4), label=4)\nplot(xs, xs.^(1/5), label=5)\nxlim(0,3)\nylim(0,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr2-plot.svg\"); nothing # hide(Image: )using PyPlot\nclf() #hide\nxs=0:0.1:3\nfor n in 2:5\n  plot(xs, xs.^(1/n), label=n)\nend\nxlim(1/3,3)\nylim(1/3,3)\nxscale(\"log\")\nyscale(\"log\")\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch03-pr2L-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#対数関数-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 対数関数",
    "category": "section",
    "text": "(正数を定義域とする関数)log(1)\nlog(e)\nlog(e^2)\nlog(-1) # DomainErrorusing PyPlot\nclf() #hide\nusing PyPlot\nxs=0.1:0.01:100\n0.1:0.01:100.0\nplot(xs, log.(xs))\nsavefig(\"ch03-log1-plot.svg\"); nothing # hide(Image: )x軸を対数で表⽰すると、直線で表⽰される。plot(xs, log.(xs))\nxscale(\"log\")\nsavefig(\"ch03-log2-plot.svg\"); nothing # hide(Image: )clf() #hide\nplot(xs, log.(2,xs), label=string(2))\nplot(xs, log.(xs), label=string(e))\nplot(xs, log.(3,xs), label=string(3))\nplot(xs, log.(10,xs), label=string(10))\nxscale(\"log\")\nlegend()\nsavefig(\"ch03-log3-plot.svg\"); nothing # hide(Image: )clf() #hide\nfor a in [2, e, 3, 10]\nplot(xs, log.(a,xs), label=string(a))\nend\nxscale(\"log\")\nlegend()\nsavefig(\"ch03-log4-plot.svg\"); nothing # hide(Image: )clf() #hide\nplot(xs, log2.(xs), label=\"log2\")\nplot(xs, log.(xs), label=\"log\")\nplot(xs, log10.(xs), label=\"log10\")\nxscale(\"log\")\nlegend()\nsavefig(\"ch03-log5-plot.svg\"); nothing # hide(Image: )clf() #hide\nfor f in [log2, log, log10]\nplot(xs, f.(xs), label=string(f))\nend\nxscale(\"log\")\nlegend()\nsavefig(\"ch03-log6-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#ダブルYグラフを描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ ダブルYグラフを描く",
    "category": "section",
    "text": "ダブルYグラフは、 x軸を共通として、左と右に、二つの y軸を配置するグラフである。using PyPlot\nxs=-2:0.1:2\nfig=plt[:figure]()\nax1=fig[:add_subplot](111)\nax1[:plot](xs, -xs, \"r\")\nax2=ax1[:twinx]()\nax2[:plot](xs, xs.^2, \"b\")\nsavefig(\"ch04-tw1-plot.svg\"); nothing # hide(Image: )これを描くには、次の手順をとる。 まず、以下のように、 元となる座標系(左y軸)のデータ（オブジェクト）ax1を取得する。fig=plt[:figure]()\nax1=fig[:add_subplot](111)次に、以下のように、 x軸が共通な、新しい座標系(右y軸)のデータ（オブジェクト）ax2を作成する。ax2=ax1[:twinx]()座標系 axに対して描画するには、ax[:plot](<<plot引数>>) の形式を用いる。using PyPlot\nxs=-2:0.1:2\nfig=plt[:figure]()\nax1=fig[:add_subplot](111)\nax1[:plot](xs, -xs, \"r\")\nax2=ax1[:twinx]()\nax2[:plot](xs, xs.^2, \"b\")\nsavefig(\"ch04-tw1-plot.svg\"); nothing # hide"
},

{
    "location": "ch03.html#自由落下運動を描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 自由落下運動を描く",
    "category": "section",
    "text": "鉛直上向きに投げられた球が、重力のみを感じて自由落下するとする。 時刻 t=0において、高さ y=0, 鉛直上向きの速度 v_0 とすると、 時刻 tにおける、高さ y, 鉛直上向きの速度 v は、以下のように表される。v =v_0 - gt, y = v_0 t - frac12gt^2using PyPlot\nclf() #hide\nv0=10 # m/s\ng=9.8 # m/s^2\n\nts=0:0.1:3 # s\nvs=v0-g*ts\nplot(ts,vs)\nsavefig(\"ch04-gy1-plot.svg\"); nothing # hide(Image: )ys=v0*ts-g*ts.^2/2\nplot(ts,ys)\nsavefig(\"ch04-gy2-plot.svg\"); nothing # hide(Image: )clf() #hide\nax1=plt[:subplot]()\nax2=ax1[:twinx]()\nax1[:plot](ts,vs)\nax2[:plot](ts,ys)\nsavefig(\"ch04-gy3-plot.svg\"); nothing # hide(Image: )続けてax1[:set_xlabel](\"time /s\")\nax1[:set_xlim](-0.3,2.3)\nax1[:set_ylim](-12,12)\nax2[:set_ylim](-6,6)\nax1[:set_ylabel](\"velocity / m s^-1\")\nax2[:set_ylabel](\"height / m\")\n\nsavefig(\"ch04-gy4-plot.svg\"); nothing # hide(Image: )続けてax1[:axvline](10/9.8, color=\"k\", lw=0.5)\nax1[:axvline](0, color=\"k\", lw=0.5)\nax1[:axhline](0, color=\"k\", lw=0.5)\nsavefig(\"ch04-gy5-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#複数のグラフを描く-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "▶︎ 複数のグラフを描く",
    "category": "section",
    "text": "花曲線の例で nを変えてみる。グラフのプロット領域を分割するには、以下の命令を用いる。ax=plt[:subplot](<<ijk>>)<<ijk>>は３桁の整数である。 百の位 iは、縦（行）の分割数、 十の位 jは、横（列）の分割数である。 一の位は、取得するプロット番号であり、 1から順に、左から右、上から下に振られる。using PyPlot\nclf() #hide\nts=0:pi/1800:2pi\nfor i=1:6\n  n=i+2\n  ax=plt[:subplot](330+i)\n  rs=cos.(n*ts)\n  xs=rs .* cos.(ts)\n  ys=rs .* sin.(ts)\n  ax[:plot](xs,ys)\n  ax[:set_xlim](-1,1)\n  ax[:set_ylim](-1,1)\n  ax[:set_aspect](\"equal\")\nend\nsavefig(\"ch03-flo2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch03.html#今回のまとめ-1",
    "page": "第3回：▶︎ 連続な曲線を描く",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": "全域で定義された関数\n正弦・余弦関数\n楕円\nアルキメデスの渦\n花曲線\n指数関数\n正数を定義域とする関数\n対数関数\n複数のグラフを描く方法"
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
    "location": "ch04.html#不連続-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 不連続",
    "category": "section",
    "text": ""
},

{
    "location": "ch04.html#逆数関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 逆数関数を描く",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nxs=-3:0.1:3\nplot(xs,1./xs)\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"recipro1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#不連続な有理式を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 不連続な有理式を描く",
    "category": "section",
    "text": "y = dfracx^3+8x^3+3x^2-4x-12using PyPlot\nclf() #hide\nxs=-10:0.1:10\nplot(xs, xs.^3+3xs.^2-4*xs-12)\nylim(-20,20)\nxlim(-4,4)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(-2, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch03-dis1-plot.svg\"); nothing # hide(Image: )clf() #hide\nxs=-20:0.05:20\nplot(xs, (xs.^3+8)./(xs.^3+3xs.^2-4xs-12))\nylim(-10,10)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch03-dis2-plot.svg\"); nothing # hide(Image: )clf() #hide\nxs=-30:0.05:30\nplot(xs, (xs.^3+8)./(xs.^3+3xs.^2-4xs-12))\nylim(-10,10)\nxlim(-3,3)\naxhline(0, color=\"k\", lw=0.5)\naxvline(-3, color=\"k\", lw=0.5)\naxvline(-2, color=\"k\", lw=0.5)\naxvline(2, color=\"k\", lw=0.5)\nsavefig(\"ch03-dis3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#正接関数・余接関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 正接関数・余接関数を描く",
    "category": "section",
    "text": "正接 y = tanx\n余接 y = cotxラジアン単位 tan, cotusing PyPlot\nclf() #hide\nxs=-2pi:pi/360:2pi\nplot(xs, tan.(xs), label=\"tan\")\nplot(xs, cot.(xs), label=\"cot\")\nylim(-1e1, 1e1)\nxlabel(\"radian\")\nlegend()\nsavefig(\"ch03-tan1-plot.svg\"); nothing # hide(Image: )角度単位 tand, cotdusing PyPlot\nclf() #hide\nxs=-360:1:360\nplot(xs, tand.(xs), label=\"tand\")\nplot(xs, cotd.(xs), label=\"cotd\")\nxlabel(\"degree\")\nylim(-1e1, 1e1)\nlegend()\nsavefig(\"ch03-tan2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#符号関数を描く-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 符号関数を描く",
    "category": "section",
    "text": "Base.signusing PyPlot\nclf() #hide\nusing PyPlot\nxs=-6.4:0.1:6.4\n-6.4:0.1:6.4\nplot(xs, sign.(xs), \".\")\nsavefig(\"sign1-plot.svg\"); nothing # hide(Image: )clf() #hide\nplot(xs, sign.( cos.(xs)), \".\")\nsavefig(\"sign2-plot.svg\"); nothing # hide(Image: )clf() #hide\nplot(xs, sign.( cos.(xs*2/pi)), \".\")\nsavefig(\"sign3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#絶対値関数-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "▶︎ 絶対値関数",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nxs=-1:0.1:1\nplot(xs,abs.(xs))\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"abs1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch04.html#今回のまとめ-1",
    "page": "第4回：▶︎ 不連続な曲線を描く",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": ""
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
    "location": "ch05.html#論理演算-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 論理演算",
    "category": "section",
    "text": "否定 !\n論理積 &&\n論理和 ||"
},

{
    "location": "ch05.html#数の大小比較-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 数の大小比較",
    "category": "section",
    "text": "Numeric Comparisons演算子==は、a == bのように用いて、値が等しいか否か判定する。 演算子!=は、値が異なるか否か判定する。 成立すれば(真ならば) trueが、 成立しなければ(偽ならば) false が結果となる。1 == 1\n1 == 2\n1 != 1\n1 != 2演算子>は、a > b のように用いて、aの値がbの値よりも大きいか否か。 演算子>=は、a >= b のように用いて、aの値がbの値以上であるか否か判定する。2 > 1\n2 >= 1\n2 >= 2演算子<は、a < b のように用いて、aの値がbの値よりも小さいか否か。 演算子>=は、a <= b のように用いて、aの値がbの値以下であるか否か判定する。2 < 1\n2 <= 1\n2 <= 2数の比較演算子は、連続して記述できる。1 < 2 < 3\n1 < 2 && 2 < 3"
},

{
    "location": "ch05.html#ab,-(a,b)-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "a>b, >(a,b)",
    "category": "section",
    "text": ""
},

{
    "location": "ch05.html#if文-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ if文",
    "category": "section",
    "text": "Conditional Evaluationif文は、条件式をとる。 条件式の値が true なら、if文の次の文から、end, else, elseif が出現するまでの文を実行する。 条件が成り立つときだけに実行される部分をブロック(block)という。 ブロックは、字下げで表記される。x=1\ny=2\nif x < y\n  println(\"x は y より小さい\")\nendelse文が続く場合がある。 条件式の値が false なら、else文の次の文から、end が出現するまでの文 (elseブロック)を実行する。x=1\ny=2\nif x < y\n　println(\"x は y より小さい\")\nelse\n　println(\"x は y より小さくない\")\nendelse文の前に、elseif文文が続く場合がある。 最初の if文の条件式が false なら、 elseif文の条件式を計算し、それが true なら、elseif 文の次の文から、elseifまたはend が出現するまでの文 (elseifブロック)を実行する。x=1\ny=2\nif x < y\n  println(\"x は y より小さい\")\nelseif x > y\n　println(\"x は y より大きい\")\nelse\n  println(\"x は y と等しい\")\nendx=40\nm=if     x >= 100\n  println(\"x は 100 以上である\")\nelseif x >= 50\n  println(\"x は 50 以上である\")\nelseif x >= 20\n  println(\"x は 20 以上である\")\nelse\n  println(\"x は 20 よりも小さい\")\nend\n@show m"
},

{
    "location": "ch05.html#if式-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ if式",
    "category": "section",
    "text": "x=40\nm=if x >= 100\n  \"x は 100 以上である\"\nelseif x >= 50\n  \"x は 50 以上である\"\nelseif x >= 20\n  \"x は 20 以上である\"\nelse\n  \"x は 20 よりも小さい\"\nend\n@show m"
},

{
    "location": "ch05.html#3項演算子-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 3項演算子",
    "category": "section",
    "text": "a ? b : cm= 2 > 1 ? \"yes\" : \"no\"\n@show m"
},

{
    "location": "ch05.html#短絡評価-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "■ 短絡評価",
    "category": "section",
    "text": "Short-Circuit Evaluation"
},

{
    "location": "ch05.html#擬似乱数-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ 擬似乱数",
    "category": "section",
    "text": "Random NumbersBase.Random.randrand() 0から1未満の小数の乱数を出す擬似乱数Base.Random.srandBase.Random.srandrand()\nrand()\nrand()rand( コレクション ) とすると、コレクションのうち、 一つの要素を選ぶ擬似乱数。"
},

{
    "location": "ch05.html#モンテカルロ法-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "▶︎ モンテカルロ法",
    "category": "section",
    "text": "第一象限 x ge 0 y ge 0 x^2+y^2 lt 1半円の面積 fracpi4using PyPlot\nclf() #hide\nn=2^10\nfor i=1:n\n  x=rand()\n  y=rand()\n  c = x*x + y*y <= 1 ? \"r\" : \"b\"\n  plot(x,y,\".\", color=c)\nend\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"ch05-qc1-random-plot.svg\"); nothing # hide(Image: )n=2^10\ns=0\nfor i=1:n\n  x=rand()\n  y=rand()\n  if x*x + y*y <= 1\n    s += 1\n  end\nend\n@show s/n; #hideusing PyPlot\nclf() #hide\nfor m in 1:14\n  n=2^m\n  s=0\n  for i=1:n\n    x=rand()\n    y=rand()\n    if x*x + y*y <= 1\n      s += 1\n    end\n  end\n  plot(n, s/n, \".\")\nend\nylim(0.9*pi/4, 1.1*pi/4)\nxscale(\"log\")\naxhline(pi/4, color=\"k\", lw=0.5)\nsavefig(\"ch05-qc1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch05.html#今回のまとめ-1",
    "page": "第5回：■ 条件式・■ 条件分岐",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": ""
},

{
    "location": "ch06.html#",
    "page": "第6回：■ 型・■ 整数型",
    "title": "第6回：■ 型・■ 整数型",
    "category": "page",
    "text": ""
},

{
    "location": "ch06.html#ch06-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "第6回：■ 型・■ 整数型",
    "category": "section",
    "text": ""
},

{
    "location": "ch06.html#型-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "■ 型",
    "category": "section",
    "text": "データの種類のことtypeof(1)\ntypeof(1.0)Primitive types 基本型\nComposite Types 複合型, 構成型"
},

{
    "location": "ch06.html#整数-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "■ 整数",
    "category": "section",
    "text": "Integers2進数 64桁 (64bit, binary digit)符号付整数2の補数「負の数 -n を 2^64-n で表す方式」typemax(Int64)\ntypemin(Int64)Overflow behaviortypemax(Int64)+1"
},

{
    "location": "ch06.html#整数を-0-で割ると例外を発生する-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "■ 整数を 0 で割ると例外を発生する",
    "category": "section",
    "text": "除算例外Division erros"
},

{
    "location": "ch06.html#整数と浮動小数点数の演算-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "■ 整数と浮動小数点数の演算",
    "category": "section",
    "text": "除算の結果は、浮動小数点数になる1 / 2\n1.0 / 2.0"
},

{
    "location": "ch06.html#浮動小数点数から整数への変換-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "▶︎ 浮動小数点数から整数への変換",
    "category": "section",
    "text": "Int64(1.0)\nInt64(1.1)  # エラー\nInt64(floor(1.1))"
},

{
    "location": "ch06.html#床関数・天井関数-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "▶︎ 床関数・天井関数",
    "category": "section",
    "text": "Base.ceil Base.floor)using PyPlot\nclf() #hide\nxs=-2.4:0.1:2.4\nplot(xs, ceil.(xs), \"o\", label=\"ceil\")\nplot(xs, floor.(xs), \".\", label=\"floor\")\nfor x in -2:2\n  axvline(x, color=\"k\", lw=0.5)\nend\nlegend()\nxlim(-3,3)\nylim(-3,3)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"floorceil1-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#ユークリッドの互除法-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "▶︎ ユークリッドの互除法",
    "category": "section",
    "text": "2 つの自然数 a, b (a ≧ b) について、a の b による剰余を r とすると、 a と b との最大公約数は b と r との最大公約数に等しいという性質が成り立つ。この性質を利用して、 b を r で割った剰余、 除数 r をその剰余で割った剰余、と剰余を求める計算を逐次繰り返すと、剰余が 0 になった時の除数が a と b との最大公約数となる。Base.rema=1071\nb=1029\n@show a,b\nwhile b != 0\n  t = a\n  b = rem(a, b)\n  a = t\n  @show a,b\nend\n@show a,ba=3355\nb=2379\n@show a,b\nwhile b != 0\n  t = a\n  b = rem(a, b)\n  a = t\n  @show a,b\nend\n@show a,b"
},

{
    "location": "ch06.html#商・剰余関数-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "▶︎ 商・剰余関数",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=3\nplot(xs,fld.(xs,d), \".\", label=\"fld\")\nplot(xs,mod.(xs,d), \".\", label=\"mod\")\nlegend()\nxlim(-6.2,6.2 )\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"fldmod1-plot.svg\"); nothing # hide(Image: )同じことは床関数でも書ける。using PyPlot\nclf() #hide\nxs=-6.8:0.2:6.8\nd=3\nqs=floor.(xs/d)\nrs=xs-qs*d\nplot(xs, qs, \".\", label=\"quotient\")\nplot(xs, rs,\".\", label=\"remainder\")\nfor x in -9:d:9\naxvline(x, color=\"k\", lw=0.5)\nend\nxlim(-6.2,6.2 )\nlegend()\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"floorceil2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch06.html#切り捨てるには？-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "◀︎ 切り捨てるには？",
    "category": "section",
    "text": "10の位で\n100の位で\n1000の位で\n0.1の位で\n一般に10^nの位で"
},

{
    "location": "ch06.html#四捨五入するには？-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "◀︎ 四捨五入するには？",
    "category": "section",
    "text": "1の位で\n10の位で\n100の位で\n1000の位で\n0.1の位で\n一般に10^nの位で"
},

{
    "location": "ch06.html#今回のまとめ-1",
    "page": "第6回：■ 型・■ 整数型",
    "title": "★ 今回のまとめ",
    "category": "section",
    "text": ""
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
    "title": "正規化数、副正規化数",
    "category": "section",
    "text": "浮動小数とは、012 の代わりに 12 times 10^-1 のように表示することである。10進数の浮動小数はpmleft(d_0d_1d_2cdots right)_10times 10^eのように表される。timesの前までのleft(d_0d_1d_2cdots right)_10 の部分は仮数部と呼ばれる。添字の10は10進数を意味し、d_0 d_1 cdots   01ldots9 までの数字である。times の後ろの 10^e は指数部と呼ばれる。2進数の浮動小数はpmleft(b_0b_1b_2cdots right)_2times 2^eのように表される。 ここで、timesの前までの left(b_0b_1b_2cdots right)_2 の部分は仮数部と呼ばれる。添字の2は2進数を意味し、b_0 b_1 cdots   0 または 1 の数字である。times の後ろの 2^e は指数部と呼ばれる。bit (binary digit)とは、2進数の一桁のことである。本文で用いる浮動小数点数は Float64 型である。typeof(1.0)Float64 型は、「IEEE754標準倍精度浮動小数点数」に基づき、 符号部 1 bit、 指数部 11 bit 仮数部 53 bit から構成される。 ただし、以下のように先頭の 1 bitを固定し、仮数部の 52 bit のみをデータとして採用するため、 2進数の並びは 1+11+52 = 64 bit である。Float64は、正規化数、副正規化数、数でない数の３種類からなりたっている。正規化数は、b_0 = 1として、 pmleft(1b_1b_2cdots b_52right)_2times 2^e のように表すものである。 ただし、指数は 1022 le e le 1023 の範囲である。 仮数 left(1b_1b_2cdots b_52right)_2 は 1以上で2を超えない範囲の小数となる。正規化数で表すことができない、絶対値が小さい浮動小数は副正規化数で表わされる。副正規化数は、b_0 = 0, e=1023 として、 pmleft(0b_1b_2cdots b_52right)_2times 2^e のように表すものである。 仮数部 left(1b_1b_2cdots b_52right)_2 は 0以上で1を超えない範囲の小数となる。「数でない数」はあとに述べる。Float64で表すことができる、絶対値が最も大きい数は、 正規化数の 2^10241798times10^308 である。 絶対値が最も小さい数は副正規化数の 2^10222225times10^308 である。これらは、realmax, realmin関数で得られる。realmax(Float64)\nrealmin(Float64)"
},

{
    "location": "ch07.html#丸め-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "丸め",
    "category": "section",
    "text": "小数 02 は 02 = frac15 = frac1101_2 となるが、1 を 101_2 で割り切ることはできない。02 を2進数で表すと000110011001100cdots_2のようになる。すなわち、1100 の並びが無限に続く循環小数となる。また、小数 01 は 01 = frac15times 2 = frac1101_2 times 2^-1 であるから、$0.1$ を2進数で表すと（上を1桁ずらして）0000110011001100cdots_2のようになる。これも、1100 の並びが無限に続く循環小数となる。 「循環小数」は「有限桁の小数」では表すことができないが、 Float64型で表現するため、仮数の下位の桁を修正する操作を行う場合がある。 この「仮数の下位の桁を修正する」ことを「丸める」という。「丸め」られた浮動小数の計算は、筆算とは違う結果となる場合がある。 例えば、0.1+0.2\n0.1+0.2 == 0.3筆算の結果は 03であるが、 計算結果は 0.30000000000000004 と異なってしまう。別の例として、01を 10回足した結果はs=0\nfor i in 1:10\n  s+= 0.1\nend\n@show s\ns == 1.00.9999999999999999 となり、10 にはならない。このような、「丸め」が原因の、正しい値からの「ずれ」を「丸め誤差」と呼んでいる。"
},

{
    "location": "ch07.html#次方程式-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "2次方程式",
    "category": "section",
    "text": "2次方程式 x^2-bx+c=0 の解は、解の公式から beginalignx_1=fracb-sqrtb^2-4c2\nx_2=fracb+sqrtb^2-4c2endalign であるが、x_2 は、桁落ちしやすい。 そこで、(b-sqrtb^2-4c) を分母分子に掛けてx_21 = frac2cb+sqrtb^2-4c=fraccx_1により計算する。最後の項は、解と係数の関係 x_1x_2=c である。"
},

{
    "location": "ch07.html#小数を2進数へ変換する-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 小数を2進数へ変換する",
    "category": "section",
    "text": "小数 0.2を、2進数で表示すると循環小数になる。2進数の循環小数\n1100 が循環する。x=0.2\nfor i=1:50\n  q=floor(x/2)\n  print(Int64(q))\n  x -= q*2\n  x *= 2\nend00000110011001100110011001100110011001100110011001\n\n1100 循環小数x=0.2\nfor i=1:50\n  q=floor(x/2)\n  print(Int64(q))\n  x -= q*2\n  x *= 2\nend00001100110011001100110011001100110011001100110011"
},

{
    "location": "ch07.html#桁落ち、情報落ち-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "桁落ち、情報落ち",
    "category": "section",
    "text": "桁落ち、情報落ち1.7976931348623157e308 加算結合則を満たさないx= 1e20\ny=-1e20\nz= 1.0\n(x + y) + z\nx + (y + z)0.0 丸め誤差"
},

{
    "location": "ch07.html#近似比較演算子-isapprox-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "近似比較演算子 isapprox",
    "category": "section",
    "text": ""
},

{
    "location": "ch07.html#数でない数-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "数でない数",
    "category": "section",
    "text": "Numeric Comparisons数でない数か、確かめる。 Base.isfiniteBase.isinfBase.isnan"
},

{
    "location": "ch07.html#数値微分-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "▶︎ 数値微分",
    "category": "section",
    "text": "logspace(1,2,5)fracdf(x_0)dx = lim_h longrightarrow 0fracf(x_0+h)-f(x_0)h関数 y=x の x=1における微分係数を、 上の定義により求めよう。 求まるべき値は 1 であるが、h を小さくすると 1 の上下に暴れてしまう。using PyPlot\nclf() #hide\nh=logspace(-18,-8,100)\nd=( (1+h).^2 - 1) ./ h\nplot(h,d, \".\")\nylim(5e-1,3e0)\nyscale(\"log\")\nxscale(\"log\")\nsavefig(\"ch07-df1-plot.svg\"); nothing # hide(Image: )関数 y=x^n, (n=123) の x=1における微分係数を、 上の定義により求めよう。 求まるべき値は n であるが、h を小さくすると n の上下に暴れてしまう。using PyPlot\nclf() #hide\nh=logspace(-18,-8,100)\nfor n=1:3\n    d=( (1+h).^n - 1) ./ h\n    plot(h,d, \".\", label=\"y=x^\"*string(n))\nend\nyscale(\"log\")\nxscale(\"log\")\nlegend()\nsavefig(\"ch07-df2-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch07.html#今回のまとめ-1",
    "page": "第7回：■ 浮動小数点数",
    "title": "★今回のまとめ",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#",
    "page": "第8回： ■ 配列要素の操作",
    "title": "第8回： ■ 配列要素の操作",
    "category": "page",
    "text": ""
},

{
    "location": "ch08.html#ch08-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "第8回： ■ 配列要素の操作",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#関数の定義-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "■ 関数の定義",
    "category": "section",
    "text": "実引数（argument）\n仮引数（parameter）"
},

{
    "location": "ch08.html#配列操作-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "■ 配列操作",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#エラトステネスの篩-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "■ エラトステネスの篩",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#タプル-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "■ タプル",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#関数から複数の値を返す-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "■ 関数から複数の値を返す",
    "category": "section",
    "text": ""
},

{
    "location": "ch08.html#今回のまとめ-1",
    "page": "第8回： ■ 配列要素の操作",
    "title": "■ 今回のまとめ",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "第9回： ▶︎ 総和・数値積分",
    "category": "page",
    "text": ""
},

{
    "location": "ch09.html#ch09-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "第9回： ▶︎ 総和・数値積分",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#sum(ベクトル)-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "■ sum(ベクトル)",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#フーリエ級数の和-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "▶︎ フーリエ級数の和",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#方形波の近似-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "▶︎ 方形波の近似",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nts=-3pi:pi/36:3pi\nplot(ts, sign.(sin.(ts)) )\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nsavefig(\"fo_sq1-plot.svg\"); nothing # hide(Image: )f(t) = frac4pileftsint+fracsin3t3+fracsin5t5+cdotsrightusing PyPlot\nclf() #hide\nts=-3pi:pi/36:3pi\nys=sin.(ts)*4/pi\nplot(ts, ys)\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nys += sin.(3ts)/3*4/pi\nplot(ts, ys)\nys += sin.(5ts)/5*4/pi\nplot(ts, ys)\n\nsavefig(\"fo-sq2-plot.svg\"); nothing # hide(Image: )using PyPlot\nclf() #hide\nts=-3pi:pi/36:3pi\nfor n in [13]\n  ys=0*ts\n  for i in 1:2:n\n    ys += sin.(i*ts)/i*4/pi\n  end\n  plot(ts, ys)\nend\nplot(ts, sign.(sin.(ts)) )\n\nyticks( [-1,0,1], [ \"-1\", \"0\", \"1\"])\nxticks( [-3pi,-2pi,-pi,0, pi,2pi,3pi],\n        [L\"-3\\pi\", L\"-2\\pi\", L\"-\\pi\",\"0\", L\"\\pi\", L\"2\\pi\", L\"3\\pi\"])\nsavefig(\"fo-sq4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#三角波の近似-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "▶︎ 三角波の近似",
    "category": "section",
    "text": "using PyPlot\nclf() #hide\nts=-3.5pi:pi/180:3.5pi\n\nfunction triangular(t)\n  t >= pi ? 2pi-t : t\nend\n\nplot(ts, triangular.(ts) )\nxlim(0,2pi)\nylim(0,2pi)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"fo_tri1-plot.svg\"); nothing # hide(Image: )plot(ts, triangular.(mod2pi.(ts)) )\nxlim(-4pi,4pi)\nylim(0,2pi)\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"fo-tri2-plot.svg\"); nothing # hide(Image: )f(t) = dfracpi2 - dfrac4pileft cos t + dfraccos 3t3^2 + dfraccos 5t5^2 + cdotsrightys=ones(ts)*(pi/2)\nfor n=1:2:5\n  ys -= cos.(n*ts)*(4/pi/n^2)\nend\nplot(ts, ys, \".\")\nplot(ts,triangular.(mod2pi.(ts)))\nplt[:axes]()[:set_aspect](\"equal\")\nsavefig(\"fo-tri3-plot.svg\"); nothing # hide(Image: )for nmax=3:2:11\n  ys=ones(ts)*(pi/2)\n  for n=1:2:nmax\n    ys -= cos.(n*ts)*(4/n^2/pi)\n  end\n  plot(ts, ys, label=nmax)\nend\nlegend()\nsavefig(\"fo-tri4-plot.svg\"); nothing # hide(Image: )for j=1:6\n  nmax=1+2*j\n  ys=ones(ts)*(pi/2)\n  for n=1:2:nmax\n    ys -= cos.(n*ts)*(4/n^2/pi)\n  end\n  ax=plt[:subplot](610+j)\n  ax[:plot](ts, ys, \".\")\n  ax[:set_xlim](-2.2pi,2.2pi)\n  ax[:plot](ts,triangular.(mod2pi.(ts)))\nend\nsavefig(\"fo-tri5-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#数値積分-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "▶︎ 数値積分",
    "category": "section",
    "text": ""
},

{
    "location": "ch09.html#Riemann和-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "▶︎ Riemann和",
    "category": "section",
    "text": "int0^1 dfrac11+x dx = left log left1+x right rightx=0^x=1 = log 2using PyPlot\nclf() #hide\nn=2^6\nxmin=0\nxmax=1\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ng(x)=1/(1+x)\nplot(xs, g.(xs), \".\")\nsavefig(\"ch07-rie1-plot.svg\"); nothing # hide(Image: )s_1 = sumi=1^n g( x_i)ds_3 = sumi=1^n g( x_i+1)ds_2 = sumi=1^n gleft( dfracx_i+xi+12 right)ds1=0\nfor i=1:n\n  s1 += g(xs[i])*d\nend\n@show s1s1=0; s2=0; s3=0\nfor i=1:n\ns1 += g(xs[i])*d\ns3 += g(xs[i+1])*d\ns2 += g( (xs[i]+xs[i+1])/2) *d\nend\n@show s1,s2, s3 #hiden=2^10\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ns1=0; s2=0; s3=0\nfor i=1:n\n  s1 += g(xs[i])*d\n  s3 += g(xs[i+1])*d\n  s2 += g( (xs[i]+xs[i+1])/2) *d\nend\n@show s1,s2, s3 #hideclf() #hide\nse=log(2)\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0; s2=0; s3=0\n  for i=1:n\n    s1 += g(xs[i])*d\n    s3 += g(xs[i+1])*d\n    s2 += g( (xs[i]+xs[i+1])/2) *d\n    end\n  plot(n, s1 - se , \".\", color=\"b\")\n  plot(n, s2 - se, \".\", color=\"g\")\n  plot(n, s3 - se, \".\", color=\"r\")\nend\nxscale(\"log\")\nxlabel(\"n\")\nylabel(\"absolute error\")\nsavefig(\"ch07-rie2-plot.svg\"); nothing # hide(Image: )clf() #hide\nfor m in 0:12\n  n=2^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0; s2=0; s3=0\n  for i=1:n\n  s1 += g(xs[i])*d\n  s3 += g(xs[i+1])*d\n  s2 += g( (xs[i]+xs[i+1])/2) *d\n  end\n  plot(n, abs(s2 - se) / se, \".\", color=\"g\")\n  plot(n, abs(s3 - se) / se , \".\", color=\"r\")\n  plot(n, abs(s1 - se) / se , \".\", color=\"b\")\nend\nxlabel(\"n\")\nylabel(\"relative error (absolute value)\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch07-rie3-plot.svg\"); nothing # hide(Image: )function rieman1(g, xmin, xmax, n)\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0\n  for i=1:n\n    s1 += g(xs[i])*d\n    end\n  s1\nend\n\nrieman1(g, 0, 1, 100)function rieman3(g, xmin, xmax, n)\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s3=0\n  for i=1:n\n    s3 += g(xs[i+1])*d\n  end\n  s3\nend\n\nrieman3(g, 0, 1, 100)function rieman2(g, xmin, xmax, n)\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s2=0\n  for i=1:n\n    s2 += g( (xs[i]+xs[i+1])/2) *d\n  end\n  s2\nend\n\nrieman2(g, 0, 1, 100)ns=[ 2^m for m=0:12]\n@show ns #hideclf() #hide\nplot(ns, abs.( rieman1.(g, xmin, xmax, ns) - se) /se, \"o\", label=\"left\" )\nplot(ns, abs.( rieman2.(g, xmin, xmax, ns) - se) /se, \".\", label=\"middle\" )\nplot(ns, abs.( rieman3.(g, xmin, xmax, ns) - se) /se ,\".\", label=\"right\" )\nlegend()\nxscale(\"log\")\nyscale(\"log\")\nxlabel(\"n\")\nylabel(\"relative error\")\nsavefig(\"ch07-rie4-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#台形則-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "▶︎ 台形則",
    "category": "section",
    "text": "int0^1 dfrac11+x dx = left log left1+x right rightx=0^x=1 = log 2s_t = sumi=1^n dfracg(xi)+g(xi+1) 2dusing PyPlot\nclf() #hide\nn=100\nxmin=0\nxmax=1\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\n\ng(x)=1/(1+x)\nplot(xs, g.(xs), \".\")\nsavefig(\"ch07-tra1-plot.svg\"); nothing # hide(Image: )st=0\nfor i=1:n\n  st += (g(xs[i])+g(xs[i+1]))*d/2\nend\n@show sts2=0; st=0;\nfor i=1:n\n  s2 += g( (xs[i]+xs[i+1])/2) *d\n  st += (g(xs[i])+g(xs[i+1]))*d/2\nend\n@show s2, stn=1000\nxs=linspace(xmin,xmax,n+1)\nd=(xmax-xmin)/n\ns2=0; st=0\nfor i=1:n\n  s2 += g( (xs[i]+xs[i+1])/2) *d\n  st += (g(xs[i])+g(xs[i+1]))*d/2\nend\n@show s2, stclf() #hide\nse=log(2)\n\nfor m in 1:6\n  n=10^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s1=0; s2=0; s3=0; st=0\n  for i=1:n\n    s1 += g(xs[i])*d\n    s3 += g(xs[i+1])*d\n    s2 += g( (xs[i]+xs[i+1])/2) *d\n    st += (g(xs[i])+g(xs[i+1]))*d/2\n  end\n  plot(n, s1 - se, \".\")\n  plot(n, s2 - se, \".\")\n  plot(n, s3 - se, \".\")\n  plot(n, st - se, \".\", color=\"r\")\nend\nxscale(\"log\")\nxlabel(\"n\")\nylabel(\"absolute error\")\nsavefig(\"ch07-tra2-plot.svg\"); nothing # hide(Image: )clf() #hide\nfor m in 1:6\n  n=10^m\n  xs=linspace(xmin,xmax,n+1)\n  d=(xmax-xmin)/n\n  s2=0; st=0\n  for i=1:n\n  s2 += g( (xs[i]+xs[i+1])/2) *d\n  st += (g(xs[i])+g(xs[i+1]))*d/2\n  end\n  plot(n, abs(s2 - se) / se, \".\", color=\"g\")\n  plot(n, abs(st - se) / se , \".\", color=\"r\")\nend\nxlabel(\"n\")\nylabel(\"relative error (absolute value)\")\nxscale(\"log\")\nyscale(\"log\")\nsavefig(\"ch07-tra3-plot.svg\"); nothing # hide(Image: )"
},

{
    "location": "ch09.html#今回のまとめ-1",
    "page": "第9回： ▶︎ 総和・数値積分",
    "title": "今回のまとめ",
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
    "location": "ch10.html#ベクトル-1",
    "page": "第10回：線形代数",
    "title": "■ ベクトル",
    "category": "section",
    "text": "次元\n寸法\n添字添字は 1から数えるv=[1,2,3]\nlength(v)\nsize(v)\nv[1]=5\nv"
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
    "text": "楕円を回す"
},

{
    "location": "ch10.html#行列の商-1",
    "page": "第10回：線形代数",
    "title": "▶︎ 行列の商",
    "category": "section",
    "text": ""
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
