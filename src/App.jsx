export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#1e293b', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '16px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Avatar / Chữ cái viết tắt */}
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>
            VB
          </div>
          
          {/* Thông tin cá nhân */}
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#22d3ee', margin: '0 0 4px 0' }}>Võ Khánh Băng</h1>
          <p style={{ fontSize: '14px', color: '#94a3b8', margin: '0 0 16px 0' }}>Sinh viên CNTT - Đại học Bình Dương (CS Cà Mau)</p>
          
          {/* Sở thích */}
          <div style={{ width: '100%', backgroundColor: 'rgba(30, 41, 59, 0.6)', borderRadius: '12px', padding: '16px', marginBottom: '16px', textAlign: 'left', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#67e8f9', margin: '0 0 8px 0' }}>💡 Sở thích:</h3>
            <ul style={{ fontSize: '13px', color: '#cbd5e1', paddingLeft: '20px', margin: '0' }}>
              <li>Lập trình Web & Xây dựng giao diện</li>
              <li>Quản lý dự án CNTT</li>
              <li>Khám phá công nghệ AI & Git Workflow</li>
            </ul>
          </div>
          
          {/* Link GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%', padding: '10px 16px', backgroundColor: '#06b6d4', color: '#0f172a', fontWeight: '600', borderRadius: '10px', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 6px -1px rgba(6, 182, 212, 0.2)' }}
          >
            🚀 Ghé thăm GitHub của tôi
          </a>
        </div>
      </div>
    </div>
  );
}