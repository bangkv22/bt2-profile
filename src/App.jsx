export default function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#0f172a', color: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Tiêu đề bài tập */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '28px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        BÀI TẬP BT2 – HELLO FRAMEWORK
      </h2>

      {/* Thẻ giới thiệu bản thân */}
      <div style={{ maxWidth: '520px', width: '100%', backgroundColor: '#1e293b', border: '1px solid rgba(6, 182, 212, 0.35)', borderRadius: '20px', padding: '32px', boxShadow: '0 25px 30px -5px rgba(0, 0, 0, 0.4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Avatar */}
          <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '18px', color: '#0f172a' }}>
            VB
          </div>
          
          {/* Thông tin cá nhân */}
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#22d3ee', marginBottom: '6px' }}>Võ Khánh Băng</h1>
          <p style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '22px' }}>Sinh viên CNTT - Đại học Bình Dương (CS Cà Mau)</p>
          
          {/* Sở thích */}
          <div style={{ width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.5)', borderRadius: '14px', padding: '18px 22px', marginBottom: '22px', textAlign: 'left', border: '1px solid rgba(148, 163, 184, 0.15)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#67e8f9', marginBottom: '10px' }}>💡 Sở thích:</h3>
            <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Lập trình Web & Xây dựng giao diện</li>
              <li>Quản lý dự án CNTT</li>
              <li>Khám phá công nghệ AI & Git Workflow</li>
            </ul>
          </div>
          
          {/* Link GitHub */}
          <a
            href="https://github.com/bangkv22"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%', padding: '13px 20px', fontSize: '15px', backgroundColor: '#06b6d4', color: '#0f172a', fontWeight: '700', borderRadius: '12px', textDecoration: 'none', display: 'block', textAlign: 'center', boxShadow: '0 4px 10px -1px rgba(6, 182, 212, 0.3)' }}
          >
            🚀 Ghé thăm GitHub của tôi
          </a>
        </div>
      </div>
    </div>
  );
}