export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
      
      {/* Tiêu đề bài tập */}
      <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        BÀI TẬP BT2 – HELLO FRAMEWORK
      </h2>

      {/* Thẻ giới thiệu bản thân (khung to hơn) */}
      <div style={{ maxWidth: '550px', width: '100%', backgroundColor: '#1e293b', border: '1px solid rgba(6, 182, 212, 0.4)', borderRadius: '20px', padding: '36px', boxShadow: '0 25px 30px -5px rgba(0, 0, 0, 0.4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Avatar / Chữ cái viết tắt */}
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '34px', fontWeight: 'bold', marginBottom: '20px', color: '#0f172a' }}>
            VB
          </div>
          
          {/* Thông tin cá nhân */}
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#22d3ee', margin: '0 0 8px 0' }}>Võ Khánh Băng</h1>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: '0 0 24px 0' }}>Sinh viên CNTT - Đại học Bình Dương (CS Cà Mau)</p>
          
          {/* Sở thích */}
          <div style={{ width: '100%', backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', textAlign: 'left', border: '1px solid rgba(148, 163, 184, 0.15)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#67e8f9', margin: '0 0 12px 0' }}>💡 Sở thích:</h3>
            <ul style={{ fontSize: '15px', color: '#cbd5e1', paddingLeft: '22px', margin: '0', lineHeight: '1.8' }}>
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
            style={{ width: '100%', padding: '14px 20px', fontSize: '16px', backgroundColor: '#06b6d4', color: '#0f172a', fontWeight: '700', borderRadius: '12px', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 10px -1px rgba(6, 182, 212, 0.3)' }}
          >
            🚀 Ghé thăm GitHub của tôi
          </a>
        </div>
      </div>
    </div>
  );
}