package it.plansoft.jhipstertest.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Skill.
 */
@Entity
@Table(name = "skill")
public class Skill implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descrizione")
    private String descrizione;

    @Column(name = "ordine_visualizzazione")
    private Integer ordineVisualizzazione;

    @Column(name = "livello")
    private Integer livello;

    @ManyToMany(mappedBy = "skills")
    @JsonIgnore
    private Set<Dipendente> dipendentes = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public Skill descrizione(String descrizione) {
        this.descrizione = descrizione;
        return this;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public Integer getOrdineVisualizzazione() {
        return ordineVisualizzazione;
    }

    public Skill ordineVisualizzazione(Integer ordineVisualizzazione) {
        this.ordineVisualizzazione = ordineVisualizzazione;
        return this;
    }

    public void setOrdineVisualizzazione(Integer ordineVisualizzazione) {
        this.ordineVisualizzazione = ordineVisualizzazione;
    }

    public Integer getLivello() {
        return livello;
    }

    public Skill livello(Integer livello) {
        this.livello = livello;
        return this;
    }

    public void setLivello(Integer livello) {
        this.livello = livello;
    }

    public Set<Dipendente> getDipendentes() {
        return dipendentes;
    }

    public Skill dipendentes(Set<Dipendente> dipendentes) {
        this.dipendentes = dipendentes;
        return this;
    }

    public Skill addDipendente(Dipendente dipendente) {
        this.dipendentes.add(dipendente);
        dipendente.getSkills().add(this);
        return this;
    }

    public Skill removeDipendente(Dipendente dipendente) {
        this.dipendentes.remove(dipendente);
        dipendente.getSkills().remove(this);
        return this;
    }

    public void setDipendentes(Set<Dipendente> dipendentes) {
        this.dipendentes = dipendentes;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Skill)) {
            return false;
        }
        return id != null && id.equals(((Skill) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Skill{" +
            "id=" + getId() +
            ", descrizione='" + getDescrizione() + "'" +
            ", ordineVisualizzazione=" + getOrdineVisualizzazione() +
            ", livello=" + getLivello() +
            "}";
    }
}
