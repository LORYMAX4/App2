package it.plansoft.jhipstertest.repository;

import it.plansoft.jhipstertest.domain.Dipendente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Dipendente entity.
 */
@Repository
public interface DipendenteRepository extends JpaRepository<Dipendente, Long> {

    @Query(value = "select distinct dipendente from Dipendente dipendente left join fetch dipendente.skills",
        countQuery = "select count(distinct dipendente) from Dipendente dipendente")
    Page<Dipendente> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct dipendente from Dipendente dipendente left join fetch dipendente.skills")
    List<Dipendente> findAllWithEagerRelationships();

    @Query("select dipendente from Dipendente dipendente left join fetch dipendente.skills where dipendente.id =:id")
    Optional<Dipendente> findOneWithEagerRelationships(@Param("id") Long id);
    
    @Query("select count(*) from Dipendente dipendente")
    Long conta();
  

}
