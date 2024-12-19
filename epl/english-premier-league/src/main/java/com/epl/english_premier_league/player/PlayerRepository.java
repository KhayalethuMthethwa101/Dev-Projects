package com.epl.english_premier_league.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    void deleteById(Integer id);
    void deleteByName(String name);
    Optional<Player> findByName(String name);
}
