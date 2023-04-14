export default function IP() {
  return (
    <div>
      <h1>查询 ip 地址</h1>
      <main>
        <section>
          <h2>从国内测试</h2>
        </section>
        <section>
          <h2>从国外测试</h2>
          <iframe src="http://23.80.5.90/ip.php" width="100%" height="30"></iframe>
        </section>
        <section>
          <h2>从谷歌测试</h2>
          <iframe src="http://sspanel.net/ip.php" width="100%" height="30">
            您无法访问谷歌网站
          </iframe>
        </section>
      </main>
    </div>
  );
}
