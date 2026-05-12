// contact.jsx — form-only, centered, premium
function Field({ label, name, type = 'text', value, onChange, textarea, options, required, placeholder }) {
  return (
    <div className="ff">
      <label htmlFor={name} className="ff-label">
        {label}{required && <span className="ff-req">*</span>}
      </label>
      {options ? (
        <select id={name} name={name} value={value} onChange={onChange} className="ff-input" data-cursor="hover">
          <option value="">Selecciona una opción</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea id={name} name={name} value={value} onChange={onChange} rows={4} className="ff-input ff-textarea"
                  placeholder={placeholder} data-cursor="hover" />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} className="ff-input"
               placeholder={placeholder} data-cursor="hover" />
      )}
    </div>
  );
}

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', project: '', need: '', message: '' });
  const [status, setStatus] = React.useState('');
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); return; }
    setStatus('sending');
    setTimeout(() => setStatus('ok'), 900);
  };

  return (
    <section className="contact contact-centered" id="contacto" data-screen-label="06 Contacto">
      <div className="contact-intro">
        <h2 className="contact-headline reveal">
          Hablemos de tu<br/>próximo <em>proyecto.</em>
        </h2>
        <p className="section-sub reveal d1" style={{ margin: '0 auto', maxWidth: 560 }}>
          Cuéntanos qué tienes en mente. Te respondemos en menos de 48h
          con propuesta inicial y siguiente paso.
        </p>
      </div>

      <form className="form-box reveal d1" onSubmit={submit}>
        <div className="form-box-head">
          <div className="form-box-tag">Formulario de contacto</div>
          <h3 className="form-box-title">Cuéntanos tu proyecto</h3>
          <p className="form-box-sub">Rellena los campos y te escribimos en menos de 48h.</p>
        </div>

        <div className="form-grid">
          <Field label="Nombre" name="name" value={form.name} onChange={upd('name')} placeholder="Tu nombre" required />
          <Field label="Email" name="email" type="email" value={form.email} onChange={upd('email')} placeholder="tu@email.com" required />
          <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={upd('phone')} placeholder="+34 ..." />
          <Field label="Artista / Marca" name="project" value={form.project} onChange={upd('project')} placeholder="Nombre del proyecto" />
          <div className="ff-full">
            <Field label="¿Qué necesitas?" name="need" value={form.need} onChange={upd('need')}
                   options={['Diseño + Producción', 'Tienda online', 'Stand de festival', 'Tour merch completo', 'Pop-up / Activación', 'Otro']} />
          </div>
          <div className="ff-full">
            <Field label="Cuéntanos más" name="message" value={form.message} onChange={upd('message')} textarea required
                   placeholder="Briefing, calendario, referencias..." />
          </div>
        </div>

        <div className="form-cta">
          <div className={`form-status ${status === 'ok' ? 'ok' : status === 'error' ? 'err' : ''}`}>
            {status === 'sending' && 'ENVIANDO...'}
            {status === 'ok' && '✓ MENSAJE ENVIADO — TE ESCRIBIMOS EN 48H'}
            {status === 'error' && '⚠ COMPLETA LOS CAMPOS OBLIGATORIOS'}
            {!status && 'Respuesta en menos de 48h'}
          </div>
          <button type="submit" className="btn-primary" data-cursor="hover">
            ENVIAR MENSAJE
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}

window.Contact = Contact;
